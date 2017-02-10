import React, { Component } from "react";
import {Whisper, Popover} from "phoenix-ui";
import Code from "./code/code";

export default class popover extends Component{

    constructor(props,context){
        super(props,context); 
    }

    onChange(){
        alert("气泡出现消失时额外的执行函数"); 
    }

    render(){
        const popover = ( // 可以通过style自定义位置
            <Popover>
                <ul className="ph-popover-list">
                    <li className="ph-popover-item">未上线单店</li>
                    <li className="ph-popover-item">未上线连锁店</li>
                </ul>
            </Popover>
        );

        return(
            <div>
                <h2 className="comp-title">Whisper/Popover</h2>
                <h3 className="comp-type">
                    target 显示的目标物<br/>
                    placement(默认bottom) 气泡出现时相对点击对象的位置
                </h3>
                <div className="content">
                    <Whisper target={popover}>Bottom</Whisper>
                    <Whisper placement="top" target={popover}>Top</Whisper>
                    <Whisper placement="right" target={popover}>Right</Whisper>
                    <Whisper placement="left" target={popover}>Left</Whisper>
                    <Whisper placement="top right" target={popover}>Top Right</Whisper>
                    <Whisper placement="top left" target={popover}>Top Left</Whisper>
                    <Whisper placement="bottom right" target={popover}>Bottom Right</Whisper>
                    <Whisper placement="bottom left" target={popover}>Bottom Left</Whisper>
                </div>
                <Code target="popover-placement" />

                <h3 className="comp-type">distance(默认15) 气泡想对点击对象的距离</h3>
                <div className="content">
                    <Whisper target={popover} distance={10}>10</Whisper>
                    <Whisper target={popover} distance={20}>20</Whisper>
                </div>
                <Code target="popover-distance" />

                <h3 className="comp-type">onChange 气泡显隐时额外的回调函数</h3>
                <div className="content">
                    <Whisper onChange={this.onChange} target={popover}>popover</Whisper>
                </div>
                <Code target="popover-onchange" />
            </div>
        );
    }
}