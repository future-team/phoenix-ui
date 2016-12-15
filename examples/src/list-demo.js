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
            <div className="list-demo">
                <div className="list-item">
                    <Row>
                        <Col>三人行骨头王火锅</Col>
                    </Row>
                    <Row className="row-label">
                        <Col>
                            <Label phSize="">惠</Label>
                            <Label phSize="" phStyle="info">团</Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Star Rate={20} size=''/>
                        </Col>
                    </Row>
                    <Row className="row-address">
                        <Col>
                            <span>休闲娱乐|黄浦路 南京东路819号百联世贸7楼</span>
                            <span>5.4km</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button phSize="">非本战区 公海</Button>
                        </Col>
                    </Row>
                </div>
                <div className="list-item">
                    <Row>
                        <Col>三人行骨头王火锅</Col>
                    </Row>
                    <Row className="row-label">
                        <Col>
                            <Label phSize="">惠</Label>
                            <Label phSize="" phStyle="info">团</Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Star Rate={20} size=''/>
                        </Col>
                    </Row>
                    <Row className="row-address">
                        <Col>
                            <span>休闲娱乐|黄浦路 南京东路819号百联世贸7楼</span>
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