import React, { Component } from "react"

import Swipe from "phoenix-ui/lib/swipe"
import Code from "./code/code"

export default class swipe extends Component{

    constructor(props,context){
        super(props,context); 
    }

    onDelete(){
        console.log("delete!!");
    }

    onCancle(){
        console.log("cancle!!");
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Swipe</h2>
                <h3 className="comp-type">buttons(默认空数组) 左滑后出现的操作按钮</h3>
                <div className="contents">
                    <h3 className="comp-tip">buttons的phStyle默认primary</h3>
                    <Swipe buttons={[
                        {text: "删除", onHandle: this.onDelete}
                    ]}>
                        <div style={{padding: "1rem"}}>
                            滑动块1
                        </div>
                    </Swipe>
                </div>
                <Code target="swipe-phstyle" />

                <div className="contents">
                    <h3 className="comp-tip">自定义buttons参数</h3>
                    <Swipe buttons={[
                        {text: "删除", onHandle: this.onDelete, phStyle: "error"},
                        {text: "取消", onHandle: this.onCancle, phStyle: "info"}
                    ]}>
                        <div style={{padding: "1rem"}}>
                            滑动块2
                        </div>
                    </Swipe>
                </div>
                <Code target="swipe-buttons" />
            </div>
        );
    }
}