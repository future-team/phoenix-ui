import React, { Component } from "react";
import {Prompt, Button} from "phoenix-ui";
import Code from "./code/code";

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

    onClose(key){
        let o = {};
        o[key] = false;
        this.setState(o);
    }

    onConfirm(valueArr){ // 返回input值的数组
        console.log(valueArr);
        this.onClose('visible2');
    }

    onUserNameChange(userName){
        console.log(userName);
    }

    onPasswordChange(password){
        console.log(password);
    }

    render(){
        const buttons = [
             // text默认"确定", phStyle默认primary，onHandle默认onClose, otherProps传按钮的属性
            {text: "取消", phStyle: "gray", otherProps: {hollow: true}, onHandle: this.onConfirm.bind(this)}, 
            {text: "提交", onHandle: this.onConfirm.bind(this)}
        ];
        const inputs = [ 
            // type默认text，其他属性可选，按照正常输入; 
            {defaultValue: "hah", placeholder: "用户名", maxLength: 10, onChange: this.onUserNameChange.bind(this)},
            {type: "password", placeholder: "密码", onChange: this.onPasswordChange.bind(this)}
        ];

        return(
            <div>
                <h2 className="comp-title">Prompt</h2>
                <h3 className="comp-type">title 定义标题; content 定义内容</h3>
                <div className="content">
                    <h3 className="comp-tip">默认有[取消, 确定]2个按钮，点击[取消]默认的执行函数是直接关闭，点击[确定]通过传入的onConfirm函数可获取input的value数组，可自行添加回调。</h3>
                    <Button radius phSize="lg" onClick={()=>{this.setState({visible1:true})}}>Prompt默认状态</Button>
                </div>
                <Prompt visible={this.state.visible1} onClose={::this.onClose.bind(this,"visible1")} title="这是标题" content="这里是弹出框的内容..." 
                    onConfirm={(inputValue)=>{ console.log(inputValue); this.onClose("visible1"); }} />
                <Code target="prompt" />

                <h3 className="comp-type">buttons 定义尾部按钮</h3>
                <div className="content">
                    <Button radius phSize="lg" onClick={()=>{this.setState({visible2:true})}}>自定义按钮buttons</Button>
                </div>
                <Prompt visible={this.state.visible2} onClose={::this.onClose.bind(this,"visible2")} title="这是标题" content="这里是弹出框的内容..." buttons={buttons} />
                <Code target="prompt-buttons" />
     
                <h3 className="comp-type">inputs 定义内容区域文本框</h3>
                <div className="content">
                    <Button radius phSize="lg" onClick={()=>{this.setState({visible3:true})}}>自定义inputs</Button>
                </div>
                <Prompt visible={this.state.visible3} onClose={::this.onClose.bind(this,"visible3")} title="这是标题" content="这里是弹出框的内容..." inputs={inputs} 
                    onConfirm={(inputValue)=>{ console.log(inputValue); this.onClose("visible3"); }} />
                <Code target="prompt-inputs" />

                <h3 className="comp-type">其他属性(visible、onClose、closeButton、shadowDisabled)参照<a href="#/dialog">Dialog</a>组件</h3>
                <div className="content">
                    <Button radius phSize="lg" onClick={()=>{this.setState({visible4:true})}}>完整案例</Button>
                </div>
                <Prompt visible={this.state.visible4} onClose={::this.onClose.bind(this,"visible4")} closeButton shadowDisabled
                    title="这是标题" content="这里是弹出框的内容..." onConfirm={(inputValue)=>{ console.log(inputValue); this.onClose("visible4"); }}  />
                <Code target="prompt-whole" />
            </div>
        );
    }
}