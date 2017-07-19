'use strict';

import React from 'react'
import {findDOMNode} from 'react-dom'
import assert from 'assert'
import {shallowRender, render, simulate, scry} from '../utils/TestTool'

import Input from './index';

describe("<Input/>", function(){

    it('type默认为text', ()=>{
        const input = shallowRender(<Input />)
        assert.equal(input.props.children[0].props.type, 'text')
    })

    it('type设置为password', ()=>{
        const input = shallowRender(<Input type="password"/>)
        assert.equal(input.props.children[0].props.type, 'password')
    })

    it('设置clear属性', ()=>{
        const input = render(<Input value="123" clear/>),
              inputElem = scry(input, 'input')

        simulate.focus(inputElem)
        assert(findDOMNode(input).className.match('clear'))
    })

    it('设置visible属性', ()=>{
        const input = render(<Input type="password" visible/>)
        assert(findDOMNode(input).className.match('visible'))
    })

    it('设置error属性', ()=>{
        const input = render(<Input error/>),
              inputElem = scry(input, 'input')
        // 没有focus时显示
        assert(findDOMNode(input).className.match('error'))

        simulate.focus(inputElem)
        // focus时不显示
        assert(!findDOMNode(input).className.match('error'))
    })

    it('设置phReg-初始有值', ()=>{
        let reg = /^[a-zA-Z$_]\w{5,17}$/,
            value = '123'
        const input = render(<Input value={value} phReg={reg}/>)

        assert(findDOMNode(input).className.match('error'))
    })

    it('设置phReg-初始空值', ()=>{
        let reg = /^[a-zA-Z$_]\w{5,17}$/,
            value = '123'
        const input = render(<Input phReg={reg}/>),
              inputElem = scry(input, 'input')

        findDOMNode(inputElem).value = value
        simulate.change(inputElem)
        simulate.blur(inputElem)
        
        // assert(findDOMNode(input).className.match('error'))
    })

    it('getValueCallback获取输入值', ()=>{
        let value = '测试'
        const input = render(<Input value={value}/>)

        assert.equal(input.getValueCallback(), value)
    })
    
});