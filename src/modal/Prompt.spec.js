'use strict'

import React from 'react'
import assert from 'assert'
import {shallowRender, simulate, render, scry} from '../utils/TestTool'

import Prompt from './Prompt'

describe("<Prompt/>", function(){
    
    beforeEach(()=>{
        this.btnText = '测试'
        this.inputText = '测试'
        
        this.confirm = false
        this.confirmCallback = ()=>{
            this.confirm = true
        }

        this.buttons = [{text: this.btnText, onHandle: this.confirmCallback}]
        this.inputs = [{value: this.inputText}]
    })

    it('inputs设置正确', ()=>{
        const prompt = render(<Prompt visible={true} inputs={this.inputs} />),
              input = scry(prompt, 'input')
        
        assert.equal(input.value, this.inputText)
    })

    it('buttons设置正确', ()=>{
        const prompt = render(<Prompt visible={true} buttons={this.buttons} />),
              button = scry(prompt, '.ph-button')
        
        assert.equal(button.innerText, this.btnText)
        simulate.click(button)
        assert(this.confirm)
    })

    it('title传值正确', ()=>{
        let title = '测试'
        const prompt = render(<Prompt visible={true} title={title} />),
              promptTitle = scry(prompt, '.ph-dialog-title')

        assert.equal(promptTitle.innerHTML, title)
    })

    it('content传值正确', ()=>{
        let content = '测试'
        const prompt = render(<Prompt visible={true} content={content} />),
              promptBody = scry(prompt, '.ph-dialog-prompt-text')
              
        assert.equal(promptBody.innerHTML, content)
    })

})