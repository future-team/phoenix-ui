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

var _DialogTitle = require('./DialogTitle');

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _DialogBody = require('./DialogBody');

var _DialogBody2 = _interopRequireDefault(_DialogBody);

var _DialogFooter = require('./DialogFooter');

var _DialogFooter2 = _interopRequireDefault(_DialogFooter);

/**
 * 功能组件 - 弹框
 * @class Dialog
 * @module Action
 * @extends Component
 * @constructor
 * @demo dialog.js {展示}
 * @demo dialog.js {源码}
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
             * */
            classPrefix: _react.PropTypes.string,
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
            egSize: '',
            classPrefix: '',
            componentTag: 'div',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Dialog(props, context) {
        _classCallCheck(this, Dialog);

        _Component.call(this, props, context);
    }

    Dialog.prototype.renderShadow = function renderShadow() {
        var _props = this.props;
        var visible = _props.visible;
        var onClose = _props.onClose;

        if (visible) {
            return _react2['default'].createElement('div', { className: 'dialog-shadow animated', onClick: onClose });
        } else {
            return '';
        }
    };

    Dialog.prototype.renderContent = function renderContent() {
        if (this.props.visible) {
            return _react2['default'].createElement(
                'div',
                { className: 'dialog-main animated' },
                _react2['default'].createElement(
                    'div',
                    { className: 'dialog-content' },
                    this.renderDialog()
                )
            );
        } else {
            return '';
        }
    };

    Dialog.prototype.renderDialog = function renderDialog() {
        var newChildren = [];
        var _props2 = this.props;
        var visible = _props2.visible;
        var children = _props2.children;

        _react2['default'].Children.forEach(children, function (child, index) {
            console.log(child.type.name);

            newChildren.push(_react2['default'].cloneElement(child, {
                key: index,
                visible: visible
            }));
        });

        return newChildren;
    };

    Dialog.prototype.render = function render() {
        var _props3 = this.props;
        var Component = _props3.componentTag;
        var className = _props3.className;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, { className: _classnames2['default']('dialog', this.getProperty(), className) }),
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

Dialog.Title = _DialogTitle2['default'];
Dialog.Body = _DialogBody2['default'];
Dialog.Footer = _DialogFooter2['default'];

exports['default'] = Dialog;
module.exports = exports['default'];