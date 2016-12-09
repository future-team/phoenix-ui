import React, { Component ,PropTypes} from 'react';
import {Badge} from '../../src/index';

export default class Badges extends Component{
    render(){
        return(
            <div>
            	<h2 className="comp-title">Badge</h2>
                <h3 className="comp-type">类型 phStyle</h3>
                <div className="content">
	                <Badge>惠1</Badge>
	                <Badge phStyle="success">惠2</Badge>
	                <Badge phStyle='info'>惠3</Badge>
                </div>
            </div>
        );
    }
}