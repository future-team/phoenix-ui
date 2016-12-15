import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Button, Toast} from '../../src/index';

export default class toast extends Component{

    constructor(props,context){
        super(props,context); 

        this.state = {
            duration: 2000
        }
    }

    showToast(){
        Toast.info('只显示信息的toast！！', this.state.duration, ()=>{
            console.log('额外的执行内容');
        });
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Toast</h2>
                <h3 className="comp-type">自定义飘字</h3>
                <Button block phSize="lg" phStyle="primary" onClick={::this.showToast}>点击飘字</Button>
            </div>
        );
    }
}