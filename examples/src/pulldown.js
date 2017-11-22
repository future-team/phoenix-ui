import React, { Component } from "react"

import PullDown from "phoenix-ui/lib/pulldown"
import List from "phoenix-ui/lib/list"

import Code from "./code/code"
import {ajax} from "./utils/tool.js"

export default class pulldown extends Component{
    constructor(props,context){
        super(props,context); 

        this.count = 0;

        this.state = {
            loadingData : [],
            status: 1, // 状态：0"加载更多",1"加载中",2"加载成功",3"加载失败",4"没有更多"
            visible1: false,
        }

        this.loadCallback();
    }

    // 加载更多的执行回调(点击按钮刷新或滑倒屏幕最下方自动刷新)
    loadCallback(){
        this.getData("./data/post"+(this.count?this.count:'')+".json") // 开始请求数据
        
        this.count++
        if(this.count>3) this.count=0;
    }

    getData(fileName){ // 获取数据方法，请求状态status必须准确返回
        ajax(fileName).then((json)=>{// 数据处理
            let data = json.data;

            this.setState({
                loadingData: data
            }); 

        });
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">PullDown</h2>
                <h3 className="comp-type">loadCallback 加载更多的回调函数</h3>
                <h3 className="comp-type">getTarget 如果当前列表存在自定义的滚动条，需要传递滚动的目标</h3>
                <div style={{minHeight:'100vh', overflow:'auto'}} ref={(list)=>this.list=list}>
                    <div>
                        <PullDown loadCallback={this.loadCallback.bind(this)}/>
                        <List>
                            {
                                this.state.loadingData.map((item,index)=>{
                                    return (
                                        <List.Item key={index}>
                                            <List.Col>{item.title}</List.Col>
                                        </List.Item>
                                    )
                                })
                            }
                        </List>
                    </div>
                </div>            	
            </div>
        );
    }
}
