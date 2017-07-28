import React, { Component } from "react"

import Textarea from "phoenix-ui/lib/textarea"
import Button from "phoenix-ui/lib/button"
import Code from "./code/code"

export default class textarea extends Component{

    constructor(props,context){

        super(props,context);

        this.state = {
            name:"",
            MAX_LENGTH: 100
        };
    }

    getValue(){
        this.setState({
            value: this.textElem.getValueCallback()
        });
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Textarea</h2>
                <h3 className="comp-type">count(默认false) 是否计字数<br/>count配合maxLength计数</h3>
                <div className="content">
                    <Textarea count maxLength={this.state.MAX_LENGTH} placeholder="请输入..." />
                </div>
                <Code target="textarea-count" />

                <h3 className="comp-type">value 默认值</h3>
                <div className="content">
                    <Textarea value="我是默认值" placeholder="请输入..." />
                </div>
                <Code target="textarea-value" />

                <h3 className="comp-type">disabled 不可输入</h3>
                <div className="content">
                    <Textarea value="我是默认值" count maxLength={this.state.MAX_LENGTH} placeholder="请输入..." disabled/>
                </div>
                <Code target="textarea-disabled" />

                <h3 className="comp-type">getValueCallback 获取数值</h3>
                <div className="content">
                    <Textarea placeholder="默认text" ref={(textElem)=>{this.textElem = textElem}} />
                    <div><Button onClick={this.getValue.bind(this)}>点击获取值</Button> <span style={{float:'right'}}>{this.state.value}</span></div>
                </div>
                <Code target="textarea-getvalue" />
            </div>
        );
    }
}