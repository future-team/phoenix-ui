import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Label} from '../../src/index';

export default class Labels extends Component{
    render(){
        return(
            <div>
                <Label >惠</Label>
                <div><Label phSize="lg" phStyle="success">惠</Label></div>
                <Label phSize="md" phStyle='info'>惠</Label>
            </div>
        );
    }
}