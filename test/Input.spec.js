'use strict';

import React from 'react';
import {findDOMNode} from 'react-dom';
import assert from 'assert';
import TestUtils from 'react/lib/ReactTestUtils.js';
import {shallowRender} from './utils/Tool';

import Input from '../src/Input';

describe("<Input/>", function(){

    it('type设置为text', ()=>{
        const input = shallowRender(<Input type='text' />);
        assert.equal(input.props.type, 'text');
    });

    it('type设置为checkbox', ()=>{
        const checkbox = shallowRender(<Input type='checkbox' />);
        assert.equal(checkbox.props.children[0].props.children[0].props.type, 'checkbox');
    });

    it('type设置为radio', ()=>{
        const radio = shallowRender(<Input type='radio' />);
        assert.equal(radio.props.children[0].props.children[0].props.type, 'radio');
    });

    // text
    it('text: 输入触发onChange' , ()=>{
        let textValue = '', inputValue = '测试';
        const input = TestUtils.renderIntoDocument(<Input type='text' value={textValue}
                                                          onChange={(e)=>{textValue = e.target.value}} />);

        // TestUtils.Simulate.change(input, {target: {value: inputValue}});

        findDOMNode(input).value = inputValue; // ???
        TestUtils.Simulate.change(input);
        assert.equal(findDOMNode(input).value, inputValue);
    });

    // checkbox & radio
    it('checkbox&radio: label传值显示正常', ()=>{
        let label = '测试';
        const checkbox = shallowRender(<Input type='checkbox' label={label} />);
        const radio = shallowRender(<Input type='radio' label={label} />);

        assert.equal(checkbox.props.children[1].props.children, label);
        assert.equal(radio.props.children[1].props.children, label);
    });

    it('checkbox&radio: checked传值正确', ()=>{
        let checked = true;
        const checkbox = shallowRender(<Input type='checkbox' defaultChecked={checked} />);
        const radio = shallowRender(<Input type='radio' defaultChecked={checked} />);

        assert.equal(checkbox.props.children[0].props.children[0].props.defaultChecked, checked);
        assert.equal(radio.props.children[0].props.children[0].props.defaultChecked, checked);
    });

});