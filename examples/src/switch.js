import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Switch} from '../../src/index';

export default class switchs extends Component{

    constructor(props,context){

        super(props,context);

        this.state = {
            on: true
        };
    }

    onChange(){
        this.setState({
            on: !this.state.on
        });
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Switch</h2>
                <h3 className="comp-type">不可控(不需要传参)</h3>
                <div className="content">
                    <Switch />
                </div>
                <h3 className="comp-type">可控(checked onChange)</h3>
                <div className="content">
                    <Switch checked={this.state.on} onChange={::this.onChange} />
                </div>
            </div>
        );
    }
}