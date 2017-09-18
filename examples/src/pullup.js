import React, { Component } from "react"

import PullUp from "phoenix-ui/lib/pullup"
import List from "phoenix-ui/lib/list"

import Code from "./code/code"
import {ajax} from "./utils/tool.js"

export default class pullup extends Component{
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
    }

    getData(fileName){ // 获取数据方法，请求状态status必须准确返回
        ajax(fileName).then((json)=>{// 数据处理
            let data = json.data;
            let loadingData = this.state.loadingData.slice(0);
            for(let i in data){
                loadingData.push(data[i]);
            }

            // 必需
            this.setState({
                loadingData: loadingData,
                status: json.final? 4:2 // 根据final判断是加载成功还是没有更多
            }); 

        }, (error)=>{
            // 加载失败，必需
            this.setState({
                status: 3
            })
        });
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">PullUp</h2>
                <h3 className="comp-type">mode(默认auto) 加载的模式(自动加载或按钮)</h3>
                <h3 className="comp-type">status 当前状态(0加载更多, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多)</h3>
                <h3 className="comp-type">tips 设置按钮文字和状态提示语</h3>
                <h3 className="comp-type">phStyle(默认primary) 按钮的样式</h3>
                <h3 className="comp-type">loadCallback 加载更多的回调函数</h3>
                <h3 className="comp-type">getTarget 如果当前列表存在自定义的滚动条，需要传递滚动的目标</h3>
                <div style={{height:'300px',overflow:'auto'}} ref={(list)=>this.list=list}>
                    <div>
                        <List>
                            <List.Header>加载更多</List.Header>
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
                        <PullUp status={this.state.status} loadCallback={this.loadCallback.bind(this)} getTarget={()=>{return this.list}}/>
                    </div>
                </div>            	
            </div>
        );
    }
}
