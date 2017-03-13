import React, { Component } from "react";
import {Input} from "phoenix-ui";
import Code from "./code/code";

export default class input extends Component{

    constructor(props,context){

        super(props,context);

        this.state = {
            name: "value和onChange配合使用",
            checked: true
        };
    }

    setValue(key,e){
        let o ={};
        o[key || e.target.name] = e.target.value;
        this.setState(o);
    }

    onChange(){
        this.setState({
            checked: !this.state.checked
        });
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Input</h2>
                <h3 className="comp-type">type(默认text) 类型</h3>
                <h3 className="comp-type">text 文本框</h3>
                <div className="content">
                    <Input placeholder="默认text" />
                    <Input type="text" defaultValue="默认值defaultValue" placeholder="请输入" />
                    <Input type="text" value={this.state.name} onChange={::this.setValue.bind(this,"name")} placeholder="请输入" />
                </div>
                <Code target="input-text" />

                <h3 className="comp-type">checkbox 多选框</h3>
                <div className="content">
                    <h3 className="comp-tip">默认</h3>
                    <Input type="checkbox" label="苹果" />
                    <h3 className="comp-tip">defaultChecked 初始传值</h3>
                    <Input type="checkbox" label="香蕉" defaultChecked={true} />
                    <h3 className="comp-tip">checked和onChange配合使用</h3>
                    <Input type="checkbox" label="西瓜" checked={this.state.checked} onChange={::this.onChange} />
                </div>
                <Code target="input-checkbox" />

                <h3 className="comp-type">radio 单选框</h3>
                <div className="content">
                    <h3 className="comp-tip">默认</h3>
                    <Input type="radio" label="男" name="sex" />
                    <Input type="radio" label="女" name="sex" />
                </div>
                <Code target="input-radio" />
            </div>
        );
    }
}