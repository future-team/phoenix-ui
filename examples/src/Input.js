/**
 * Created by panqianjin on 16/5/24.
 */
import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import Input from '../../src/Input.js';

export default class input extends Component{
    render(){
        return(
            <div>
                <Input type='text' value='aaa' />
            </div>
        );
    }
}