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
                    <Input placeholder="placeholder"/>
                    <Input type="text" value="默认值" placeholder="placeholder" clear />
                    <Input placeholder="请输入" value="不可编辑的情况" disabled/>
                </div>
                <Code target="input-text" />

                <div className="content">
                    <h3 className="comp-tip">search</h3>
                    <Input type="search" placeholder="请输入" />
                    <Input type="search" placeholder="请输入" phIcon="search" />
                    <Input type="search" placeholder="请输入" value="可清空输入的文字" phIcon="search" clear />
                    <Input type="search" placeholder="请输入" value="不可编辑的情况" phIcon="search" disabled />
                </div>
                <Code target="input-search" />

                <div className="content">
                    <h3 className="comp-tip">password</h3>
                    <Input type="password" defaultValue="123456" seePassword />
                    <Input type="password" value="123456" placeholder="请输入" clear seePassword />
                </div>
                <Code target="input-password" />

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