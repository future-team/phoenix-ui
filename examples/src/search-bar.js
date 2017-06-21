import React, { Component } from "react";
import {SearchBar} from "phoenix-ui";
import Code from "./code/code";

export default class searchBar extends Component{
    queryCallback(value){
        console.log(value)
    }

    clickCallback(){
        console.log('取消！！')
    }

    render(){
        return(
            <div>
            	<h2 className="comp-title">SearchBar</h2>
                <h3 className="comp-type">...</h3>
                <SearchBar queryCallback={this.queryCallback.bind(this)} clickCallback={this.clickCallback.bind(this)}/>
                <Code target="badge-phstyle" />
            </div>
        );
    }
}