import React, { Component } from 'react'

import Switch from 'phoenix-ui/lib/switch'
import Code from "./code/code"

export default class switchs extends Component{

    constructor(props,context){

        super(props,context);

        this.state = {
            checked: true
        };
    }

    onChange(){
        this.setState({
            checked: !this.state.checked
        });
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Switch</h2>
                <h3 className="comp-type">开关</h3>
                <div className="content">
                    <h3 className="comp-tip">默认</h3>
                    <Switch />
                    <h3 className="comp-tip">defaultChecked 初始传值</h3>
                    <Switch defaultChecked={true} />
                    <h3 className="comp-tip">checked和onChange配合使用</h3>
                    <Switch checked={this.state.checked} onChange={::this.onChange} />
                </div>
                <Code target="switch" />
            </div>
        );
    }
}