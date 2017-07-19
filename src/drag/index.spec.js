'use strict'

import React from 'react'
import {findDOMNode} from 'react-dom'
import assert from 'assert'
import TestUtils from 'react/lib/ReactTestUtils.js'
import {shallowRender, render, scry, simulate} from '../utils/TestTool'

import Drag from './index'

describe("<Drag/>", function(){
    it('dragCallback', ()=>{
        let position = {}
        const drag = render(<Drag dragCallback={(position)=>{console.log(position);position=position}} />);

        simulate.touchStart(drag);
        simulate.touchMove(drag);
        // console.log(start)
    })
});