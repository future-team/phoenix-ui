import React, { Component } from "react"

import Swipe from "phoenix-ui/lib/swipe"
import List from "phoenix-ui/lib/list"
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
        const buttons = [
            {text: "删除", onHandle: this.onDelete, phStyle: "error"},
            {text: "取消", onHandle: this.onCancle, phStyle: "info"}
        ]

        return(
            <div>
                <h2 className="comp-title">Swipe</h2>
                <h3 className="comp-type">buttons 左滑后出现的操作按钮</h3>
                <List style={{backgroundColor:'transparent'}}>
                    <Swipe style={{marginBottom:'16px'}} buttons={buttons}>
                        <List.Item>
                            <List.Col>
                                滑动块1
                            </List.Col>
                        </List.Item>
                    </Swipe>
                    <Swipe buttons={buttons}>
                        <List.Item>
                            <List.Col>
                                滑动块2
                            </List.Col>
                        </List.Item>
                    </Swipe>
                </List>
                <Code target="swipe-buttons" />
            </div>
        );
    }
}