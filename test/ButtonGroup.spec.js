'use strict';

import React from 'react';
import {findDOMNode} from 'react-dom';
import assert from 'assert';
import TestUtils from 'react/lib/ReactTestUtils.js';
import {shallowRender} from './utils/Tool';

import Button from '../src/Button';
import ButtonGroup from '../src/ButtonGroup';

describe("<ButtonGroup/>", function(){
    it('默认justify', ()=>{
        const buttonGroup = shallowRender(
            <ButtonGroup>
                <Button>水平按钮组1</Button>
                <Button>水平按钮组2</Button>
            </ButtonGroup>
        );
        assert(buttonGroup.props.className.match('justify'));
    });

    it('phType设置为tacked', ()=>{
        const buttonGroup = shallowRender(
            <ButtonGroup phType="tacked">
                <Button block>垂直按钮组1</Button>
                <Button block>垂直按钮组2</Button>
            </ButtonGroup>
        );
        assert(buttonGroup.props.className.match('tacked'));
    });

    it('点击按钮是否选中', ()=>{
        const buttonGroup = TestUtils.renderIntoDocument(
            <ButtonGroup>
                <Button>水平按钮组1</Button>
                <Button>水平按钮组2</Button>
            </ButtonGroup>
        );
        const button = TestUtils.scryRenderedDOMComponentsWithTag(buttonGroup, 'button')[0];

        TestUtils.Simulate.click(button);
        assert(button.className.match('active'));
    });

    it('点击按钮是否执行activeCallback', ()=>{
        let flag = false;
        const buttonGroup = TestUtils.renderIntoDocument(
            <ButtonGroup activeCallback={()=>{flag=true;}}>
                <Button>水平按钮组1</Button>
                <Button>水平按钮组2</Button>
            </ButtonGroup>
        );
        const button = TestUtils.scryRenderedDOMComponentsWithTag(buttonGroup, 'button')[0];

        TestUtils.Simulate.click(button);
        assert.equal(flag, true);
    });
});