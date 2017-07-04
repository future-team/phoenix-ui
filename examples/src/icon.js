import React, { Component } from "react"

import Icon from "phoenix-ui/lib/icon"
import Code from "./code/code"

export default class icon extends Component{
    render(){
        return(
            <div>
            	<h2 className="comp-title">Icon</h2>
                <h3 className="comp-type">phIcon 符号类型(对应icon的名称)</h3>
                <div className="content">
                    <h3 className="comp-tip">通过phIcon设定</h3>
	                <Icon phIcon="search" />
                    <h3 className="comp-tip">不用Icon组件的方式</h3>
                    <span className="gfs-icon icon-chevron-left"></span>
                </div>
                <Code target="icon-phicon" />
                <a className="code-mark ph-button-link" href="http://future-team.github.io/gfs-icons/index.html">查看所有icon类型</a>
            </div>
        );
    }
}