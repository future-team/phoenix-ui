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
                <Input type="text" value={this.state.name} onChange={::this.setValue.bind(this,'name')} />
                <Row align="bottom">
                    <Col><Input type="radio" label="男" name="sex"  /></Col>
                    <Col><Input type="radio" label="女"  name="sex" /></Col>
                </Row>
                <Input type="checkbox" label="苹果"  />
            </div>
        );
    }
}