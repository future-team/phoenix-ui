import React, { Component } from "react"

import Checkbox from "phoenix-ui/lib/checkbox"
import Button from "phoenix-ui/lib/button"
import Code from "./code/code"

export default class input extends Component{

    constructor(props,context){

        super(props,context);

        this.state = {
            checkboxChecked: true
        };
    }

    onCheckboxChange(){
        this.setState({
            checkboxChecked: !this.state.checkboxChecked
        });
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Checkbox</h2>
                <h3 className="comp-type">defaultChecked 初始传值</h3>
                <div className="content">
                    <Checkbox label="香蕉" defaultChecked={true} id='banana'/>
                </div>
                <Code target="checkbox-default" />

                <h3 className="comp-type">checked和onChange配合使用</h3>
                <div className="content">
                    <Checkbox label="西瓜" checked={this.state.checkboxChecked} onChange={::this.onCheckboxChange} />
                </div>
                <Code target="checkbox-onchange" />

                <h3 className="comp-type">disabled</h3>
                <div className="content">
                    <Checkbox label="西瓜" disabled/>
                </div>
                <Code target="checkbox-disabled" />

                <h3 className="comp-type">phSize</h3>
                <div className="content">
                    <Checkbox label="请查看协议之后再决定" phSize='sm'/>
                </div>
            </div>
        );
    }
}