import React, { Component } from "react"

import Button from "phoenix-ui/lib/button"
import Popover from "phoenix-ui/lib/popover"
import Code from "./code/code"

export default class popover extends Component{

    constructor(props,context){
        super(props,context); 
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Popover</h2>
                <h3 className="comp-type">getTarget(必需) 返回当前点击元素</h3>
                <div className="content">
                    <Button phSize="lg" ref={(button)=>{this.button = button}}>纯文字气泡</Button>
                    <Popover getTarget={()=>{return this.button}}>
                        <div className="ph-popover-text">
                            一条很长的很长的气泡提示语，为了占位存在的气泡提示语。一条很长的很长的气泡提示语，为了占位存在的气泡提示语。一条很长的很长的气泡提示语，为了占位存在的气泡提示语。一条很长的很长的气泡提示语，为了占位存在的气泡提示语。
                        </div>
                    </Popover>
                    <Button phSize="lg" ref={(button)=>{this.button1 = button}}>列表气泡</Button>
                    <Popover getTarget={()=>{return this.button1}} placement="right">
                        <ul className="ph-popover-list">
                            <li className="ph-popover-item">未上线单店</li>
                            <li className="ph-popover-item">未上线连锁店</li>
                        </ul>
                    </Popover>
                </div>
                <Code target="popover-gettarget" />

                <h3 className="comp-type">placement(默认bottom) 气泡位置 <br/> 可选top、bottom、left、right</h3>
                <div className="content">
                    <Button phSize="lg" ref={(button)=>{this.button2 = button}}>按钮</Button>
                    <Popover getTarget={()=>{return this.button2}} placement="top">
                        <div className="ph-popover-text">
                            为了占位存在的气泡提示语
                        </div>
                    </Popover>
                </div>
                <Code target="popover-placement" />

                <h3 className="comp-type">distance(默认5) 气泡和点击元素的距离</h3>
                <div className="content">
                    <Button phSize="lg" ref={(button)=>{this.button3 = button}}>按钮</Button>
                    <Popover getTarget={()=>{return this.button3}} distance={20}>
                        <div className="ph-popover-text">
                            为了占位存在的气泡提示语
                        </div>
                    </Popover>
                </div>
                <Code target="popover-distance" />  

                <h3 className="comp-type">clickCallback 点击的回调函数</h3>
                <div className="content">
                    <Button phSize="lg" ref={(button)=>{this.button4 = button}}>按钮</Button>
                    <Popover getTarget={()=>{return this.button4}} clickCallback={(bool)=>{alert(bool)}}>
                        <div className="ph-popover-text">
                            为了占位存在的气泡提示语
                        </div>
                    </Popover>
                </div>
                <Code target="popover-clickcallback" />  

                <h3 className="comp-type">顺延的情况 placement为bottom</h3>
                <div className="content">
                    <Button phSize="lg" ref={(button)=>{this.button5 = button}}>bottom顺延到top</Button>
                    <Popover getTarget={()=>{return this.button5}}>
                        <div className="ph-popover-text">
                            为了占位存在的气泡提示语<br/>
                            为了占位存在的气泡提示语<br/>
                            为了占位存在的气泡提示语<br/>
                            为了占位存在的气泡提示语
                        </div>
                    </Popover>
                </div>             
            </div>
        );
    }
}