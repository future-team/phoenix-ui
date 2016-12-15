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

var _utilsComponent = require('./utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

/**
 * 功能组件-飘字
 * @class Toast
 * @module Action
 * @extends Component
 * @constructor
 * @demo toast.js {展示}
 * @demo toast.js {源码}
 * @show true
 * */

var Toast = (function (_Component) {
    _inherits(Toast, _Component);

    _createClass(Toast, null, [{
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
            componentTag: 'div',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Toast(props, context) {
        _classCallCheck(this, Toast);

        _Component.call(this, props, context);
    }

    Toast.prototype.render = function render() {
        var Component = this.props.componentTag;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, { className: _classnames2['default']('toast') }),
            _react2['default'].createElement('div', { className: 'toast-shadow' }),
            _react2['default'].createElement(
                'div',
                { className: 'toast-main' },
                _react2['default'].createElement(
                    'div',
                    { className: _classnames2['default']("toast-content") },
                    this.props.children
                )
            )
        );
    };

    return Toast;
})(_utilsComponent2['default']);

var _layer = document.createElement('div'),
    timer = null,
    visible = false;

function renderLayer(content) {
    return _react2['default'].createElement(
        Toast,
        null,
        content
    );
}

function _renderLayer(layerElement, duration, callback) {
    visible = true;

    _reactDom2['default'].render(layerElement, _layer);
    document.body.appendChild(_layer);

    window.addEventListener('hashchange', _unrenderLayer, false);

    timer = setTimeout(function () {
        visible = false;

        _unrenderLayer();
        callback();
    }, duration);
}

function _unrenderLayer() {
    _reactDom2['default'].unmountComponentAtNode(_layer);
    if (visible) document.body.removeChild(_layer);

    window.removeEventListener('hashchange', _unrenderLayer, false);
    clearTimeout(timer);
}

exports['default'] = {
    info: function info(content, duration, callback) {
        var layerElement = renderLayer(content);
        _renderLayer(layerElement, duration, callback);
    },
    show: function show(content, duration, callback) {
        this.info(content, duration, callback);
    },
    remove: function remove() {
        _unrenderLayer();
        clearTimeout(timer);
    }
};
module.exports = exports['default'];