import React, { Component } from "react"

import Button from "phoenix-ui/lib/button"
import Code from "./code/code"

export default class button extends Component{
    render(){
        return(
            <div>
                <h2 className="comp-title">Button</h2>
                <h3 className="comp-type">phSize(默认sm) 按钮大小</h3>
                <div className="content">
                    <Button>默认sm</Button>
                    <br/>
                    <Button phSize="md">md 按钮</Button>
                    <br/>
                    <Button phSize="lg">lg 按钮</Button>
                </div>
                <Code target="button-phsize" />

                <h3 className="comp-type">phStyle(默认primary) 按钮颜色</h3>
                <div className="content">
                    <Button>默认Primary</Button>
                    <Button phStyle="info">Info</Button>
                    <Button phStyle="success">Success</Button>
                    <Button phStyle="error">Error</Button>
                    <Button phStyle="danger">Danger</Button>
                    <Button phStyle="warning">Warning</Button>
                    <Button phStyle="gray">Gray</Button>
                    <Button phStyle="link">Link</Button>
                </div>
                <Code target="button-phstyle" />

                <h3 className="comp-type">hollow属性</h3>
                <div className="content">
                    <Button hollow>按钮</Button>
                </div>
                <Code target="button-phstyle" />

                <h3 className="comp-type">block属性</h3>
                <div className="content">
                    <Button block>按钮</Button>
                </div>
                <Code target="button-block" />

                <h3 className="comp-type">disabled属性</h3>
                <div className="content">
                    <Button hollow disabled>按钮</Button>
                    <Button disabled>按钮</Button>
                </div>
                <Code target="button-disabled" />

                <h3 className="comp-type">active属性</h3>
                <div className="content">
                    <Button phStyle="gray" hollow active>按钮</Button>
                    <Button hollow active>按钮</Button>
                    <Button active>按钮</Button>
                </div>
                <Code target="button-active" />

                <h3 className="comp-type">phIcon属性</h3>
                <div className="content">
                    <Button phIcon="search" block>整体居中</Button>
                    <br/>
                    <Button phIcon="loading-white" block>整体居中</Button>
                </div>
                <Code target="button-phicon" />

                <h3 className="comp-type">stable属性</h3>
                <div className="content">
                    <Button phIcon="search" block stable>文字居中</Button>
                    <br/>
                    <Button phIcon="loading-white" block stable>文字居中</Button>
                </div>
                <Code target="button-stable" />
            </div>
        );
    }
}
