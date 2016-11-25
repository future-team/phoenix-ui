import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Button, Toast} from '../../src/index';

export default class modal extends Component{

    constructor(props,context){
        super(props,context); 

        this.state = {
            duration: 2000
        }
    }

    showToast(){
        Toast.info('只显示信息的toast！！', this.state.duration, ()=>{
            // 额外的执行内容
            this.test();
        });
    }

    test(){
        console.log('aahhaha');
    }

    render(){
        return(
            <div>
                <Button block phSize="lg" phStyle="info" onClick={::this.showToast}>Click Me To Show Toast</Button>
            </div>
        );
    }
}