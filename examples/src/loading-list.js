import React, { Component } from "react";
import {LoadingList} from "phoenix-ui";
import Code from "./code/code";
import {ajax} from "./utils/tool.js";

export default class loadinglist extends Component{
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

    onLoading(){ // 加载更多的执行回调(点击按钮刷新或滑倒屏幕最下方自动刷新)

        // 如果已经没有更多，不再执行请求数据的操作
        if(this.state.loadingStatus==4) return;
        
        // 点击之后显示加载中的状态
        this.setState({
            loadingStatus: 1
        }); 

        if(this.state.loadingStatus!=3) this.count++; // 请求失败继续请求当前json
        this.getData("./data/post"+this.count+".json"); // 开始请求数据
    }

    onLoadingEnd(){ //  DOM加载完成执行的回调
        if(this.state.loadingStatus==3) return;

        this.setState({
            loadingStatus: 0
        }); 
    }

    render(){
        return(
            <div>
            	<h2 className="comp-title">LoadingList</h2>
                <h3 className="comp-type">phMode(默认auto) 加载更多的模式，可选[auto,button]</h3>
                <h3 className="comp-type">loadingStatus(默认1) 0－加载更多, 1－加载中, 2－数据加载成功, 3－数据加载失败, 4－没有更多</h3>
                <h3 className="comp-type">buttonStyles 按钮的样式，默认["primary","info","success","error","gray"]</h3>
                <h3 className="comp-type">loadTips 按钮文字和状态提示语，默认["加载更多","加载中","加载成功","加载失败","没有更多"]</h3>
                <h3 className="comp-type">onLoading函数 点击按钮加载或滑到底部自动加载的回调函数</h3>
                <h3 className="comp-type">onLoadingEnd函数 每次加载结束的回调函数</h3>
                <LoadingList phMode="auto" loadingStatus={this.state.loadingStatus} 
                    loadTips={["点击加载更多","加载中...","加载成功！","加载失败！","没有更多"]} 
                    buttonStyles={["primary","gray","success","danger","gray"]} 
                    onLoading={::this.onLoading} onLoadingEnd={::this.onLoadingEnd}>
                    <ul>
                        {
                            this.state.loadingData.map((data,index)=>{
                                return (
                                    <li key={index}>
                                        <img src={data.image} alt={data.name} />
                                        <p>{data.name}</p>
                                        <p>{data.desp}</p>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </LoadingList>
                <Code target="loadinglist" />
            </div>
        );
    }
}
