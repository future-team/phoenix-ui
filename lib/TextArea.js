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
 * 表单元素textarea
 * @class TextArea
 * @module Form
 * @extends Component
 * @constructor
 * @demo textarea.js {展示}
 * @demo TextArea.js {源码}
 * @show true
 * */

var TextArea = (function (_Component) {
    _inherits(TextArea, _Component);

    _createClass(TextArea, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 是否显示输入计数
             * @property isCount
             * @type Boolean
             * */
            isCount: _react.PropTypes.bool,
            maxWords: _react.PropTypes.number
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            isCount: false,
            wordsNum: 0,
            maxWords: 100,
            egSize: '',
            classPrefix: '',
            classMapping: {}
        },
        enumerable: true
    }]);

    function TextArea(props, context) {
        _classCallCheck(this, TextArea);

        _Component.call(this, props, context);

        this.state = {
            value: props.value,
            wordsNum: 0
        };
    }

    TextArea.prototype.onChange = function onChange(event) {
        console.log(event.nativeEvent.text);
        var text = event.nativeEvent.text;

        if (this.props.onChange) {
            this.props.onChange({ text: text });
        }
    };

    TextArea.prototype.render = function render() {
        var _this = this;

        var _props = this.props;
        var isCount = _props.isCount;
        var maxWords = _props.maxWords;

        return _react2['default'].createElement(
            'div',
            { className: 'textarea-field' },
            _react2['default'].createElement('textarea', _extends({}, this.props, { className: ('form-textarea', this.getProperty(), this.props.className), onChange: function (event) {
                    _this.onChange(event);
                } })),
            _react2['default'].createElement(
                'span',
                { className: ('textarea-count', isCount ? '' : 'hide') },
                _react2['default'].createElement(
                    'b',
                    null,
                    this.state.wordsNum
                ),
                '/',
                _react2['default'].createElement(
                    'b',
                    null,
                    maxWords
                )
            )
        );
    };

    return TextArea;
})(_utilsComponent2['default']);

exports['default'] = TextArea;
module.exports = exports['default'];