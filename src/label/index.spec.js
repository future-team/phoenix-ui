'use strict'

import React from 'react'
import {findDOMNode} from 'react-dom'
import assert from 'assert'
import {shallowRender} from '../utils/TestTool'

import Label from './index'

describe("<Label/>", function(){
    it('默认为primry & sm', ()=>{
        const label = shallowRender(<Label>惠</Label>)
        assert(label.props.className.match('primary'))
        assert(label.props.className.match('sm'))
    })

    it('phStyle设置为info', ()=>{
        const label = shallowRender(<Label phStyle="info">惠</Label>)
        assert(label.props.className.match('info'))
    })

    it('phSize设置为lg', ()=>{
        const label = shallowRender(<Label phSize="lg">惠</Label>)
        assert(label.props.className.match('lg'));
    })
})