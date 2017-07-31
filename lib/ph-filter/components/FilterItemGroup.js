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

/**
 * 多层筛选主菜单<br/>
 * - 可通过label设置主菜单名称。
 * - 可通过mainKey设置主菜单唯一标识，在多选筛选中是必须的(FilterCheckbox)。
 *
 * 主要属性和接口：
 * - label: 主菜单名称
 * - mainKey: 在多条件筛选中设置主菜单唯一标识。
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
 * 如：
 * ```code
 *  const buttons = [
 *      {onHandle: this.confirmFilter.bind(this)},
 *  ]
 * ...
 *  <FilterContainer>
 *      <Panel readOnly selected={{key:'s_flower',value:'花店'}}>
 *          <ItemGroup label={<span style={{color:'red'}}>美食</span>}>
 *              <Item itemKey='f_all'>全部美食</Item>
 *              <Item itemKey='f_bbc'>本帮江浙菜</Item>
 *              ...
 *          </ItemGroup>
 *          <ItemGroup  label='电影'>
 *              <Item itemKey='m_all'>全部电影</Item>
 *              <Item itemKey='m_p'>私人影院</Item>
 *              ...
 *          </ItemGroup>
 *          ...
 *      </Panel>
 *  </FilterContainer>
 * ```
 *
 * @class FilterItemGroup
 * @module 筛选控件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo ph-filter|ph-filter.js {展示}
 * @show true
 * */

var FilterItemGroup = (function (_Component) {
    _inherits(FilterItemGroup, _Component);

    function FilterItemGroup(props, context) {
        _classCallCheck(this, FilterItemGroup);

        _Component.call(this, props, context);
    }

    FilterItemGroup.prototype.itemClickHandle = function itemClickHandle() {
        var _props = this.props;
        var readOnly = _props.readOnly;
        var mainKeyChange = _props.mainKeyChange;
        var groupIndex = _props.groupIndex;

        if (readOnly) return;
        mainKeyChange(groupIndex);
    };

    FilterItemGroup.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            { className: _classnames2['default']('item ph-tab-nav', this.props.active ? 'active' : '', this.props.className),
                onClick: this.itemClickHandle.bind(this)
            },
            _react2['default'].createElement(
                'a',
                { href: 'javascript:;' },
                this.props.label
            )
        );
    };

    _createClass(FilterItemGroup, null, [{
        key: 'propTypes',
        value: {
            /**
             * 当使用FilterPanel(支持二级选择)时，itemGroup的label属性被用来渲染一级选项，item自身用来渲染二级
             * @property label
             * @type String | Element
             * */
            label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
            /**
             * 使用多条件筛选时，需要传递mainKey
             * @property mainKey
             * @type String | Number
             * */
            mainKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            label: ''
        },
        enumerable: true
    }]);

    return FilterItemGroup;
})(_react.Component);

exports['default'] = FilterItemGroup;
module.exports = exports['default'];