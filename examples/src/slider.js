import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Slider} from '../../src/index';

export default class slider extends Component{

    constructor(props,context){
        super(props,context); 

        this.state = {
            progress: 50,
            progress1: 0,
        }
    }

    onChange(newProgress){ // progress百分比
        this.setState({
            progress: newProgress
        });
    }

    onChange1(newProgress){
        this.setState({
            progress1: newProgress
        });
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Slider</h2>
                <h3 className="comp-type">placement(default:top)</h3>
                <div className="content">
                    <Slider onChange={::this.onChange} progress={this.state.progress} />
                    <div style={{textAlign:'center',padding:'1rem 0'}}>Progress: {this.state.progress}</div>
                </div>
                <h3 className="comp-type">placement(bottom)</h3>
                <div className="content">
                    <Slider onChange={::this.onChange1} progress={this.state.progress1} placement='bottom' />
                    <div style={{textAlign:'center',padding:'1rem 0'}}>Progress: {this.state.progress1}</div>
                </div>
                <h3 className="comp-tip">disabled</h3>
                <div className="content">
                    <Slider disabled progress={10} placement='bottom' />
                </div>
            </div>
        );
    }
}