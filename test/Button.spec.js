'use strict';

import React from 'react';
import {findDOMNode} from 'react-dom';
import assert from 'assert';
import TestUtils from 'react/lib/ReactTestUtils.js';

import Button from '../src/Button';

// function shallowRender(Component, props){
//     const renderer = TestUtils.createRenderer();
//     renderer.render(<Component {...props}/>);
//     return renderer.getRenderOutput();
// }

describe("<Button/>", function(){
    it('radius', function(){
        const button = TestUtils.renderIntoDocument(<Button radius phStyle='primary'></Button>);
        assert(findDOMNode(button).className.match('radius'));
    });

    it('block', function(){
        const button = TestUtils.renderIntoDocument(<Button block phStyle='primary'></Button>);
        assert(findDOMNode(button).className.match('block'));
    });

    it('disabled', function(){
        const button = TestUtils.renderIntoDocument(<Button disabled phStyle='primary'></Button>);
        assert(findDOMNode(button).className.match('disabled'));
    });

    it('active', function(){
        const button = TestUtils.renderIntoDocument(<Button active phStyle='primary'></Button>);
        assert(findDOMNode(button).className.match('active'));
    });

    it('hollow', function(){
        const button = TestUtils.renderIntoDocument(<Button hollow phStyle='primary'></Button>);
        assert(findDOMNode(button).className.match('hollow'));
    });

    it('phStyle-primary', function(){
        const button = TestUtils.renderIntoDocument(<Button phStyle='primary'></Button>);
        assert(findDOMNode(button).className.match('primary'));
    });

    it('phSize-lg', function(){
        const button = TestUtils.renderIntoDocument(<Button phSize='lg'></Button>);
        assert(findDOMNode(button).className.match('lg'));
    });
});