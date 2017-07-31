'use strict'

import React from 'react'
import assert from 'assert'
import {simulate, render, scry} from '../utils/TestTool'

import Alert from './Alert'

describe("<Alert/>", function(){

    beforeEach(()=>{
        this.btnText = '测试'
        
        this.confirm = false
        this.confirmCallback = ()=>{
            this.confirm = true
        }

        this.buttons = [{text: this.btnText, onHandle: this.confirmCallback}]
    })

    it('buttons设置正确', ()=>{
        const alert = render(<Alert visible={true} buttons={this.buttons} />),
              button = scry(alert, '.ph-button')
        
        assert.equal(button.innerText, this.btnText)
        simulate.click(button)
        assert(this.confirm)
    })

    it('title传值正确', ()=>{
        let title = '测试'
        const alert = render(<Alert visible={true} title={title} />),
              alertTitle = scry(alert, '.ph-dialog-title')

        assert.equal(alertTitle.innerHTML, title)
    })

    it('content传值正确', ()=>{
        let content = '测试'
        const alert = render(<Alert visible={true} content={content} />),
              alertBody = scry(alert, '.ph-dialog-body')
              
        assert.equal(alertBody.innerHTML, content)
    })

})