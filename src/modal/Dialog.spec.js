'use strict'

import React from 'react'
import {findDOMNode} from 'react-dom'
import assert from 'assert'
import {simulate, render, scry} from '../utils/TestTool'

import Dialog from './Dialog'

describe("<Dialog/>", function(){
    it('visible设置为true', ()=>{
        let visible = true
        const dialog = render(
            <Dialog visible={visible}>
                <Dialog.Body>
                    <p>可自定义表格内容</p>
                </Dialog.Body>
            </Dialog>
        ),
            dialogBody = scry(dialog, Dialog.Body)

        assert(dialogBody)
    })

    it('closeButton设置为true', ()=>{
        const dialog = render(
            <Dialog visible={true} closeButton></Dialog>
        ),
            closeBtn = scry(dialog, '.gfs-icon')
        
        assert(closeBtn)
    })

    it('closeCallback正常执行', ()=>{
        let close = false
        const dialog = render(
            <Dialog visible={true} closeButton closeCallback={()=>{close=true}}></Dialog>
        ),
            closeBtn = scry(dialog, '.ph-dialog-close')
        
        simulate.click(closeBtn)
        assert(close)
    })

    it('shadowDisabled设置为true', ()=>{
        let close = false
        const dialog = render(
            <Dialog visible={true} closeCallback={()=>{close=true}} shadowDisabled></Dialog>
        ),
            dialogShadow = scry(dialog, '.ph-dialog-shadow')
        
        simulate.click(dialogShadow)
        assert(!close)
    })
    
})