'use strict'

import React from 'react'
import {findDOMNode} from 'react-dom'
import assert from 'assert'
import {shallowRender, render, simulate, scry} from '../utils/TestTool'

import Tabset from './Tabset'
import Tab from './Tab'

describe("<Tab/>", function(){

    it('heading传值正确', ()=>{
        let heading = '测试'
        const tab = render(
            <Tabset>
                <Tab heading={heading}>
                    横向内容1
                </Tab>
            </Tabset>
        ),
            tabnav = scry(tab, '.ph-tab-nav')
        
        assert.equal(tabnav.innerText, heading)
    })

    it('点击触发clickCallback', ()=>{
        let flag = true
        const tab = render(
            <Tabset>
                <Tab heading='标题1' clickCallback={()=>{flag=false}}>
                    横向内容1
                </Tab>
                <Tab heading='标题2'>
                    横向内容2
                </Tab>
            </Tabset>
        ),
            tabnav = scry(tab, '.ph-tab-nav')
        
        simulate.click(tabnav)
        assert.equal(flag, false)
    })
})