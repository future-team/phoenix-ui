import React, { Component } from "react";
import {Button} from "phoenix-ui";
import Code from "./code/code";

export default class button extends Component{
    render(){
        return(
            <div className="ph-transition-item">
                <h2 className="comp-title">Button</h2>
                <h3 className="comp-type">phSize(默认sm) 按钮大小</h3>
                <div className="content">
                    <Button>默认sm</Button>
                    <Button phSize="md">md</Button>
                    <Button phSize="lg">lg</Button>
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
                    <Button hollow>hollow</Button>
                </div>
                <Code target="button-phstyle" />

                <h3 className="comp-type">radius属性</h3>
                <div className="content">
                    <Button radius>radius</Button>
                </div>
                <Code target="button-radius" />

                <h3 className="comp-type">block属性</h3>
                <div className="content">
                    <Button block>block</Button>
                </div>
                <Code target="button-block" />

                <h3 className="comp-type">disabled属性</h3>
                <div className="content">
                    <Button disabled>disabled</Button>
                </div>
                <Code target="button-disabled" />

                <h3 className="comp-type">active属性</h3>
                <div className="content">
                    <Button active>active</Button>
                </div>
                <Code target="button-active" />
            </div>
        );
    }
}
