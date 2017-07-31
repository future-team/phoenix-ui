'use strict'

import React from 'react'
import {findDOMNode} from 'react-dom'
import assert from 'assert'
import {shallowRender, render, simulate, scry} from '../utils/TestTool'

import Slider from './index'

describe("<Slider/>", function(){
    
    it('progress传值正确', ()=>{
        let progress = 50
        const slider = render(<Slider progress={progress}/>),
              sliderText = scry(slider, '.ph-slider-text')
        
        assert.equal(sliderText.innerText, progress)
    })

    it('tipMode设置为tooltip', ()=>{
        const slider = render(<Slider tipStay tipMode="tooltip"/>),
              sliderBtn = scry(slider, '.ph-slider-btn'),
              sliderTip = scry(slider, '.ph-slider-tip')
        assert(sliderTip.className.match('show'))
    })

    it('placement设置为bottom', ()=>{
        const slider = shallowRender(<Slider placement="bottom"/>)
        assert(slider.props.className.match('bottom'))
    })
})