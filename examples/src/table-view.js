import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {TableView} from '../../src/index';

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
            <div style={{padding:'20px'}}>
                <TableView>
                    <a href="http://www.baidu.com">列表 1</a>
                    <a>
                        列表 2
                        <span className="badge badge-primary">2</span>
                    </a>
                    <a href="###">
                        <span className="badge">5</span>
                        Item 1
                    </a>
                    <a>
                        Item 2
                        <label className="label-switch">
                            <input id="js-room-selected" type="checkbox" />
                                <div className="checkbox"></div>
                            </label>
                    </a>
                </TableView>
            </div>
        );
    }
}