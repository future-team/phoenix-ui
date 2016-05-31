/**
 * Created by slashhuang on 16/5/31.
 */
import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Star} from '../../src/index';

export default class StarDemo extends Component{
    render(){
        return(
            <div>
                <Star />
                <br/>
                <Star Rate={5}/>
                <br/>
                <Star Rate={10} />
                <br/>
                <Star Rate={15}/>
                <br/>
                <Star Rate={20} size='md'/>
                <br/>
                <Star Rate={25} size='md'/>
                <br/>
                <Star Rate={30} size='md'/>
                <br/>
                <Star Rate={35} size='lg'/>
                <br/>
                <Star Rate={40} size='lg'/>
                <br/>
                <Star Rate={45} size='lg'/>
                <br/>
                <Star Rate={50} size='lg'/>
            </div>
        );
    }
}