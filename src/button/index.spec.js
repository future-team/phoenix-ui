'use strict'

import React from 'react'
import assert from 'assert'
import {shallowRender} from '../utils/TestTool'

import Button from './index'

describe("<Button/>", function(){
    it('默认primry & sm', ()=>{
        const button = shallowRender(<Button>btn</Button>)
        assert(button.props.className.match('primary'))
        assert(button.props.className.match('sm'))
    })

    it('phStyle设置为info', ()=>{
        const button = shallowRender(<Button phStyle='info'>btn</Button>)
        assert(button.props.className.match('info'))
    })

    it('phSize设置为lg', function(){
        const button = shallowRender(<Button phSize='lg'>btn</Button>)
        assert(button.props.className.match('lg'))
    })

    it('添加block属性', ()=>{
        const button = shallowRender(<Button block>btn</Button>)
        assert(button.props.className.match('block'))
    })

    it('添加disabled属性', ()=>{
        const button = shallowRender(<Button disabled>btn</Button>)
        assert(button.props.className.match('disabled'))
    })

    it('添加active属性', ()=>{
        const button = shallowRender(<Button active>btn</Button>)
        assert(button.props.className.match('active'))
    })

    it('添加hollow属性', ()=>{
        const button = shallowRender(<Button hollow>btn</Button>)
        assert(button.props.className.match('hollow'))
    })

    it('添加stable属性', ()=>{
        const button = shallowRender(<Button stable>btn</Button>)
        assert(button.props.className.match('stable'))
    })

    it('添加phIcon', ()=>{
        let phIcon = 'search'
        const button = shallowRender(<Button phIcon={phIcon}>btn</Button>)
        
        assert.equal(button.props.children[0].props.phIcon, phIcon)
    })
    
})