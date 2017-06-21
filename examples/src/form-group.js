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
                <FormGroup>
                    <Row>
                        <Col>
                            <Input type="text" placeholder="姓名" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input type="text" placeholder="用户名" />
                        </Col>
                    </Row>
                </FormGroup>
                <Code target="form-group-single" />

                <h3 className="comp-type">多列</h3>
                <FormGroup>
                    <Row>
                        <Col title>
                            <label>地址</label>
                        </Col>
                        <Col>
                            <Input type="text" placeholder="地址" />
                        </Col>
                    </Row>
                    <Row>
                        <Col title>
                            <label>省</label>
                        </Col>
                        <Col>
                            <Input type="text" placeholder="省" />
                        </Col>
                        <Col title>
                            <label>市</label>
                        </Col>
                        <Col>
                            <Input type="text" placeholder="市" />
                        </Col>
                    </Row>
                </FormGroup>
                <Code target="form-group-multiple" />

                <FormGroup>
                    <Row className="ph-navigate-right">
                        <Col title>
                            <label><span className="color-error">*</span>性别</label>
                        </Col>
                        <Col right>
                            <input type="text" placeholder="男/女" disabled />
                        </Col>
                    </Row>
                </FormGroup>
                <Code target="form-group-a" />
                    
                <FormGroup>
                    <Row>
                        <Col title>
                            <label>兴趣爱好</label>
                        </Col>
                        <Col right>
                            <Input type="checkbox" label="篮球" />
                            <Input type="checkbox" label="足球" />
                            <Input type="checkbox" label="乒乓球" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>喜欢的水果</label>
                        </Col>
                        <Col right>
                            <div>
                                <Input type="radio" label="苹果" name="fruit" />
                                <Input type="radio" label="香蕉" name="fruit" />
                            </div>
                        </Col>
                    </Row>
                </FormGroup>
                <Code target="form-group-input" />
            </div>
        );
    }
}