'use strict';

import React from 'react';
import assert from 'assert';
import {shallowRender} from './utils/Tool';

import Button from '../src/Button';

describe("<Button/>", function(){
    it('默认是否是primry & sm', ()=>{
        const button = shallowRender(<Button>btn</Button>);
        assert(button.props.className.match('primary'));
    });

    it('添加radius属性', ()=>{
        const button = shallowRender(<Button radius phStyle='primary'>btn</Button>);
        assert(button.props.className.match('radius'));
    });

    it('添加block属性', ()=>{
        const button = shallowRender(<Button block phStyle='primary'>btn</Button>);
        assert(button.props.className.match('block'));
    });

    it('添加disabled属性', ()=>{
        const button = shallowRender(<Button disabled phStyle='primary'>btn</Button>);
        assert(button.props.className.match('disabled'));
    });

    it('添加active属性', ()=>{
        const button = shallowRender(<Button active phStyle='primary'>btn</Button>);
        assert(button.props.className.match('active'));
    });

    it('添加hollow属性', ()=>{
        const button = shallowRender(<Button hollow phStyle='primary'>btn</Button>);
        assert(button.props.className.match('hollow'));
    });

    it('phStyle设置为primary', ()=>{
        const button = shallowRender(<Button phStyle='primary'>btn</Button>);
        assert(button.props.className.match('primary'));
    });

    it('phSize设置为lg', function(){
        const button = shallowRender(<Button phSize='lg'>btn</Button>);
        assert(button.props.className.match('lg'));
    });
});