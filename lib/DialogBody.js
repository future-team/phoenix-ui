'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsTool = require('./utils/Tool');

var DialogBody = (function (_Component) {
    _inherits(DialogBody, _Component);

    function DialogBody(props, context) {
        _classCallCheck(this, DialogBody);

        _Component.call(this, props, context);
    }

    DialogBody.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, { className: _classnames2['default'](_utilsTool.setPhoenixPrefix('dialog-body'), this.props.className) }),
            this.props.children
        );
    };

    return DialogBody;
})(_react.Component);

exports['default'] = DialogBody;
module.exports = exports['default'];