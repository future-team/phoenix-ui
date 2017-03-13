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

var _utilsTool = require('./utils/Tool');

/**
 * 飘字组件<br/>
 * - 由于飘字的使用范围可预估, 为方便使用在原组件的基础上更进一步改为函数式的使用方式。
 * - 普通信息: `Toast.info(message, duration, callback)`
 * - 成功信息: `Toast.success(message, duration, callback)`
 * - 失败信息: `Toast.fail(message, duration, callback)`
 * - 加载中: `Toast.loading(message, duration, callback)`
 *
 * 示例: <br/>
 * - 显示普通飘字, 如:<br/>
 * `Toast.info('只显示信息的toast！', 1000, ()=>{console.log('飘字消失时执行的回调函数');})`
 * - 显示成功信息, 如:<br/>
 * `Toast.success('操作成功', 1000, ()=>{console.log('飘字消失时执行的回调函数');})`
 * - 显示失败信息, 如:<br/>
 * `Toast.fail('操作失败', 1000, ()=>{console.log('飘字消失时执行的回调函数');})`
 * - 显示加载中, 如:<br/>
 * `Toast.loading('加载中...', 1000, ()=>{console.log('飘字消失时执行的回调函数');})`
 *
 * @class Toast
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 0.3.0
 * @demo toast|toast.js
 * @show true
 * */

var Toast = (function (_Component) {
    _inherits(Toast, _Component);

    _createClass(Toast, null, [{
        key: 'propTypes',
        value: {},
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'toast',
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
        var _props = this.props;
        var Component = _props.componentTag;
        var className = _props.className;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className) }),
            _react2['default'].createElement('div', { className: _utilsTool.setPhoenixPrefix("toast-shadow") }),
            _react2['default'].createElement(
                'div',
                { className: _utilsTool.setPhoenixPrefix("toast-main") },
                _react2['default'].createElement(
                    'div',
                    { className: _utilsTool.setPhoenixPrefix("toast-content") },
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

function renderLayer(content, className) {
    return _react2['default'].createElement(
        Toast,
        { className: className },
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
    success: function success(content, duration, callback) {
        var layerElement = renderLayer(content, _utilsTool.setPhoenixPrefix('toast-success'));
        _renderLayer(layerElement, duration, callback);
    },
    fail: function fail(content, duration, callback) {
        var layerElement = renderLayer(content, _utilsTool.setPhoenixPrefix('toast-fail'));
        _renderLayer(layerElement, duration, callback);
    },
    loading: function loading(content, duration, callback) {
        var layerElement = renderLayer(content, _utilsTool.setPhoenixPrefix('toast-loading'));
        _renderLayer(layerElement, duration, callback);
    },
    remove: function remove() {
        _unrenderLayer();
        clearTimeout(timer);
    }
};
module.exports = exports['default'];