import React, { Component } from "react"

import PullUp from "phoenix-ui/lib/pullup"
import List from "phoenix-ui/lib/list"
import Input from "phoenix-ui/lib/input"
import Code from "./code/code"
import {ajax} from "./utils/tool.js"

export default class pullup extends Component{
    constructor(props,context){
        super(props,context); 

        this.count = 0;

        this.state = {
            loadingData : [],
            loadingStatus: 1 // 状态：0"加载更多",1"加载中",2"加载成功",3"加载失败",4"没有更多"
        }

        this.getData("./data/post.json");
    }

    getData(fileName){ // 获取数据方法，ajax方法在下面定义了
        ajax(fileName).then((json)=>{
            let data = json.data;
            let loadingData = this.state.loadingData.slice(0);
            for(let i in data){
                loadingData.push(data[i]);
            }
            this.setState({
                loadingData: loadingData,
                loadingStatus: json.final? 4:2
            }); 

        }, (error)=>{// 加载失败
            this.setState({
                loadingStatus: 3
            }); 
            console.error("出错了", error)
        });
    }

    loadCallback(){ // 加载更多的执行回调(点击按钮刷新或滑倒屏幕最下方自动刷新)

        // 如果已经没有更多，不再执行请求数据的操作
        if(this.state.loadingStatus==4) return;
        
        // 点击之后显示加载中的状态
        this.setState({
            loadingStatus: 1
        }); 

        if(this.state.loadingStatus!=3) this.count++; // 请求失败继续请求当前json
        this.getData("./data/post"+this.count+".json"); // 开始请求数据
    }

    loadEndCallback(){ //  DOM加载完成执行的回调
        if(this.state.loadingStatus==3) return;

        this.setState({
            loadingStatus: 0
        }); 
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">PullUp</h2>
            	<List>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col>哈哈哈哈</List.Col>
                    </List.Item>
                </List>
                <PullUp />
            </div>
        );
    }
}
