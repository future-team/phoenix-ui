'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsComponent = require('../utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsTool = require('../utils/Tool');

var _animate = require('../animate/');

var _animate2 = _interopRequireDefault(_animate);

require("phoenix-styles/less/modules/popup.less");

/**
 * 弹层组件<br/>
 * - 由于弹层的显示操作在组件以外, 所以需要在使用时自定义visible、onShow、closeCallback函数。
 * - 通过align设置碳层弹出的位置, 可选top/bottom。
 * - 可通过closeCallback配置点击弹层阴影部分来关闭弹层。
 *
 * 主要属性和接口：
 * - visible:弹层是否显示标识, 默认false不可见
 * - closeCallback:关闭弹层的功能函数
 * - align:弹层的位置, 默认top
 *
 * 示例:
 * ```code
 *     <Popup align="top" visible={this.state.visible} closeCallback={::this.closeCallback}>
 *         <ul className="ph-popup-list">
 *             <li className="ph-popup-item">未上线单店</li>
 *             <li className="ph-popup-item">未上线连锁店</li>
 *         </ul>
 *     </Popup>
 * ```
 * ```code
 *     onShow(){
 *         this.setState({
 *             visible: true
 *         });
 *     }
 *     closeCallback(){
 *         this.setState({
 *             visible: false
 *         });
 *     }
 * ```
 *
 * @class Popup
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 0.4.0
 * @demo popup|popup.js {展示}
 * @show true
 * */

var Popup = (function (_Component) {
    _inherits(Popup, _Component);

    _createClass(Popup, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'popup'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * */
            componentTag: _react.PropTypes.string,
            /**
             * 是否可见标识
             * @property visible
             * @type Boolean
             * */
            visible: _react.PropTypes.bool,
            /**
             * 弹层的位置,默认top
             * @property align
             * @type String
             * */
            align: _react.PropTypes.string,
            /**
             * 关闭的执行函数
             * @method closeCallback
             * @type Function
             * */
            closeCallback: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            visible: false,
            align: 'top',
            classPrefix: 'popup',
            componentTag: 'div',
            classMapping: {
                'top': 'top',
                'bottom': 'bottom'
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
        var closeCallback = _props.closeCallback;

        if (visible) {
            return _react2['default'].createElement('div', { className: _classnames2['default'](_utilsTool.setPhPrefix("popup-shadow"), "animated"), onClick: closeCallback });
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
                _extends({}, this.props, { className: _classnames2['default'](_utilsTool.setPhPrefix('popup-content'), 'animated', className) }),
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
            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className) }),
            _react2['default'].createElement(
                _animate2['default'],
                null,
                this.renderShadow()
            ),
            _react2['default'].createElement(
                _animate2['default'],
                { className: _utilsTool.setPhPrefix('popup-main'), transitionName: 'slide-' + this.props.align },
                this.renderPopup()
            )
        );
    };

    return Popup;
})(_utilsComponent2['default']);

exports['default'] = Popup;
module.exports = exports['default'];