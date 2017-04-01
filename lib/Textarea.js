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

var _utilsTool = require('./utils/Tool');

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
 * - 使用方式跟原生一致。
 * - 可通过defaultValue设置默认值,如果是通过请求获得的数据请使用value，defaultValue只有初始赋值有效。 
 * - 可通过value和onChange事件配合使用手动设置输入值。
 * - 可通过设置count判断是否显示当前输入字数。
 * - 可通过设置maxLength配置最大输入字数。
 *
 * 主要属性和接口：
 * - defaultValue:默认值 <br/>
 * 如：`<Textarea defaultValue="测试" />`
 * - value&onChange:<br/>
 * 如：`<Textarea value={this.state.value} onChange={()=>{this.setState({value:"测试"})}} />`
 * - count:是否显示当前输入字数, 默认false不显示, 配合maxLength使用<br/>
 * 如：`<Textarea count maxLength={150} />`
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
             * 默认值
             * @property defaultValue
             * @type String
             * */
            defaultValue: _react.PropTypes.string,
            /**
             * 值
             * @property value
             * @type String
             * */
            value: _react.PropTypes.string,
            /**
             * 输入时执行的回调
             * @event onChange
             * @type Function
             * */
            onChange: _react.PropTypes.func,
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

        this.state = {
            inputLength: this.getInputLength(props)
        };
    }

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
        this.setState({
            inputLength: event.target.value.length
        });
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    };

    Textarea.prototype.render = function render() {
        var _this = this;

        var _props2 = this.props;
        var count = _props2.count;
        var maxLength = _props2.maxLength;

        return _react2['default'].createElement(
            'div',
            { className: _utilsTool.setPhoenixPrefix('textarea-field') },
            _react2['default'].createElement('textarea', _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), this.props.className), onChange: function (event) {
                    _this.onTextareaChange(event);
                } })),
            _react2['default'].createElement(
                'span',
                { className: _classnames2['default'](_utilsTool.setPhoenixPrefix('textarea-count'), count ? 'show' : 'hide') },
                _react2['default'].createElement(
                    'b',
                    { className: _utilsTool.setPhoenixPrefix('textarea-length') },
                    this.state.inputLength
                ),
                '/',
                _react2['default'].createElement(
                    'b',
                    null,
                    maxLength
                )
            )
        );
    };

    return Textarea;
})(_utilsComponent2['default']);

exports['default'] = Textarea;
module.exports = exports['default'];