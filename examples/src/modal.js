import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Button, Modal} from '../../src/index';

export default class modal extends Component{

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

    onConfirm(){
        this.onClose();
    }

    render(){
        return(
            <div>
                <Button block radius phSize="lg" phStyle="error" onClick={::this.onShow}>Click Me To Show Modal</Button>

                <Modal visible={this.state.visible}>
                    <h2 className="modal-title">标题标题</h2>
                    <div className="modal-body">
                        <input type="text" />
                        内容内容内容内容内容内容内容内容内容内容内容内容
                    </div>
                    <div>
                        <Button hollow radius phSize="lg" phStyle="gray" onClick={::this.onClose}>取消</Button>
                        <Button radius phSize="lg" phStyle="primary" onClick={::this.onConfirm}>确定</Button>
                    </div>
                </Modal>
            </div>
        );
    }
}