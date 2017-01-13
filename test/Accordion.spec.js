'use strict';

import React from 'react';
import {findDOMNode} from 'react-dom';
import assert from 'assert';
import TestUtils from 'react/lib/ReactTestUtils.js';

import Accordion from '../src/Accordion';

describe("<Accordion/>", function(){
    let visible, onChange;

    beforeEach(()=>{
        visible = false;
        onChange = ()=>{
            visible = !visible;
        }
    });

    it('click', function(){
        visible = false;
        const accordion = TestUtils.renderIntoDocument(
            <Accordion visible={visible} onChange={onChange}>
                <Accordion.Header>
                    标题一
                </Accordion.Header>
                <Accordion.Body>
                    内容一
                </Accordion.Body>
            </Accordion>
        );
        const accordionHeader = TestUtils.scryRenderedDOMComponentsWithClass(accordion,'ph-accordion-header')[0];
        const accordionBody = TestUtils.scryRenderedDOMComponentsWithClass(accordion,'ph-accordion-body')[0];

        TestUtils.Simulate.click(accordionHeader);
        // 未完成
        console.log(parseInt(findDOMNode(accordionBody).style.height));
        // assert.notEqual(parseInt(findDOMNode(accordionBody).style.height), 0);
    });
});