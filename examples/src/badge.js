import React, { Component ,PropTypes} from 'react';
import {Badge} from '../../src/index';

export default class Badges extends Component{
    render(){
        return(
            <div>
                <Badge >惠1</Badge>
                <div><Badge  phStyle="success">惠2</Badge></div>
                <Badge  phStyle='info'>惠3</Badge>
            </div>
        );
    }
}