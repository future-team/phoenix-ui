'use strict'

import React from 'react'
import {findDOMNode} from 'react-dom'
import assert from 'assert'
import {simulate, render, scry} from '../utils/TestTool'

import Popover from './index'
import Button from '../button'

describe("<Popover/>", function(){
    
    beforeEach(()=>{
        let button = render(<Button ref={(button)=>{this.button=button}}>btn</Button>)

        this.getTarget = ()=>{
            return this.button
        }
    })

    // it('getTarget获取正常', ()=>{
    //     const popover = render(<Popover getTarget={this.getTarget}/>)
    //     simulate.click(this.button)
    // })
    
})