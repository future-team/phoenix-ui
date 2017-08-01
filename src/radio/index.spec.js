'use strict';

import React from 'react'
import {findDOMNode} from 'react-dom'
import assert from 'assert'
import {shallowRender, simulate, render, scry} from '../utils/TestTool'

import Radio from './index';

describe("<Radio/>", function(){
    
    it('radio: label传值显示正常', ()=>{
        let label = '测试'
        const radio = shallowRender(<Radio label={label} />)
        
        assert.equal(radio.props.label, label)
    })

    it('radio: checked传值正确', ()=>{
        let checked = true
        const radio = shallowRender(<Radio checked={checked} />)
        
        assert.equal(radio.props.checked, checked)
    })

    it('onChange正常执行', ()=>{
        let checked = true
        const radio = render(<Radio onChange={()=>{checked=false}}/>),
              radioElem = scry(radio, 'input')

        simulate.change(radioElem)
        assert.equal(checked, false)
    })

})