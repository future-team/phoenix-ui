import React, { Component } from "react";
import Code from "./code/code";

export default class pagetransite extends Component{
    render(){
        return(
            <div>
                <h2 className="comp-title">PageTransition</h2>
                <h3 className="comp-type">transitionName 动画类型</h3>
                <h3 className="comp-type">onLoad 动画完成的回调函数</h3>
                <Code target="page-transition" />
            </div>
        );
    }
}
