import React, { Component } from "react"

import Prompt from "phoenix-ui/lib/modal/Prompt"
import Button from "phoenix-ui/lib/button"
import Code from "./code/code"

export default class prompt extends Component{

    constructor(props,context){
        super(props,context); 

        this.state = {
            visible1: false,
            visible2: false,
            visible3: false,
            visible4: false,
            inputName: "",
            inputPassword: ""
        }
    }

    closeCallback(key){
        let o = {};
        o[key] = false;
        this.setState(o);
    }

    confirmCallback(valueArr){ // 返回input值的数组
        console.log(valueArr);
        this.closeCallback('visible2');
    }

    render(){
        const buttons = [
             // text默认"确定", phStyle默认primary，onHandle默认closeCallback, otherProps传按钮的属性
            {text: "取消", phStyle: "gray", otherProps: {hollow: true}, onHandle: this.confirmCallback.bind(this)}, 
            {text: "提交", onHandle: this.confirmCallback.bind(this)}
        ];
        const inputs = [ 
            // type默认text，其他属性可选，按照正常输入; 
            {value: "hah", placeholder: "用户名", maxLength: 10},
            {type: "password", placeholder: "密码"}
        ];

        return(
            <div>
                <h2 className="comp-title">Prompt</h2>
                <h3 className="comp-type">title 定义标题; content 定义内容</h3>
                <div className="content">
                    <h3 className="comp-tip">默认有[取消, 确定]2个按钮，点击[取消]默认的执行函数是直接关闭，点击[确定]通过传入的confirmCallback函数可获取input的value数组，可自行添加回调。</h3>
                    <Button radius phSize="lg" onClick={()=>{this.setState({visible1:true})}}>Prompt默认状态</Button>
                </div>
                <Prompt visible={this.state.visible1} closeCallback={this.closeCallback.bind(this,"visible1")} title="这是标题" content="这里是弹出框的内容..." 
                    confirmCallback={(inputValue)=>{ console.log(inputValue); this.closeCallback("visible1"); }} />
                <Code target="prompt" />

                <h3 className="comp-type">buttons 定义尾部按钮</h3>
                <div className="content">
                    <Button radius phSize="lg" onClick={()=>{this.setState({visible2:true})}}>自定义按钮buttons</Button>
                </div>
                <Prompt visible={this.state.visible2} closeCallback={this.closeCallback.bind(this,"visible2")} title="这是标题" content="这里是弹出框的内容..." buttons={buttons} />
                <Code target="prompt-buttons" />
     
                <h3 className="comp-type">inputs 定义内容区域文本框</h3>
                <div className="content">
                    <Button radius phSize="lg" onClick={()=>{this.setState({visible3:true})}}>自定义inputs</Button>
                </div>
                <Prompt visible={this.state.visible3} closeCallback={this.closeCallback.bind(this,"visible3")} title="这是标题" content="这里是弹出框的内容..." inputs={inputs} 
                    confirmCallback={(inputValue)=>{ console.log(inputValue); this.closeCallback("visible3"); }} />
                <Code target="prompt-inputs" />

                <h3 className="comp-type">其他属性(visible、closeCallback、closeButton、shadowDisabled)参照<a href="#/dialog">Dialog</a>组件</h3>
                <div className="content">
                    <Button radius phSize="lg" onClick={()=>{this.setState({visible4:true})}}>完整案例</Button>
                </div>
                <Prompt visible={this.state.visible4} closeCallback={this.closeCallback.bind(this,"visible4")} closeButton shadowDisabled
                    title="这是标题" content="这里是弹出框的内容..." confirmCallback={(inputValue)=>{ console.log(inputValue); this.closeCallback("visible4"); }}  />
                <Code target="prompt-whole" />
            </div>
        );
    }
}