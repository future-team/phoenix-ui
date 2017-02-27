import React, { Component } from "react";
import classnames from "classnames";
import {Menu, Button} from "phoenix-ui";
import Code from "./code/code";

export default class menu extends Component{

    constructor(props,context){
        super(props,context);

        this.state = {
            visible: false,
            placement: 'top',
            align: 'left',
            width: 40,
            closeButton: false
        }
    }

    onChange(visible){
        console.log(visible);
    }

    onClose(){
        this.setState({
            visible: false
        });
    }

    switchAlign(){
        let newAlign = "left";

        if(this.state.align == "left") newAlign="right";

        this.setState({
            align: newAlign
        });
    }

    switchVisible(){
        this.setState({
            visible: !this.state.visible
        });
    }

    switchPlacement(){
        this.setState({
            placement: "left"
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

    render(){
        return(
            <div>
                <Menu visible={this.state.visible} scrollCeiling={100} onChange={::this.onChange}>
                    <Menu.Header align={this.state.align}>Phoenix</Menu.Header>
                    <Menu.Body width={this.state.width} placement={this.state.placement} closeButton={this.state.closeButton}>
                        <ul className="ph-popup-list">
                            <li className="ph-popup-item" onClick={::this.onClose}>首页</li>
                            <li className="ph-popup-item" onClick={::this.onClose}>项目</li>
                            <li className="ph-popup-item" onClick={::this.onClose}>作品</li>
                            <li className="ph-popup-item" onClick={::this.onClose}>关于</li>
                        </ul>
                    </Menu.Body>
                </Menu>

                <h2 className="comp-title">Menu</h2>
                <h3 className="comp-type">Menu属性</h3>
                <h3 className="comp-type">visible(默认false) 初始可见值</h3>
                <div className="content">
                    <Button onClick={::this.switchVisible}>切换visible值:默认false</Button>
                </div>
                <Code target="menu-visible" />

                <h3 className="comp-type">scrollCeiling 滚动吸顶的距离，默认不吸顶</h3>
                <h3 className="comp-tip">当前设置为100</h3>
                <Code target="menu-scrollceiling" />

                <h3 className="comp-type">onChange 菜单展开收起的回调函数</h3>
                <Code target="menu-onchange" />

                <h3 className="comp-type">MenuHeader属性</h3>
                <h3 className="comp-type">align(默认left) 菜单按钮的位置</h3>
                <div className="content">
                    <Button onClick={::this.switchAlign}>切换align值:默认left</Button>
                </div>
                <Code target="menu-header-align" />

                <h3 className="comp-type">MenuBody属性</h3>
                <h3 className="comp-type">placement(默认top) 菜单的位置</h3>
                <div className="content">
                    <Button onClick={::this.switchPlacement}>改变placement值:top->left</Button>
                </div>
                <Code target="menu-body-placement" />

                <h3 className="comp-type">width 侧边菜单的宽度</h3>
                <div className="content">
                    <Button onClick={::this.switchWidth}>改变width值:40->50</Button>
                </div>
                <Code target="menu-body-width" />

                <h3 className="comp-type">closeButton 菜单主体的关闭按钮是否显示</h3>
                <div className="content">
                    <Button onClick={::this.switchCloseButton}>切换closeButton值:默认false</Button>
                </div>
                <Code target="menu-body-closebutton" />
            </div>
        );
    }
}