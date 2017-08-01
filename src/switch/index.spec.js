'use strict';

import React from 'react'
import {findDOMNode} from 'react-dom'
import assert from 'assert'
import {shallowRender, simulate, render, scry} from '../utils/TestTool'

import Switch from './index'

describe("<Switch/>", function(){

    it('checked传值正确', ()=>{
        let checked = true
        const switchs = shallowRender(<Switch checked={checked} />)

        assert.equal(switchs.props.children[0].props.checked, checked)
    })

    it('改变时触发onChange', ()=>{
        let checked = true
        const switchs = render(<Switch onChange={()=>{checked=false}} />),
              checkbox = scry(switchs, 'input')

        simulate.change(checkbox)
        assert.equal(checked, false)
    })
})