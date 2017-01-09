import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {TableView,Badge,Switch} from '../../src/index';

export default class tableview extends Component{

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
                <h2 className="comp-title">TableView</h2>
                <TableView>
                    <a href="http://www.baidu.com">Item 1</a>
                    <a>Item 2 <Badge phStyle="primary">2</Badge></a>
                    <a href="###">Item 3 <Badge>5</Badge></a>
                    <a>
                        Item 4 <Switch />
                    </a>
                </TableView>
            </div>
        );
    }
}