import React, { Component } from "react";
import {ImageList} from "phoenix-ui";
import Code from "./code/code";
import {ajax} from "./utils/tool.js";

export default class imagelist extends Component{
    constructor(props,context){
        super(props,context); 

        this.state = {
            images: []
        }

        this.getData("./data/post1.json",0);
    }

    getData(fileName){ // 获取数据方法，ajax方法在下面定义了
        ajax(fileName).then((json)=>{
            let data = json.data;

            this.setState({
                images: data
            }); 

        }, (error)=>{// 加载失败
            console.error("出错了", error)
        });
    }
                
    render(){
        return(
            <div>
            	<h2 className="comp-title">ImageList</h2>
                <h3 className="comp-type">images(默认[]) 图片数据<br/>默认地址的字段是image，名称的字段是title，描述的字段是desp</h3>
                <ImageList images={this.state.images} column={4} />
                <Code target="imagelist-images" />               

                <h3 className="comp-type">column(默认1) 图片列数</h3>
                <ImageList column={2}  images={this.state.images} />
                <Code target="imagelist-column" /> 

                <h3 className="comp-type">titleField(默认#) 姓名格式更改，#代表数值；<br/>despField(默认#) 描述格式更改，#代表数值</h3>
                <ImageList images={this.state.images} column={4} titleField={"姓名: #"} despField={"描述: #"} />
                <h3 className="comp-tip"> 如果name或desp中有不要的字段，传空字符"" </h3>
                <ImageList images={this.state.images} column={4} titleField={"姓名: #"} despField={""} />
                <Code target="imagelist-format" /> 
                
                <h3 className="comp-type">otherParams(默认{}) 其他增加项</h3>
                <ImageList images={this.state.images} column={4} otherParams={{"score":"分数: #"}} />
                <Code target="imagelist-otherparams" /> 

                <h3 className="comp-type">clickCallback(默认null) 点击单个图片块的回调函数</h3>
                <ImageList images={this.state.images} column={4} clickCallback={(data)=>{console.log(data);}} />
                <Code target="imagelist-clickcallback" /> 

                <h3 className="comp-type">children(默认无) 内容完全自定义</h3>
                <ImageList column={4}>
                    {
                        this.state.images.map((data,index)=>{
                            return (
                                <dl key={index}>
                                    <dd>
                                        <p className="ph-image-title">{data.title}</p>
                                        <p className="ph-image-desp">{data.desp}</p>
                                    </dd>
                                    <dt>
                                        <img src={data.image} alt={data.title} />
                                    </dt>
                                </dl>
                            )
                        })
                    }
                </ImageList>
                <Code target="imagelist-custom" /> 
            </div>
        );
    }
}