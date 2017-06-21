import React, { Component } from "react";
import classnames from "classnames";
import {Accordion, List, Col} from "phoenix-ui";
import Code from "./code/code";

export default class accordion extends Component{

    constructor(props,context){
        super(props,context);

        this.state = {
            visible : false
        }
    }

    onAccordionChange(visible){
        alert(visible);
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Accordion</h2>
                <h3 className="comp-type">visible(默认false) 初始可见值</h3>
                <Accordion>
                    <Accordion.Header>标题一(收起状态)</Accordion.Header>
                    <Accordion.Body>
                        <List>
                            <List.Item>
                                <Col>未上线单店</Col>
                            </List.Item>
                            <List.Item>
                                <Col>未上线连锁店</Col>
                            </List.Item>
                        </List>
                    </Accordion.Body>
                </Accordion>
                <Accordion visible={true}>
                    <Accordion.Header>标题二(展开状态)</Accordion.Header>
                    <Accordion.Body>
                        <List>
                            <List.Item>
                                <Col>未上线单店</Col>
                            </List.Item>
                            <List.Item>
                                <Col>未上线连锁店</Col>
                            </List.Item>
                        </List>
                    </Accordion.Body>
                </Accordion>
                <Code target="accordion-visible" />

                <h3 className="comp-type">hideIcon(默认false) 向下的按钮是否可见</h3>
                <Accordion hideIcon>
                    <Accordion.Header>
                        标题一
                    </Accordion.Header>
                    <Accordion.Body>
                        <List>
                            <List.Item>
                                <Col>未上线单店</Col>
                            </List.Item>
                            <List.Item>
                                <Col>未上线连锁店</Col>
                            </List.Item>
                        </List>
                    </Accordion.Body>
                </Accordion>
                <Code target="accordion-hideicon" />
                
                <h3 className="comp-type">onAccordionChange 展开收起的回调函数</h3>
                <Accordion visible={this.state.visible} onAccordionChange={this.onAccordionChange.bind(this)}>
                    <Accordion.Header>
                        标题一
                    </Accordion.Header>
                    <Accordion.Body>
                        <List>
                            <List.Item>
                                <Col>未上线单店</Col>
                            </List.Item>
                            <List.Item>
                                <Col>未上线连锁店</Col>
                            </List.Item>
                        </List>
                    </Accordion.Body>
                </Accordion>
                <Code target="accordion-onaccordionchange" />
            </div>
        );
    }
}