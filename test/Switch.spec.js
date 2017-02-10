'use strict';

import React from 'react';
import {findDOMNode} from 'react-dom';
import assert from 'assert';
import TestUtils from 'react/lib/ReactTestUtils.js';

import Switch from '../src/Switch';

describe("<Switch/>", function(){

    it('checked传值正确', ()=>{
        let defaultChecked = true;
        const switchs = TestUtils.renderIntoDocument(<Switch defaultChecked={defaultChecked} />);

        assert.equal(findDOMNode(switchs).querySelector('input').checked, defaultChecked);
    });

    it('改变时触发onChange', ()=>{
        let checked = true;
        const switchs = TestUtils.renderIntoDocument(<Switch checked={checked} onChange={()=>{checked=false}} />);
        const checkbox = findDOMNode(switchs).querySelector('input');

        TestUtils.Simulate.change(checkbox);
        assert.equal(checked, false);
    });
});