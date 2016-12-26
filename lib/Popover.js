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

var _utilsTool2 = _interopRequireDefault(_utilsTool);

/**
 * 气泡
 * @class Popover
 * @module 提示组件
 * @extends Component
 * @constructor
 * @demo popover.js {展示}
 * @demo popover.js {源码}
 * @show true
 * */

var Popover = (function (_Component) {
    _inherits(Popover, _Component);

    _createClass(Popover, null, [{
        key: 'propTypes',
        value: {
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
            componentTag: 'div',
            classMapping: {
                'top': 'ph-popover-top center-x',
                'bottom': 'ph-popover-bottom center-x',
                'left': 'ph-popover-left center-y',
                'right': 'ph-popover-right center-y',
                'top left': 'ph-popover-top left-x',
                'top right': 'ph-popover-top right-x',
                'bottom left': 'ph-popover-bottom left-x',
                'bottom right': 'ph-popover-bottom right-x'
            }
        },
        enumerable: true
    }]);

    function Popover(props, context) {
        _classCallCheck(this, Popover);

        _Component.call(this, props, context);

        this.handleDocumentClick = this.handleDocumentClick.bind(this);

        document.addEventListener('click', this.handleDocumentClick, false);
    }

    Popover.prototype.handleDocumentClick = function handleDocumentClick(event) {
        var el = event.target;

        if (!_utilsTool2['default'].closest(el, '.ph-popover') && !(this.props.whisper == event.target)) {
            this.props.onClose();
        }

        return false;
    };

    Popover.prototype.componentWillUnmount = function componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick, false);
    };

    Popover.prototype.render = function render() {
        var _props = this.props;
        var Component = _props.componentTag;
        var className = _props.className;
        var styles = _props.styles;
        var style = _props.style;
        var children = _props.children;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, {
                className: _classnames2['default']('ph-popover', this.getProperty(), className),
                style: Object.assign(styles, style)
            }),
            _react2['default'].createElement('div', { className: 'ph-popover-arrow' }),
            _react2['default'].createElement(
                'div',
                { className: 'ph-popover-content' },
                children
            )
        );
    };

    return Popover;
})(_utilsComponent2['default']);

exports['default'] = Popover;
module.exports = exports['default'];