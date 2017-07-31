'use strict'

import React from 'react'
import assert from 'assert'
import {shallowRender, render, scry, simulate} from '../utils/TestTool'

import ImageList from './index'

const IMAGE_URL = 'http://img5.duitang.com/uploads/item/201602/11/20160211214958_RhdCY.jpeg'

describe("<ImageList/>", function(){

    it('column传值正确', ()=>{
        let column = 4
        const image = shallowRender(
            <ImageList column={column}></ImageList>
        )

        assert(image.props.className.match(column))
    })

})