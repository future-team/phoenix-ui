'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

/**
 * 动画外层
 * @class Animate
 * @module Action
 * @extends Component
 * @constructor
 * @show false
 * */

var Animate = (function (_Component) {
    _inherits(Animate, _Component);

    _createClass(Animate, null, [{
        key: 'propTypes',
        value: {
            transitionName: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            transitionName: 'fade',
            transitionEnterTimeout: 100,
            transitionLeaveTimeout: 300
        },
        enumerable: true
    }]);

    function Animate(props, context) {
        _classCallCheck(this, Animate);

        _Component.call(this, props, context);
    }

    Animate.prototype.render = function render() {
        var _props = this.props;
        var transitionName = _props.transitionName;
        var transitionEnterTimeout = _props.transitionEnterTimeout;
        var transitionLeaveTimeout = _props.transitionLeaveTimeout;
        var className = _props.className;
        var children = _props.children;

        return _react2['default'].createElement(
            _reactAddonsCssTransitionGroup2['default'],
            _extends({}, this.props, {
                transitionName: transitionName,
                transitionEnterTimeout: transitionEnterTimeout,
                transitionLeaveTimeout: transitionLeaveTimeout
            }),
            children
        );
    };

    return Animate;
})(_react.Component);

exports['default'] = Animate;
module.exports = exports['default'];