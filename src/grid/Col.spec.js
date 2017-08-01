'use strict'

import React from 'react'
import assert from 'assert'
import {shallowRender} from '../utils/TestTool'

import Col from './Col';

describe("<Col/>", function(){
    it('设置width为20', ()=>{
        const col = shallowRender(<Col width='20'/>)
        assert(col.props.className.match('20'))
    })

    it('设置offset为20', ()=>{
        const col = shallowRender(<Col offset='20'/>)
        assert(col.props.className.match('offset-20'))
    })

    it('设置align为bottom', ()=>{
        const col = shallowRender(<Col align='bottom'/>)
        assert(col.props.className.match('bottom'))
    })

})