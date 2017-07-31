import React, { Component } from "react"

import Radio from "phoenix-ui/lib/radio"
import Button from "phoenix-ui/lib/button"
import Code from "./code/code"

export default class input extends Component{

    constructor(props,context){

        super(props,context);

        this.state = {
            radioChecked: true
        };
    }

    onRadioChange(){
        this.setState({
            radioChecked: !this.state.radioChecked
        });
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Radio</h2>
                <h3 className="comp-type">defaultChecked 初始传值</h3>
                <div className="content">
                    <Radio label="男" name="sex2" defaultChecked={true}/>
                    <Radio label="女" name="sex2"/>
                </div>
                <Code target="radio-default" />

                <h3 className="comp-type">checked和onChange配合使用</h3>
                <div className="content">
                    <Radio label="男" name="sex3" checked={this.state.radioChecked} onChange={::this.onRadioChange}/>
                    <Radio label="女" name="sex3" checked={!this.state.radioChecked} onChange={::this.onRadioChange}/>
                </div>
                <Code target="radio-onchange" />

                <h3 className="comp-type">disabled</h3>
                <div className="content">
                    <Radio label="男" name="sex4" disabled />
                    <Radio label="女" name="sex4" disabled />
                </div>
                <Code target="radio-disabled" />
            </div>
        );
    }
}