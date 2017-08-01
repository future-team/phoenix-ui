'use strict'

import React from 'react'
import {findDOMNode} from 'react-dom'
import assert from 'assert'
import {render, simulate, scry} from '../utils/TestTool'

import Steps from './index'

const LIST = ['合作信息','公司信息','资质信息']

describe("<Steps/>", function(){
    it('currentStep设置为1', ()=>{
        let _index = 1
        const steps = render(<Steps list={LIST} currentStep={_index}/>),
              stepsItem = scry(steps, '.ph-steps-list', _index)

        assert(stepsItem.className.match('active'))
    })

    it('clickCallback正常执行', ()=>{
        let click = false
        const steps = render(<Steps list={LIST} clickCallback={()=>{click=true}} />),
              stepsItem = scry(steps, '.ph-steps-list')
        
        simulate.click(stepsItem)
        assert(click)
    })

    it('readOnly设置成功', ()=>{
        let click = false
        const steps = render(<Steps list={LIST} readOnly clickCallback={()=>{click=true}} />),
              stepsItem = scry(steps, '.ph-steps-list')
        
        simulate.click(stepsItem)
        assert(!click)
    })
})