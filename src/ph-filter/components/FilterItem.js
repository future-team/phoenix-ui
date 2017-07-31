import React, { Component ,PropTypes} from 'react'
import classnames from 'classnames'
import Checkbox from '../../checkbox'
import List from '../../list'

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

export default class FilterItem extends Component{
    static propTypes= {
        /**
         * item项的唯一标示，必填项
         * @property itemKey
         * @type String|Number
         * */
        itemKey:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * 状态
         * @property disabled
         * @type Boolean
         * @default false
         * */
        disabled: PropTypes.bool
    }

    static defaultProps = {
        disabled: false
    }

    constructor(props,context){
        super(props,context);
    }

    clickCallback(){
        let {readOnly, filterType, onItemChange, categoryChange, panelIndex, itemKey, children} = this.props

        if(readOnly || filterType) return

        onItemChange(itemKey)

        categoryChange && categoryChange(panelIndex, {key: itemKey, value: children})
    }

    onChange(e){
        let {mainKey, itemKey, onItemChange} = this.props

        onItemChange(mainKey, itemKey, e)
    }

    renderChildren(){
        let {filterType, checked, disabled, children} = this.props;

        return (
            <List.Col>
                {
                    filterType? <Checkbox label={children} disabled={disabled} checked={checked && !disabled} onChange={this.onChange.bind(this)} />: children
                }
            </List.Col>
        )
    }

    render(){
        let {active, disabled} = this.props

        return (
            <div className={classnames('ph-row ph-list-item', active ? 'active':'', disabled? 'disabled':'')}
                onClick={this.clickCallback.bind(this)}
            >
                {this.renderChildren()}
            </div>
        )
    }
}