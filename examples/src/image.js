import React, { Component } from "react"

import Image from "phoenix-ui/lib/image"
import Code from "./code/code"

const DEFULT_IMAGE = 'http://file.digitaling.com/eImg/uimages/20150907/1441607165383971.gif',
      IMAGE_URL = 'http://img5.duitang.com/uploads/item/201602/11/20160211214958_RhdCY.jpeg'

export default class image extends Component{
    constructor(props,context){
        super(props,context); 
    }
                
    render(){
        return(
            <div>
            	<h2 className="comp-title">Image</h2>
                <h3 className="comp-type">src(必须) 图片地址</h3>
                <Image defaultSrc={DEFULT_IMAGE} src={IMAGE_URL} alt='...'/>
                <Code target="imagelist-lazy" />
            </div>
        );
    }
}