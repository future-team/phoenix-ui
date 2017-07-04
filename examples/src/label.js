import React, { Component } from "react"

import Label from "phoenix-ui/lib/label"
import Code from "./code/code"

export default class Labels extends Component{
    render(){
        return(
        	<div>
            	<h2 className="comp-title">Label</h2>
                <h3 className="comp-type">phStyle(默认primary) 标签颜色</h3>
                <div className="content">
	                <Label>惠</Label>
	                <Label phStyle="success">惠</Label>
	                <Label phStyle="info">惠</Label>
					<Label phStyle="danger">惠</Label>
	                <Label phStyle="error">惠</Label>
	                <Label phStyle="warning">惠</Label>
                </div>
                <Code target="label-phstyle" />

                <h3 className="comp-type">phSize(默认sm) 标签大小</h3>
                <div className="content">
	                <Label>惠</Label>
	                <Label phSize="md">惠</Label>
	                <Label phSize="lg">惠</Label>
                </div>
                <Code target="label-phsize" />
            </div>
        );
    }
}