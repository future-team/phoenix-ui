import React, { Component } from "react";
import {ButtonGroup, Button} from "phoenix-ui";
import Code from "./code/code";

export default class buttongroup extends Component{
    
    onButtongroupChange(index){
        alert(index);
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">ButtonGroup</h2>
                <h3 className="comp-type">phType(默认default) 自适应宽度或垂直排列</h3>
                <div className="content">
                    <div className="comp-tip">default</div>
                    <ButtonGroup>
                        <Button phSize="lg">确定</Button>
                        <Button phSize="lg" phStyle="gray" hollow >取消</Button>
                    </ButtonGroup>
                    <div className="comp-tip">justify 横向满行，适用于弹框按钮等</div>
                    <ButtonGroup phType="justify">
                        <Button phSize="lg">justify1</Button>
                        <Button phSize="lg">justify2</Button>
                    </ButtonGroup>
                    <div className="comp-tip">segmente 行内元素，每一个标签固定宽度</div>
                    <ButtonGroup phType="segmente">
                        <Button>标签1</Button>
                        <Button>标签2</Button>
                        <Button>标签3</Button>
                    </ButtonGroup>
                    <div className="comp-tip">tacked</div>
                    <ButtonGroup phType="tacked">
                        <Button block>tacked1</Button>
                        <Button block>tacked2</Button>
                        <Button block>tacked3</Button>
                    </ButtonGroup>
                </div>
                <Code target="button-group-phtype-justify" />
                <Code target="button-group-phtype-tacked" />

                <h3 className="comp-type">activeIndex 选中的索引</h3>
                <div className="content">
                    <ButtonGroup phType="justify" activeIndex={1}>
                        <Button>justify1</Button>
                        <Button>justify2</Button>
                        <Button>justify3</Button>
                    </ButtonGroup>
                </div>
                <Code target="button-group-callback" />

                <h3 className="comp-type">onButtongroupChange 点击按钮组回调函数</h3>
                <div className="content">
                    <ButtonGroup phType="justify" onButtongroupChange={this.onButtongroupChange}>
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
