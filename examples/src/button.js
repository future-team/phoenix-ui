import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Button} from '../../src/index';

export default class input extends Component{
    render(){
        return(
            <div>
                <Button hollow>我是一个按钮</Button>
                <Button phSize="lg" phStyle="primary">大号按钮</Button>
                <Button phSize="md" hollow>中号按钮</Button>
            </div>
        );
    }
}