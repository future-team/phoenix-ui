'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _checkbox = require('../../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _list = require('../../list');

var _list2 = _interopRequireDefault(_list);

/**
 * 筛选项<br/>
 * - 通过itemKey设置筛选项唯一标识。
 * - 可通过disabled设置筛选项是否不可选，适用于多选筛选(FilterCheckbox)。
 *
 * 主要属性和接口：
 * - itemKey: 筛选项唯一标识，必须。
 * - disabled: 是否不可选。
 * 如：
 * ```code
 *  <FilterCheckbox>
 *      {
 *          this.state.filterData.map((cityShopList,index)=>{
 *              return (
 *                  <ItemGroup key={cityShopList.cityId} mainKey={cityShopList.cityId} label={cityShopList.cityName}>
 *                      {
 *                          cityShopList.shopInfoDTOList.map((shopInfo)=>{
 *                              return  <Item disabled={shopInfo.status==1} key={shopInfo.shopId} itemKey={shopInfo.shopId}>{shopInfo.shopName}</Item>
 *                          })
 *                      }
 *                  </ItemGroup>
 *              );
 *          })
 *      }
 *  </FilterCheckbox>
 * ```
 *
 * @class FilterItem
 * @module 筛选控件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo ph-filter|ph-filter.js {展示}
 * @show true
 * */

var FilterItem = (function (_Component) {
    _inherits(FilterItem, _Component);

    _createClass(FilterItem, null, [{
        key: 'propTypes',
        value: {
            /**
             * item项的唯一标示，必填项
             * @property itemKey
             * @type String|Number
             * */
            itemKey: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
            /**
             * 状态
             * @property disabled
             * @type Boolean
             * @default false
             * */
            disabled: _propTypes2['default'].bool,
            /**
             * 点击的回调
             * @property clickCallback
             * @type func
             * @default null
             * */
            clickCallback: _propTypes2['default'].func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            disabled: false
        },
        enumerable: true
    }]);

    function FilterItem(props, context) {
        _classCallCheck(this, FilterItem);

        _Component.call(this, props, context);
    }

    FilterItem.prototype.clickCallback = function clickCallback() {
        var _props = this.props;
        var readOnly = _props.readOnly;
        var filterType = _props.filterType;
        var onItemChange = _props.onItemChange;
        var categoryChange = _props.categoryChange;
        var panelIndex = _props.panelIndex;
        var itemKey = _props.itemKey;
        var children = _props.children;
        var clickCallback = _props.clickCallback;
        var disabled = _props.disabled;

        if (clickCallback) clickCallback(itemKey, disabled);

        if (readOnly || filterType) return;

        onItemChange(itemKey);

        categoryChange && categoryChange(panelIndex, { key: itemKey, value: children });
    };

    FilterItem.prototype.onChange = function onChange(e) {
        var _props2 = this.props;
        var mainKey = _props2.mainKey;
        var itemKey = _props2.itemKey;
        var onItemChange = _props2.onItemChange;

        onItemChange(mainKey, itemKey, e);
    };

    FilterItem.prototype.renderChildren = function renderChildren() {
        var _props3 = this.props;
        var filterType = _props3.filterType;
        var checked = _props3.checked;
        var disabled = _props3.disabled;
        var children = _props3.children;

        return _react2['default'].createElement(
            _list2['default'].Col,
            null,
            filterType ? _react2['default'].createElement(_checkbox2['default'], { label: children, disabled: disabled, checked: checked && !disabled, onChange: this.onChange.bind(this) }) : children
        );
    };

    FilterItem.prototype.render = function render() {
        var _props4 = this.props;
        var active = _props4.active;
        var disabled = _props4.disabled;
        var className = _props4.className;

        return _react2['default'].createElement(
            'div',
            { className: _classnames2['default']('ph-row ph-list-item', active ? 'active' : '', disabled ? 'disabled' : '', className),
                onClick: this.clickCallback.bind(this)
            },
            this.renderChildren()
        );
    };

    return FilterItem;
})(_react.Component);

exports['default'] = FilterItem;
module.exports = exports['default'];