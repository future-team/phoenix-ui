'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _input = require('../../input');

var _input2 = _interopRequireDefault(_input);

var Item = (function (_Component) {
    _inherits(Item, _Component);

    _createClass(Item, null, [{
        key: 'propTypes',
        value: {
            /**
             * item项的唯一标示，必填项
             * @property itemKey
             * @type String|Number
             * */
            itemKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
            /**
             * 选中之后显示的文字，必填项
             * @property itemLabel
             * @type String
             * */
            itemLabel: _react.PropTypes.string,
            /**
             * 是否是选择全部的checkbox，可选all
             * @property type
             * @type String
             * @default 无
             * */
            type: _react.PropTypes.string,
            /**
             * 状态
             * @property disabled
             * @type Boolean
             * @default false
             * */
            disabled: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            disabled: false,
            itemLabel: ''
        },
        enumerable: true
    }]);

    function Item(props, context) {
        _classCallCheck(this, Item);

        _Component.call(this, props, context);

        this.state = {
            active: this.props.active ? this.props.active : false
        };
    }

    Item.prototype.clickCallback = function clickCallback() {
        if (this.props.readOnly || this.props.filterType) {
            return;
        }
        this.props.categoryChange && this.props.categoryChange(this.props.panelIndex, {
            key: this.props.itemKey,
            value: this.props.itemLabel
        }, this.props.refValue);
    };

    Item.prototype.onChange = function onChange(e) {
        var _props = this.props;
        var mainKey = _props.mainKey;
        var itemKey = _props.itemKey;

        this.props.onItemChange(mainKey, itemKey, e);
    };

    Item.prototype.renderChildren = function renderChildren() {
        var _props2 = this.props;
        var filterType = _props2.filterType;
        var checked = _props2.checked;
        var disabled = _props2.disabled;
        var children = _props2.children;

        if (filterType) {
            return _react2['default'].createElement(_input2['default'], { type: 'checkbox', label: children, disabled: disabled, checked: checked && !disabled, onChange: this.onChange.bind(this) });
        } else {
            return children;
        }
    };

    Item.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            { className: _classnames2['default']('ph-list-item', this.props.active ? 'active' : '', this.props.disabled ? 'disabled' : ''),
                onClick: this.clickCallback.bind(this)
            },
            this.renderChildren()
        );
    };

    return Item;
})(_react.Component);

exports['default'] = Item;
module.exports = exports['default'];