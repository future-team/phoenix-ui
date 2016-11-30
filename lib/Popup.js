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

var _Animate = require('./Animate');

var _Animate2 = _interopRequireDefault(_Animate);

/**
 * 功能组件-弹框
 * @class Popup
 * @module Action
 * @extends Component
 * @constructor
 * @demo popup.js {展示}
 * @demo popup.js {源码}
 * @show true
 * */

var Popup = (function (_Component) {
    _inherits(Popup, _Component);

    _createClass(Popup, null, [{
        key: 'propTypes',
        value: {
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * */
            componentTag: _react.PropTypes.string,
            visible: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            visible: false,
            align: 'top',
            componentTag: 'div',
            classMapping: {
                'top': 'popup-top',
                'bottom': 'popup-bottom'
            }
        },
        enumerable: true
    }]);

    function Popup(props, context) {
        _classCallCheck(this, Popup);

        _Component.call(this, props, context);
    }

    Popup.prototype.renderShadow = function renderShadow() {
        var _props = this.props;
        var visible = _props.visible;
        var onClose = _props.onClose;

        if (visible) {
            return _react2['default'].createElement('div', { className: 'popup-shadow animated', onClick: onClose });
        } else {
            return '';
        }
    };

    Popup.prototype.renderPopup = function renderPopup() {
        var _props2 = this.props;
        var visible = _props2.visible;
        var children = _props2.children;
        var className = _props2.className;

        if (visible) {
            return _react2['default'].createElement(
                'div',
                _extends({}, this.props, { className: _classnames2['default']('popup-main', 'animated', className) }),
                children
            );
        } else {
            return '';
        }
    };

    Popup.prototype.render = function render() {
        var _props3 = this.props;
        var Component = _props3.componentTag;
        var className = _props3.className;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, { className: _classnames2['default']('popup', this.getProperty(), className) }),
            _react2['default'].createElement(
                _Animate2['default'],
                null,
                this.renderShadow()
            ),
            _react2['default'].createElement(
                _Animate2['default'],
                { className: 'popup-content', transitionName: 'slide-' + this.props.align },
                this.renderPopup()
            )
        );
    };

    return Popup;
})(_utilsComponent2['default']);

exports['default'] = Popup;
module.exports = exports['default'];