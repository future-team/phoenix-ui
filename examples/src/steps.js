import React, { Component } from "react"

import Steps from "phoenix-ui/lib/steps"
import Code from "./code/code"

export default class steps extends Component{

    constructor(props,context){
        super(props,context);

        this.state = {
            index: 2,
            list1: ["合作信息","公司信息","资质信息","资质信息"],
            list2: ["合作信息","公司信息","资质信息","公司信息","资质信息","公司信息"]
        };
    }

    clickCallback(str, index){
        alert("name: "+str+", index: "+index);
    }

    render(){
        return(
            <div>
            	<h2 className="comp-title">Steps</h2>
                <h3 className="comp-type">list(默认[],必需) 步骤名称列表，根据顺序排列</h3>
                <Steps list={["合作信息","公司信息","资质信息"]} />
                <Code target="steps-list" />

                <h3 className="comp-type">index(默认0) 当前步骤(从0开始)</h3>
                <Steps index={2} list={this.state.list1} />
                <Code target="steps-index" />

                <h3 className="comp-type">clickCallback(默认null) 选择步骤的回调函数</h3>
                <Steps clickCallback={this.clickCallback.bind(this)} list={this.state.list1}/>
                <Code target="steps-clickcallback" />

                <h3 className="comp-type">readOnly(默认false) 是否只读，只读时不可点击选择步骤</h3>
                <Steps readOnly list={this.state.list2} />
                <Code target="steps-readonly" />
            </div>
        );
    }
}