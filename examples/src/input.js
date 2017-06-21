import React, { Component } from "react";
import {Input,Button} from "phoenix-ui";
import Code from "./code/code";

export default class input extends Component{

    constructor(props,context){

        super(props,context);

        this.state = {
            name: "value和onChange配合使用",
            value: "",
            checkboxChecked: true,
            radioChecked: true
        };
    }

    setValue(key,e){
        let o ={};
        o[key || e.target.name] = e.target.value;
        this.setState(o);
    }

    onCheckboxChange(){
        this.setState({
            checkboxChecked: !this.state.checkboxChecked
        });
    }

    onRadioChange(){
        this.setState({
            radioChecked: !this.state.radioChecked
        });
    }

    onClear(key){
        let o ={};
        o[key] = '';
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
                <h3 className="comp-type">输入框(text/search/password)</h3>
                <div className="content">
                    <h3 className="comp-tip">text</h3>
                    <Input placeholder="placeholder"/>
                    <Input type="text" defaultValue="defaultValue" placeholder="placeholder" />
                    <Input type="text" value="value" placeholder="placeholder" clear />
                    <Input placeholder="placeholder-disabled" disabled/>
                    <Input type="text" value="value-disabled" placeholder="请输入" disabled />
                    <h3 className="comp-tip">search</h3>
                    <Input type="search" placeholder="placeholder" clear />
                    <Input type="search" placeholder="placeholder" phIcon="search" clear />
                    <Input type="search" placeholder="placeholder" value="value" phIcon="search" clear />
                    <Input type="search" placeholder="placeholder-disabled" phIcon="search" clear disabled />
                    <Input type="search" placeholder="默认text" value="value-disabled" phIcon="search" clear disabled />
                    <h3 className="comp-tip">password</h3>
                    <Input type="password" defaultValue="123456" seePassword />
                    <Input type="password" value='123456' placeholder="请输入" clear seePassword />
                </div>
                <Code target="input-text" />

                <h3 className="comp-type">getValueCallback 获取数值</h3>
                <div className="content">
                    <Input placeholder="默认text" ref={(inputElem)=>{this.inputElem = inputElem}} />
                    <div><Button onClick={this.getValue.bind(this)}>点击获取值</Button> <span style={{float:'right'}}>{this.state.value}</span></div>
                </div>
                <Code target="input-text" />

                <h3 className="comp-type">复选框 checkbox</h3>
                <div className="content">
                    <h3 className="comp-tip">默认</h3>
                    <Input type="checkbox" label="苹果"/>
                    <h3 className="comp-tip">defaultChecked 初始传值</h3>
                    <Input type="checkbox" label="香蕉" defaultChecked={true} />
                    <h3 className="comp-tip">checked和onChange配合使用</h3>
                    <Input type="checkbox" label="西瓜" checked={this.state.checkboxChecked} onChange={::this.onCheckboxChange} />
                    <h3 className="comp-tip">disabled</h3>
                    <Input type="checkbox" label="西瓜" disabled/>
                </div>
                <Code target="input-checkbox" />

                <h3 className="comp-type">单选框 radio</h3>
                <div className="content">
                    <h3 className="comp-tip">默认</h3>
                    <Input type="radio" label="男" name="sex1" />
                    <Input type="radio" label="女" name="sex1" />
                    <h3 className="comp-tip">defaultChecked 初始传值</h3>
                    <Input type="radio" label="男" name="sex2" defaultChecked={true}/>
                    <Input type="radio" label="女" name="sex2"/>
                    <h3 className="comp-tip">checked和onChange配合使用</h3>
                    <Input type="radio" label="男" name="sex3" checked={this.state.radioChecked} onChange={::this.onRadioChange}/>
                    <Input type="radio" label="女" name="sex3" checked={!this.state.radioChecked} onChange={::this.onRadioChange}/>
                    <h3 className="comp-tip">disabled</h3>
                    <Input type="radio" label="男" name="sex4" disabled />
                    <Input type="radio" label="女" name="sex4" disabled />
                </div>
                <Code target="input-radio" />
            </div>
        );
    }
}