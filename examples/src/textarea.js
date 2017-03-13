import React, { Component } from "react";
import {Textarea} from "phoenix-ui";
import Code from "./code/code";

export default class textarea extends Component{

    constructor(props,context){

        super(props,context);

        this.state = {
            name:"默认值defaultValue",
            words: "value和onChange配合使用",
            MAX_LENGTH: 100
        };
    }

    setValue(key,e){
        let o ={};
        o[key || e.target.name] = e.target.value;
        this.setState(o);
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Textarea</h2>
                <h3 className="comp-type">count(默认false) 是否计字数</h3>
                <div className="content">
                    <h3 className="comp-tip">默认不计数</h3>
                    <Textarea placeholder="请输入..." />
                    <h3 className="comp-tip">count配合maxLength计数</h3>
                    <Textarea count maxLength={this.state.MAX_LENGTH} placeholder="请输入..." />
                </div>
                <Code target="textarea-count" />

                <div className="content">
                    <h3 className="comp-tip">defaultValue 默认值</h3>
                    <Textarea defaultValue={this.state.name} placeholder="请输入..." />
                    <h3 className="comp-tip">value和onChange配合使用</h3>
                    <Textarea value={this.state.words} onChange={this.setValue.bind(this,"words")} placeholder="请输入..." />
                </div>
                <Code target="textarea" />
            </div>
        );
    }
}