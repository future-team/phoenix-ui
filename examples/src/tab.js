import React, { Component } from "react";

import Tabset from "phoenix-ui/lib/tab/Tabset"
import Tab from "phoenix-ui/lib/tab/Tab"
import List from "phoenix-ui/lib/list"
import Code from "./code/code"

export default class tab extends Component{

    constructor(props,context){
        super(props,context);
    }

    clickCallback(index){
        alert("测试tabset回调", "index: " + index);
    }

    clickCallback1(index){
        alert("测试tab回调", "index: " + index);
    }

    render(){
        return(
           <div>
                <h2 className="comp-title">Tabset/Tab</h2>
                <h3 className="comp-type"><strong>Tabset</strong></h3>
                <h3 className="comp-type">index(默认0) 默认选中选项卡的索引值</h3>
                <Tabset index={1}>
                    <Tab heading="标题（1）">
                        横向内容1（1）
                    </Tab>
                    <Tab heading="标题（2）">
                        横向内容2（2）
                    </Tab>
                    <Tab heading="标题（3）">
                        横向内容2（3）
                    </Tab>
                    <Tab heading="标题（4）">
                        横向内容2（4）
                    </Tab>
                </Tabset>
                <Code target="tabset-index"/>

                <h3 className="comp-type">nowrap(默认false) 标题不换行</h3>
                <Tabset nowrap>
                    <Tab heading="标题（1）">
                        横向内容1（1）
                    </Tab>
                    <Tab heading="标题（2）">
                        横向内容2（2）
                    </Tab>
                    <Tab heading="标题（3）">
                        横向内容3（3）
                    </Tab>
                    <Tab heading="标题（4）">
                        横向内容4（4）
                    </Tab>
                    <Tab heading="标题（5）">
                        横向内容5（5）
                    </Tab>
                </Tabset>
                <Code target="tabset-nowrap"/>

                <h3 className="comp-type">vertical(默认false) 设置选项卡竖排</h3>
                <Tabset vertical>
                    <Tab heading="标题1">
                        <List>
                            <List.Item>
                                <List.Col>竖向内容1</List.Col>
                            </List.Item>
                            <List.Item>
                                <List.Col>竖向内容1</List.Col>
                            </List.Item>
                        </List>
                    </Tab>
                    <Tab heading="标题2">
                        竖向内容2
                    </Tab>
                    <Tab heading="标题3">
                        竖向内容3
                    </Tab>
                </Tabset>
                <br/>
                <Code target="tabset-vertical" />

                <h3 className="comp-type">width(默认33) 设置vertical之后标题的占比</h3>
                <Tabset vertical width={20}>
                    <Tab heading="标题1">
                        <List>
                            <List.Item>
                                <List.Col>竖向内容1</List.Col>
                            </List.Item>
                        </List>
                    </Tab>
                    <Tab heading="标题2">
                        <List>
                            <List.Item>
                                <List.Col>竖向内容2</List.Col>
                            </List.Item>
                        </List>
                    </Tab>
                </Tabset>
                <br/>
                <Code target="tabset-width" />

                <h3 className="comp-type">clickCallback(Tabset) 点击选项卡的回调函数</h3>
                <Tabset clickCallback={this.clickCallback.bind(this)}>
                    <Tab heading="标题1">
                        横向内容1
                    </Tab>
                    <Tab heading="标题2">
                        横向内容2
                    </Tab>
                </Tabset>
                <Code target="tabset-clickcallback" />

                <h3 className="comp-type"><strong>Tab</strong></h3>
                <h3 className="comp-type">heading 标题</h3>
                <Tabset>
                    <Tab heading="Tab heading 1">
                        横向内容1
                    </Tab>
                    <Tab heading="Tab heading 2">
                        横向内容2
                    </Tab>
                </Tabset>
                <Code target="tab-heading" />

                <h3 className="comp-type">clickCallback(Tab) 点击单个选项卡的回调函数</h3>
                <Tabset>
                    <Tab heading="标题1" clickCallback={this.clickCallback1.bind(this)}>
                        横向内容1
                    </Tab>
                    <Tab heading="标题2">
                        横向内容2
                    </Tab>
                </Tabset>
                <Code target="tab-clickcallback" />
           </div>
        );
    }
}