import React, { Component } from "react"
import Code from "./code/code"

export default class icon extends Component{
    constructor(props,context){
        super(props,context); 

        this.skin = localStorage.skinTheme || "apollo"; // apollo
        this.IOSSkin = document.getElementById('IOSSkin');
        this.href = "http://future-team.github.io/phoenix-styles/dist/skin-ios.min.css";
    }

    skinSwitch(){
        localStorage.skinTheme = this.skin=="apollo"? "ios":"apollo";

        window.location.reload();
    }

    render(){
        return(
            <div>
            	<h2 className="comp-title">phoenix-styles</h2>
                <button className="switch-skin ph-button ph-button-primary" href="javascript:;" onClick={::this.skinSwitch}>切换皮肤: {this.skin}</button>
                <h3 className="comp-type">安装</h3>
                <div className="content">
                    <code>
                        npm install phoenix-styles --save
                    </code>
                </div>
                <h3 className="comp-type">使用</h3>
                <div className="content">
                    <h3 className="comp-tip">全局引入</h3>
                    <code>
                        &lt;link rel="stylesheet" href="http://future-team.github.io/phoenix-styles/dist/phoenix-styles.min.css" /&gt; <br/>
                        <br/>
                        // 使用IOS skin需要额外引入skin-ios.min.css <br/>
                        &lt;link rel="stylesheet" href="http://future-team.github.io/phoenix-styles/dist/skin-ios.min.css" /&gt;
                    </code>
                    <h3 className="comp-tip">ES6</h3>
                    <code>
                        import 'phoenix-styles/less/phoenix-styles.less'; <br/>
                        import 'phoenix-styles/less/ios-skin.less';
                    </code>
                </div>
            </div>
        );
    }
}