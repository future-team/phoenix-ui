import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {FormGroup,Row,Col,Input} from '../../src/index';

export default class input extends Component{

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
                            <label for="">地址</label>
                            <Input type="text" placeholder="身份证" />
                        </Col>
                    </Row>
                    <Row className='a'>
                        <Col className='test'>
                            <label for="">兴趣爱好</label>
                            <Input type="checkbox" label="篮球" className='a1'/>
                            <Input type="checkbox" label="足球" />
                            <Input type="checkbox" label="乒乓球" />
                        </Col>
                    </Row>
                    <Row className='test'>
                        <Col>
                            <a href="###" className="navigate-right">
                                <label>性别</label>
                                <input type="text" placeholder="男/女" disabled/>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>姓</label>
                            <Input type="text" placeholder="姓" />
                        </Col>
                        <Col>
                            <label>名</label>
                            <Input type="text" placeholder="名" />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <label><span className="color-error">*</span>喜欢的运动</label>
                            <div className="input" style={{textAlign: 'right'}}>
                                <Input type="checkbox" label="篮球" />
                                <Input type="checkbox" label="足球" />
                            </div>
                        </Col>
                    </Row>
                </FormGroup>
            </div>
        );
    }
}