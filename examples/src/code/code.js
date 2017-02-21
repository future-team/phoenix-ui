import React, { Component ,PropTypes} from 'react';
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

    onClose(){
        this.setState({
          visible: false,
        });
    }

    render(){
        return(
            <div>
                <a className="code-mark ph-button-link" onClick={::this.onShow}>查看源码</a>
                <Dialog className="code-dialog" visible={this.state.visible} onClose={::this.onClose}>
                    <Dialog.Body className="code-body">
                        {codeJson[this.props.target]}
                    </Dialog.Body>
                </Dialog>
            </div>
        );
    }
}
