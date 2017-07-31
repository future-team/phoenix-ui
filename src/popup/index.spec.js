'use strict'

import React from 'react'
import {findDOMNode} from 'react-dom'
import assert from 'assert'
import {shallowRender, simulate, render, scry} from '../utils/TestTool'

import Popup from './index'

describe("<Popup/>", function(){
    it('visible设置为true', ()=>{
        const popup = render(<Popup visible={true}></Popup>),
              popupContent = scry(popup, '.ph-popup-content')
        assert(popupContent)
    })

    it('align设置为bottom', ()=>{
        let align = 'bottom'
        const popup = shallowRender(<Popup visible={true} align={align}></Popup>)
        assert(popup.props.className.match(align))
    })

    it('closeCallback正常执行', ()=>{
        let close = false
        const popup = render(<Popup visible={true} closeCallback={()=>{close=true}}></Popup>),
              popupShadow = scry(popup, '.ph-popup-shadow')

        simulate.click(popupShadow)
        assert(close)
    })
})