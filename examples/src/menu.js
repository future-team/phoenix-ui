import React, { Component } from "react"
import classnames from "classnames";

import Menu from "phoenix-ui/lib/menu/Menu"
import Button from "phoenix-ui/lib/button"
import Icon from "phoenix-ui/lib/icon"
import Input from "phoenix-ui/lib/input"
import Code from "./code/code"

export default class menu extends Component{

    constructor(props,context){
        super(props,context);

        this.state = {
            visible: false,
            placement: 'top',
            align: 'left',
            width: 40,
            closeButton: false,
            navAlign: 'top',
            activeName: 'index',
            value: 'ha'
        }
    }

    onMenuChange(visible){
        console.log(visible);
    }

    switchAlign(){
        let newAlign = "left";

        if(this.state.align == "left") newAlign="right";

        this.setState({
            align: newAlign
        });
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

    switchNavAlign(){
        this.setState({
            navAlign: 'center'
        });
    }

    switchActiveName(){
        this.setState({
            activeName: 'menu'
        });
    }

    // 必需
    setActiveName(name){
        this.setState({
            activeName: name,
            visible: false // 如果需要点击之后关闭false
        });
    }

    onMenuItemChange(name){
        console.log(name);
    }

    onInputChange(e){
        this.setState({
            value: e.target.value
        });
    }

    render(){
        return(
            <div>
                <Menu visible={this.state.visible} scrollCeiling={100} onMenuChange={this.onMenuChange.bind(this)}>
                    <Menu.Header align={this.state.align}>Phoenix</Menu.Header>
                    <Menu.Body width={this.state.width} placement={this.state.placement} closeButton={this.state.closeButton}>
                        <Menu.Nav align={this.state.navAlign}>
                            <div>
                                <Input placeholder="自定义部分" value={this.state.value} onChange={this.onInputChange.bind(this)}/>
                            </div>
                            <Menu.List activeName={this.state.activeName} onMenulistChange={this.setActiveName.bind(this)}>
                                <Menu.Item name="index" phIcon="home">首页</Menu.Item>
                                <Menu.Item name="menu" href="#menu" phIcon="menu" onChange={this.onMenuItemChange.bind(this)}>菜单</Menu.Item>
                            </Menu.List>
                        </Menu.Nav>
                    </Menu.Body>
                </Menu>

                <h2 className="comp-title">Menu</h2>
                <h3 className="comp-type"><strong>Menu属性</strong></h3>
                <h3 className="comp-type">visible(默认false) 初始可见值</h3>
                <Code target="menu-visible" />

                <h3 className="comp-type">scrollCeiling 滚动吸顶的距离，默认不吸顶</h3>
                <h3 className="comp-tip">当前设置为100</h3>
                <Code target="menu-scrollceiling" />

                <h3 className="comp-type">onMenuChange 菜单展开收起的回调函数</h3>
                <Code target="menu-onmenuchange" />


                <h3 className="comp-type"><strong>MenuHeader属性</strong></h3>
                <h3 className="comp-type">align(默认left) 菜单按钮的位置</h3>
                <div className="content">
                    <Button onClick={::this.switchAlign}>切换align值:默认left</Button>
                </div>
                <Code target="menu-header-align" />


                <h3 className="comp-type"><strong>MenuBody属性</strong></h3>
                <h3 className="comp-type">placement(默认top) 菜单的位置</h3>
                <div className="content">
                    <Button onClick={::this.switchPlacement}>改变placement值:top->left-full</Button>
                </div>
                <Code target="menu-body-placement" />

                <h3 className="comp-type">width(默认50) 侧边菜单的宽度</h3>
                <div className="content">
                    <Button onClick={::this.switchWidth}>改变width值:40->50</Button>
                </div>
                <Code target="menu-body-width" />

                <h3 className="comp-type">closeButton 菜单主体的关闭按钮是否显示</h3>
                <div className="content">
                    <Button onClick={::this.switchCloseButton}>切换closeButton值:默认false</Button>
                </div>
                <Code target="menu-body-closebutton" />


                <h3 className="comp-type"><strong>MenuNav属性</strong></h3>
                <h3 className="comp-type">align(默认top) 导航的位置</h3>
                <div className="content">
                    <Button onClick={::this.switchNavAlign}>改变align值:top->center</Button>
                </div>
                <Code target="menu-nav-align" />


                <h3 className="comp-type"><strong>MenuList属性</strong></h3>
                <h3 className="comp-type">activeName(默认null) 当前导航选中的菜单项</h3>
                <div className="content">
                    <Button onClick={::this.switchActiveName}>改变activeName值:index->menu</Button>
                </div>
                <Code target="menu-list-onmenulistchange" />

                <h3 className="comp-type">onMenulistChange 点击菜单项时的回调，函数内必需手动更改activeName值</h3>
                <Code target="menu-list-onmenulistchange" />


                <h3 className="comp-type"><strong>MenuItem属性</strong></h3>
                <h3 className="comp-type">phIcon(默认无) 菜单项名称前面的符号️类型</h3>
                <Code target="menu-item-phicon" />

                <h3 className="comp-type">name(默认无) 当前导航选中的菜单项</h3>
                <Code target="menu-item-name" />

                <h3 className="comp-type">href(默认无) 菜单项的链接</h3>
                <Code target="menu-item-href" />

                <h3 className="comp-type">onMenuitemChange 点击菜单项时的回调</h3>
                <Code target="menu-item-onmenuitemchange" />

            </div>
        );
    }
}