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
                    <Icon phIcon="search" />
                    <Icon phIcon="home" />
                </div>
                <a className="code-mark ph-button-link" href="http://future-team.github.io/gfs-icons/index.html">查看所有icon类型</a>
                <Code target="icon-phicon" />

                <h3 className="comp-type">phSize 符号大小</h3>
                <div className="content">
                    <h3 className="comp-tip">xs-24px</h3>
                    <Icon phIcon="tip" phSize="xs" />
                    <h3 className="comp-tip">sm-32px</h3>
                    <Icon phIcon="tip" phSize="sm" />
                    <h3 className="comp-tip">md-40px</h3>
                    <Icon phIcon="tip" phSize="md" />
                    <h3 className="comp-tip">lg-48px</h3>
                    <Icon phIcon="tip" phSize="lg" />
                    <h3 className="comp-tip">xlg-80px</h3>
                    <Icon phIcon="tip" phSize="xlg" />
                </div>
                <Code target="icon-phsize" />

                <h3 className="comp-type">phStyle 符号颜色</h3>
                <div className="content">
                    <Icon phIcon="search" phStyle="primary" />
                    <Icon phIcon="search" phStyle="info" />
                    <Icon phIcon="search" phStyle="success" />
                </div>
                <Code target="icon-phstyle" />

                <h3 className="comp-type">其他(动态，不存在icon库)</h3>
                <div className="content" style={{backgroundColor: '#f0f0f0'}}>
                    <h3 className="comp-tip">白色加载中(按钮，Toast)</h3>
	                <Icon phIcon="loading-white" />
                    <h3 className="comp-tip">灰色加载中(列表)</h3>
                    <Icon phIcon="loading-gray" />
                </div>
                <Code target="icon-other" />
            </div>
        );
    }
}