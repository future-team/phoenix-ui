import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Slider} from '../../src/index';

export default class slider extends Component{

    constructor(props,context){
        super(props,context); 

        this.state = {
            progress: 50
        }
    }

    onChange(newProgress){ // progress百分比
        this.setState({
            progress: newProgress
        });
    }

    render(){
        return(
            <div>
                <Slider onChange={::this.onChange} progress={this.state.progress} placement='bottom' />
                <div style={{textAlign:'center',paddingTop:'1rem'}}>Progress: {this.state.progress}</div>
            </div>
        );
    }
}