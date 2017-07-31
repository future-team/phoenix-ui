'use strict'

import React from 'react'
import {findDOMNode} from 'react-dom'
import assert from 'assert'
import TestUtils from 'react/lib/ReactTestUtils.js'
import {shallowRender, render, scry, simulate} from '../utils/TestTool'

import Drag from './index'

describe("<Drag/>", function(){

    // it('dragCallback', ()=>{
    //     let position = {}
    //     const drag = render(<Drag dragCallback={(position)=>{position=position}} dropCallback={(position)=>{position=position}}/>)

    //     simulate.touchStart(drag, TestUtils.nativeTouchData(0, 0))
    //     simulate.touchEnd(drag, TestUtils.nativeTouchData(500, 500))
    //     console.log(position)
    // })
})