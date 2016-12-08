import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Button, Dialog} from '../../src/index';

export default class dialog extends Component{

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
                <Button block radius phSize="lg" phStyle="error" onClick={::this.onShow}>Click To Show Dialog</Button>

                <Dialog visible={this.state.visible}>
                    <Dialog.Title>标题标题</Dialog.Title>
                    <Dialog.Body>
                        <input type="text" />
                        可自定义表格内容
                    </Dialog.Body>
                    <Dialog.Footer>
                        <Button hollow radius phSize="lg" phStyle="gray" onClick={::this.onClose}>取消</Button>
                        <Button radius phSize="lg" phStyle="primary" onClick={::this.onConfirm}>确定</Button>
                    </Dialog.Footer>
                </Dialog>
            </div>
        );
    }
}