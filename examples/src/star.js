import React, { Component } from "react"

import Star from "phoenix-ui/lib/star"
import Code from "./code/code"

export default class star extends Component{
    render(){
        return(
            <div>
                <h2 className="comp-title">Star</h2>
                <h3 className="comp-type">Rate(默认0) 星级评价的分数</h3>
                <div className="content">
                    <Star />
                    <Star Rate={5} />
                    <Star Rate={15} />
                    <Star Rate={20} />
                    <Star Rate={25} />
                    <Star Rate={30} />
                    <Star Rate={35} />
                </div>
                <Code target="star-rate" />

                <h3 className="comp-type">phSize(默认sm) 星星大小</h3>
                <div className="content">
                    <Star Rate={40} phSize="sm" />
                    <Star Rate={45} phSize="md" />
                    <Star Rate={50} phSize="lg" />
                </div>
                <Code target="star-phsize" />
            </div>
        );
    }
}