import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import classnames from 'classnames';
import {Row, Col, Accordion} from '../../src/index';

export default class drawer extends Component{

    constructor(props,context){
        super(props,context);

        this.state = {
            visible: false,
            visible1: false
        } 
    }

    onChange(){ // 第一种 直接传onChange
        this.setState({
          visible: !this.state.visible,
        });
    }

    onChange1(){ // 第二种 给Header绑定事件
        this.setState({
          visible1: !this.state.visible1,
        });
    }

    render(){
        return(
            <div>
                <Accordion visible={this.state.visible} onChange={::this.onChange}>
                    <Accordion.Header>
                        标题一<span className={classnames("iconfont icon-chevron-more", this.state.visible?'active':'')} style={{float:'right'}}></span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul className="accordion-list">
                            <li className="accordion-item">内容一</li>
                            <li className="accordion-item">内容二</li>
                            <li className="accordion-item">内容三</li>
                        </ul>
                    </Accordion.Body>
                </Accordion>
                <br />
                <Accordion visible={this.state.visible1}>
                    <Accordion.Header onClick={::this.onChange1}>
                        标题二<span className={classnames("iconfont icon-chevron-more", this.state.visible1?'active':'')} style={{float:'right'}}></span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul className="accordion-list">
                            <li className="accordion-item">内容一</li>
                            <li className="accordion-item">内容二</li>
                            <li className="accordion-item">内容三</li>
                        </ul>
                    </Accordion.Body>
                </Accordion>
            </div>
        );
    }
}