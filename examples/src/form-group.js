import React, { Component } from "react";
import {FormGroup,Row,Col,Input} from "phoenix-ui";
import Code from "./code/code";

export default class formgroup extends Component{

    constructor(props,context){

        super(props,context);

        this.state = {
            name:""
        };
    }

    setValue(key,e){
        let o ={};
        o[key || e.target.name] = e.target.value;
        this.setState(o);
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">FormGroup</h2>
                <h3 className="comp-type">单列</h3>
                <div className="contents">
                    <FormGroup>
                        <Row single>
                            <Col>
                                <Input type="text" placeholder="姓名" />
                            </Col>
                        </Row>
                        <Row single>
                            <Col>
                                <Input type="text" placeholder="用户名" />
                            </Col>
                        </Row>
                    </FormGroup>
                </div>
                <Code target="form-group-single" />

                <h3 className="comp-type">多列</h3>
                <div className="contents">
                    <FormGroup>
                        <Row>
                            <Col>
                                <label>地址</label>
                                <Input type="text" placeholder="地址" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label>省</label>
                                <Input type="text" placeholder="省" />
                            </Col>
                            <Col>
                                <label>市</label>
                                <Input type="text" placeholder="市" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <Code target="form-group-multiple" />

                    <FormGroup>
                        <Row>
                            <Col>
                                <a href="javascript:;" className="ph-navigate-right">
                                    <label><span className="color-error">*</span>性别</label>
                                    <input type="text" placeholder="男/女" disabled/>
                                </a>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Code target="form-group-a" />
                    
                    <FormGroup>
                        <Row>
                            <Col>
                                <label>兴趣爱好</label>
                                <Input type="checkbox" label="篮球" />
                                <Input type="checkbox" label="足球" />
                                <Input type="checkbox" label="乒乓球" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label>喜欢的水果</label>
                                <div style={{textAlign: "right"}}>
                                    <Input type="radio" label="苹果" name="fruit" />
                                    <Input type="radio" label="香蕉" name="fruit" />
                                </div>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Code target="form-group-input" />
                </div>
            </div>
        );
    }
}