import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {FormGroup,Row,Col,Input} from '../../src/index';

export default class formgroup extends Component{

    constructor(props,context){

        super(props,context);

        this.state = {
            name:''
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
                    <Row single>
                        <Col>
                            <Input type="text" placeholder="身份证" />
                        </Col>
                    </Row>
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
                    <Row className='a'>
                        <Col className='test'>
                            <label>兴趣爱好</label>
                            <Input type="checkbox" label="篮球" className='a1'/>
                            <Input type="checkbox" label="足球" />
                            <Input type="checkbox" label="乒乓球" />
                        </Col>
                    </Row>
                    <Row className='test'>
                        <Col>
                            <a href="###" className="navigate-right">
                                <label><span className="color-error">*</span>性别</label>
                                <input type="text" placeholder="男/女" disabled/>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>喜欢的水果</label>
                            <div className="input" style={{textAlign: 'right'}}>
                                <Input type="checkbox" label="苹果" />
                                <Input type="checkbox" label="香蕉" />
                            </div>
                        </Col>
                    </Row>
                </FormGroup>
            </div>
        );
    }
}