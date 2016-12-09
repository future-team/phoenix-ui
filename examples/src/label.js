import React, { Component ,PropTypes} from 'react';
import {Label} from '../../src/index';

export default class Labels extends Component{
    render(){
        return(
        	<div>
            	<h2 className="comp-title">Label</h2>
                <h3 className="comp-type">类型 phStyle(default:primary)</h3>
                <div className="content">
	                <Label>惠</Label>
	                <Label phStyle="success">惠</Label>
	                <Label phStyle="info">惠</Label>
					<Label phStyle="danger">惠</Label>
	                <Label phStyle="error">惠</Label>
	                <Label phStyle="warning">惠</Label>
                </div>
                <h3 className="comp-type">大小 phSize(default:xs)</h3>
                <div className="content">
	                <Label>惠</Label>
	                <Label phSize="md">惠</Label>
	                <Label phSize="lg">惠</Label>
                </div>
            </div>
        );
    }
}