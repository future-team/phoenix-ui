import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {transToArray} from '../../utils/Tool'

import Item from './FilterItem'
import ButtonGroup from '../../button-group'
import Button from '../../button'

/**
 * 多选面板<br/>
 * - 可通过selected设置选中的项目，格式如`{key:'ljz',value:'陆家嘴'}`。
 * - 可通过default设置没有选项时的默认显示文字。
 * - 可通过readOnly设置当前面板是否为只读模式。
 * - 可通过buttons设置底部按钮组的样式、文字、回调等，格式如`[{text:'取消', phStyle:'info', onHandle:this.cancelChoose.bind(this), close:true, otherProps: {hollow:true}}]`。
 * - 可通过clickCallBack设置点击显隐panel的回调。
 * - 可通过checkAll设置是否显示全选，默认显示。
 * - 可通过type来判断当前的模式是否简单。
 * 
 * 主要属性和接口：
 * - selected: 默认打开的面板。
 * - default: 是否显示筛选头部。
 * - readOnly: 是否只读。
 * - buttons: 按钮组。
 * - clickCallBack: 点击panel显隐的回调。
 * - checkAll: 是否显示全选。
 * - type: 简单模式。
 * 
 * 如：
 * ```code
 *  const buttons = [
 *      {onHandle: this.onSubmit.bind(this)}
 *  ]
 * ...
 *  <FilterContainer>
 *      <PanelCheckbox readOnly selected={{key:'s_flower,f_bbc',value:'花店,本帮江浙菜'}} buttons={buttons} checkAll={false} clickCallBack={(show)=>{console.log(show)}}>
 *          <ItemGroup mainKey='ms' label={<span style={{color:'red'}}>美食</span>}>
 *              <Item itemKey='f_bbc'>本帮江浙菜</Item>
 *              ...
 *          </ItemGroup>
 *          <ItemGroup mainKey='dy' label='电影'>
 *              <Item itemKey='m_p'>私人影院</Item>
 *              ...
 *          </ItemGroup>
 *          ...
 *      </PanelCheckbox>
 *  </FilterContainer>
 * 或
 * <FilterContainer>
 *      <PanelCheckbox readOnly selected={{key:'s_flower,f_bbc',value:'花店,本帮江浙菜'}} buttons={buttons} type='simple'>
 *          <Item itemKey='f_bbc'>本帮江浙菜</Item>
 *          ...
 *      </PanelCheckbox>
 *  </FilterContainer>
 * ```
 *
 * @class FilterPanelCheckbox
 * @module 筛选控件
 * @extends Component
 * @constructor
 * @since 2.2.0
 * @demo ph-filter|ph-filter.js {展示}
 * @show true
 * */
export default class FilterPanelCheckbox extends Component{
    constructor(props,context){
        super(props,context);

        this.choose = this.dealWithSelected(props)
        this.nameList = {}

        this.state={
            activeGroupIndex: props.index,
            allChecked: {},
            itemChecked: {},
            itemDisabled: {},
            selected: this.dealWithSelected(props),
            selectedName: this.dealWithSelected(props, 'value')
        };
    }

    static propTypes= {
        /**
         * panel下选中的item的key、value组成的对象，用于设置该panel初始状态下选中的item项
         * @property selected
         * @type Object 如{key:'ljz,xjh',value:'陆家嘴,徐家汇'}
         * */
        selected: PropTypes.shape({
            key: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
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
         * 是否可以全选
         * @property checkAll
         * @type Boolean
         * @default true
         * */
        checkAll: PropTypes.bool
    }

    static defaultProps = {
        selected: {},
        checkAll: true
    }

    componentWillReceiveProps(nextProps){
        if(this.state.selected !== this.dealWithSelected(nextProps)){
            this.setState({
                selected: this.dealWithSelected(nextProps),
                selectedName: this.dealWithSelected(nextProps, 'value')
            })
        }
    }

    dealWithSelected(props, param){
        let key = param || 'key'
        if(props.selected && props.selected[key]) return transToArray(props.selected[key])
        else return []
    }

    deleteFromArray(val){
        let {selected, selectedName} = this.state,
            _index = selected.indexOf(val)

        if(_index>-1){
            selected.splice(_index, 1)
            selectedName.splice(_index, 1)
        }
    }
 
    mainKeyChange(key){
        this.setState({
            activeGroupIndex: key
        });
    }

    onAllItemChange(mainKey, itemKey, name, e){
        let {selected, selectedName, allChecked, itemChecked} = this.state
        
        allChecked[mainKey] = e.target.checked
        // 全选或全不选
        for(let i in itemChecked[mainKey]){
            itemChecked[mainKey][i] = e.target.checked

            if(e.target.checked){ // 全选
                if(selected.indexOf(i)==-1 && !this.state.itemDisabled[mainKey][i]){
                    selected.push(i.toString())
                    selectedName.push(this.nameList[mainKey][i])
                }
            }else{ // 全不选
                this.deleteFromArray(i)
            }
        }
        
        this.setState({
            allChecked: allChecked,
            itemChecked: itemChecked
        });

        // if(this.props.getChooseData) this.props.getChooseData(choose.join());
    }

    onItemChange(mainKey, itemKey, name, e){
        let {selected, selectedName, allChecked, itemChecked, itemDisabled} = this.state

        itemChecked[mainKey][itemKey] = e.target.checked
        
        if(!e.target.checked){ // 其中一个不选时去掉全选
            allChecked[mainKey] = false;
            this.deleteFromArray(itemKey.toString())
        }

        if(e.target.checked){
            let count = true;
            if(selected.indexOf(itemKey)==-1){
                selected.push(itemKey.toString())
                selectedName.push(name)
            }
            for(let i in itemChecked[mainKey]){
                if(!itemChecked[mainKey][i] && !itemDisabled[mainKey][i]){
                    count = false;
                    break;
                }
            }
            if(count) allChecked[mainKey] = true;
        }
        
        this.setState({
            allChecked: allChecked,
            itemChecked: itemChecked
        });

        // if(this.props.getChooseData) this.props.getChooseData(selected.join());
    }

    renderMainMenuList(){
        let self = this;
        
        return React.Children.map(this.props.children,function(menu,index){
            return (
                React.cloneElement(menu,{
                    active:self.state.activeGroupIndex==index,
                    groupIndex:index,
                    readOnly:self.props.readOnly,
                    mainKeyChange:self.mainKeyChange.bind(self)
                })
            );
        })
    }

    renderSubMenuList(mainMenuList){
        let {selected} = this.state,
            {itemChecked, itemDisabled} = this.state;
        var mainMenu, self=this, {checkAll} = this.props;

        mainMenu = React.Children.map(mainMenuList,function(menu){
            let mainKey = menu.props.mainKey || 0;
            
            if(menu.props.groupIndex==self.state.activeGroupIndex){
                return self.renderSubMenuCore(menu.props.children, selected, mainKey);
            }
        });

        return mainMenu;
    }

    renderExtra(showExtra, selected){
        let newExtra = showExtra,
            numElem = ` <i>${selected.length}</i> `
        
        if(showExtra){
            if(showExtra.indexOf('#')!=-1){
                newExtra = <span dangerouslySetInnerHTML={{__html: showExtra.replace('#', numElem)}}></span>
            }
        }
        return newExtra
    }

    renderButtons(){
        let {buttons, panelIndex, showExtra} = this.props,
            {selected, selectedName} = this.state,
            self = this
        console.log('>>selected' ,selected)
        return buttons? (
            <ButtonGroup phType='footer' extra={this.renderExtra(showExtra, selected)}>
                {
                    buttons.map((button, index)=>{
                        return (
                            <Button key={index} {...button.otherProps} phSize='lg' phStyle={button.phStyle || 'primary'}
                                onClick={()=>{
                                    if(button.onHandle){
                                        button.onHandle(selected.join(), selectedName.join())
                                        if(button.close) self.props.categoryChange(panelIndex, {key:selected.join(), value: selectedName.join()})
                                    }
                                }
                            }>
                                {button.text || '确定'}
                            </Button>
                        )
                    })
                }
            </ButtonGroup>
        ): null
    }

    renderMenuList(){
        let {selected} = this.state,
            menuList = this.renderSubMenuCore(this.props.children, selected, 0)
        return menuList
    }

    renderSubMenuCore(children, selected, mainKey){
        let {itemChecked, itemDisabled, allChecked} = this.state,
            {checkAll} = this.props
        let subMenu = [], checkedCount = 0, disabledCount = 0, sum = 0, self = this

        React.Children.map(children,function(item){
            let key = item.props.itemKey, disabled = item.props.disabled
            
            itemChecked[mainKey] = itemChecked[mainKey] || {}
            itemDisabled[mainKey] = itemDisabled[mainKey] || {}
            self.nameList[mainKey] = self.nameList[mainKey] || {}

            if(itemChecked[mainKey][key]==undefined || self.choose != selected){ // 兼容通过请求获取choose的情况
                itemChecked[mainKey][key] = selected.indexOf(key.toString())!=-1
            } 
            if(itemDisabled[mainKey][key]==undefined || self.choose != selected){
                itemDisabled[mainKey][key] = disabled
            }
            if(self.nameList[mainKey][key]==undefined || self.choose != selected){
                self.nameList[mainKey][key] = item.props.children
            }
            
            if(itemChecked[mainKey][key] && !disabled) checkedCount++
            if(disabled){
                // self.deleteFromArray(key.toString()) // 当选中项中存在disabled时，不从已选中的数组中移除
                disabledCount++
            } 
            sum ++
            
            subMenu.push(React.cloneElement(item,{
                active:false,
                readOnly:self.props.readOnly,
                categoryChange:self.props.categoryChange,
                panelIndex:self.props.panelIndex,
                // new props
                checked: itemChecked[mainKey][key],
                // selected:self.props.selected,
                filterType: 'checkbox',
                mainKey: mainKey,
                onItemChange:self.onItemChange.bind(self)
            }));
        });
        
        // new一个全部的elemecontext
        if(allChecked[mainKey]==undefined || self.choose != selected){
            if(checkedCount+disabledCount==sum) allChecked[mainKey] = true
            else allChecked[mainKey] = false
        }
        
        if(checkAll) subMenu.unshift(<Item active={false} key={mainKey} itemKey={mainKey} mainKey={mainKey} disabled={disabledCount==sum}
            filterType='checkbox' checked={allChecked[mainKey]} 
            onItemChange={self.onAllItemChange.bind(self)}>全部</Item>)

        return subMenu
    }

    isSimple(){
        let {type} = this.props
        return type=='simple'
    }

    renderSimpleMenu(className){
        let menuList = this.renderMenuList()

        return (
            <div className={classnames('ph-row ph-tabs ph-tabs-vertical', className)} >
                <div className='ph-col ph-tab-bd'>{menuList}</div>
            </div>
        )
    }

    renderMenu(className){
        let mainMenuList = this.renderMainMenuList(),
            subMenuList = this.renderSubMenuList(mainMenuList)

        return (
            <div className={classnames('ph-row ph-tabs ph-tabs-vertical', className)} >
                <div className='ph-col ph-col-33 ph-tab-navs'>{mainMenuList}</div>
                <div className='ph-col ph-tab-bd'>{subMenuList}</div>
            </div>
        )
    }

    render(){
        let {className, buttons, show, type, children} = this.props
        
        return show? (
            <div className={classnames('ph-filter-selector', buttons? 'ph-filter-selector-buttons':'')}>
                {this.isSimple()? this.renderSimpleMenu(className) : this.renderMenu(className)}
                {this.renderButtons()}
            </div>
        ): null
    }
}