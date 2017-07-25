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

var _animate = require('../animate');

var _animate2 = _interopRequireDefault(_animate);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

/**
 * 菜单内容组件<br/>
 * - 通过placement设置菜单出现的位置和类型, 可选 [top,left,right,left-full,right-full,full-screen]。
 * - 可通过width设置侧边菜单的宽度, 当前placement为top和full-screen不生效。
 * - 可通过closeButton来配置菜单主体右上角X按钮是否显示。
 *
 * 主要属性和接口：
 * - placement:菜单出现的位置和类型, 默认top。
 * - width:侧边菜单的宽度, 当前placement为top和full-screen不生效。
 * - closeButton:菜单主体右上角X按钮是否显示, 默认不显示。<br/>
 * 如：
 * ```code
 *     <Menu>
 *         <Menu.Header>
 *             标题一
 *         </Menu.Header>
 *         <Menu.Body width={60} placement='left' closeButton>
 *             ...
 *         </Menu.Body>
 *     </Menu>
 * ```
 *
 * @class MenuBody
 * @module 菜单组件
 * @extends Component
 * @constructor
 * @since 1.3.0
 * @demo menu|menu.js {展示}
 * @show true
 * */

var MenuBody = (function (_Component) {
    _inherits(MenuBody, _Component);

    _createClass(MenuBody, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'menu-body'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 菜单位置, 可选[top,left,right,left-full,right-full,full-screen], 默认top
             * @property placement
             * @type String
             * @default 'top'
             * */
            placement: _react.PropTypes.string,
            /**
             * 自定义菜单宽度百分比（限左右）
             * @property width
             * @type Number
             * @default 50
             * */
            width: _react.PropTypes.number,
            // closeMode: PropTypes.string,
            /**
             * 右上角按钮是否可见, 默认不可见
             * @property closeButton
             * @type Boolean
             * */
            closeButton: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            width: 50,
            classPrefix: 'menu-body',
            placement: 'top',
            classMapping: {
                'top': 'top',
                'left': 'left',
                'right': 'right',
                'left-full': 'left-full',
                'right-full': 'right-full',
                'full-screen': 'full-screen'
            }
        },
        enumerable: true
    }]);

    function MenuBody(props, context) {
        _classCallCheck(this, MenuBody);

        _Component.call(this, props, context);
    }

    MenuBody.prototype.componentDidMount = function componentDidMount() {
        this.setSize();
    };

    MenuBody.prototype.componentDidUpdate = function componentDidUpdate() {
        this.setSize();
    };

    MenuBody.prototype.setSize = function setSize() {
        var _props = this.props;
        var visible = _props.visible;
        var placement = _props.placement;
        var width = _props.width;

        // if(placement=='top') this.menuBodyParent.style.height = visible? this.menuBody.offsetHeight+'px' : 0;

        if (this.props.visible && width) {
            if (placement == 'top') return;
            if (placement == 'full-screen') width = 100;
            this.menuBodyParent.style.width = width + '%';
        }
    };

    MenuBody.prototype.renderAnimation = function renderAnimation() {
        var _this = this;

        var _props2 = this.props;
        var visible = _props2.visible;
        var children = _props2.children;
        var className = _props2.className;

        if (visible) {
            return _react2['default'].createElement(
                'div',
                _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className, 'animated'),
                    ref: function (menuBodyParent) {
                        _this.menuBodyParent = menuBodyParent;
                    } }),
                this.renderCloseButton(),
                children
            );
        } else {
            return '';
        }
    };

    MenuBody.prototype.renderCloseButton = function renderCloseButton() {
        var closeButton = this.props.closeButton;

        if (closeButton) {
            return _react2['default'].createElement(_icon2['default'], { phIcon: 'close', className: _classnames2['default'](this.setPhPrefix('menu-close-button', true)), onClick: this.onChange.bind(this) });
        } else {
            return '';
        }
    };

    MenuBody.prototype.onChange = function onChange() {
        this.props.changeVisible();
    };

    MenuBody.prototype.renderMenuBody = function renderMenuBody() {
        var placement = this.props.placement;
        var animateName = 'slide-' + this.props.placement;

        if (placement == 'full-screen') animateName = 'fade';

        return _react2['default'].createElement(
            _animate2['default'],
            { transitionName: animateName },
            this.renderAnimation()
        );
    };

    MenuBody.prototype.render = function render() {
        return this.renderMenuBody();
    };

    return MenuBody;
})(_utilsComponent2['default']);

exports['default'] = MenuBody;
module.exports = exports['default'];