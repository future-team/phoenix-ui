'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

/**
 * 辅助功能组件 - 倾听者
 * @class Whisper
 * @module Tooltip
 * @extends Component
 * @constructor
 * @demo popover.js {展示}
 * @demo popover.js {源码}
 * @show true
 * */

var Whisper = (function (_Component) {
    _inherits(Whisper, _Component);

    _createClass(Whisper, null, [{
        key: 'propTypes',
        value: {
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * */
            componentTag: _react.PropTypes.string,
            placement: _react.PropTypes.string,
            distance: _react.PropTypes.number
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            distance: 15,
            placement: 'bottom',
            componentTag: 'div',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Whisper(props, context) {
        _classCallCheck(this, Whisper);

        _Component.call(this, props, context);

        this.visible = false;
        this._layer = document.createElement('div');
    }

    Whisper.prototype.componentDidMount = function componentDidMount() {
        this.getWhisperPosition();
    };

    Whisper.prototype.getWhisperPosition = function getWhisperPosition() {
        this.position = {};
        this.size = {};

        this.position.x = parseInt(this.whisper.offsetLeft);
        this.position.y = parseInt(this.whisper.offsetTop);

        this.size.width = parseInt(this.whisper.offsetWidth);
        this.size.height = parseInt(this.whisper.offsetHeight);

        this.calcTooltipPosition();
    };

    Whisper.prototype.calcTooltipPosition = function calcTooltipPosition() {
        var ARROW_SIZE = this.props.distance;
        var winWidth = parseInt(document.body.clientWidth),
            winHeight = parseInt(document.body.clientHeight);

        document.body.style.position = 'relative';
        this.style = {};

        switch (this.props.placement) {
            case 'top':
                this.style.bottom = winHeight - this.position.y + ARROW_SIZE;
                this.style.left = this.position.x + this.size.width / 2;
                break;
            case 'bottom':
                this.style.top = this.position.y + this.size.height + ARROW_SIZE;
                this.style.left = this.position.x + this.size.width / 2;
                break;
            case 'left':
                this.style.right = winWidth - this.position.x + ARROW_SIZE;
                this.style.top = this.position.y + this.size.height / 2;
                break;
            case 'right':
                this.style.left = this.position.x + this.size.width + ARROW_SIZE;
                this.style.top = this.position.y + this.size.height / 2;
                break;
            case 'top left':
                this.style.bottom = winHeight - this.position.y + ARROW_SIZE;
                this.style.left = this.position.x;
                break;
            case 'top right':
                this.style.bottom = winHeight - this.position.y + ARROW_SIZE;
                this.style.right = winWidth - this.position.x - this.size.width;
                break;
            case 'bottom left':
                this.style.top = this.position.y + this.size.height + ARROW_SIZE;
                this.style.left = this.position.x;
                break;
            case 'bottom right':
                this.style.top = this.position.y + this.size.height + ARROW_SIZE;
                this.style.right = winWidth - this.position.x - this.size.width;
                break;
            default:
                this.style.top = 0;
                this.style.left = 0;
        }
    };

    Whisper.prototype.onToggle = function onToggle() {
        if (this.props.onChange) this.props.onChange();

        this.visible = !this.visible;

        if (this.visible) {
            this.renderTarget();
        } else {
            this.removeTarget();
        }
    };

    Whisper.prototype.onClose = function onClose() {
        this.visible = false;
        this.removeTarget();
    };

    Whisper.prototype.getTarget = function getTarget() {
        return _react.cloneElement(this.props.target, {
            styles: this.style,
            placement: this.props.placement,
            onClose: this.onClose.bind(this)
        });
    };

    Whisper.prototype.renderTarget = function renderTarget() {
        var newTarget = this.getTarget();

        _reactDom2['default'].unstable_renderSubtreeIntoContainer(this, newTarget, this._layer);
        document.body.appendChild(this._layer);
    };

    Whisper.prototype.removeTarget = function removeTarget() {
        _reactDom2['default'].unmountComponentAtNode(this._layer);
    };

    Whisper.prototype.render = function render() {
        var _this = this;

        var _props = this.props;
        var className = _props.className;
        var children = _props.children;

        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, {
                className: _classnames2['default']('whisper', className),
                onClick: this.onToggle.bind(this),
                ref: function (whisper) {
                    _this.whisper = whisper;
                }
            }),
            children
        );
    };

    return Whisper;
})(_react.Component);

exports['default'] = Whisper;
module.exports = exports['default'];