import React, { Component } from "react";
import {Badge} from "phoenix-ui";
import Code from "./code/code";

export default class badge extends Component{
    render(){
        return(
            <div>
            	<h2 className="comp-title">Badge</h2>
                <h3 className="comp-type">phStyle(默认primary) 徽章颜色</h3>
                <div className="content">
	                <Badge>惠</Badge>
	                <Badge phStyle="success">惠</Badge>
	                <Badge phStyle="info">惠</Badge>
                    <Badge phStyle="danger">惠</Badge>
                    <Badge phStyle="error">惠</Badge>
                    <Badge phStyle="warning">惠</Badge>
                </div>
                <Code target="badge-phstyle" />
            </div>
        );
    }
}