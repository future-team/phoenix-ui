'use strict';

import React from 'react';
import {findDOMNode} from 'react-dom';
import assert from 'assert';
import TestUtils from 'react/lib/ReactTestUtils.js';

import Label from '../src/Label';

describe("<Label/>", function(){
    it('默认是否带primry & sm', ()=>{
        const label = TestUtils.renderIntoDocument(<Label>惠</Label>);
        assert(findDOMNode(label).className.match('primary') && findDOMNode(label).className.match('sm'));
    });

    it('phStyle设置为info', ()=>{
        const label = TestUtils.renderIntoDocument(<Label phStyle="info">惠</Label>);
        assert(findDOMNode(label).className.match('info'));
    });

    it('phSize设置为lg', ()=>{
        const label = TestUtils.renderIntoDocument(<Label phSize="lg">惠</Label>);
        assert(findDOMNode(label).className.match('lg'));
    })
});