'use strict';

import React from 'react'
import assert from 'assert'
import {shallowRender} from '../utils/TestTool'

import Icon from './index'

describe("<Icon/>", function(){

    it('默认为default&sm', ()=>{
        const icon = shallowRender(<Icon phIcon="search"/>)
        assert(icon.props.className.match('default'))
        assert(icon.props.className.match('sm'))
    })

    it('phIcon设置为search', ()=>{
        const icon = shallowRender(<Icon phIcon="search"/>)
        assert(icon.props.className.match('search'))
    })

    it('phSize设置为xlg', ()=>{
        const icon = shallowRender(<Icon phIcon="search" phSize="xlg"/>)
        assert(icon.props.className.match('xlg'))
    })

    it('phStyle设置为info', ()=>{
        const icon = shallowRender(<Icon phIcon="search" phStyle="info"/>)
        assert(icon.props.className.match('info'))
    })

})