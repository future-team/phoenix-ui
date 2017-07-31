import React, { Component } from "react"

import Slider from "phoenix-ui/lib/slider"
import Code from "./code/code"

export default class slider extends Component{

    constructor(props,context){
        super(props,context); 

        this.state = {
            progress: 50,
            progress1: 20
        }
    }

    slideCallback(newProgress){ // progress百分比
        alert(newProgress)
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Slider</h2>
                <h3 className="comp-type">progress(默认0) 初始进度百分比</h3>
                <Slider progress={25} />
                <Code target="slider-progress" />

                <h3 className="comp-type">tipMode(默认default) 提示显示的方式</h3>
                <Slider tipMode="tooltip" />
                <Code target="slider-tipstay" />

                <h3 className="comp-type">placement(默认top) tooltip的位置</h3>
                <Slider tipMode="tooltip"/>
                <Slider tipMode="tooltip" placement="bottom" />
                <Code target="slider-placement" />

                <h3 className="comp-type">tipStay(默认false) 松开进度条时是否要隐藏tooltip</h3>
                <Slider tipMode="tooltip" tipStay />
                <Code target="slider-tipstay" />

                <h3 className="comp-type">range(默认[0,100]) 范围</h3>
                <Slider range={[50,200]} showRange />
                <Code target="slider-range" />

                <h3 className="comp-type">showRange(默认false) 范围</h3>
                <Slider range={[25,65]} showRange />
                <Code target="slider-showrange" />

                <h3 className="comp-type">duration(默认1) 每次滑动的距离</h3>
                <Slider duration={20} />
                <Code target="slider-duration" />

                <h3 className="comp-type">slideCallback 拖拽进度条松开时的回调函数</h3>
                <Slider progress={this.state.progress} slideCallback={(newProgress)=>{this.slideCallback(newProgress);}} />
                <Code target="slider-slidecallback" />

                <h3 className="comp-type">disabled 进度条只读</h3>
                <Slider disabled progress={10} />
                <Code target="slider-disabled" />
            </div>
        );
    }
}