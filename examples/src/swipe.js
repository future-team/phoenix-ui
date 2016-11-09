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
            <ul>
                <li>
                    <Swipe 
                        buttons={[
                            {text: '删除', onHandle: this.onDelete, phStyle: 'error'},
                            {text: '取消', onHandle: this.onCancle, phStyle: 'gray'}
                        ]} 
                    >
                        <div style={{backgroundColor: '#fff', padding: '15px', 'borderBottom': '1px solid #ccc'}}>
                            <span>lalallalla</span>
                            <strong>hahahha</strong>
                        </div>
                    </Swipe>
                </li>
                <li>
                    <Swipe 
                        buttons={[
                            {text: '删除', onHandle: this.onDelete, phStyle: 'error'},
                            {text: '取消', onHandle: this.onCancle, phStyle: 'gray'}
                        ]} 
                    >
                        <div style={{backgroundColor: '#fff', padding: '15px', 'borderBottom': '1px solid #ccc'}}>
                            <span>lalallalla</span>
                            <strong>hahahha</strong>
                        </div>
                    </Swipe>
                </li>
            </ul>
        );
    }
}