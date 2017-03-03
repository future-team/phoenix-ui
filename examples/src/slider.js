import React, { Component } from "react";
import {Slider} from "phoenix-ui";
import Code from "./code/code";

export default class slider extends Component{

    constructor(props,context){
        super(props,context); 

        this.state = {
            progress: 50
        }
    }

    onSliderChange(newProgress){ // progress百分比
        this.setState({
            progress: newProgress
        });
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Slider</h2>
                <h3 className="comp-type">progress(默认0) 初始进度百分比</h3>
                <div className="content">
                    <Slider progress={25} />
                </div>
                <Code target="slider-progress" />

                <h3 className="comp-type">placement(默认top) 进度条提示框的位置</h3>
                <div className="content">
                    <Slider />
                    <Slider placement="bottom" />
                </div>
                <Code target="slider-placement" />

                <h3 className="comp-type">onSliderChange 拖拽进度条松开时的回调函数</h3>
                <div className="content">
                    <Slider progress={this.state.progress} onSliderChange={::this.onSliderChange} />
                    <div style={{textAlign:"center",padding:"1rem 0"}}>Progress: {this.state.progress}</div>
                </div>
                <Code target="slider-onsliderchange" />


                <h3 className="comp-type">disabled 进度条只读</h3>
                <div className="content">
                    <Slider disabled progress={10} />
                </div>
                <Code target="slider-disabled" />
            </div>
        );
    }
}