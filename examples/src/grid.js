import React, { Component } from "react";
import {Grid,Row,Col} from "phoenix-ui";
import Code from "./code/code";

export default class grid extends Component {
    
    render(){
        return(
            <div>
                <h2 className="comp-title">Grid</h2>
                <h3 className="comp-type"><strong>Row</strong></h3>
                <h3 className="comp-type">align(默认stretch) 容器属性</h3>
                <h3 className="comp-tip">stretch</h3>
                <Grid className="content">
                    <Row align="stretch">
                        <Col>
                            <div className="col-demo">stretch</div>
                        </Col>
                        <Col>
                            <div className="col-demo">stretch<br />baseline</div>
                        </Col>
                        <Col>
                            <div className="col-demo">stretch<br />stretch<br />stretch</div>
                        </Col>
                    </Row>
                </Grid>
                <h3 className="comp-tip">baseline</h3>
                <Grid className="content">
                    <Row align="baseline">
                        <Col>
                            <div className="col-demo">baseline</div>
                        </Col>
                        <Col>
                            <div className="col-demo">baseline<br />baseline</div>
                        </Col>
                        <Col>
                            <div className="col-demo">baseline<br />baseline<br />baseline</div>
                        </Col>
                    </Row>
                </Grid>
                <h3 className="comp-tip">top</h3>
                <Grid className="content">
                    <Row align="top">
                        <Col>
                            <div className="col-demo">top</div>
                        </Col>
                        <Col>
                            <div className="col-demo">top<br />top</div>
                        </Col>
                        <Col>
                            <div className="col-demo">top<br />top<br />top</div>
                        </Col>
                    </Row>
                </Grid>
                <h3 className="comp-tip">bottom</h3>
                <Grid className="content">
                    <Row align="bottom">
                        <Col>
                            <div className="col-demo">bottom</div>
                        </Col>
                        <Col>
                            <div className="col-demo">bottom<br />bottom</div>
                        </Col>
                        <Col>
                            <div className="col-demo">bottom<br />bottom<br />bottom</div>
                        </Col>
                    </Row>
                </Grid>
                <h3 className="comp-tip">center</h3>
                <Grid className="content">
                    <Row align="center">
                        <Col>
                            <div className="col-demo">center</div>
                        </Col>
                        <Col>
                            <div className="col-demo">center<br />center</div>
                        </Col>
                        <Col>
                            <div className="col-demo">center<br />center<br />center</div>
                        </Col>
                    </Row>
                </Grid>
                <Code target="row-align" />

                <h3 className="comp-type"><strong>Col</strong></h3>
                <h3 className="comp-type">align(默认auto) 项目属性</h3>
                <h3 className="comp-tip">auto</h3>
                <Grid className="content">
                    <Row>
                        <Col>
                            <div className="col-demo">auto</div>
                        </Col>
                        <Col>
                            <div className="col-demo">auto auto</div>
                        </Col>
                        <Col>
                            <div className="col-demo">auto auto auto auto</div>
                        </Col>
                    </Row>
                </Grid>
                <h3 className="comp-tip">top/center/bottom</h3>
                <Grid className="content">
                    <Row>
                        <Col align="top">
                            <div className="col-demo">top</div>
                        </Col>
                        <Col align="center">
                            <div className="col-demo">center</div>
                        </Col>
                        <Col align="bottom">
                            <div className="col-demo">bottom</div>
                        </Col>
                        <Col>
                            <div className="col-demo">top<br />center<br />bottom</div>
                        </Col>
                    </Row>
                </Grid>
                <Code target="col-align" />

                <h3 className="comp-type">width 设置项目宽度百分比</h3>
                <Grid className="content">
                    <Row>
                        <Col width="15">
                            <div className="col-demo">15</div>
                        </Col>
                        <Col width="20">
                            <div className="col-demo">20</div>
                        </Col>
                        <Col width="25">
                            <div className="col-demo">25</div>
                        </Col>
                        <Col width="40">
                            <div className="col-demo">40<br />40<br />40</div>
                        </Col>
                    </Row>
                </Grid>
                <Code target="col-width" />

                <h3 className="comp-type">offset(即margin-left) 偏移值</h3>
                <Grid className="content">
                    <Row>
                        <Col width="20" offset="10">
                            <div className="col-demo">10</div>
                        </Col>
                        <Col width="40" offset="10" >
                            <div className="col-demo">10<br />10<br />10</div>
                        </Col>
                    </Row>
                </Grid>
                <Code target="col-offset" />
            </div>
        )
    }
}
