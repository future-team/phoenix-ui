'use strict';

import React from 'react';
import {findDOMNode} from 'react-dom';
import assert from 'assert';
import TestUtils from 'react/lib/ReactTestUtils.js';

import Star from '../src/Star';

describe("<Star/>", function(){
    it('默认是否带sm', ()=>{
        const star = TestUtils.renderIntoDocument(<Star />);
        assert(findDOMNode(star).className.match('sm'));
    });

    it('Rate设置为20', ()=>{
        const star = TestUtils.renderIntoDocument(<Star Rate={20} />);
        assert(findDOMNode(star).className.match('20'));
    });

    it('phSize设置为lg', ()=>{
        const star = TestUtils.renderIntoDocument(<Star phSize='lg' />);
        assert(findDOMNode(star).className.match('lg'));
    })
});