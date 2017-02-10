import React, { Component } from 'react';
import {TableView,Badge,Switch} from 'phoenix-ui';
import Code from "./code/code";

export default class tableview extends Component{

    constructor(props,context){
        super(props,context);
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">TableView</h2>
                <h3 className="comp-type">仿表格组件</h3>
                <div className="contents">
                    <h3 className="comp-tip">子元素设置href属性(设置href属性增加右箭头)</h3>
                    <TableView>
                        <a href="http://www.baidu.com">Item 1</a>
                    </TableView>
                </div>
                <Code target="table-view-href" />

                <div className="contents">
                    <h3 className="comp-tip">配合其他组件使用</h3>
                    <TableView>
                        <a>Item 2 <Badge>2</Badge></a>
                        <a href="###">Item 3 <Badge>5</Badge></a>
                        <a>Item 4 <Switch /></a>
                    </TableView>
                </div>
                <Code target="table-view-other-component" />
            </div>
        );
    }
}