'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsComponent = require('../utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsTool = require('../utils/Tool');

var _utilsLogger = require('../utils/logger');

var _utilsLogger2 = _interopRequireDefault(_utilsLogger);

var _MenuHeader = require('./MenuHeader');

var _MenuHeader2 = _interopRequireDefault(_MenuHeader);

var _MenuBody = require('./MenuBody');

var _MenuBody2 = _interopRequireDefault(_MenuBody);

var _MenuList = require('./MenuList');

var _MenuList2 = _interopRequireDefault(_MenuList);

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

require('../style');

require('phoenix-styles/less/modules/menu.less');

/**
 * <h5>菜单组件，主要包括组件:</h5>
 * <strong><a href='../classes/Menu.html'>Menu 菜单</a></strong><br/>
 * <strong><a href='../classes/MenuHeader.html'>MenuHeader 菜单头部</a></strong><br>
 * <strong><a href='../classes/MenuBody.html'>MenuBody 菜单主体</a></strong><br>
 * <strong><a href='../classes/MenuList.html'>MenuList 菜单导航列表</a></strong><br>
 * <strong><a href='../classes/MenuItem.html'>MenuItem 菜单导航列表项</a></strong><br>
 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
 * @module 菜单组件
 * @main 菜单组件
 * @static
 */
/**
 * 菜单组件<br/>
 - 可通过visible设置菜单初始是否可见，默认不可见。
 - 不设置ceiling时默认菜单不吸顶，设置ceiling为具体数值时表示从当前距离开始吸顶，设置0表示至始至终吸顶。
 - 可通过clickCallback函数设置菜单打开收起的回调函数。
 *
 * 主要属性和接口：
 * - visible:初始展开或收起的状态, 默认false收起。
 * - ceiling:设置吸顶的距离, 默认不吸顶, 设置0表示始终吸顶。
 * - clickCallback:菜单打开关闭时的回调函数。 <br/>
 * 如：
 * ```code
 *     <Menu ceiling={100} visible={true} clickCallback={(visible)=>{console.log(visible);}}>
 *         <Menu.Header>
 *             标题一
 *         </Menu.Header>
 *         <Menu.Body>
 *             ...
 *         </Menu.Body>
 *     </Menu>
 * ```
 *
 * @class Menu
 * @module 菜单组件
 * @extends Component
 * @constructor
 * @since 1.3.0
 * @demo menu|menu.js {展示}
 * @show true
 * */

var Menu = (function (_Component) {
    _inherits(Menu, _Component);

    _createClass(Menu, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'menu'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * */
            componentTag: _react.PropTypes.string,
            /**
             * 是否可见标识
             * @property visible
             * @type Boolean
             * @default false
             * */
            visible: _react.PropTypes.bool,
            /**
             * 点击收起展开的回调函数
             * @method clickCallback
             * @type Function
             * */
            clickCallback: _react.PropTypes.func,
            /**
             * 是否滚动吸顶, 默认不吸顶(false); 设置确定的数字从当前距离开始吸顶 
             * @property ceiling
             * @type Number
             * @default 不设置
             * */
            ceiling: _react.PropTypes.number
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            visible: false,
            classPrefix: 'menu',
            componentTag: 'div',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Menu(props, context) {
        _classCallCheck(this, Menu);

        _Component.call(this, props, context);

        new _utilsLogger2['default']('Menu');

        this.handleWindowScroll = this.handleWindowScroll.bind(this);

        this.state = {
            ceiling: !(props.ceiling === undefined || props.ceiling > 0),
            headerHeight: 0
        };

        // 是否滚动吸顶
        if (props.ceiling === undefined || props.ceiling === 0) return;

        window.addEventListener('scroll', this.handleWindowScroll, false);
    }

    Menu.prototype.handleWindowScroll = function handleWindowScroll() {
        if (document.body.scrollTop >= this.props.ceiling) {
            if (!this.state.ceiling) this.setState({ ceiling: true });
        } else {
            if (this.state.ceiling) this.setState({ ceiling: false });
        }
    };

    Menu.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        setTimeout(function () {
            _this2.menuPlaceholder.style.height = _this2.menuCeiling.offsetHeight + 'px';
            _this2.setState({ headerHeight: _this2.menuCeiling.offsetHeight });
        }, 0);
    };

    Menu.prototype.renderChildren = function renderChildren() {
        var _this = this;
        var newChildren = [];
        var _props = this.props;
        var visible = _props.visible;
        var clickCallback = _props.clickCallback;

        _react2['default'].Children.forEach(this.props.children, function (child, index) {
            newChildren.push(_react2['default'].cloneElement(child, {
                key: index,
                visible: visible,
                clickCallback: clickCallback,
                headerHeight: _this.state.headerHeight
            }));
        });

        return newChildren;
    };

    Menu.prototype.componentWillUnmount = function componentWillUnmount() {
        window.removeEventListener('scroll', this.handleWindowScroll, false);
    };

    Menu.prototype.renderMenu = function renderMenu() {
        var _this3 = this;

        var _props2 = this.props;
        var Component = _props2.componentTag;
        var className = _props2.className;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(true), this.setPhPrefix('placeholder'), className), ref: function (menuPlaceholder) {
                    _this3.menuPlaceholder = menuPlaceholder;
                } }),
            _react2['default'].createElement(
                'div',
                { className: this.state.ceiling ? this.setPhPrefix('ceiling') : '', ref: function (menuCeiling) {
                        _this3.menuCeiling = menuCeiling;
                    } },
                this.renderChildren()
            )
        );
    };

    Menu.prototype.render = function render() {
        return this.renderMenu();
    };

    return Menu;
})(_utilsComponent2['default']);

Menu.Header = _MenuHeader2['default'];
Menu.Body = _MenuBody2['default'];
Menu.List = _MenuList2['default'];
Menu.Item = _MenuItem2['default'];

exports['default'] = Menu;
module.exports = exports['default'];