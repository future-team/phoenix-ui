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
 * 表单元素，input框，使用方式跟原生一致
 * @class Input
 * @module 表单组件
 * @extends Component
 * @constructor
 * @demo input.js {展示}
 * @demo input.js {源码}
 * @show true
 * */

var Input = (function (_Component) {
    _inherits(Input, _Component);

    _createClass(Input, null, [{
        key: 'propTypes',
        value: {
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
            componentTag: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'input',
            componentTag: 'div',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Input(props, context) {
        _classCallCheck(this, Input);

        _Component.call(this, props, context);
    }

    Input.prototype.otherView = function otherView(type) {
        return _react2['default'].createElement(
            'label',
            { className: _utilsTool.setPhoenixPrefix("multi-group") },
            _react2['default'].createElement(
                'div',
                { className: _utilsTool.setPhoenixPrefix(type) },
                _react2['default'].createElement('input', this.props),
                _react2['default'].createElement('i', null)
            ),
            _react2['default'].createElement(
                'span',
                null,
                this.props.label || ''
            )
        );
    };

    Input.prototype.renderInput = function renderInput(type) {
        var html = _react2['default'].createElement('div', null);

        if (type == 'checkbox' || type == 'radio') {
            html = this.otherView(type);
        } else {
            html = _react2['default'].createElement('input', _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), this.props.className) }));
        }

        return html;
    };

    Input.prototype.render = function render() {
        var _props = this.props;
        var Component = _props.componentTag;
        var type = _props.type;

        return this.renderInput(type ? type : 'text');
    };

    return Input;
})(_utilsComponent2['default']);

exports['default'] = Input;
module.exports = exports['default'];