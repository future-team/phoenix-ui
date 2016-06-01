import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Input,Row,Col,Label,Star,Button} from '../../src/index';

export default class Demo extends Component{

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
            <div style={{
                    padding:'5px 15px'
                }}>
                <div style={{
                    borderBottom:'1px solid #ccc'
                }}>
                    <Row>
                        <Col>三人行骨头王火锅</Col>
                    </Row>
                    <Row>
                        <Col>
                            <Label phSize="" style={{
                            marginRight:'5px'
                        }}>惠</Label>
                            <Label phSize="" phStyle="info">团</Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Star Rate={20} size=''/>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{
                        fontSize:'12px',
                        color:'#999'
                    }}>
                            <span>休闲娱乐|黄浦路  南京东路819号百联世贸7楼</span>
                            <span>5.4km</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button phSize="">非本战区 公海</Button>
                        </Col>
                    </Row>
                </div>
                <div style={{
                    borderBottom:'1px solid #ccc'
                }}>
                    <Row>
                        <Col>三人行骨头王火锅</Col>
                    </Row>
                    <Row>
                        <Col>
                            <Label phSize="" style={{
                            marginRight:'5px'
                        }}>惠</Label>
                            <Label phSize="" phStyle="info">团</Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Star Rate={20} size=''/>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{
                        fontSize:'12px',
                        color:'#999'
                    }}>
                            <span>休闲娱乐|黄浦路  南京东路819号百联世贸7楼</span>
                            <span>5.4km</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button phSize="">非本战区 公海</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}