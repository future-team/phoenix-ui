import React,{PropTypes,Component} from 'react';
import classnames from 'classnames';
import {Star,Label,FormGroup,Input,Switch,Button,Row,Col,Badge,Grid} from '../../src/index';

export default class Detail extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    static defaultProps = {
        index: 1
    }

    render() {
        return (
            <Grid className="detail-demo">
                <Row className='top'>
                    <Col className='col-40' style={{padding:'10px'}}>
                        <img src='./img/meinv.jpg' style={{width:'100%',height:'auto'}}/>
                    </Col>
                    <Col>
                        <Row>
                            <Col>容新馆。2号店</Col>
                        </Row>
                        <Row>
                            <Col><Star Rate={20}/></Col>
                            <Col style={{fontSize:'12px',marginLeft:'12px',color:'#999'}}>普通客户</Col>
                        </Row>
                        <Row>
                            <Col className='col-30'>shopid</Col>
                            <Col>1452635845</Col>
                        </Row>
                    </Col>
                </Row>
                <FormGroup>
                    <Row >
                        <Col className='col-60'>
                            <label >门店浏览量</label>
                            <div className='input'>395826</div>
                        </Col>
                        <Col className='input'>
                            <Button phStyle="primary" style={{marginTop:'6px'}}>查看主站页面</Button>
                        </Col>
                    </Row>
                    <Row>
                        <label>
                            关注热度
                        </label>
                        <Col className="input">
                            5人已关注
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href="###" className="navigate-right">
                                <label>性别</label>
                                <input type="text" placeholder="男/女" disabled/>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href="###" className="navigate-right">
                                <label>电话</label>
                                <Input type="text" placeholder="255136641" disabled/>
                            </a>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Row single>
                        <Col>
                            <Input type='text' value='数据产品' disabled/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href="###" className="navigate-right">
                                <label>售后报告</label>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href="###" className="navigate-right">
                                <label>人气排行榜</label>
                            </a>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup style={{marginBottom: '60px'}}>
                    <Row>
                        <Col>
                            <a href="###" className="navigate-right">
                                <label>点评合作</label>
                                <Input type='text' value='41份在线团单' disabled/>
                            </a>
                        </Col>
                    </Row>
                    <Row style={{height:'80px'}}>
                        <Col>
                            <Row>
                                <Col className='col-10' style={{margin: '8px 0 0 15px'}}>
                                    <Label>惠</Label>
                                </Col>
                                <Col className='input'>上海欢乐谷门票</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label>$190</label>
                                    <label>$200</label>
                                </Col>
                                <Col>
                                    <Input type='text' placeholder='已售13234份' disabled/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </FormGroup>
                <Row style={{padding:'15px',margin:0,borderTop:'1px solid #ddd',position:'fixed',bottom:'0',background:'#fff',width:'100%'}}>
                    <Col style={{textAlign:'center'}}><Button>上传POP</Button></Col>
                    <Col style={{textAlign:'center'}}><Button>POI报错</Button></Col>
                    <Col style={{textAlign:'center'}}><Button>上报WIFI</Button></Col>
                </Row>
            </Grid>
        )

    }
}