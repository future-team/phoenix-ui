import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import classnames from 'classnames';
import {Row, Col, Accordion} from '../../src/index';

export default class accordion extends Component{

    constructor(props,context){
        super(props,context);

        this.state = {
            visible: false
        } 
    }

    onChange(){
        this.setState({
          visible: !this.state.visible,
        });
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Accordion</h2>
                <h3 className="comp-type">手风琴</h3>
                <Accordion visible={this.state.visible} onChange={::this.onChange}>
                    <Accordion.Header>
                        标题一<span className={classnames("ph-iconfont icon-chevron-more", this.state.visible?'active':'')} style={{float:'right'}}></span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul className="ph-accordion-list">
                            <li className="ph-accordion-item">内容一</li>
                            <li className="ph-accordion-item">内容二</li>
                            <li className="ph-accordion-item">内容三</li>
                        </ul>
                    </Accordion.Body>
                </Accordion>
            </div>
        );
    }
}