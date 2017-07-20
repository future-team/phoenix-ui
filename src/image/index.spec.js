'use strict'

import React from 'react'
import assert from 'assert'
import {shallowRender, render, scry, simulate} from '../utils/TestTool'

import Image from './index'

const DEFULT_IMAGE = 'http://file.digitaling.com/eImg/uimages/20150907/1441607165383971.gif',
      IMAGE_URL = 'http://img5.duitang.com/uploads/item/201602/11/20160211214958_RhdCY.jpeg',
      LAZY_URL = 'http://imglf1.ph.126.net/V0-JUTmkXrb0nkcfTVfH9g==/6630709324908900349.jpg'

describe("<Image/>", function(){

    it('phSize默认default', ()=>{
        const image = shallowRender(<Image src={IMAGE_URL}/>)
        assert(image.props.className.match('default'))
    })

    it('phSize设置为cover', ()=>{
        const image = shallowRender(<Image src={IMAGE_URL} phSize="cover"/>)
        assert(image.props.className.match('cover'))
    })

    it('src传值正确', ()=>{
        const image = render(<Image src={IMAGE_URL}/>),
              imageElem = scry(image, 'img')

        simulate.load(imageElem)
        assert.equal(imageElem.src, IMAGE_URL)
    })

    it('defaultSrc传值正确', ()=>{
        const image = render(<Image defaultSrc={DEFULT_IMAGE} src='...'/>),
              imageElem = scry(image, 'img')

        simulate.load(imageElem)
        assert.equal(imageElem.src, DEFULT_IMAGE)
    })

    // it('lazy懒加载', ()=>{
        
    // })

    it('loadCallback回调正常执行', ()=>{
        let load = false
        const image = render(<Image src={IMAGE_URL} loadCallback={()=>{load = true}}/>),
              imageElem = scry(image, 'img')
        
        simulate.load(imageElem)
        assert(load)
    })
    
})