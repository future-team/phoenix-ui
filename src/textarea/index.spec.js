'use strict';

import React from 'react'
import {findDOMNode} from 'react-dom'
import assert from 'assert'
import {shallowRender, render, simulate, scry} from '../utils/TestTool'

import Textarea from './index'

describe("<Textarea/>", function(){

    it('设置count和maxLength', ()=>{
        const textarea = render(<Textarea count maxLength={100} />),
              countElem = scry(textarea, '.ph-textarea-count')
        
        assert(countElem)
    })

    it('getValueCallback获取输入值', ()=>{
        let value = '测试'
        const textarea = render(<Textarea value={value}/>)

        assert.equal(textarea.getValueCallback(), value)
    })

})