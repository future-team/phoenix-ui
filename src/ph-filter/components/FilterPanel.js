import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import PanelBase from './FilterPanelBase.js'

/**
 * 面板<br/>
 * - 可通过selected设置选中的项目，格式如`{key:'ljz',value:'陆家嘴'}`。
 * - 可通过default设置没有选项时的默认显示文字。
 * - 可通过readOnly设置当前面板是否为只读模式。
 * - 可通过buttons设置底部按钮组的样式、文字、回调等，格式如`[{text:'取消', phStyle:'info', onHandle:this.cancelChoose.bind(this), otherProps: {hollow:true}}]`。
 *
 * 主要属性和接口：
 * - selected: 默认打开的面板。
 * - default: 是否显示筛选头部。
 * - readOnly: 有效选择的回调。
 * - buttons: 有效选择的回调。
 * 
 * 如：
 * ```code
 *  const buttons = [
 *      {onHandle: this.onSubmit.bind(this)}
 *  ]
 * ...
 *  <FilterContainer>
 *      <Panel readOnly selected={{key:'s_flower',value:'花店'}} buttons={buttons}>
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
 * @class FilterPanel
 * @module 筛选控件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo ph-filter|ph-filter.js {展示}
 * @show true
 * */

export default class FilterPanel extends PanelBase{
    static propTypes= {
        /**
         * panel下选中的item的key、value组成的对象，用于设置该panel初始状态下选中的item项
         * @property selected
         * @type Object 如{key:'ljz',value:'陆家嘴'}
         * */
        selected: PropTypes.shape({
            key: PropTypes.string,
            value: PropTypes.oneOfType([PropTypes.string,PropTypes.element])
        }),
        /**
         * 当不设置panel的选中项时（不选择任何item），可以设置一个默认字符展示在filter上
         * @property default
         * @type String
         * */
        default: PropTypes.string,
        /**
         * panel是否为只读模式
         * @property readOnly
         * @type Boolean
         * */
        readOnly: PropTypes.bool,
         /**
         * 按钮数组
         * @property buttons
         * @type Array
         * */
        buttons: PropTypes.array,
         /**
         * 主菜单默认选中项
         * @property index
         * @type Number
         * @default 0
         * */
        index: PropTypes.number
    }

    static defaultProps = {
        index: 0,
        selected: null,
        readOnly: false,
        buttons: null,
        default: ''
    }

    constructor(props,context){
        super(props,context);

        this.state = {
            selectedKey: this.getSelectedKey(props),
            activeGroupIndex: this.getActiveGroupIndex()
        }
    }

    getActiveGroupIndex(){
        let {selected, index, children} = this.props,
            activeIndex = 0,
            selectedKey = selected.key
        
        if(index && index>=0) return index 
        
        // 获取不到children,并不会执行
        if(selectedKey){
            React.Children.map(children, function(mainMenu,mainIndex){
                
                React.Children.map(mainMenu.props.children,function(subMenu,subIndex){
                    if(subMenu.props.itemKey==selectedKey){
                        activeIndex = mainIndex
                    }
                })

            })
        }
        
        return activeIndex
    }

    renderSubMenuList(mainMenuList){
        var subMenuList=[],
            self=this

        React.Children.map(mainMenuList,function(menu,index){
            if(menu.props.groupIndex==self.state.activeGroupIndex){
                subMenuList=menu.props.children;
            }
        })

        return this.renderItemList(subMenuList);
    }

    mainKeyChange(key){
        this.setState({
            activeGroupIndex:key
        })
    }

    renderPanel(){
        let self=this,
            {show, readOnly, className, buttons} = this.props

        let mainMenuList = React.Children.map(this.props.children,function(menu,index){
                return (
                    React.cloneElement(menu,{
                        active: self.state.activeGroupIndex==index,
                        groupIndex: index,
                        readOnly: readOnly,
                        mainKeyChange: self.mainKeyChange.bind(self)
                    })
                );
            }),
            subMenuList = this.renderSubMenuList(mainMenuList);

        return(
            show ? (
                <div className={classnames('ph-filter-selector', buttons? 'ph-filter-selector-buttons':'')}>
                    <div className={classnames('ph-row ph-tabs ph-tabs-vertical', className ? className:'')} >
                        <div className='ph-col ph-col-33 ph-tab-navs' >
                            {mainMenuList}
                        </div>
                        <div className='ph-col ph-tab-bd' >
                            {subMenuList}
                        </div>
                    </div>
                    {this.renderButtons()}
                </div>
            ): null
        )
    }

    render(){
        return this.renderPanel()
    }
}