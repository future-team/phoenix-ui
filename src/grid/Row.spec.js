'use strict'

import React from 'react'
import assert from 'assert'
import {shallowRender} from '../utils/TestTool'

import Row from './Row'

describe("<Row/>", function(){
    it('设置align为bottom', ()=>{
        const row = shallowRender(<Row align='stretch'/>)
        assert(row.props.className.match('stretch'))
    })   

})