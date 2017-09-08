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

var _utilsLogger = require('../utils/logger');

var _utilsLogger2 = _interopRequireDefault(_utilsLogger);

var _buttonGroup = require('../button-group');

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

/**
 * Prompt组件<br/>
 * - 由于弹框的显示操作在组件以外, 所以需要在使用时自定义`visible`、`closeCallback`函数。
 * - 可通过title设置弹出框标题，content设置内容，buttons设置尾部按钮。(相对Dialog新增参数)
 * - 按钮默认有[取消, 确定]2个按钮，点击[取消]默认的执行函数是直接关闭，点击[确定]通过传入的confirmCallback函数可获取input的value数组，可自行添加回调。。
 * - 通过visible设置弹框是否显示, 可选true/false, 必需。
 * - 可通过closeCallback配置点击弹框阴影部分以及弹框右上角X按钮来关闭弹框。
 * - 可通过closeButton来配置弹框右上角X按钮是否显示, 默认不显示。
 * - 默认传了closeCallback之后阴影部分就具备点击关闭弹框的按钮, 如果需要去掉该功能需要额外传shadowDisabled作为标识。
 *
 * 主要属性和接口：
 * - title:弹框的标题，必需。
 * - content:弹框的内容，必需。
 * - buttons:尾部按钮的内容，必需是数组的形式，text标识填充的问题，phStyle表示主题，onHandle表示点击按钮的回调，otherProps传递按钮的其他属性，如{active:true, block:true, hollow: true}。
 * - confirmCallback:点击确定按钮的回调，返回input的value。
 * - visible:弹框是否显示标识, 默认false不可见。
 * - closeCallback:关闭弹框的功能函数。
 * - closeButton:右上角关闭按钮是否显示的标识, 默认不显示。
 * - shadowDisabled:阴影部分是否可点击关闭按钮, 默认传了closeCallback函数就可以关闭。
 *
 * 示例:
 * ```code
 *      const buttons = [
            {text: '取消', phStyle: 'gray', otherProps: {hollow: true}}, // text默认'确定', phStyle默认primary，onHandle默认执行closeCallback
            {text: '确定', onHandle: this.confirmCallback}
        ];
        ...
 *      <Prompt closeButton shadowDisabled visible={this.state.visible} closeCallback={this.closeCallback.bind(this,'visible')} 
 *          title='这是标题' content='这里是弹出框的内容...' buttons={buttons} />
 * ```
 *
 * @class Prompt
 * @module 弹出框组件
 * @extends Component
 * @constructor
 * @since 1.5.0
 * @demo prompt|prompt.js {展示}
 * @show true
 * */

var Prompt = (function (_Component) {
    _inherits(Prompt, _Component);

    _createClass(Prompt, null, [{
        key: 'propTypes',
        value: {
            /**
             * 标题
             * @property title
             * @type String
             * */
            title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
            /**
             * 内容
             * @property content
             * @type String
             * */
            content: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
            /**
             * 尾部按钮
             * @property buttons
             * @type Array
             * */
            buttons: _react.PropTypes.array,
            /**
             * 内容区域文本框
             * @property inputs
             * @type Array
             * */
            inputs: _react.PropTypes.array,
            /**
             * 是否可见标识
             * @property visible
             * @type Boolean
             * */
            visible: _react.PropTypes.bool,
            /**
             * 关闭弹框的执行函数
             * @method closeCallback
             * @type Function
             * */
            closeCallback: _react.PropTypes.func,
            /**
            * 点击确定的回调函数
            * @method confirmCallback
            * @type Function
            * */
            confirmCallback: _react.PropTypes.func,
            /**
             * 右上角按钮是否可见, 默认不可见
             * @property closeButton
             * @type Boolean
             * */
            closeButton: _react.PropTypes.bool,
            /**
             * 阴影部分是否点击可关闭弹框, 默认传了closeCallback之后可关闭
             * @property shadowDisabled
             * @type Boolean
             * */
            shadowDisabled: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            visible: false,
            classMapping: {}
        },
        enumerable: true
    }]);

    function Prompt(props, context) {
        _classCallCheck(this, Prompt);

        _Component.call(this, props, context);

        new _utilsLogger2['default']('Prompt');

        this.inputElem = [];
        this.inputValue = [];

        this.buttons = [{ text: '取消', onHandle: props.closeCallback }, { text: '确定', onHandle: this.confirmCallback.bind(this) }];
        this.inputs = [{ type: 'text', placeholder: '请输入' }];
    }

    Prompt.prototype.confirmCallback = function confirmCallback() {
        // 用于默认情况下 确定 按钮的回调，用户自定义。
        this.getInputValue();

        if (this.props.confirmCallback) this.props.confirmCallback(this.inputValue);
    };

    Prompt.prototype.getInputValue = function getInputValue() {
        for (var i in this.inputElem) {
            this.inputValue[i] = this.inputElem[i].getValueCallback();
        }
    };

    Prompt.prototype.renderContent = function renderContent() {
        var content = this.props.content;

        if (content) {
            return _react2['default'].createElement(
                'div',
                { className: this.setPhPrefix('dialog-prompt-text', true) },
                content
            );
        }
    };

    Prompt.prototype.renderInputs = function renderInputs() {
        var _this2 = this;

        if (!this.props.visible) return;
        var _this = this;
        var inputs = this.props.inputs;

        if (inputs) this.inputs = inputs;

        return _react2['default'].createElement(
            'div',
            null,
            this.inputs.map(function (input, index) {
                return _react2['default'].createElement(_input2['default'], _extends({ key: index }, input, { type: input.type || 'text', ref: function (input) {
                        _this2.inputElem[index] = input;
                    } }));
            })
        );
    };

    Prompt.prototype.renderButtons = function renderButtons() {
        var _this3 = this;

        var _this = this;
        var _props = this.props;
        var buttons = _props.buttons;
        var closeCallback = _props.closeCallback;

        if (buttons) this.buttons = buttons;
        var buttonsType = this.buttons.length > 2;

        return _react2['default'].createElement(
            _buttonGroup2['default'],
            { phType: buttonsType ? 'tacked' : 'default', clickable: false },
            this.buttons.map(function (button, index) {
                return _react2['default'].createElement(
                    _button2['default'],
                    _extends({ hollow: true, key: index }, button.otherProps, { phSize: 'lg', phStyle: button.phStyle || 'primary', block: buttonsType,
                        onClick: function () {
                            if (button.onHandle) {
                                _this3.getInputValue();
                                button.onHandle(_this3.inputValue);
                            } else {
                                closeCallback();
                            }
                        } }),
                    button.text || '确定'
                );
            })
        );
    };

    Prompt.prototype.renderPrompt = function renderPrompt() {
        var _props2 = this.props;
        var visible = _props2.visible;
        var closeCallback = _props2.closeCallback;
        var title = _props2.title;
        var closeButton = _props2.closeButton;
        var shadowDisabled = _props2.shadowDisabled;
        var className = _props2.className;

        return _react2['default'].createElement(
            _Dialog2['default'],
            { className: _classnames2['default'](this.setPhPrefix('dialog-prompt', true), className), visible: visible,
                closeCallback: closeCallback,
                closeButton: closeButton,
                shadowDisabled: shadowDisabled
            },
            _react2['default'].createElement(
                _Dialog2['default'].Title,
                null,
                title
            ),
            _react2['default'].createElement(
                _Dialog2['default'].Body,
                null,
                this.renderContent(),
                this.renderInputs()
            ),
            _react2['default'].createElement(
                _Dialog2['default'].Footer,
                null,
                this.renderButtons()
            )
        );
    };

    Prompt.prototype.render = function render() {
        return this.renderPrompt();
    };

    return Prompt;
})(_utilsComponent2['default']);

exports['default'] = Prompt;
module.exports = exports['default'];