'use strict';

import React from 'react';
import {findDOMNode} from 'react-dom';
import assert from 'assert';
import TestUtils from 'react/lib/ReactTestUtils.js';

import Drag from '../src/Drag';

describe("<Drag/>", function(){
    it('onDrag', ()=>{
        let position = {};
        const drag = TestUtils.renderIntoDocument(<Drag onDrag={(position)=>{console.log(11111);position=position;}} />);

        TestUtils.Simulate.touchStart(drag);
        TestUtils.Simulate.touchMove(drag);
        // 未完成
    })
});