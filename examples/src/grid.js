
import React, { Component ,PropTypes} from 'react';
import ReactDOM from 'react-dom';

import {Row,Col} from '../../src/index';

export default class FilterDemo extends Component {
    showAlert(){
        alert(1);
    };
    render(){
        return(
            <div>
                <Row align="stretch">
                    <Col>
                        <div className='col-demo'>
                            stretch
                        </div>
                    </Col>
                    <Col>
                        <div className='col-demo'>
                            stretch
                        </div>
                    </Col>
                    <Col>
                        <div className='col-demo'>
                            stretch
                        </div>
                    </Col>
                    <Col>
                        <div className='col-demo'>
                            1<br />2<br />3<br />4<br />4
                        </div>
                    </Col>
                </Row>
                <Row align="baseline">
                    <Col>
                        <div className='col-demo'>
                            ffff ffff ff ffff
                        </div>
                    </Col>
                    <Col>
                        <div className='col-demo'>
                            base line
                        </div>
                    </Col>
                    <Col>
                        <div className='col-demo'>
                            baseli ne
                        </div>
                    </Col>
                    <Col>
                        <div className='col-demo'>
                            1<br />2<br />3<br />4<br />4
                        </div>
                    </Col>
                </Row>
                <Row align="top">
                    <Col>
                        <div className='col-demo'>
                            top
                        </div>
                    </Col>
                    <Col>
                        <div className='col-demo'>
                            top
                        </div>
                    </Col>
                    <Col>
                        <div className='col-demo'>
                            top
                        </div>
                    </Col>
                    <Col>
                        <div className='col-demo'>
                            1<br />2<br />3<br />4<br />4
                        </div>
                    </Col>
                </Row>

                <Row align="bottom">
                    <Col>
                        <div className='col-demo'>
                            bottom
                        </div>
                    </Col>
                    <Col>
                        <div className='col-demo'>
                            bottom
                        </div>
                    </Col>
                    <Col>
                        <div className='col-demo'>
                            bottom
                        </div>
                    </Col>
                    <Col>
                        <div className='col-demo'>
                            1<br />2<br />3<br />4<br />4
                        </div>
                    </Col>
                </Row>

                <Row align="center">
                    <Col>
                        <div className='col-demo'>
                            center
                        </div>
                    </Col>
                    <Col>
                        <div className='col-demo'>
                            center
                        </div>
                    </Col>
                    <Col>
                        <div className='col-demo'>
                            center
                        </div>
                    </Col>
                    <Col>
                        <div className='col-demo'>
                            1<br />2<br />3<br />4<br />4
                        </div>
                    </Col>
                </Row>

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
                            1<br />2<br />3<br />4<br />4
                        </div>
                    </Col>
                </Row>


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
                            auto auto auto
                        </div>
                    </Col>
                    <Col>
                        <div className='col-demo'>
                            auto auto auto auto
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col width="5">
                        <div className='col-demo'>
                            5
                        </div>
                    </Col>
                    <Col width="10">
                        <div className='col-demo'>
                            10
                        </div>
                    </Col>
                    <Col width="15">
                        <div className='col-demo'>
                            15
                        </div>
                    </Col>
                    <Col offset="10" width="10">
                        <div className='col-demo'>
                            10
                        </div>
                    </Col>
                    <Col width="20">
                        <div className='col-demo'>
                            1<br />2<br />3<br />4
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col width="50">
                        <div className='col-demo'>
                            5
                        </div>
                    </Col>
                    <Col offset="10" width="20">
                        <div className='col-demo'>
                            1<br />2<br />3<br />4
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
