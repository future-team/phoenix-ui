
import React, { Component ,PropTypes} from 'react';
import ReactDOM from 'react-dom';

import {Grid,Row,Col} from '../../src/index';

export default class grid extends Component {
    
    render(){
        return(
            <div>
                <h2 className="comp-title">Grid</h2>
                <h3 className="comp-type">容器属性 align-items(default:stretch)</h3>
                <h3 className="comp-tip">stretch</h3>
                <Grid className="content">
                    <Row align="stretch">
                        <Col>
                            <div className='col-demo'>
                                stretch
                            </div>
                        </Col>
                        <Col>
                            <div className='col-demo'>
                                stretch<br />baseline
                            </div>
                        </Col>
                        <Col>
                            <div className='col-demo'>
                                stretch<br />stretch<br />stretch<br />stretch
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <h3 className="comp-tip">baseline</h3>
                <Grid className="content">
                    <Row align="baseline">
                        <Col>
                            <div className='col-demo'>
                                baseline
                            </div>
                        </Col>
                        <Col>
                            <div className='col-demo'>
                                baseline<br />baseline
                            </div>
                        </Col>
                        <Col>
                            <div className='col-demo'>
                                baseline<br />baseline<br />baseline<br />baseline
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <h3 className="comp-tip">top</h3>
                <Grid className="content">
                    <Row align="top">
                        <Col>
                            <div className='col-demo'>
                                top
                            </div>
                        </Col>
                        <Col>
                            <div className='col-demo'>
                                top<br />top
                            </div>
                        </Col>
                        <Col>
                            <div className='col-demo'>
                                top<br />top<br />top<br />top
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <h3 className="comp-tip">bottom</h3>
                <Grid className="content">
                    <Row align="bottom">
                        <Col>
                            <div className='col-demo'>
                                bottom
                            </div>
                        </Col>
                        <Col>
                            <div className='col-demo'>
                                bottom<br />bottom
                            </div>
                        </Col>
                        <Col>
                            <div className='col-demo'>
                                bottom<br />bottom<br />bottom<br />bottom
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <h3 className="comp-tip">center</h3>
                <Grid className="content">
                    <Row align="center">
                        <Col>
                            <div className='col-demo'>
                                center
                            </div>
                        </Col>
                        <Col>
                            <div className='col-demo'>
                                center<br />center
                            </div>
                        </Col>
                        <Col>
                            <div className='col-demo'>
                                center<br />center<br />center<br />center
                            </div>
                        </Col>
                    </Row>
                </Grid>

                <h3 className="comp-type">项目属性 align-self(default:auto)</h3>
                <h3 className="comp-tip">auto</h3>
                <Grid className="content">
                    <Row>
                        <Col>
                            <div className='col-demo'>
                                auto
                            </div>
                        </Col>
                        <Col>
                            <div className='col-demo'>
                                auto auto
                            </div>
                        </Col>
                        <Col>
                            <div className='col-demo'>
                                auto auto auto auto
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <h3 className="comp-tip">top/center/bottom</h3>
                <Grid className="content">
                    <Row>
                        <Col align="top">
                            <div className='col-demo'>
                                top
                            </div>
                        </Col>
                        <Col align="center">
                            <div className='col-demo'>
                                center
                            </div>
                        </Col>
                        <Col align="bottom">
                            <div className='col-demo'>
                                bottom
                            </div>
                        </Col>
                        <Col >
                            <div className='col-demo'>
                                top<br />center<br />bottom
                            </div>
                        </Col>
                    </Row>
                </Grid>

                <h3 className="comp-type">项目属性 flex</h3>
                <h3 className="comp-tip">width</h3>
                <Grid className="content">
                    <Row>
                        <Col width="15">
                            <div className='col-demo'>
                                15
                            </div>
                        </Col>
                        <Col width="20">
                            <div className='col-demo'>
                                20
                            </div>
                        </Col>
                        <Col width="25">
                            <div className='col-demo'>
                                25
                            </div>
                        </Col>
                        <Col width="40">
                            <div className='col-demo'>
                                40<br />40<br />40
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <h3 className="comp-tip">offset (margin-left)</h3>
                <Row>
                    <Col width="20" offset="10">
                        <div className='col-demo'>
                            10
                        </div>
                    </Col>
                    <Col width="40" offset="10" >
                        <div className='col-demo'>
                            10<br />10<br />10
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
