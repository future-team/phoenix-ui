'use strict';

import React from 'react';
import {findDOMNode} from 'react-dom';
import assert from 'assert';
import TestUtils from 'react/lib/ReactTestUtils.js';

import Star from './index';

describe("<Star/>", function(){
    it('默认sm', ()=>{
        const star = TestUtils.renderIntoDocument(<Star />);
        assert(findDOMNode(star).className.match('sm'));
    });

    it('rate设置为20', ()=>{
        const star = TestUtils.renderIntoDocument(<Star rate={20} />);
        assert(findDOMNode(star).className.match('20'));
    });

    it('phSize设置为lg', ()=>{
        const star = TestUtils.renderIntoDocument(<Star phSize='lg' />);
        assert(findDOMNode(star).className.match('lg'));
    })
});