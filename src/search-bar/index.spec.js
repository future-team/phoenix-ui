'use strict'

import React from 'react'
import assert from 'assert'
import {shallowRender, render, scry, simulate} from '../utils/TestTool'

import SearchBar from './index'

describe("<SearchBar/>", function(){
    it('buttonText传值正确', ()=>{
        let buttonText = '测试', button
        const search = render(<SearchBar buttonText={buttonText} />),
              input = scry(search, 'input')

        simulate.focus(input)
        button = scry(search, 'button')
        assert.equal(button.innerText, buttonText)
    })

    it('placeholder传值正确', ()=>{
        let placeholder = '测试'
        const search = render(<SearchBar placeholder={placeholder} />),
              inputPlaceholder = scry(search, '.ph-input-placeholder')
            
        assert.equal(inputPlaceholder.innerText, placeholder)
    })

    it('focusCallback执行正常', ()=>{
        let focus = false
        const search = render(<SearchBar focusCallback={()=>{focus=true}} />),
              input = scry(search, 'input')

        simulate.focus(input)
        assert(focus)
    })

    it('blurCallback执行正常', ()=>{
        let blur = false
        const search = render(<SearchBar focusCallback={()=>{blur=true}} />),
              input = scry(search, 'input')

        simulate.focus(input)
        simulate.blur(input)
        assert(blur)
    })

    it('clickCallback执行正常', ()=>{
        let click=false, button
        const search = render(<SearchBar clickCallback={()=>{click=true}}/>),
              input = scry(search, 'input')

        simulate.focus(input)
        button = scry(search, 'button')
        simulate.click(button)
        assert(click)
    })

    it('queryCallback执行正常', ()=>{
        let query=false
        const search = render(<SearchBar queryCallback={()=>{query=true}}/>),
              input = scry(search, 'input')

        simulate.focus(input)
        simulate.keyDown(input, {key: "Enter", keyCode: 13})
        assert(query)
    })
})