'use strict';

import React from 'react';
import {findDOMNode} from 'react-dom';
import assert from 'assert';
import TestUtils from 'react/lib/ReactTestUtils.js';

import Button from '../src/Button';
import ButtonGroup from '../src/ButtonGroup';

describe("<ButtonGroup/>", function(){
    it('default', function(){
        const buttonGroup = TestUtils.renderIntoDocument(
            <ButtonGroup>
                <Button>水平按钮组1</Button>
                <Button>水平按钮组2</Button>
            </ButtonGroup>
        );
        assert(findDOMNode(buttonGroup).className.match('justify'));
    });

    it('tacked', function(){
        const buttonGroup = TestUtils.renderIntoDocument(
            <ButtonGroup phType="tacked">
                <Button block>垂直按钮组1</Button>
                <Button block>垂直按钮组2</Button>
            </ButtonGroup>
        );
        assert(findDOMNode(buttonGroup).className.match('tacked'));
    });

    it('点击按钮是否选中', function(){
        const buttonGroup = TestUtils.renderIntoDocument(
            <ButtonGroup activeCallback={function(target,html){console.log('ButtonGroup 点击按钮是否选中',target,html);}}>
                <Button>水平按钮组1</Button>
                <Button>水平按钮组2</Button>
            </ButtonGroup>
        );
        const button = TestUtils.scryRenderedDOMComponentsWithTag(buttonGroup, 'button')[0];

        TestUtils.Simulate.click(button);
        assert(button.className.match('active'));
    });
});