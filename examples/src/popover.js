import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Whisper, Popover, Row, Col} from '../../src/index';

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
                <ul className="popover-list">
                    <li className="popover-item">未上线单店</li>
                    <li className="popover-item">未上线连锁店</li>
                </ul>
            </Popover>
        );

        return(
            <div>
                <div style={{backgroundColor:'#fff',padding:'12px'}}>
                    Popover
                    <Whisper placement='bottom right'
                        onChange={this.onChange}
                        target={popover}
                        distance={15}
                        style={{float:'right',textAlign:'right'}}>Click Me</Whisper>
                </div>
            </div>
        );
    }
}