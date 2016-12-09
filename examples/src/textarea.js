import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Textarea} from '../../src/index';

export default class textarea extends Component{

    constructor(props,context){

        super(props,context);

        this.state = {
            name:'',
            words: '哈哈哈哈',
            MAX_LENGTH: 100
        };
    }

    setValue(key,e){
        let o ={};
        o[key || e.target.name] = e.target.value;
        this.setState(o);
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Textarea</h2>
                <h3 className="comp-type">不计字数 isCount(default:false)</h3>
                <div className="content">
                    <Textarea value={this.state.name} placeholder='请输入...'
                    onChange={this.setValue.bind(this,'name')} maxLength={this.state.MAX_LENGTH}></Textarea>
                </div>
                <h3 className="comp-type">计字数 isCount(true)</h3>
                <div className="content">
                    <Textarea value={this.state.words} placeholder='请输入...'
                    onChange={this.setValue.bind(this,'words')} isCount={true} maxLength={this.state.MAX_LENGTH}></Textarea>
                </div>
            </div>
        );
    }
}