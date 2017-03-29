import React, { Component } from "react";
import {ImageList} from "phoenix-ui";
import Code from "./code/code";
import {ajax} from "./utils/tool.js";

export default class imagelist extends Component{
    constructor(props,context){
        super(props,context); 

        this.state = {
            imageData: []
        }

        this.getData("./data/post.json",0);
    }

    getData(fileName){ // 获取数据方法，ajax方法在下面定义了
        ajax(fileName).then((json)=>{
            let data = json.data;

            this.setState({
                imageData: data
            }); 

        }, (error)=>{// 加载失败
            console.error("出错了", error)
        });
    }

    render(){
        return(
            <div>
            	<h2 className="comp-title">ImageList</h2>
                <h3 className="comp-type"></h3>
                <ImageList imageData={this.state.imageData} column={2}></ImageList>
                
                <Code target="loadinglist" />
            </div>
        );
    }
}