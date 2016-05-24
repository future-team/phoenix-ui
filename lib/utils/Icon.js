'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uiSvgIconsDist24px = require('ui-svg-icons/dist/24px');

var _uiSvgIconsDist24px2 = _interopRequireDefault(_uiSvgIconsDist24px);

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

var Icon = (function (_Component) {
    _inherits(Icon, _Component);

    function Icon() {
        _classCallCheck(this, Icon);

        _Component.apply(this, arguments);
    }

    Icon.prototype.render = function render() {
        var defaultStyle = {
            width: '18px',
            height: '18px'
        };
        return _react2['default'].createElement(_uiSvgIconsDist24px2['default'], _extends({}, this.props, { style: _extend2['default']({}, defaultStyle, this.props.style || {}) }));
    };

    return Icon;
})(_react.Component);

exports['default'] = Icon;
module.exports = exports['default'];