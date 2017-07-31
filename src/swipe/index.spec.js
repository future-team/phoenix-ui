'use strict'

import React from 'react'
import {findDOMNode} from 'react-dom'
import assert from 'assert'
import {render, simulate, scry, nativeTouchData} from '../utils/TestTool'

import Swipe from './index'

describe("<Swipe/>", function(){

    beforeEach(()=>{
        this.btnText = '测试'
        this.handle = false
        this.onHandle = ()=>{
            this.handle = true
        }

        this.buttons = [{text: this.btnText, onHandle: this.onHandle}]
    })

    it('buttons传值正确', ()=>{
        const popover = render(
            <Swipe buttons={this.buttons}>
                <p>Swipe</p>
            </Swipe>
        ),
            drag = scry(popover, '.ph-swipe-content'),
            button = scry(popover, '.ph-button')
        
        assert(button.innerText, this.btnText)
        // simulate.touchStart(drag, nativeTouchData(0, 0))
        // simulate.touchEnd(drag, nativeTouchData(0, 0))
        // simulate.click(button)
        // assert(this.handle)
    })
})