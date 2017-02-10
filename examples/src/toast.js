import React, { Component } from "react";
import {Button, Toast} from "phoenix-ui";
import Code from "./code/code";

export default class toast extends Component{

    constructor(props,context){
        super(props,context);
    }

    showToast(){
         Toast.info("只显示信息的toast！！", 2000, ()=>{
            console.log("额外的执行内容");
        });
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Toast</h2>
                <h3 className="comp-type">Toast.info(message, duration, callback)</h3>
                <div className="content">
                    <Button phSize="lg" onClick={::this.showToast}>Toast</Button>
                </div>
                <Code target="toast-info" />
            </div>
        );
    }
}