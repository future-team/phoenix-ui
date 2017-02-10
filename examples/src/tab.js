import React, { Component } from "react";
import {Tabset,Tab} from "phoenix-ui";
import Code from "./code/code";

export default class tab extends Component{

    constructor(props,context){
        super(props,context);
    }

    onChange(index){
        alert("测试tabset回调", "index: " + index);
    }

    onTabChange(index){
        alert("测试tab回调", "index: " + index);
    }

    onTabClickHandle(){
        alert("测试自定义tab点击事件");
    }

    render(){
        return(
           <div>
                <h2 className="comp-title">Tabset/Tab</h2>
                <h3 className="comp-type"><strong>Tabset</strong></h3>
                <h3 className="comp-type">activeIndex(默认0) 默认选中选项卡的索引值</h3>
                <div className="content">
                    <Tabset activeIndex={1}>
                        <Tab heading="标题1">
                            横向内容1
                        </Tab>
                        <Tab heading="标题2">
                            横向内容2
                        </Tab>
                    </Tabset>
                </div>
                <Code target="tabset-activeindex" />

                <h3 className="comp-type">vertical(默认false) 设置选项卡竖排</h3>
                <div className="content">
                    <Tabset vertical>
                        <Tab heading="标题1">
                            竖向内容1
                        </Tab>
                        <Tab heading="标题2">
                            竖向内容2
                        </Tab>
                    </Tabset>
                </div>
                <br/>
                <Code target="tabset-vertical" />

                <h3 className="comp-type">width(默认20) 设置vertical之后标题的占比</h3>
                <div className="content">
                    <Tabset vertical width={30}>
                        <Tab heading="标题1">
                            竖向内容1
                        </Tab>
                        <Tab heading="标题2">
                            竖向内容2
                        </Tab>
                    </Tabset>
                </div>
                <br/>
                <Code target="tabset-width" />

                <h3 className="comp-type">onChange 点击选项卡的回调函数</h3>
                <div className="content">
                    <Tabset onChange={::this.onChange}>
                        <Tab heading="标题1">
                            横向内容1
                        </Tab>
                        <Tab heading="标题2">
                            横向内容2
                        </Tab>
                    </Tabset>
                </div>
                <Code target="tabset-onchange" />

                <h3 className="comp-type"><strong>Tab</strong></h3>
                <h3 className="comp-type">heading(默认"tab") 选项卡的标题内容</h3>
                <div className="content">
                    <Tabset>
                        <Tab heading="Tab heading 1">
                            横向内容1
                        </Tab>
                        <Tab heading="Tab heading 2">
                            横向内容2
                        </Tab>
                    </Tabset>
                </div>
                <Code target="tab-heading" />

                <h3 className="comp-type">onChange 点击单个选项卡的回调函数</h3>
                <div className="content">
                    <Tabset>
                        <Tab heading="标题1" onChange={::this.onTabChange}>
                            横向内容1
                        </Tab>
                        <Tab heading="标题2">
                            横向内容2
                        </Tab>
                    </Tabset>
                </div>
                <Code target="tab-onchange" />
           </div>
        );
    }
}