import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Textarea} from '../../src/index';

export default class textarea extends Component{

    constructor(props,context){

        super(props,context);

        this.state = {
            name:'wwwww',
            wordsNum: 0,
        };
    }

    setValue(key,e){
        let o ={};
        o[key || e.target.name] = e.target.value;
        o['wordsNum'] = e.target.value.length;
        this.setState(o);
    }

    render(){
        return(
            <div>
                <Textarea value={this.state.name} placeholder='请输入'
                onChange={this.setValue.bind(this,'name')} isCount={true} maxLength={100}></Textarea>
            </div>
        );
    }
}