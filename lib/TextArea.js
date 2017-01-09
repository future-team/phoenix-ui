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
 * 表单元素textarea
 * @class TextArea
 * @module 表单组件
 * @extends Component
 * @constructor
 * @demo textarea.js {展示}
 * @demo TextArea.js {源码}
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
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 输入时执行的回调
             * @property onChange
             * @type Function
             * */
            onChange: _react.PropTypes.func,
            /**
             * 是否显示输入计数
             * @property isCount
             * @type Boolean
             * */
            isCount: _react.PropTypes.bool,
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
            isCount: false,
            egSize: '',
            classPrefix: 'textarea',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Textarea(props, context) {
        _classCallCheck(this, Textarea);

        _Component.call(this, props, context);

        this.state = {
            inputLength: props.value.length
        };
    }

    Textarea.prototype.onChange = function onChange(event) {
        this.setState({
            inputLength: event.target.value.length
        });
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    };

    Textarea.prototype.render = function render() {
        var _this = this;

        var _props = this.props;
        var isCount = _props.isCount;
        var maxLength = _props.maxLength;

        return _react2['default'].createElement(
            'div',
            { className: _utilsTool.setPhoenixPrefix('textarea-field') },
            _react2['default'].createElement('textarea', _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), this.props.className), onChange: function (event) {
                    _this.onChange(event);
                } })),
            _react2['default'].createElement(
                'span',
                { className: _classnames2['default'](_utilsTool.setPhoenixPrefix('textarea-count'), isCount ? 'show' : 'hide') },
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