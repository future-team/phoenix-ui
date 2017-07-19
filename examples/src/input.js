import React, { Component } from "react"

import Input from "phoenix-ui/lib/input"
import Button from "phoenix-ui/lib/button"
import Code from "./code/code"

export default class input extends Component{

    constructor(props,context){

        super(props,context);

        this.state = {
            name: "value和onChange配合使用",
            value: ""
        };
    }

    setValue(key,e){
        let o ={};
        o[key || e.target.name] = e.target.value;
        this.setState(o);
    }

    getValue(){
        this.setState({
            value: this.inputElem.getValueCallback()
        });
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Input</h2>
                <h3 className="comp-type">type(text/search/password)</h3>
                <div className="content">
                    <h3 className="comp-tip">text</h3>
                    <Input placeholder="请输入"/>
                    <Input placeholder="请输入" value="默认值" clear />
                    <Input placeholder="请输入" value="不可编辑的情况" disabled/>
                </div>
                <Code target="input-text" />

                <div className="content">
                    <h3 className="comp-tip">search</h3>
                    <Input type="search" placeholder="请输入" />
                    <Input type="search" placeholder="请输入" value="可清空输入的文字" clear />
                    <Input type="search" placeholder="请输入" value="不可编辑的情况" disabled />
                </div>
                <Code target="input-search" />

                <div className="content">
                    <h3 className="comp-tip">password</h3>
                    <Input type="password" placeholder="请输入" />
                    <Input type="password" value="123456" clear />
                    <Input type="password" value="123456" placeholder="请输入" clear visible />
                </div>
                <Code target="input-password" />

                <h3 className="comp-type">clear 可清除内容</h3>
                <div className="content">
                    <Input type="text" value="123456" clear />
                </div>
                <Code target="input-clear" />

                <h3 className="comp-type">visible 密码可见</h3>
                <div className="content">
                    <Input type="password" value="123456" visible />
                </div>
                <Code target="input-visible" />

                <h3 className="comp-type">error 错误</h3>
                <div className="content">
                    <Input type="text" value="123456" error />
                </div>
                <Code target="input-error" />

                <h3 className="comp-type">phIcon 输入框icon</h3>
                <div className="content">
                    <Input type="text" placeholder="请输入" phIcon="search" />
                    <Input type="search" placeholder="请输入" phIcon="search" />
                    <Input type="text" value="123456" placeholder="请输入" phIcon="search" />
                    <Input type="search" value="123456" placeholder="请输入" phIcon="search" />
                </div>
                <Code target="input-phicon" />

                <h3 className="comp-type">phReg 正则表达式</h3>
                <div className="content">
                    <Input placeholder="6-18位不以数字开头的用户名" phReg={/^[a-zA-Z$_]\w{5,17}$/} />
                    <Input value="123" placeholder="6-18位不以数字开头的用户名" phReg={/^[a-zA-Z$_]\w{5,17}$/} />
                </div>
                <Code target="input-phreg" />

                <h3 className="comp-type">getValueCallback 获取数值</h3>
                <div className="content">
                    <Input placeholder="默认text" ref={(inputElem)=>{this.inputElem = inputElem}} />
                    <div><Button onClick={this.getValue.bind(this)}>点击获取值</Button> <span style={{float:'right'}}>{this.state.value}</span></div>
                </div>
                <Code target="input-getvalue" />
            </div>
        );
    }
}