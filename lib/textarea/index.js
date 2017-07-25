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

require('../style');

require('phoenix-styles/less/modules/textarea.less');

/**
 * <h5>表单组件，主要包括组件:</h5>
 * <strong><a href='../classes/Input.html'>Input 文本框/单选框/多选框</a></strong><br/>
 * <strong><a href='../classes/Textarea.html'>Textarea 多行文本框</a></strong><br>
 * <strong><a href='../classes/FormGroup.html'>FormGroup 表单组</a></strong><br/>
 * <strong><a href='../classes/Switch.html'>Switch 开关</a></strong><br>
 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
 * @module 表单组件
 * @main 表单组件
 * @static
 */
/**
 * 多行文本框组件<br/>
 * - 可通过valuee设置默认值。 
 * - 可通过设置count判断是否显示当前输入字数，需要配合maxLength配置最大输入字数。
 * - getValueCallback: 获取当前的输入值。
 *
 * 主要属性和接口：
 * - value:默认值 <br/>
 * 如：`<Textarea value='测试' />`
 * - count:是否显示当前输入字数, 默认false不显示, 配合maxLength使用<br/>
 * 如：`<Textarea count maxLength={150} />`
 * - getValueCallback: 获取当前的输入值。<br/>
 * 如：`<Textarea ref={(textElem)=>{this.textElem=textElem}} />`<br/>
 * `this.textElem.getValueCallback();`
 *
 * @class TextArea
 * @module 表单组件
 * @extends Component
 * @constructor
 * @since 0.3.0
 * @demo textarea|textarea.js {展示}
 * @show true
 * */

var Textarea = (function (_Component) {
    _inherits(Textarea, _Component);

    _createClass(Textarea, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'textarea'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 初始值
             * @property value
             * @type String
             * */
            value: _react.PropTypes.string,
            /**
             * 是否显示输入计数
             * @property count
             * @type Boolean
             * */
            count: _react.PropTypes.bool,
            /**
             * 可输入的总长度
             * @property maxLength
             * @type Number
             * */
            maxLength: _react.PropTypes.number
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'textarea',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Textarea(props, context) {
        _classCallCheck(this, Textarea);

        _Component.call(this, props, context);

        this.setMethod('getValueCallback', this.getValue.bind(this));

        this.state = {
            value: props.value || props.defaultValue || '',
            inputLength: this.getInputLength(props)
        };
    }

    Textarea.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.value && nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    };

    Textarea.prototype.getValue = function getValue() {
        return this.state.value;
    };

    Textarea.prototype.getInputLength = function getInputLength(props) {
        return props.value ? props.value.length : props.defaultValue ? props.defaultValue.length : 0;
    };

    Textarea.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _props = this.props;
        var defaultValue = _props.defaultValue;
        var value = _props.value;

        if (defaultValue != nextProps.defaultValue || value != nextProps.value) {
            this.setState({
                inputLength: this.getInputLength(nextProps)
            });
        }
    };

    Textarea.prototype.onTextareaChange = function onTextareaChange(event) {
        var onChange = this.props.onChange;
        var value = event.target.value;

        if (onChange) onChange(event, value);

        this.setState({
            value: value,
            inputLength: event.target.value.length
        });
    };

    Textarea.prototype.renderCount = function renderCount() {
        var _props2 = this.props;
        var count = _props2.count;
        var maxLength = _props2.maxLength;

        if (count) {
            return _react2['default'].createElement(
                'span',
                { className: _classnames2['default'](this.setPhPrefix('count')) },
                _react2['default'].createElement(
                    'b',
                    { className: this.setPhPrefix('length') },
                    this.state.inputLength
                ),
                '/',
                _react2['default'].createElement(
                    'b',
                    null,
                    maxLength
                )
            );
        }
    };

    Textarea.prototype.renderTextarea = function renderTextarea() {
        var _this = this;

        return _react2['default'].createElement(
            'div',
            { className: this.setPhPrefix('field') },
            _react2['default'].createElement('textarea', _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), this.props.className), value: this.state.value, onChange: function (event) {
                    _this.onTextareaChange(event);
                } })),
            this.renderCount()
        );
    };

    Textarea.prototype.render = function render() {
        return this.renderTextarea();
    };

    return Textarea;
})(_utilsComponent2['default']);

exports['default'] = Textarea;
module.exports = exports['default'];