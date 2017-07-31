import React, { Component } from "react"

import Alert from "phoenix-ui/lib/modal/Alert"
import Button from "phoenix-ui/lib/button"
import Code from "./code/code";

export default class alert extends Component{

    constructor(props,context){
        super(props,context); 

        this.state = {
            visible1: false,
            visible2: false,
            visible3: false,
            visible4: false
        }
    }

    closeCallback(key){
        let o = {};
        o[key] = false;
        this.setState(o);
    }

    confirmCallback(key){
        this.closeCallback(key);
    }

    render(){
        const buttons1 = [
            // text默认"确定", phStyle默认primary，onHandle默认closeCallback, otherProps传按钮的属性
            {text: "取消", phStyle: "gray", otherProps: {hollow: true}}, 
            {onHandle: this.confirmCallback.bind(this,"visible2")}
        ],
            buttons2 = [
            {text: "按钮一", otherProps: {hollow: true}},
            {text: "按钮二", otherProps: {hollow: true}},
            {text: "按钮三", otherProps: {hollow: true}}
        ],
        buttons3 = [
            {text: "取消", phStyle: "gray", otherProps: {hollow: true}}, 
            {onHandle: this.confirmCallback.bind(this,"visible4")}
        ]
        const content = <p>这里是弹出框的内容...</p>;

        return(
            <div>
                <h2 className="comp-title">Alert</h2>
                <h3 className="comp-type">title 定义标题; content 定义内容</h3>
                <div className="content">
                    <Button radius phSize="lg" onClick={()=>{this.setState({visible1:true})}}>alert默认状态</Button>
                </div>
                <Alert visible={this.state.visible1} closeCallback={this.closeCallback.bind(this,"visible1")} title="这是标题" content={content} />
                <Code target="alert" />

                <h3 className="comp-type">buttons 定义尾部按钮</h3>
                <div className="content">
                    <h3 className="comp-tip">2个按钮</h3>
                    <Button radius phSize="lg" onClick={()=>{this.setState({visible2:true})}}>自定义按钮buttons</Button>
                    <h3 className="comp-tip">多个按钮</h3>
                    <Button radius phSize="lg" onClick={()=>{this.setState({visible3:true})}}>自定义按钮buttons</Button>
                </div>
                <Alert visible={this.state.visible2} closeCallback={this.closeCallback.bind(this,"visible2")} title="这是标题" content="这里是弹出框的内容..." buttons={buttons1} />
                <Alert visible={this.state.visible3} closeCallback={this.closeCallback.bind(this,"visible3")} title="这是标题" content="这里是弹出框的内容..." buttons={buttons2} />
                <Code target="alert-buttons" />

                <h3 className="comp-type">其他属性(visible、closeCallback、closeButton、shadowDisabled)参照<a href="#/dialog">Dialog</a>组件</h3>
                <div className="content">
                    <Button radius phSize="lg" onClick={()=>{this.setState({visible4:true})}}>完整案例</Button>
                </div>
                <Alert visible={this.state.visible4} closeCallback={this.closeCallback.bind(this,"visible4")} closeButton shadowDisabled
                    title="这是标题" content="这里是弹出框的内容..." buttons={buttons3} />
                <Code target="alert-whole" />
            </div>
        );
    }
}