import React, { Component ,PropTypes} from 'react'
import classnames from 'classnames'
import PanelBase from './FilterPanelBase.js'

export default class FilterPanel extends PanelBase{
    getActiveGroupIndex(){
        let activeIndex=0,
            selectedKey=this.props.selected.key;
        if(selectedKey){
            React.Children.map(this.props.children,function(mainMenu,mainIndex){
                React.Children.map(mainMenu.props.children,function(subMenu,subIndex){
                    if(subMenu.props.itemKey==selectedKey){
                        activeIndex=mainIndex;
                    }
                })
            })
        }
        return activeIndex;
    }

    constructor(props,context){
        super(props,context);
        this.state={
            activeGroupIndex:this.getActiveGroupIndex()
        };
    }

    renderSubMenuList(mainMenuList){
        var subMenuList=[],
            self=this;
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
        });
    }

    render(){
        let self=this,
            mainMenuList=React.Children.map(this.props.children,function(menu,index){
                return (
                    React.cloneElement(menu,{
                        active:self.state.activeGroupIndex==index,
                        groupIndex:index,
                        readOnly:self.props.readOnly,
                        mainKeyChange:self.mainKeyChange.bind(self)
                    })
                );
            }),
            subMenuList=this.renderSubMenuList(mainMenuList);

        return(
            this.props.show?(
                <div className='ph-filter-selector'>
                    <div className={classnames('ph-row ph-tabs ph-tabs-vertical', this.props.className ? this.props.className:'')} >
                        <div className="ph-col ph-col-33 ph-tab-navs" >
                            {mainMenuList}
                        </div>
                        <div className='ph-col ph-tab-bd' >
                            {subMenuList}
                        </div>
                    </div>
                </div>
            ): null

        )
    }
}