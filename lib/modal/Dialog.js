'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utilsComponent = require('../utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsLogger = require('../utils/logger');

var _utilsLogger2 = _interopRequireDefault(_utilsLogger);

var _animate = require('../animate');

var _animate2 = _interopRequireDefault(_animate);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

require('../style');

require('phoenix-styles/less/modules/dialog.less');

/**
 * <h5>弹出框组件，主要包括组件:</h5>
 * <strong><a href='../classes/Dialog.html'>Dialog 基础弹框</a></strong><br/>
 * <strong><a href='../classes/Alert.html'>Alert弹框</a></strong><br>
 * <strong><a href='../classes/Prompt.html'>Prompt弹框</a></strong>
 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
 * @module 弹出框组件
 * @main 弹出框组件
 * @static
 */
/**
 * 弹框组件<br/>
 * - 由于弹框的显示操作在组件以外, 所以需要在使用时自定义`visible`、`closeCallback`函数。
 * - 通过visible设置弹框是否显示, 可选true/false, 必需。
 * - 可通过closeCallback配置点击弹框阴影部分以及弹框右上角X按钮来关闭弹框。
 * - 可通过closeButton来配置弹框右上角X按钮是否显示, 默认不显示。
 * - 默认传了closeCallback之后阴影部分就具备点击关闭弹框的按钮, 如果需要去掉该功能需要额外传shadowDisabled作为标识。
 *
 * 主要属性和接口：
 * - visible:弹框是否显示标识, 默认false不可见<br/>
 * - closeCallback:关闭弹框的功能函数<br/>
 * - closeButton:右上角关闭按钮是否显示的标识, 默认不显示<br/>
 * - shadowDisabled:阴影部分是否可点击关闭按钮, 默认传了closeCallback函数就可以关闭<br/>
 *
 * 示例:
 * ```code
 *     <Dialog visible={this.state.visible} closeCallback={::this.closeCallback} closeButton shadowDisabled>
 *         <Dialog.Title>标题标题</Dialog.Title>
 *         <Dialog.Body>
 *             <p>可自定义表格内容</p>
 *         </Dialog.Body>
 *         <Dialog.Footer>
 *             <Button hollow phSize='lg' phStyle='gray' onClick={::this.closeCallback}>取消</Button>
 *         </Dialog.Footer>
 *     </Dialog>
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
 * @class Dialog
 * @module 弹出框组件
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
            classPrefix: _propTypes2['default'].string,
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * */
            componentTag: _propTypes2['default'].string,
            /**
             * 是否可见标识
             * @property visible
             * @type Boolean
             * */
            visible: _propTypes2['default'].bool,
            /**
             * 关闭弹框的执行函数
             * @method closeCallback
             * @type Function
             * */
            closeCallback: _propTypes2['default'].func,
            /**
             * 右上角按钮是否可见, 默认不可见
             * @property closeButton
             * @type Boolean
             * */
            closeButton: _propTypes2['default'].bool,
            /**
             * 阴影部分是否点击可关闭弹框, 默认传了closeCallback之后可关闭
             * @property shadowDisabled
             * @type Boolean
             * */
            shadowDisabled: _propTypes2['default'].bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            visible: false,
            closeButton: false,
            classPrefix: 'dialog',
            componentTag: 'div',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Dialog(props, context) {
        _classCallCheck(this, Dialog);

        _Component.call(this, props, context);

        new _utilsLogger2['default']('Dialog');
    }

    Dialog.prototype.onShadowClose = function onShadowClose() {
        var _props = this.props;
        var shadowDisabled = _props.shadowDisabled;
        var closeCallback = _props.closeCallback;

        if (shadowDisabled) return;
        closeCallback();
    };

    Dialog.prototype.renderShadow = function renderShadow() {
        var visible = this.props.visible;

        if (visible) {
            return _react2['default'].createElement('div', { className: _classnames2['default'](this.setPhPrefix('shadow'), 'animated'), onClick: this.onShadowClose.bind(this) });
        } else {
            return '';
        }
    };

    Dialog.prototype.renderIcon = function renderIcon() {
        var _props2 = this.props;
        var closeButton = _props2.closeButton;
        var closeCallback = _props2.closeCallback;

        if (closeButton) {
            return _react2['default'].createElement(_icon2['default'], { phIcon: 'close', onClick: closeCallback, className: _classnames2['default'](this.setPhPrefix('close')) });
        }
    };

    Dialog.prototype.renderContent = function renderContent() {
        var visible = this.props.visible;

        if (visible) {
            return _react2['default'].createElement(
                'div',
                { className: _classnames2['default'](this.setPhPrefix('main'), 'animated') },
                _react2['default'].createElement(
                    'div',
                    { className: _classnames2['default'](this.setPhPrefix('content'), 'animated') },
                    this.renderIcon(),
                    this.renderChildren()
                )
            );
        } else {
            return '';
        }
    };

    Dialog.prototype.renderChildren = function renderChildren() {
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

    Dialog.prototype.renderDialog = function renderDialog() {
        var _props4 = this.props;
        var Component = _props4.componentTag;
        var className = _props4.className;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(true), className) }),
            _react2['default'].createElement(
                _animate2['default'],
                null,
                this.renderShadow()
            ),
            _react2['default'].createElement(
                _animate2['default'],
                null,
                this.renderContent()
            )
        );
    };

    Dialog.prototype.render = function render() {
        return this.renderDialog();
    };

    return Dialog;
})(_utilsComponent2['default']);

var DialogTitle = (function (_Component2) {
    _inherits(DialogTitle, _Component2);

    function DialogTitle(props, context) {
        _classCallCheck(this, DialogTitle);

        _Component2.call(this, props, context);
    }

    DialogTitle.prototype.renderDialogTitle = function renderDialogTitle() {
        return _react2['default'].createElement(
            'h2',
            _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(true), this.props.className) }),
            this.props.children
        );
    };

    DialogTitle.prototype.render = function render() {
        return this.renderDialogTitle();
    };

    _createClass(DialogTitle, null, [{
        key: 'defaultProps',
        value: {
            classPrefix: 'dialog-title',
            classMapping: {}
        },
        enumerable: true
    }]);

    return DialogTitle;
})(_utilsComponent2['default']);

var DialogBody = (function (_Component3) {
    _inherits(DialogBody, _Component3);

    function DialogBody(props, context) {
        _classCallCheck(this, DialogBody);

        _Component3.call(this, props, context);
    }

    DialogBody.prototype.renderDialogBody = function renderDialogBody() {
        return _react2['default'].createElement(
            'div',
            _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(true), this.props.className) }),
            this.props.children
        );
    };

    DialogBody.prototype.render = function render() {
        return this.renderDialogBody();
    };

    _createClass(DialogBody, null, [{
        key: 'defaultProps',
        value: {
            classPrefix: 'dialog-body',
            classMapping: {}
        },
        enumerable: true
    }]);

    return DialogBody;
})(_utilsComponent2['default']);

var DialogFooter = (function (_Component4) {
    _inherits(DialogFooter, _Component4);

    function DialogFooter(props, context) {
        _classCallCheck(this, DialogFooter);

        _Component4.call(this, props, context);
    }

    DialogFooter.prototype.renderDialogFooter = function renderDialogFooter() {
        return _react2['default'].createElement(
            'div',
            _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(true), this.props.className, 'clearfix') }),
            this.props.children
        );
    };

    DialogFooter.prototype.render = function render() {
        return this.renderDialogFooter();
    };

    _createClass(DialogFooter, null, [{
        key: 'defaultProps',
        value: {
            classPrefix: 'dialog-footer',
            classMapping: {}
        },
        enumerable: true
    }]);

    return DialogFooter;
})(_utilsComponent2['default']);

Dialog.Title = DialogTitle;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;

exports['default'] = Dialog;
module.exports = exports['default'];