import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Button from '../../button'
import Input from '../../input'

import FilterContainer from './FilterContainer.js'
import CheckboxPanel from './FilterPanelCheckbox.js'


/**
 * 多条件筛选组件<br/>
 * - 可通过groupIndex设置主菜单索引值，默认0，即第一个。
 * - 可通过choose设置初始选中的的id的字符串，以逗号隔开。
 * - 可通过buttons设置底部按钮，以数组的格式传入，如`[{text:'取消', phStyle:'info', onHandle:this.cancelChoose.bind(this), otherProps: {hollow:true}}]`。
 *
 * 主要属性和接口：
 * - groupIndex: 主菜单索引值。
 * - choose: 选中id的字符串。
 * - buttons: 底部按钮数组。
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
         * @property index
         * @type Number
         * @default 0
         * */
        index: PropTypes.number,
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
        buttons: PropTypes.array,
        /**
         *  显示按钮额外文字的格式，目前仅支持文字
         * @property showExtra
         * @type Array
         * @default null
         * */
        showExtra: PropTypes.string,
    }

    static defaultProps = {
        index: 0,
        choose: [],
        showExtra: null
    }
    
    render(){
        let {choose, index, buttons, children, className, style, showExtra} = this.props
        
        return (
            <div className={classnames('ph-checkbox-filter', className, showExtra?'ph-checkbox-filter-extra':'')}>
                <FilterContainer index={0} hideCat>
                    <CheckboxPanel 
                        index={index} 
                        buttons={buttons} 
                        selected={{key:choose, value:''}} 
                        choose={choose} 
                        showExtra={showExtra}
                    >
                        {children}
                    </CheckboxPanel>
                </FilterContainer>
            </div>
        );
    }
}
