import React, { Component ,PropTypes} from 'react'
import classnames from 'classnames'
import {transToArray} from '../../utils/Tool'

import Item from './FilterItem'
import ButtonGroup from '../../button-group'
import Button from '../../button'

export default class FilterPanelCheckbox extends Component{
    
    static defaulrProps = {};

    constructor(props,context){
        super(props,context);

        this.init = 0
        this.choose = props.choose

        this.state={
            activeGroupIndex: props.index,
            allChecked: {},
            itemChecked: {},
            itemDisabled: {}
        };
    }

    deleteFromArray(val){
        let {choose} = this.props, _index = choose.indexOf(val);

        if(_index>-1){
            choose.splice(_index, 1);
        }
    }
 
    mainKeyChange(key){
        this.setState({
            activeGroupIndex: key
        });
    }

    onAllItemChange(mainKey, itemKey, e){
        let {choose} = this.props;
        let allChecked = this.state.allChecked, 
            itemChecked = this.state.itemChecked;
        
        allChecked[mainKey] = e.target.checked;
        // 全选或全不选
        for(let i in itemChecked[mainKey]){
            itemChecked[mainKey][i] = e.target.checked;

            if(e.target.checked){ // 全选
                if(choose.indexOf(i)==-1 && !this.state.itemDisabled[mainKey][i]) choose.push(i.toString());
            }else{ // 全不选
                this.deleteFromArray(i);
            }
        }
        
        this.setState({
            allChecked: allChecked,
            itemChecked: itemChecked
        });

        this.choosed = choose.join()

        // if(this.props.getChooseData) this.props.getChooseData(choose.join());
    }

    onItemChange(mainKey, itemKey, e){
        let {choose} = this.props;
        let allChecked = this.state.allChecked, 
            itemChecked = this.state.itemChecked;
        
        itemChecked[mainKey][itemKey] = e.target.checked;
        
        if(!e.target.checked){ // 其中一个不选时去掉全选
            allChecked[mainKey] = false;
            this.deleteFromArray(itemKey.toString());
        }

        if(e.target.checked){
            let count = true;
            if(choose.indexOf(itemKey)==-1) choose.push(itemKey.toString())
            for(let i in itemChecked[mainKey]){
                if(!itemChecked[mainKey][i] && !this.state.itemDisabled[mainKey][i]){
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

        this.choosed = choose.join()

        // if(this.props.getChooseData) this.props.getChooseData(choose.join());
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
        let {choose} = this.props;
        var mainMenu, self=this;

        mainMenu = React.Children.map(mainMenuList,function(menu){
            let mainKey = menu.props.mainKey;
            
            if(menu.props.groupIndex==self.state.activeGroupIndex){
                let subMenu = [], checkedCount = 0, disabledCount = 0, sum = 0;

                React.Children.map(menu.props.children,function(item){
                    let key = item.props.itemKey, disabled = item.props.disabled;
                    
                    self.state.itemChecked[mainKey] = self.state.itemChecked[mainKey] || {};
                    self.state.itemDisabled[mainKey] = self.state.itemDisabled[mainKey] || {};

                    if(self.state.itemChecked[mainKey][key]==undefined || self.choose != choose){ // 兼容通过请求获取choose的情况
                        self.state.itemChecked[mainKey][key] = choose.indexOf(key.toString())!=-1;
                    } 
                    if(self.state.itemDisabled[mainKey][key]==undefined || self.choose != choose){
                        self.state.itemDisabled[mainKey][key] = disabled;
                    } 
                    
                    if(self.state.itemChecked[mainKey][key]) checkedCount++;
                    if(disabled){
                        self.deleteFromArray(key.toString());
                        disabledCount++;
                    } 
                    sum ++;
                    
                    subMenu.push(React.cloneElement(item,{
                        active:false,
                        readOnly:self.props.readOnly,
                        categoryChange:self.props.categoryChange,
                        panelIndex:self.props.panelIndex,
                        // new props
                        checked: self.state.itemChecked[mainKey][key],
                        choose:self.props.choose,
                        filterType: 'checkbox',
                        mainKey: mainKey,
                        onItemChange:self.onItemChange.bind(self)
                    }));
                });
                
                // new一个全部的elemecontext
                if(self.state.allChecked[mainKey]==undefined || self.choose != choose){
                    if(checkedCount+disabledCount==sum) self.state.allChecked[mainKey] = true;
                    else self.state.allChecked[mainKey] = false;
                }
                
                subMenu.unshift(<Item active={false} key={mainKey} itemKey={mainKey} mainKey={mainKey} disabled={disabledCount==sum}
                    filterType='checkbox' choose={self.props.choose} checked={self.state.allChecked[mainKey]} 
                    onItemChange={self.onAllItemChange.bind(self)}>全部</Item>);

                return subMenu;
            }

        });
        self.init = 1;

        this.choosed = choose.join()
        // console.log(this.props.choose.join());
        return mainMenu;
    }

    renderButtons(){
        let {buttons} = this.props
        
        return buttons? (
            <ButtonGroup phType='footer'>
                {
                    buttons.map((button, index)=>{
                        return (
                            <Button key={index} {...button.otherProps} phSize='lg' phStyle={button.phStyle || 'primary'}
                                onClick={()=>{
                                    if(button.onHandle){
                                        button.onHandle(this.choosed)
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

    render(){
        let {className, buttons} = this.props,
            mainMenuList = this.renderMainMenuList(),
            subMenuList = this.renderSubMenuList(mainMenuList);

        return(
            <div className={classnames('ph-filter-selector', buttons? 'ph-filter-selector-buttons':'')}>
                <div className={classnames('ph-row ph-tabs ph-tabs-vertical', className ? className:'')} >
                    <div className='ph-col ph-col-33 ph-tab-navs'>
                        {mainMenuList}
                    </div>
                    <div className='ph-col ph-tab-bd'>
                        {subMenuList}
                    </div>
                </div>
                {this.renderButtons()}
            </div>
        )
    }
}