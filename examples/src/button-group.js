import React, { Component } from "react";
import {ButtonGroup, Button} from "phoenix-ui";
import Code from "./code/code";

export default class input extends Component{
    
    activeCallback(target,html){
        console.log(target);
        alert(html);
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">ButtonGroup</h2>
                <h3 className="comp-type">phType(默认justify) 自适应宽度或垂直排列</h3>
                <div className="content">
                    <ButtonGroup>
                        <Button>justify1</Button>
                        <Button>justify2</Button>
                        <Button>justify3</Button>
                    </ButtonGroup>
                </div>
                <Code target="button-group-phtype-justify" />
                <div className="content">
                    <ButtonGroup phType="tacked">
                        <Button block>tacked1</Button>
                        <Button block>tacked2</Button>
                        <Button block>tacked3</Button>
                    </ButtonGroup>
                </div>
                <Code target="button-group-phtype-tacked" />

                <h3 className="comp-type">activeCallback 点击按钮组回调函数</h3>
                <div className="content">
                    <ButtonGroup activeCallback={this.activeCallback}>
                        <Button>justify1</Button>
                        <Button>justify2</Button>
                        <Button>justify3</Button>
                    </ButtonGroup>
                </div>
                <Code target="button-group-callback" />
            </div>
        );
    }
}
