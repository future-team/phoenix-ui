import React, { Component } from "react"
import classnames from "classnames";

import Menu from "phoenix-ui/lib/menu"
import Button from "phoenix-ui/lib/button"
import Icon from "phoenix-ui/lib/icon"
import Code from "./code/code"

export default class menu extends Component{

    constructor(props,context){
        super(props,context);

        this.state = {
            visible: false,
            placement: 'top',
            width: 40,
            closeButton: false,
            activeName: 'index' // 对应router名称
        }
    }

    onMenuChange(visible){
        console.log(visible);
    }

    switchPlacement(){
        this.setState({
            placement: "left-full"
        });
    }

    switchWidth(){
        this.setState({
            width: 50
        });
    }

    switchCloseButton(){
        this.setState({
            closeButton: !this.state.closeButton
        });
    }

    switchActiveName(){
        this.setState({
            activeName: 'setting'
        });
    }
    
    setActiveName(name){
        console.log(name)

        this.setState({
            visible: false // 如果需要点击之后关闭false
        })
    }

    onMenuItemChange(name){
        console.log(name);
    }

    render(){
        // console.log('render', this.state.visible)
        return(
            <div>
                <Menu visible={this.state.visible} ceiling={100} clickCallback={this.onMenuChange.bind(this)}>
                    <Menu.Header ref={(menuHandler)=>{this.menuHandler=menuHandler}}>
                        <span>Phoenix</span>
                    </Menu.Header>
                    <Menu.Body width={this.state.width} 
                        placement={this.state.placement} 
                        closeButton={this.state.closeButton} 
                        getTarget={()=>{return this.menuHandler}}
                        activeName={this.state.activeName} 
                    >
                        <Menu.List clickCallback={this.setActiveName.bind(this)}>
                            <Menu.Item name="index" phIcon="meidianbao-fill">首页</Menu.Item>
                            <Menu.Item name="setting" phIcon="shanghuguanli-fill" href="#menu" clickCallback={this.onMenuItemChange.bind(this)}>设置</Menu.Item>
                        </Menu.List>
                    </Menu.Body>
                </Menu>

                <h2 className="comp-title">Menu</h2>
                <h3 className="comp-type"><strong>Menu属性</strong></h3>
                <h3 className="comp-type">visible(默认false) 初始可见值</h3>
                <Code target="menu-visible" />

                <h3 className="comp-type">ceiling 滚动吸顶的距离，默认不吸顶</h3>
                <div className="content">
                    <h3 className="comp-tip">当前设置为100</h3>
                </div>
                <Code target="menu-ceiling" />

                <h3 className="comp-type">clickCallback 菜单展开收起的回调函数</h3>
                <Code target="menu-onmenuchange" />
                

                <h3 className="comp-type"><strong>MenuBody属性</strong></h3>
                <h3 className="comp-type">getTarget(必须) 返回点击元素</h3>
                <div className="content">
                    <h3 className="comp-tip">当前为MenuHeader</h3>
                </div>

                <h3 className="comp-type">activeName(默认null) 当前导航选中的菜单项</h3>
                <div className="content">
                    <Button onClick={this.switchActiveName.bind(this)}>改变activeName值:index->setting</Button>
                </div>

                <h3 className="comp-type">placement(默认top) 菜单的位置</h3>
                <div className="content">
                    <Button onClick={this.switchPlacement.bind(this)}>改变placement值:top->left-full</Button>
                </div>
                <Code target="menu-body-placement" />

                <h3 className="comp-type">width(默认50) 侧边菜单的宽度</h3>
                <div className="content">
                    <Button onClick={this.switchWidth.bind(this)}>改变width值:40->50</Button>
                </div>
                <Code target="menu-body-width" />

                <h3 className="comp-type">closeButton 菜单主体的关闭按钮是否显示</h3>
                <div className="content">
                    <Button onClick={this.switchCloseButton.bind(this)}>切换closeButton值:默认false</Button>
                </div>
                <Code target="menu-body-closebutton" />


                <h3 className="comp-type"><strong>MenuList属性</strong></h3>
                <h3 className="comp-type">clickCallback 点击菜单项时的回调</h3>
                <Code target="menu-list-onmenulistchange" />


                <h3 className="comp-type"><strong>MenuItem属性</strong></h3>
                <h3 className="comp-type">phIcon(默认无) 菜单项名称前面的符号️类型</h3>
                <Code target="menu-item-phicon" />

                <h3 className="comp-type">name(默认无) 当前导航选中的菜单项</h3>
                <Code target="menu-item-name" />

                <h3 className="comp-type">href(默认无) 菜单项的链接</h3>
                <Code target="menu-item-href" />

                <h3 className="comp-type">clickCallback 点击菜单项时的回调</h3>
                <Code target="menu-item-onmenuitemchange" />

            </div>
        );
    }
}