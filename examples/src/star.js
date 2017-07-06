import React, { Component } from "react"

import Star from "phoenix-ui/lib/star"
import Code from "./code/code"

export default class star extends Component{
    render(){
        return(
            <div>
                <h2 className="comp-title">Star</h2>
                <h3 className="comp-type">rate(默认0) 星级评价的分数</h3>
                <div className="content">
                    <Star />
                    <Star rate={5} />
                    <Star rate={15} />
                    <Star rate={20} />
                    <Star rate={25} />
                    <Star rate={30} />
                    <Star rate={35} />
                </div>
                <Code target="star-rate" />

                <h3 className="comp-type">phSize(默认sm) 星星大小</h3>
                <div className="content">
                    <Star rate={40} phSize="sm" />
                    <Star rate={45} phSize="md" />
                    <Star rate={50} phSize="lg" />
                </div>
                <Code target="star-phsize" />
            </div>
        );
    }
}