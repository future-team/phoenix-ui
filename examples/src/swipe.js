import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Swipe} from '../../src/index';

export default class swipe extends Component{

    constructor(props,context){
        super(props,context); 
    }

    onDelete(){
        console.log('delete!!');
    }

    onCancle(){
        console.log('cancle!!');
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Swipe</h2>
                <h3 className="comp-type">左滑动</h3>
                <ul>
                    <li>
                        <Swipe buttons={[
                                {text: '删除', onHandle: this.onDelete, phStyle: 'error'},
                                {text: '取消', onHandle: this.onCancle, phStyle: 'info'}
                            ]} 
                        >
                            <div style={{backgroundColor:'#fff',padding: '1rem'}}>
                                内容
                            </div>
                        </Swipe>
                    </li>
                </ul>
            </div>
        );
    }
}