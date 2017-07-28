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

var _icon = require('../icon/');

var _icon2 = _interopRequireDefault(_icon);

require('../style');

require('phoenix-styles/less/modules/input.less');

/**
 * 输入框组件<br/>
 * - 使用方式跟原生一致, 支持disabled、maxLength等原生属性。
 * - 通过type设置input的类型, 可选text,search,password。
 * - 可通过value设置默认值。
 * - 可通过设置clear属性是否显示清除按钮，默认不显示。
 * - 可通过设置visible属性判断password类型是否显示可见密码的按钮，默认不显示。
 * - 可通过设置error设置当前输入错误。
 * - 可通过getValueCallback获取当前元素的value值，仅适用于text、search。
 * - 可通过设置phReg设置正则表达式，失焦时如果不符合正则显示错误样式。
 *
 * 主要属性和接口：
 * - type:input类型, 默认text <br/>
 * 如：`<Input type='search' disabled/>`
 * - value:设置默认值 <br/>
 * 如：`<Input value='测试' />`
 * - clear:是否显示清除按钮 <br/>
 * 如：`<Input value='测试' clear/>`
 * - visible: 是否显示可见密码的按钮(仅适用于password类型)<br/>
 * 如：`<Input type='password' value='123456' visible />`
 * - error: 当前输入错误<br/>
 * 如：`<Input type='password' value='123456' error />`
 * - phReg: 正则表达式<br/>
 * 如：`<Input type="text" placeholder="6-18位不以数字开头的用户名" phReg={/^[a-zA-Z$_]\w{5,17}$/} />`
 * - getValueCallback: 获取当前input的value。<br/>
 * 如：`<Input ref={(inputElem)=>{this.inputElem=inputElem}} />`<br/>
 * `this.inputElem.getValueCallback();`
 *
 * @class Input
 * @module 表单组件
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo input|input.js {展示}
 * @show true
 * */

var Input = (function (_Component) {
    _inherits(Input, _Component);

    _createClass(Input, null, [{
        key: 'propTypes',
        value: {
            /**
             * input类型, 可选[text,search,password], 默认text
             * @property type
             * @type String
             * @default 'text'
             * */
            type: _react.PropTypes.string,
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'input'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * */
            componentTag: _react.PropTypes.string,
            /**
             * 是否显示[清除已经输入的内容按钮]，仅适用于text,search,password的类型
             * @property clear
             * @type Boolean
             * */
            clear: _react.PropTypes.bool,
            /**
             * 是否显示[密码是否可见按钮]，仅适用于password的类型
             * @property visible
             * @type Boolean
             * */
            visible: _react.PropTypes.bool,
            /**
             * 是否错误
             * @property error
             * @type Boolean
             * */
            error: _react.PropTypes.bool,
            /**
             * 正则表达式
             * @property phReg
             * @type Object
             * */
            phReg: _react.PropTypes.object,
            /**
             * icon符号类型
             * @property phIcon
             * @type string
             * @default ''
             **/
            phIcon: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            type: 'text',
            clear: false,
            error: false,
            visible: false,
            phIcon: '',
            phReg: null,
            disabled: false,
            classPrefix: 'input',
            componentTag: 'div',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Input(props, context) {
        _classCallCheck(this, Input);

        _Component.call(this, props, context);

        this.setMethod('getValueCallback', this.getValue.bind(this));

        this.visibleIcon = ['yinsi', 'biyan'];

        this.state = {
            type: props.type,
            cansee: 0,
            focus: false,
            value: props.value || props.defaultValue || '',
            error: props.error
        };
    }

    Input.prototype.componentDidMount = function componentDidMount() {
        var o = {};
        var phReg = this.props.phReg;

        if (!phReg || !this.state.value) return;

        o.error = !phReg.test(this.state.value);

        this.setState(o);
    };

    Input.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var o = {};

        if (nextProps.value && nextProps.value !== this.state.value) o.value = nextProps.value;
        if (nextProps.error && nextProps.error !== this.state.error) o.error = nextProps.error;

        this.setState(o);
    };

    Input.prototype.renderInput = function renderInput() {
        var _this = this;

        var _props = this.props;
        var type = _props.type;
        var clear = _props.clear;
        var visible = _props.visible;
        var placeholder = _props.placeholder;
        var phIcon = _props.phIcon;
        var disabled = _props.disabled;
        var _state = this.state;
        var value = _state.value;
        var focus = _state.focus;
        var error = _state.error;

        var clearStatus = clear && value && focus,
            visibleStatus = visible && type == 'password',
            errorState = error && !focus,
            placeholderShow = !focus && !value;

        if (['checkbox', 'radio'].indexOf(type) >= 0) {
            _utilsTool.warning('Input组件: type 为 checkbox|radio 请对应使用 Checkbox|Radio 组件!');
            return null;
        } else {
            return _react2['default'].createElement(
                'div',
                { className: _classnames2['default'](this.getProperty(true), phIcon ? this.setPhPrefix('heading') : '', clearStatus ? this.setPhPrefix('clear') : '', visibleStatus ? this.setPhPrefix('visible') : '', errorState ? this.setPhPrefix('error') : '') },
                _react2['default'].createElement('input', _extends({}, this.otherProps, { type: this.state.type, placeholder: '', value: value, disabled: disabled,
                    ref: function (inputElem) {
                        _this.inputElem = inputElem;
                    },
                    onChange: this.onChange.bind(this),
                    onFocus: this.onFocus.bind(this),
                    onBlur: this.onBlur.bind(this) })),
                _react2['default'].createElement(
                    'label',
                    { className: _classnames2['default'](this.setPhPrefix('placeholder'), !placeholderShow ? this.setPhPrefix('placeholder-hide') : '') },
                    phIcon ? _react2['default'].createElement(_icon2['default'], { phIcon: phIcon }) : null,
                    _react2['default'].createElement(
                        'span',
                        { className: this.setPhPrefix('placeholder-text') },
                        placeholder
                    )
                ),
                this.renderClearButton(clearStatus),
                this.renderVisibleButton(visibleStatus),
                this.renderErrorButton(errorState)
            );
        }
    };

    Input.prototype.onChange = function onChange(event) {
        var o = {};
        var _props2 = this.props;
        var onChange = _props2.onChange;
        var phReg = _props2.phReg;
        var value = event.target.value;

        o.value = value;
        o.focus = true;
        if (phReg) {
            o.error = !phReg.test(value);
        }

        if (onChange) onChange(event, value);

        this.setState(o);
    };

    Input.prototype.onFocus = function onFocus(e) {
        var onFocus = this.props.onFocus;

        if (onFocus) onFocus();

        this.setState({
            focus: true
        });
    };

    Input.prototype.onBlur = function onBlur(e) {
        var _this2 = this;

        var onBlur = this.props.onBlur;

        if (onBlur) onBlur();

        this.timer = setTimeout(function () {
            _this2.setState({
                focus: false
            });
        }, 0);
    };

    Input.prototype.renderClearButton = function renderClearButton(clear) {
        if (clear) {
            return _react2['default'].createElement(_icon2['default'], { className: 'gfs-icon-close', phIcon: 'fail-fill', onClick: this.clearHandle.bind(this) });
        }
    };

    Input.prototype.clearHandle = function clearHandle(e) {
        var _this3 = this;

        clearTimeout(this.timer);

        this.setState({
            value: ''
        }, function () {
            _this3.inputElem.focus();
        });
    };

    Input.prototype.renderVisibleButton = function renderVisibleButton(visible) {
        if (visible) {
            return _react2['default'].createElement(_icon2['default'], { className: _classnames2['default']('gfs-icon-visible', !this.state.cansee ? 'gfs-icon-active' : ''),
                phIcon: this.visibleIcon[this.state.cansee],
                onClick: this.visibleHandle.bind(this) });
        }
    };

    Input.prototype.visibleHandle = function visibleHandle() {
        if (this.state.cansee) {
            this.setState({
                type: 'password',
                cansee: 0
            });
        } else {
            this.setState({
                type: 'text',
                cansee: 1
            });
        }
    };

    Input.prototype.renderErrorButton = function renderErrorButton(error) {
        if (error) {
            return _react2['default'].createElement(_icon2['default'], { className: _classnames2['default']('gfs-icon-error'), phIcon: 'warning-fill' });
        }
    };

    Input.prototype.getValue = function getValue() {
        return this.state.value;
    };

    Input.prototype.componentWillUnmount = function componentWillUnmount() {
        clearTimeout(this.timer);
    };

    Input.prototype.render = function render() {
        return this.renderInput();
    };

    return Input;
})(_utilsComponent2['default']);

exports['default'] = Input;
module.exports = exports['default'];