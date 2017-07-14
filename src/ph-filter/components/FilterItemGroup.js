import React, { Component ,PropTypes} from 'react'
import classnames from 'classnames'

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

export default class FilterItemGroup extends Component{
    constructor(props,context){
        super(props,context);
    }

    static propTypes= {
        /**
         * 当使用FilterPanel(支持二级选择)时，itemGroup的label属性被用来渲染一级选项，item自身用来渲染二级
         * @property label
         * @type String | Element
         * */
        label: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]),
        /**
         * 使用多条件筛选时，需要传递mainKey
         * @property mainKey
         * @type String | Number
         * */
        mainKey: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
    }

    static defaultProps = {
        label: ''
    }

    itemClickHandle(){
        let {readOnly, mainKeyChange, groupIndex} = this.props

        if(readOnly) return;
        mainKeyChange(groupIndex)
    }

    render(){
        return (
            <div className={classnames('item ph-tab-nav', this.props.active ? 'active':'')}
                onClick={this.itemClickHandle.bind(this)}
            >
                <a href='javascript:;'>{this.props.label}</a>
            </div>
        )
    }
}