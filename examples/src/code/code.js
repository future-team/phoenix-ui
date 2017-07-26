import React, { Component } from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import codeJson from './code-json';

import {Dialog} from '../../../src/index';

export default class code extends Component{
    constructor(props,context){
        super(props,context); 

        this.state = {
            visible: false
        }
    }

    onShow(){
        this.setState({
          visible: true,
        });
    }

    closeCallback(){
        this.setState({
          visible: false,
        });
    }

    render(){
        return(
            <div>
                <a className="code-mark ph-button-link" onClick={this.onShow.bind(this)}>查看源码</a>
                <Dialog className="code-dialog" closeButton visible={this.state.visible} closeCallback={this.closeCallback.bind(this)}>
                    <Dialog.Body className="code-body">
                        {codeJson[this.props.target]}
                    </Dialog.Body>
                </Dialog>
            </div>
        );
    }
}
