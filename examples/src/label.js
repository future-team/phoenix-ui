import React, { Component } from "react"

import Label from "phoenix-ui/lib/label"
import Code from "./code/code"

export default class Labels extends Component{
    render(){
        return(
        	<div>
            	<h2 className="comp-title">Label</h2>
                <h3 className="comp-type">phLabel 标签类型</h3>
                <div className="content">
	                <Label phLabel="zu"/>
                    <Label phLabel="tuan"/>
                    <Label phLabel="fu"/>
                    <Label phLabel="cu"/>
                    <Label phLabel="quan"/>
                    <Label phLabel="shou"/>
                    <Label phLabel="piao"/>
                    <Label phLabel="ding"/>
                    <Label phLabel="jia"/>
                    <Label phLabel="yin"/>
                    <Label phLabel="ka"/>
                    <Label phLabel="wai"/>
                    <Label phLabel="dian"/>
                    <Label phLabel="pin"/>
                    <Label phLabel="ke"/>
                    <Label phLabel="pai"/>
                    <Label phLabel="huo"/>
                </div>
                <Code target="label-phlabel" />

                <h3 className="comp-type">phStyle(默认primary) 标签颜色</h3>
                <div className="content">
	                <Label phLabel="tuan"/>
                    <Label phLabel="ke" phStyle="info"/>
                    <Label phLabel="ding" phStyle="success"/>
                    <Label phLabel="cu" phStyle="tip"/>
                    <Label phLabel="huo" phStyle="calm"/>
                    <Label phLabel="ka" phStyle="light"/>
                    <Label phLabel="zu" phStyle="gray"/>
                </div>
                <Code target="label-phstyle" />

                <h3 className="comp-type">phSize(默认sm) 标签大小</h3>
                <div className="content">
	                <Label phLabel="pai"/>
                    <Label phLabel="pai" phSize="md"/>
                </div>
                <Code target="label-phsize" />
            </div>
        );
    }
}