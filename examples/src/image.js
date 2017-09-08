import React, { Component } from "react"

import Image from "phoenix-ui/lib/image"
import Code from "./code/code"

const DEFULT_IMAGE = 'http://file.digitaling.com/eImg/uimages/20150907/1441607165383971.gif',
      IMAGE_URL = 'http://img5.duitang.com/uploads/item/201602/11/20160211214958_RhdCY.jpeg',
      LAZY_URL = 'http://img.chinatimes.com/newsphoto/2016-05-19/656/20160519005737.jpg'

export default class image extends Component{
    constructor(props,context){
        super(props,context); 
    }

    loadCallback(err){
        if(!err){
            console.log('success!')
        }else{
            console.error(err)
        }
    }
                
    render(){
        return(
            <div>
            	<h2 className="comp-title">Image</h2>
                <h3 className="comp-type">src(必须) 图片地址</h3>
                <div className="content">
                    <Image src={IMAGE_URL} alt="..."/>
                </div>
                <Code target="image-src" />

                <h3 className="comp-type">defaultSrc 默认图片地址</h3>
                <div className="content">
                    <Image defaultSrc={DEFULT_IMAGE} src={IMAGE_URL} />
                </div>
                <Code target="image-defaultsrc" />

                <h3 className="comp-type">lazy 是否懒加载(当图片到达视口区域才加载)</h3>
                <div className="content">
                    <Image defaultSrc={DEFULT_IMAGE} src={LAZY_URL} lazy />
                </div>
                <Code target="image-lazy" />

                <h3 className="comp-type">phSize(默认default) 图片大小(default/cover/contain)</h3>
                <div className="content">
                    <h3 className="comp-tip">default(宽高100%)</h3>
                    <Image src={IMAGE_URL} phSize="default" />
                    <h3 className="comp-tip">cover(短边100%，不变形)</h3>
                    <Image src={IMAGE_URL} phSize="cover" />
                    <h3 className="comp-tip">contain(长边100%，不变形，留有空白区)</h3>
                    <Image src={IMAGE_URL} phSize="contain" />
                </div>
                <Code target="image-phsize" />

                <h3 className="comp-type">loadCallback 图片加载完成的回调</h3>
                <div className="content">
                    <Image src={IMAGE_URL} loadCallback={this.loadCallback.bind(this)} />
                </div>
                <Code target="image-loadcallback" />
            </div>
        );
    }
}