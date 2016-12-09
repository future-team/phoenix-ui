import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Input,Row,Col} from '../../src/index';

export default class input extends Component{

    constructor(props,context){

        super(props,context);

        this.state = {
            name:''
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
                <h2 className="comp-title">Input</h2>
                <h3 className="comp-type">Text</h3>
                <div className="content">
                    <Input type="text" value={this.state.name} onChange={::this.setValue.bind(this,'name')} placeholder="请输入" />
                </div>
                <h3 className="comp-type">Radio</h3>
                <div className="content">
                    <Input type="radio" label="男" name="sex" />
                    <Input type="radio" label="女" name="sex" />
                </div>
                <h3 className="comp-type">Checkbox</h3>
                <div className="content">
                    <Input type="checkbox" label="苹果" />
                    <Input type="checkbox" label="香蕉" />
                </div>
            </div>
        );
    }
}