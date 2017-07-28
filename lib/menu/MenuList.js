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

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _list = require('../list');

var _list2 = _interopRequireDefault(_list);

/**
 * 菜单导航列表组件<br/>
 * - 通过activeName设置当前导航选中的菜单项， 必需。
 * - 通过clickCallback函数设置点击菜单项时的回调，函数内必需手动更改activeName值，必需。
 *
 * 主要属性和接口：
 * - activeName:设置当前导航选中的菜单项,默认null。 
 * - clickCallback:点击菜单项时的回调。 <br/>
 * 如：
 * ```code
 *     <Menu>
 *         <Menu.Header>
 *             标题一
 *         </Menu.Header>
 *         <Menu.Body>
 *             <Menu.List activeName={this.state.activeName} clickCallback={(name)=>{this.setState({activeName:name})}}>
 *                  ...
 *             </Menu.List>
 *         </Menu.Body>
 *     </Menu>
 * ```
 *
 * @class MenuList
 * @module 菜单组件
 * @extends Component
 * @constructor
 * @since 1.4.0
 * @demo menu|menu.js {展示}
 * @show true
 * */

var MenuList = (function (_Component) {
    _inherits(MenuList, _Component);

    _createClass(MenuList, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'menu-list'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 当前选中的项目name，对应item的name属性
             * @property activeName
             * @type String
             * @default null
             * */
            activeName: _react.PropTypes.string,
            /**
             * 点击事件的回调函数
             * @method clickCallback
             * @type Function
             * @default null
             * */
            clickCallback: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            activeName: null,
            classPrefix: 'menu-list',
            classMapping: {}
        },
        enumerable: true
    }]);

    function MenuList(props, context) {
        _classCallCheck(this, MenuList);

        _Component.call(this, props, context);
    }

    MenuList.prototype.changeActive = function changeActive(name) {
        var _props = this.props;
        var changeActive = _props.changeActive;
        var clickCallback = _props.clickCallback;

        changeActive(name);
        if (clickCallback) clickCallback(name);
    };

    MenuList.prototype.renderChildren = function renderChildren() {
        var _this = this;
        var newChildren = [];

        _react2['default'].Children.forEach(this.props.children, function (child, index) {
            newChildren.push(_react2['default'].cloneElement(child, {
                key: index,
                activeName: _this.props.activeName,
                changeActive: _this.changeActive.bind(_this)
            }));
        });

        return newChildren;
    };

    MenuList.prototype.renderMenuList = function renderMenuList() {
        var _props2 = this.props;
        var className = _props2.className;
        var children = _props2.children;

        return _react2['default'].createElement(
            _list2['default'],
            _extends({}, this.otherProps, { classPrefix: 'list', className: _classnames2['default'](this.getProperty(true), className)
            }),
            this.renderChildren()
        );
    };

    MenuList.prototype.render = function render() {
        return this.renderMenuList();
    };

    return MenuList;
})(_utilsComponent2['default']);

exports['default'] = MenuList;
;
module.exports = exports['default'];