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

var _ButtonGroup = require('../ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

/**
 * Alert组件<br/>
 * - 由于弹框的显示操作在组件以外, 所以需要在使用时自定义`visible`、`onClose`函数。
 * - 可通过title设置弹出框标题，content设置内容，buttons设置尾部按钮。(相对Dialog新增参数)
 * - 默认有[确定]1个按钮，点击[确定]默认的执行函数是onClose直接关闭。
 * - 通过visible设置弹框是否显示, 可选true/false, 必需。
 * - 可通过onClose配置点击弹框阴影部分以及弹框右上角X按钮来关闭弹框。
 * - 可通过closeButton来配置弹框右上角X按钮是否显示, 默认不显示。
 * - 默认传了onClose之后阴影部分就具备点击关闭弹框的按钮, 如果需要去掉该功能需要额外传shadowDisabled作为标识。
 *
 * 主要属性和接口：
 * - title:弹框的标题，必需。
 * - content:弹框的内容，必需。
 * - buttons:尾部按钮的内容，必需是数组的形式，text标识填充的问题，phStyle表示主题，onHandle表示点击的回调，otherProps传递按钮的其他属性，如{active:true, block:true, hollow: true}。
 * - visible:弹框是否显示标识, 默认false不可见。
 * - onClose:关闭弹框的功能函数。
 * - closeButton:右上角关闭按钮是否显示的标识, 默认不显示。
 * - shadowDisabled:阴影部分是否可点击关闭按钮, 默认传了onClose函数就可以关闭。
 *
 * 示例:
 * ```code
 *      const buttons = [
            {text: "取消", phStyle: "gray", otherProps: {hollow: true}}, // text默认"确定", phStyle默认primary，onHandle默认onClose
            {text: "确定", onHandle: this.onConfirm}
        ];
        ...
 *      <Alert closeButton shadowDisabled visible={this.state.visible} onClose={::this.onClose.bind(this,'visible')} 
 *          title="这是标题" content="这里是弹出框的内容..." buttons={buttons} />
 * ```
 *
 * @class Alert
 * @module 弹出框组件
 * @extends Component
 * @constructor
 * @since 1.5.0
 * @demo alert|alert.js {展示}
 * @show true
 * */

var Alert = (function (_Component) {
    _inherits(Alert, _Component);

    _createClass(Alert, null, [{
        key: 'propTypes',
        value: {
            /**
             * 标题
             * @property title
             * @type String|Element
             * */
            title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
            /**
             * 内容
             * @property title
             * @type String|Element
             * */
            content: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
            /**
             * 尾部按钮
             * @property buttons
             * @type Array
             * */
            buttons: _react.PropTypes.array,
            /**
             * 是否可见标识
             * @property visible
             * @type Boolean
             * */
            visible: _react.PropTypes.bool,
            /**
             * 关闭弹框的执行函数
             * @method onClose
             * @type Function
             * */
            onClose: _react.PropTypes.func,
            /**
             * 右上角按钮是否可见, 默认不可见
             * @property closeButton
             * @type Boolean
             * */
            closeButton: _react.PropTypes.bool,
            /**
             * 阴影部分是否点击可关闭弹框, 默认传了onClose之后可关闭
             * @property shadowDisabled
             * @type Boolean
             * */
            shadowDisabled: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            visible: false
        },
        enumerable: true
    }]);

    function Alert(props, context) {
        _classCallCheck(this, Alert);

        _Component.call(this, props, context);

        this.buttons = [{ text: "确定", onHandle: props.onClose }];
    }

    Alert.prototype.renderButtons = function renderButtons() {
        var _props = this.props;
        var buttons = _props.buttons;
        var onClose = _props.onClose;

        if (buttons) this.buttons = buttons;
        var buttonsType = this.buttons.length > 2;

        return _react2['default'].createElement(
            _ButtonGroup2['default'],
            { phType: buttonsType ? "tacked" : "justify" },
            this.buttons.map(function (button, index) {
                return _react2['default'].createElement(
                    _Button2['default'],
                    _extends({ key: index }, button.otherProps, { phSize: 'lg', phStyle: button.phStyle || 'primary', block: buttonsType,
                        onClick: button.onHandle || onClose }),
                    button.text || "确定"
                );
            })
        );
    };

    Alert.prototype.render = function render() {
        var _props2 = this.props;
        var visible = _props2.visible;
        var onClose = _props2.onClose;
        var title = _props2.title;
        var content = _props2.content;
        var closeButton = _props2.closeButton;
        var shadowDisabled = _props2.shadowDisabled;

        return _react2['default'].createElement(
            _Dialog2['default'],
            { visible: visible, onClose: onClose, closeButton: closeButton, shadowDisabled: shadowDisabled },
            _react2['default'].createElement(
                _Dialog2['default'].Title,
                null,
                title
            ),
            _react2['default'].createElement(
                _Dialog2['default'].Body,
                null,
                content
            ),
            _react2['default'].createElement(
                _Dialog2['default'].Footer,
                null,
                this.renderButtons()
            )
        );
    };

    return Alert;
})(_utilsComponent2['default']);

exports['default'] = Alert;
module.exports = exports['default'];