import React, { Component } from "react"

import ImageList from "phoenix-ui/lib/image-list"
import Image from "phoenix-ui/lib/image"
import Code from "./code/code"
import {ajax} from "./utils/tool.js"

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
                <h3 className="comp-type">column(默认1) 图片列数</h3>
                <ImageList column={4}>
                    {
                        this.state.images.map((data,index)=>{
                            return (
                                <dl className="ph-image-item" key={index}>
                                    <dt>
                                        <Image src={data.image} alt={data.title}/>
                                    </dt>
                                    <dd>
                                        <p className='ph-image-title'>{data.title}</p>
                                        <p className='ph-image-desp'>{data.desp}</p>
                                    </dd>
                                </dl>
                            )
                        })
                    }
                </ImageList>
                <ImageList column={2}>
                    {
                        this.state.images.map((data,index)=>{
                            return (
                                <dl className="ph-image-item" key={index}>
                                    <dt>
                                        <Image src={data.image} alt={data.title}/>
                                    </dt>
                                    <dd>
                                        <p className='ph-image-title'>{data.title}</p>
                                        <p className='ph-image-desp'>{data.desp}</p>
                                    </dd>
                                </dl>
                            )
                        })
                    }
                </ImageList>
                <Code target="imagelist-column" />                
            </div>
        );
    }
}