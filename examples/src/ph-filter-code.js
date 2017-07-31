import React, { Component } from "react"
import Code from "./code/code"

export default class phFilter extends Component {

    constructor(props,context){
        super(props,context);
    }

    render(){
        return (
            <div>
                <h2 className="comp-title">PhFilter Checkbox</h2>

                <h3 className="comp-type"><strong>CheckboxContainer</strong></h3>
                <h3 className="comp-type">index 主菜单选中项索引值</h3>
                <h3 className="comp-type">choose 默认选中的数据(string)</h3>
                <h3 className="comp-type">buttons 传入的按钮数组</h3>
                <Code target="filter-checkbox-container" />

                <h3 className="comp-type"><strong>ItemGroup</strong></h3>
                <h3 className="comp-type">mainKey(必须) 唯一标识</h3>
                <h3 className="comp-type">label 显示的文字</h3>

                <h3 className="comp-type"><strong>Item</strong></h3>
                <h3 className="comp-type">itemKey(必须) 唯一标识</h3>
                <h3 className="comp-type">disabled 不可选</h3>
                <Code target="filter-checkbox-item" />
            </div>
        )
    }
}


