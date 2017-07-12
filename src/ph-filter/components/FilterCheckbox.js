import React, { Component,PropTypes } from 'react'
import Button from '../../button'
import Input from '../../input'

import FilterContainer from './FilterContainer.js'
import CheckboxPanel from "./FilterPanelCheckbox.js"

/**
 * 多条件筛选组件<br/>
 * - 可通过groupIndex设置主菜单索引值，默认0，即第一个。
 * - 可通过choose设置初始选中的的id的字符串，以逗号隔开。
 * - 可通过buttons设置底部按钮，以数组的格式传入，如`[{text:'取消', phStyle:'info', onHandle:this.cancelChoose.bind(this), otherProps: {hollow:true}}]`。
 *
 * 主要属性和接口：
 * - groupIndex: 主菜单索引值。
 * - choose: 选中id的字符串
 * - buttons: 底部按钮数组
 * 如：
 * ```code
 *  <FilterCheckbox choose={this.state.choose} groupIndex={2} buttons={buttons}>
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
 * @class FilterCheckbox
 * @module 筛选控件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo ph-filter-checkbox|ph-filter-checkbox.js {展示}
 * @show true
 * */

export default class FilterCheckbox extends Component{

    constructor(props,context){
        super(props,context);

        this.choose =  props.choose;
    }

    static propTypes= {
        /**
         * 默认选中的侧边栏的索引值
         * @property groupIndex
         * @type Number
         * @default 0
         * */
        groupIndex: PropTypes.number,
        /**
         * 选中的id字符串，逗号隔开
         * @property choose
         * @type String
         * @default -1
         * */
        choose: PropTypes.string,
        /**
         * 按钮数组
         * @property buttons
         * @type Array
         * */
        buttons: PropTypes.array
    }

    static defaultProps = {
        groupIndex: 0,
        choose: []
    }
    
    render(){
        let {choose, groupIndex, buttons, children} = this.props

        return (
            <div className="ph-checkbox-filter">
                <FilterContainer activeIndex={0} hideCat choose={choose}>
                    <CheckboxPanel groupIndex={groupIndex} buttons={buttons}>
                        {children}
                    </CheckboxPanel>
                </FilterContainer>
            </div>
        );
    }
}
