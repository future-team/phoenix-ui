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

require('../style');

require('phoenix-styles/less/modules/buttons.less');

/**
 * 按钮组件<br/>
 * - 按钮组件提供所有properties中内置的颜色及字体大小样式供选择。
 * - 也可以自定义行内样式和className名字定义UI展示。
 * - 通过phSize设置大小, 可选sm、md、lg。
 * - 通过phStyle选择按钮颜色，可选primary、info、error、warning、danger、link、gray、success。
 * - 支持disabled, active属性定义。
 * - 按钮内容默认居中，可通过stable属性设置按钮不占位，只有内容部分居中，适用于动态添加icon且不希望文字移位的情况。
 *
 * 主要属性和接口：
 * - phSize:按钮大小, 默认sm <br/>
 * 如: `<Button phSize='lg'>button</Button>`
 * - phStyle:按钮颜色, 默认primary <br/>
 * 如: `<Button phStyle='info'>button</Button>`
 * - block:是否块级显示，默认false <br/>
 * 如: `<Button block>button</Button>`
 * - phIcon:icon符号类型,默认没有符号 <br/>
 * 如: `<Button phIcon='search'>button</Button>`
 *
 * @class Button
 * @module 基础组件
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo button|button.js {展示}
 * @show true
 * */

var Button = (function (_Component) {
    _inherits(Button, _Component);

    _createClass(Button, null, [{
        key: 'propTypes',
        value: {
            /**
             * 按钮尺寸[sm、md、lg], 默认为sm
             * @property phSize
             * @type String
             * @default 'sm'
             * */
            phSize: _react.PropTypes.string,
            /**
             * 按钮颜色[primary、warning、danger、info、error、success、link、gray], 默认primary
             * @property phStyle
             * @type Boolean
             * @default 'primary'
             * */
            phStyle: _react.PropTypes.string,
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'button'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * */
            componentTag: _react.PropTypes.string,
            /**
             * 块级显示
             * @property block
             * @type Boolean
             * @default false
             * */
            block: _react.PropTypes.bool,
            /**
             * 圆角
             * @property radius
             * @type Boolean
             * @default false
             * */
            radius: _react.PropTypes.bool,
            /**
             * 空背景
             * @property hollow
             * @type Boolean
             * @default false
             * */
            hollow: _react.PropTypes.bool,
            /**
             * 不可点状态
             * @property disabled
             * @type Boolean
             * @default false
             * */
            disabled: _react.PropTypes.bool,
            /**
             * 激活状态
             * @property active
             * @type Boolean
             * @default false
             * */
            active: _react.PropTypes.bool,
            /**
            * icon符号类型
            * @property phIcon
            * @type string
            * @default ''
            **/
            phIcon: _react.PropTypes.string,
            /**
             * icon占位情况，默认占位，设置之后不影响文字居中
             * @property stable
             * @type Boolean
             * @default false
             * */
            stable: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            phSize: 'sm',
            phStyle: 'primary',
            classPrefix: 'button',
            componentTag: 'button',
            classMapping: {
                'primary': 'primary',
                'info': 'info',
                'success': 'success',
                'error': 'error',
                'warning': 'warning',
                'danger': 'danger',
                'link': 'link',
                'gray': 'gray'
            }
        },
        enumerable: true
    }]);

    function Button(props, context) {
        _classCallCheck(this, Button);

        _Component.call(this, props, context);
    }

    Button.prototype.clickHandle = function clickHandle(e) {
        var _props = this.props;
        var clickHandle = _props.clickHandle;
        var onClick = _props.onClick;

        if (clickHandle) clickHandle(e);
        if (onClick) onClick(e);
    };

    Button.prototype.renderIcon = function renderIcon() {
        var phIcon = this.props.phIcon;

        if (phIcon) {
            return _react2['default'].createElement(_icon2['default'], { phIcon: phIcon });
        } else {
            return '';
        }
    };

    Button.prototype.renderButton = function renderButton() {
        var Component = this.props.componentTag;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(true), this.props.className),
                style: this.getStyles(this.props.style), onClick: this.clickHandle.bind(this) }),
            this.renderIcon(),
            this.props.children
        );
    };

    Button.prototype.render = function render() {
        return this.renderButton();
    };

    return Button;
})(_utilsComponent2['default']);

exports['default'] = Button;
module.exports = exports['default'];