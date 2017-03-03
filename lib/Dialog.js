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

var _utilsTool = require('./utils/Tool');

/**
 * 弹框组件<br/>
 * - 由于弹框的显示操作在组件以外, 所以需要在使用时自定义visible、onShow、onClose函数。
 * - 通过visible设置弹框是否显示, 可选true/false, 必需。
 * - 可通过onClose配置点击弹框阴影部分以及弹框右上角X按钮来关闭弹框。
 * - 可通过closeButton来配置弹框右上角X按钮是否显示, 默认不显示。
 * - 默认传了onClose之后阴影部分就具备点击关闭弹框的按钮, 如果需要去掉该功能需要额外传shadowDisabled作为标识。
 *
 * 主要属性和接口：
 * - visible:弹框是否显示标识, 默认false不可见<br/>
 * - onClose:关闭弹框的功能函数<br/>
 * - closeButton:右上角关闭按钮是否显示的标识, 默认不显示<br/>
 * - shadowDisabled:阴影部分是否可点击关闭按钮, 默认传了onClose函数就可以关闭<br/>
 *
 * 示例:
 * ```code
 *     <Dialog visible={this.state.visible} onClose={::this.onClose} closeButton shadowDisabled>
 *         <Dialog.Title>标题标题</Dialog.Title>
 *         <Dialog.Body>
 *             <p>可自定义表格内容</p>
 *         </Dialog.Body>
 *         <Dialog.Footer>
 *             <Button hollow phSize="lg" phStyle="gray" onClick={::this.onClose}>取消</Button>
 *         </Dialog.Footer>
 *     </Dialog>
 * ```
 * ```code
 *     onShow(){
 *         this.setState({
 *             visible: true
 *         });
 *     }
 *     onClose(){
 *         this.setState({
 *             visible: false
 *         });
 *     }
 * ```
 *
 * @class Dialog
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 0.4.0
 * @demo dialog|dialog.js {展示}
 * @show true
 * */

var Dialog = (function (_Component) {
    _inherits(Dialog, _Component);

    _createClass(Dialog, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'dialog'
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
             * 关闭弹框的执行函数
             * @method onClose
             * @type Function
             * */
            onClose: _react.PropTypes.func,
            /**
             * 右上角按钮是否可见, 默认不可见
             * @property closeButton
             * @type Boolean
             * */
            closeButton: _react.PropTypes.bool,
            /**
             * 阴影部分是否点击可关闭弹框, 默认传了onClose之后可关闭
             * @property shadowDisabled
             * @type Boolean
             * */
            shadowDisabled: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            visible: false,
            classPrefix: 'dialog',
            componentTag: 'div',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Dialog(props, context) {
        _classCallCheck(this, Dialog);

        _Component.call(this, props, context);
    }

    Dialog.prototype.onShadowClose = function onShadowClose() {
        var _props = this.props;
        var shadowDisabled = _props.shadowDisabled;
        var onClose = _props.onClose;

        if (shadowDisabled) return;
        onClose();
    };

    Dialog.prototype.renderShadow = function renderShadow() {
        var visible = this.props.visible;

        if (visible) {
            return _react2['default'].createElement('div', { className: _classnames2['default'](_utilsTool.setPhoenixPrefix("dialog-shadow"), "animated"), onClick: this.onShadowClose.bind(this) });
        } else {
            return '';
        }
    };

    Dialog.prototype.renderContent = function renderContent() {
        var _props2 = this.props;
        var visible = _props2.visible;
        var closeButton = _props2.closeButton;
        var onClose = _props2.onClose;

        if (visible) {
            return _react2['default'].createElement(
                'div',
                { className: _classnames2['default'](_utilsTool.setPhoenixPrefix("dialog-main"), "animated") },
                _react2['default'].createElement(
                    'div',
                    { className: _classnames2['default'](_utilsTool.setPhoenixPrefix("dialog-content"), "animated") },
                    _react2['default'].createElement('a', { href: 'javascript:;', onClick: onClose, className: _classnames2['default'](_utilsTool.setPhoenixPrefix("dialog-close"), closeButton ? "show" : "hide", "ph-iconfont iconfont icon-close") }),
                    this.renderDialog()
                )
            );
        } else {
            return '';
        }
    };

    Dialog.prototype.renderDialog = function renderDialog() {
        var newChildren = [];
        var _props3 = this.props;
        var visible = _props3.visible;
        var children = _props3.children;

        _react2['default'].Children.forEach(children, function (child, index) {
            // console.log(child.type.name);

            newChildren.push(_react2['default'].cloneElement(child, {
                key: index,
                visible: visible
            }));
        });

        return newChildren;
    };

    Dialog.prototype.render = function render() {
        var _props4 = this.props;
        var Component = _props4.componentTag;
        var className = _props4.className;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className) }),
            _react2['default'].createElement(
                _Animate2['default'],
                null,
                this.renderShadow()
            ),
            _react2['default'].createElement(
                _Animate2['default'],
                null,
                this.renderContent()
            )
        );
    };

    return Dialog;
})(_utilsComponent2['default']);

var DialogTitle = (function (_Component2) {
    _inherits(DialogTitle, _Component2);

    function DialogTitle(props, context) {
        _classCallCheck(this, DialogTitle);

        _Component2.call(this, props, context);
    }

    DialogTitle.prototype.render = function render() {
        return _react2['default'].createElement(
            'h2',
            _extends({}, this.props, { className: _classnames2['default'](_utilsTool.setPhoenixPrefix('dialog-title'), this.props.className) }),
            this.props.children
        );
    };

    return DialogTitle;
})(_utilsComponent2['default']);

var DialogBody = (function (_Component3) {
    _inherits(DialogBody, _Component3);

    function DialogBody(props, context) {
        _classCallCheck(this, DialogBody);

        _Component3.call(this, props, context);
    }

    DialogBody.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, { className: _classnames2['default'](_utilsTool.setPhoenixPrefix('dialog-body'), this.props.className) }),
            this.props.children
        );
    };

    return DialogBody;
})(_utilsComponent2['default']);

var DialogFooter = (function (_Component4) {
    _inherits(DialogFooter, _Component4);

    function DialogFooter(props, context) {
        _classCallCheck(this, DialogFooter);

        _Component4.call(this, props, context);
    }

    DialogFooter.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, { className: _classnames2['default'](_utilsTool.setPhoenixPrefix('dialog-footer'), this.props.className, 'clearfix') }),
            this.props.children
        );
    };

    return DialogFooter;
})(_utilsComponent2['default']);

Dialog.Title = DialogTitle;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;

exports['default'] = Dialog;
module.exports = exports['default'];