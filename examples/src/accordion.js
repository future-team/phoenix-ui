import React, { Component } from "react";
import classnames from "classnames";
import {Accordion} from "phoenix-ui";
import Code from "./code/code";

export default class accordion extends Component{

    constructor(props,context){
        super(props,context);

        this.state = {
            visible : false
        }
    }

    onChange(visible){
        this.setState({
            visible: visible
        });
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Accordion</h2>
                <h3 className="comp-type">visible(默认false) 初始可见值</h3>
                <Accordion>
                    <Accordion.Header>
                        标题一-收起<span className={classnames("ph-iconfont icon-chevron-more")} style={{float:"right"}}></span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul className="ph-accordion-list">
                            <li className="ph-accordion-item">内容一</li>
                        </ul>
                    </Accordion.Body>
                </Accordion>
                <Accordion visible={true}>
                    <Accordion.Header>
                        标题二-展开<span className={classnames("ph-iconfont icon-chevron-more")} style={{float:"right"}}></span>
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
                
                <h3 className="comp-type">onChange 展开收起的回调函数</h3>
                <Accordion visible={this.state.visible} onChange={(visible)=>{this.setState({visible: visible})}}>
                    <Accordion.Header>
                        标题一<span className={classnames("ph-iconfont icon-chevron-more", this.state.visible?"active":"")} style={{float:"right"}}></span>
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