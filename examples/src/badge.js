import React, { Component } from "react"

import Badge from "phoenix-ui/lib/badge"
import Code from "./code/code"

export default class badge extends Component{
    render(){
        return(
            <div>
            	<h2 className="comp-title">Badge</h2>
                <h3 className="comp-type">默认颜色</h3>
                <div className="content">
	                <Badge>1</Badge>
	                <Badge>10</Badge>
                    <Badge>Hot</Badge>
                </div>
                <h3 className="comp-type">phStyle 标记颜色</h3>
                <div className="content">
	                <Badge phStyle="primary">New</Badge>
	                <Badge phStyle="success">New</Badge>
	                <Badge phStyle="info">New</Badge>
                    <Badge phStyle="danger">New</Badge>
                    <Badge phStyle="error">New</Badge>
                    <Badge phStyle="warning">New</Badge>
                </div>
                <Code target="badge-phstyle" />
            </div>
        );
    }
}