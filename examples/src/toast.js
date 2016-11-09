import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Button, Toast} from '../../src/index';

export default class modal extends Component{

    constructor(props,context){
        super(props,context); 

        this.state = {
            visible: false,
            duration: 1000 // 不传时间默认1500ms
        }
    }

    onShow(){
        this.setState({
          visible: true,
        });
    }

    onHide(){
        this.setState({
          visible: false,
        });
    }

    render(){
        return(
            <div>
                <Button block radius phSize="lg" phStyle="error" onClick={::this.onShow}>Click Me To Show Toast</Button>

                <Toast 
                    visible={this.state.visible} 
                    duration={this.state.duration} 
                    onClose={::this.onHide}
                >
                    内容内容
                </Toast>
            </div>
        );
    }
}