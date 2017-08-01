'use strict';

import React from 'react'
import {findDOMNode} from 'react-dom'
import assert from 'assert'
import {shallowRender, render, simulate, scry} from '../utils/TestTool'

import Checkbox from './index'

describe("<Checkbox/>", function(){

    it('label传值显示正常', ()=>{
        let label = '测试'
        const checkbox = shallowRender(<Checkbox label={label} />)
        
        assert.equal(checkbox.props.children[1].props.children, label)
    })

    it('checked传值正确', ()=>{
        let checked = true
        const checkbox = shallowRender(<Checkbox checked={checked} />)

        assert.equal(checkbox.props.children[0].props.children[0].props.checked, checked)
    })

    it('onChange正常执行', ()=>{
        let checked = true
        const checkbox = render(<Checkbox onChange={()=>{checked=false}}/>),
              checkboxElem = scry(checkbox, 'input')

        simulate.change(checkboxElem)
        assert.equal(checked, false)
    })

})