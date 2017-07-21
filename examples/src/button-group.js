import React, { Component } from "react"

import ButtonGroup from "phoenix-ui/lib/button-group"
import Button from "phoenix-ui/lib/button"
import Code from "./code/code"

export default class buttongroup extends Component{
    
    clickCallback(index){
        alert(index);
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">ButtonGroup</h2>
                <h3 className="comp-type">phType(默认default) 自适应宽度</h3>
                <div className="content">
                    <div className="comp-tip">default</div>
                    <ButtonGroup>
                        <Button phSize="lg">确定</Button>
                        <Button phSize="lg" phStyle="gray" hollow >取消</Button>
                    </ButtonGroup>
                </div>
                <Code target="button-group-phtype-default" />

                <div className="content">
                    <div className="comp-tip">justify 横向满行</div>
                    <ButtonGroup phType="justify">
                        <Button>justify1</Button>
                        <Button>justify2</Button>
                    </ButtonGroup>
                </div>
                <Code target="button-group-phtype-justify" />

                <div className="content">
                    <div className="comp-tip">segmente 行内元素，每一个标签固定宽度</div>
                    <ButtonGroup phType="segmente">
                        <Button>标签1</Button>
                        <Button>标签2</Button>
                        <Button>标签3</Button>
                    </ButtonGroup>
                </div>
                <Code target="button-group-phtype-segmente" />

                <div className="content">
                    <div className="comp-tip">tacked</div>
                    <ButtonGroup phType="tacked">
                        <Button block>tacked1</Button>
                        <Button block>tacked2</Button>
                        <Button block>tacked3</Button>
                    </ButtonGroup>
                </div>
                <Code target="button-group-phtype-tacked" />

                <h3 className="comp-type">index 选中的索引</h3>
                <div className="content">
                    <ButtonGroup phType="justify" index={1}>
                        <Button>justify1</Button>
                        <Button>justify2</Button>
                        <Button>justify3</Button>
                    </ButtonGroup>
                </div>
                <Code target="button-group-index" />

                <h3 className="comp-type">clickCallback 点击按钮组回调函数</h3>
                <div className="content">
                    <ButtonGroup phType="justify" clickCallback={this.clickCallback}>
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
