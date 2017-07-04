import React, { Component } from "react"

import Button from "phoenix-ui/lib/button"
import Toast from "phoenix-ui/lib/toast"
import Code from "./code/code"

export default class toast extends Component{

    constructor(props,context){
        super(props,context);
    }

    showToastInfo(){
        Toast.info("只显示信息的toast！只显示信息的toast！只显示信息的toast！", 2000, ()=>{
            console.log("额外的执行内容");
        });
    }

    showToastSuccess(){
        Toast.success("操作成功", 2000, ()=>{
            console.log("额外的执行内容");
        });
    }

    showToastFail(){
        Toast.fail("操作失败", 2000, ()=>{
            console.log("额外的执行内容");
        });
    }

    showToastLoading(){
        Toast.loading("加载中...", 2000, ()=>{
            console.log("额外的执行内容");
        });
    }

    removeToastLoading(){
        Toast.remove();
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Toast</h2>
                <h3 className="comp-type">Toast.info(message, duration, callback)</h3>
                <div className="content">
                    <Button phSize="lg" onClick={::this.showToastInfo}>info</Button>
                </div>
                <Code target="toast-info" />

                <h3 className="comp-type">Toast.success(message, duration, callback)</h3>
                <div className="content">
                    <Button phSize="lg" onClick={::this.showToastSuccess}>success</Button>
                </div>
                <Code target="toast-success" />

                <h3 className="comp-type">Toast.fail(message, duration, callback)</h3>
                <div className="content">
                    <Button phSize="lg" onClick={::this.showToastFail}>fail</Button>
                </div>
                <Code target="toast-fail" />

                <h3 className="comp-type">Toast.loading(message, duration, callback)</h3>
                <div className="content">
                    <Button phSize="lg" onClick={::this.showToastLoading}>loading</Button>
                </div>
                <Code target="toast-loading" />

                <h3 className="comp-type">Toast.remove()<br/>自定义消失的情况：Toast出现函数设置duration为false</h3>
                <div className="content">
                    <Button phSize="lg" onClick={::this.removeToastLoading}>remove</Button>
                </div>
                <Code target="toast-remove" />     
            </div>
        );
    }
}