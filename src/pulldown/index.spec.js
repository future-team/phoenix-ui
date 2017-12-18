'use strict'

import React from 'react'
import {findDOMNode} from 'react-dom'
import assert from 'assert'
import {render, simulate, scry} from '../utils/TestTool'

import PullUp from './index'

describe("<PullDown/>", function(){

    it('mode设置为button', ()=>{
        const pullup = render(<PullUp mode="button" />),
              button = scry(pullup, '.ph-button')
        assert(button)
    })

    it('phStyle设置为info', ()=>{
        let phStyle = 'info'
        const pullup = render(<PullUp mode="button" phStyle={phStyle} />),
              button = scry(pullup, '.ph-button')
        assert(button.className.match(phStyle))
    })

    it('tips传值正确', ()=>{
        let tips = ['more','','','','']
        const pullup = render(<PullUp tips={tips} status={0}/>),
              pullupTip = scry(pullup, '.ph-pullup-tip')
        assert(pullupTip.innerText, tips[0])
    })
})