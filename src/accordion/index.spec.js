'use strict';

import React from 'react'
import {findDOMNode} from 'react-dom'
import assert from 'assert'
import TestUtils from 'react/lib/ReactTestUtils'
import {shallowRender, render, simulate, scry} from '../utils/TestTool'

import Accordion from './index'

describe("<Accordion/>", function(){

    it('visible设置为true', ()=>{
        let visible = true
        const accordion = render(
            <Accordion visible={visible}>
                <Accordion.Header>
                    标题一
                </Accordion.Header>
                <Accordion.Body>
                    内容一
                </Accordion.Body>
            </Accordion>
        ),
            accordionBody = scry(accordion, '.ph-accordion-body')
        
        // console.log('height',findDOMNode(accordionBody).style.height)

    })

    it('clickCallback执行正常', ()=>{
        let visible = false
        const accordion = render(
            <Accordion visible={visible} clickCallback={(v)=>{visible=v}}>
                <Accordion.Header>
                    标题一
                </Accordion.Header>
                <Accordion.Body>
                    内容一
                </Accordion.Body>
            </Accordion>
        ),
            accordionHeader = scry(accordion, '.ph-accordion-header')

        simulate.click(accordionHeader)
        
        assert(visible)
    })

    it('hideIcon设置正常', ()=>{
        const accordion = render(
            <Accordion hideIcon>
                <Accordion.Header>
                    标题一
                </Accordion.Header>
                <Accordion.Body>
                    内容一
                </Accordion.Body>
            </Accordion>
        ),
            accordionIcon = scry(accordion, '.gfs-icon')
        
        assert(!accordionIcon)
    })

})