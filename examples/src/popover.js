import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Whisper, Popover} from '../../src/index';

export default class popover extends Component{

    constructor(props,context){
        super(props,context); 
    }

    onChange(){
        console.log('气泡出现消失时额外的执行函数'); 
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
                <h3 className="comp-type">placement(defult:bottom)</h3>
                <div className="content">
                    <Whisper onChange={this.onChange} target={popover} distance={10} >Bottom</Whisper>
                    <Whisper placement="top" onChange={this.onChange} target={popover} distance={10} >Top</Whisper>
                    <Whisper placement="right" onChange={this.onChange} target={popover} distance={10} >Right</Whisper>
                    <Whisper placement="left" onChange={this.onChange} target={popover} distance={10} >Left</Whisper>
                    <Whisper placement="top right" onChange={this.onChange} target={popover} distance={10} >Top Right</Whisper>
                    <Whisper placement="top left" onChange={this.onChange} target={popover} distance={10} >Top Left</Whisper>
                    <Whisper placement="bottom right" onChange={this.onChange} target={popover} distance={10} >Bottom Right</Whisper>
                    <Whisper placement="bottom left" onChange={this.onChange} target={popover} distance={10} >Bottom Left</Whisper>
                </div>
            </div>
        );
    }
}