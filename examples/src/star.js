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
                <h2 className="comp-title">Star</h2>
                <h3 className="comp-type">星级 Rate(default:0)</h3>
                <div className="content">
                    <Star />
                    <Star Rate={5} />
                    <Star Rate={15} />
                    <Star Rate={20} />
                    <Star Rate={25} />
                    <Star Rate={30} />
                    <Star Rate={35} />
                </div>
                <h3 className="comp-type">大小 size(default:xs)</h3>
                <div className="content">
                    <Star Rate={40} size='xs' />
                    <Star Rate={45} size='md' />
                    <Star Rate={50} size='lg' />
                </div>
            </div>
        );
    }
}