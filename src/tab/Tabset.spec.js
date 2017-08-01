'use strict'

import React from 'react'
import {findDOMNode} from 'react-dom'
import assert from 'assert'
import {shallowRender, render, simulate, scry} from '../utils/TestTool'

import Tabset from './Tabset'
import Tab from './Tab'

describe("<Tab/>", function(){
    it('默认第一个tab选中', ()=>{
        const tab = render(
            <Tabset>
                <Tab heading='标题1'>
                    横向内容1
                </Tab>
                <Tab heading='标题2'>
                    横向内容2
                </Tab>
            </Tabset>
        ),
              firstTabnav = scry(tab, Tab)

        assert(findDOMNode(firstTabnav).className.match('active'))
    })

    it('activeIndex传值显示正确', ()=>{
        let _index = 1
        const tab = render(
            <Tabset activeIndex={_index}>
                <Tab heading='标题1'>
                    横向内容1
                </Tab>
                <Tab heading='标题2'>
                    横向内容2
                </Tab>
            </Tabset>
        ),
              tabnav = scry(tab, Tab, _index)

        assert(findDOMNode(tabnav).className.match('active'))
    })

    it('vertical传值正确', ()=>{
        const tab = shallowRender(
            <Tabset vertical>
                <Tab heading='标题1'>
                    竖向内容1
                </Tab>
                <Tab heading='标题2'>
                    竖向内容2
                </Tab>
            </Tabset>
        )

        assert(tab.props.className.match('vertical'))
    })

    it('width传值正确', ()=>{
        let width = 30
        const tab = shallowRender(
            <Tabset vertical width={width}>
                <Tab heading='标题1'>
                    竖向内容1
                </Tab>
                <Tab heading='标题2'>
                    竖向内容2
                </Tab>
            </Tabset>
        )
        
        assert(tab.props.children[0].props.className.match(width))
    })

    it('点击触发clickCallback', ()=>{
        let flag = true
        const tab = render(
            <Tabset clickCallback={()=>{flag=false}}>
                <Tab heading='标题1'>
                    横向内容1
                </Tab>
                <Tab heading='标题2'>
                    横向内容2
                </Tab>
            </Tabset>
        ),
              tabnav =  scry(tab, '.ph-tab-nav')

        simulate.click(tabnav)
        assert.equal(flag, false)
    })
})