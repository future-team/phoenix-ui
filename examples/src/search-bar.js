import React, { Component } from "react"

import SearchBar from "phoenix-ui/lib/search-bar"
import Code from "./code/code"

export default class searchBar extends Component{

    render(){
        return(
            <div>
            	<h2 className="comp-title">SearchBar</h2>
                <h3 className="comp-type">buttonText 按钮文字</h3>
                <SearchBar buttonText="no" />
                <Code target="search-buttontext" />

                <h3 className="comp-type">placeholder 输入框占位符</h3>
                <SearchBar placeholder="请输入..." />
                <Code target="search-placeholder" />

                <h3 className="comp-type">clickCallback 点击按钮的回调</h3>
                <SearchBar clickCallback={(query)=>{alert(query)}} />
                <Code target="search-clickcallback" />

                <h3 className="comp-type">queryCallback 搜索的回调(键盘的回车/搜索)</h3>
                <SearchBar queryCallback={(query)=>{alert(query)}} />
                <Code target="search-querycallback" />

                <h3 className="comp-type">focusCallback 聚焦的回调</h3>
                <SearchBar focusCallback={()=>{console.log("focus")}} />
                <Code target="search-focuscallback" />

                <h3 className="comp-type">blurCallback 失焦的回调</h3>
                <SearchBar blurCallback={()=>{console.log("blur")}} />
                <Code target="search-blurcallback" />
            </div>
        );
    }
}