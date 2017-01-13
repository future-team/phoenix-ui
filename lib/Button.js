'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsComponent = require('./utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

/**
 *  - 按钮组件提供所有properties中内置的颜色及字体大小样式供选择<br/>
 *  - 也可以自定义行内样式和className名字定义UI展示<br/>
 *  - 支持disabled, active属性定义<br/>
 *  - 可以通过phSize 设置大小，可选xs、sm、lg。<br/>
 *  - 通过phStyle选择按钮颜色，可选error、warning、danger、link、gray、white、success
 *  主要属性和接口：
 * <ul>
 *     <li>phSize:按钮颜色<br>
 *         如：<code>
 *            Button radius phSize="sm" egStyle="warning"
 *         </code>
 *     </li>
 *     <li>egStyle:按钮的大小。分别为md、sm、lg，默认sm<br>
 *         如：<code>
 *            Button radius phSize="md" phStyle="warning"
 *         </code>
 *     </li>
 *     <li>block:是否块级显示，默认false<br>
 *         如：<code>
 *            Button block
 *         </code>
 *     </li>
 * </ul>
 * @class Button
 * @module 基础组件
 * @extends Component
 * @constructor
 * @demo button.js {展示}
 * @demo button.js {源码}
 * @show true
 * */

var Button = (function (_Component) {
    _inherits(Button, _Component);

    _createClass(Button, null, [{
        key: 'propTypes',
        value: {
            /**
             * 按钮尺寸,分别为xs、sm、lg
             * @property phSize
             * @type String
             * @default sm
             * */
            phSize: _react.PropTypes.string,
            /**
             * 颜色[error、warning、danger、link、gray、white、success、'']
             * @property phStyle
             * @type Boolean
             * @default ''
             * */
            phStyle: _react.PropTypes.string,
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
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
            block: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'button',
            componentTag: 'button',
            classMapping: {
                'block': 'block',
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
        this.setProperty('hollow', 'hollow');
    }

    Button.prototype.render = function render() {
        var Component = this.props.componentTag;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(true), this.props.className),
                style: this.getStyles(this.props.style) }),
            this.props.children
        );
    };

    return Button;
})(_utilsComponent2['default']);

exports['default'] = Button;
module.exports = exports['default'];