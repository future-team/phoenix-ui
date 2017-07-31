'use strict'

import React from 'react'
import {findDOMNode} from 'react-dom'
import assert from 'assert'
import TestUtils from 'react/lib/ReactTestUtils.js'
import {shallowRender} from '../utils/TestTool'

import Button from '../button'
import ButtonGroup from './index'

describe("<ButtonGroup/>", function(){
    it('默认default', ()=>{
        const buttonGroup = shallowRender(
            <ButtonGroup>
                <Button>水平按钮组1</Button>
                <Button>水平按钮组2</Button>
            </ButtonGroup>
        );
        assert(buttonGroup.props.className.match('default'))
    })

    it('activeIndex设置为1', ()=>{
        let activeIndex = 1
        const buttonGroup = TestUtils.renderIntoDocument(
            <ButtonGroup phType="justify" activeIndex={activeIndex}>
                <Button>水平按钮组1</Button>
                <Button>水平按钮组2</Button>
            </ButtonGroup>
        )

        const button = TestUtils.scryRenderedDOMComponentsWithTag(buttonGroup, 'button')[activeIndex]
        
        assert(!button.className.match('hollow'))
    })

    it('phType设置为tacked', ()=>{
        const buttonGroup = shallowRender(
            <ButtonGroup phType="tacked">
                <Button block>垂直按钮组1</Button>
                <Button block>垂直按钮组2</Button>
            </ButtonGroup>
        )
        assert(buttonGroup.props.className.match('tacked'))
    })

    it('点击按钮是否选中(justify)', ()=>{
        const buttonGroup = TestUtils.renderIntoDocument(
            <ButtonGroup phType="justify">
                <Button>水平按钮组1</Button>
                <Button>水平按钮组2</Button>
            </ButtonGroup>
        )
        const button = TestUtils.scryRenderedDOMComponentsWithTag(buttonGroup, 'button')[0]

        TestUtils.Simulate.click(button)
        assert(!button.className.match('hollow'))
    })

    it('点击是否执行clickCallback', ()=>{
        let flag = false;
        const buttonGroup = TestUtils.renderIntoDocument(
            <ButtonGroup phType="justify" clickCallback={()=>{flag=true}}>
                <Button>水平按钮组1</Button>
                <Button>水平按钮组2</Button>
            </ButtonGroup>
        )
        const button = TestUtils.scryRenderedDOMComponentsWithTag(buttonGroup, 'button')[0]

        TestUtils.Simulate.click(button)
        assert.equal(flag, true)
    })
})