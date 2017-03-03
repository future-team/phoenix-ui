import React, { Component } from "react";
import classnames from "classnames";
import {Icon, Accordion} from "phoenix-ui";
import Code from "./code/code";

export default class accordion extends Component{

    constructor(props,context){
        super(props,context);

        this.state = {
            visible : false
        }
    }

    onChange(visible){
        alert(visible);
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Accordion</h2>
                <h3 className="comp-type">visible(默认false) 初始可见值</h3>
                <Accordion>
                    <Accordion.Header>
                        标题一-收起
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul className="ph-accordion-list">
                            <li className="ph-accordion-item">内容一</li>
                        </ul>
                    </Accordion.Body>
                </Accordion>
                <Accordion visible={true}>
                    <Accordion.Header>
                        标题二-展开
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul className="ph-accordion-list">
                            <li className="ph-accordion-item">内容一</li>
                            <li className="ph-accordion-item">内容二</li>
                        </ul>
                    </Accordion.Body>
                </Accordion>
                <br/>
                <Code target="accordion-visible" />

                <h3 className="comp-type">hideIcon(默认false) 向下的按钮是否可见</h3>
                <Accordion hideIcon>
                    <Accordion.Header>
                        标题一
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul className="ph-accordion-list">
                            <li className="ph-accordion-item">内容一</li>
                        </ul>
                    </Accordion.Body>
                </Accordion>
                <br/>
                <Code target="accordion-hideicon" />
                
                <h3 className="comp-type">onChange 展开收起的回调函数</h3>
                <Accordion visible={this.state.visible} onChange={::this.onChange}>
                    <Accordion.Header>
                        标题一
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul className="ph-accordion-list">
                            <li className="ph-accordion-item">内容一</li>
                            <li className="ph-accordion-item">内容二</li>
                        </ul>
                    </Accordion.Body>
                </Accordion>
                <br/>
                <Code target="accordion-onchange" />
            </div>
        );
    }
}