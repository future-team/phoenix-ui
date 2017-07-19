'use strict'

import React from 'react'
import {findDOMNode} from 'react-dom';
import assert from 'assert'
import {shallowRender, render, scry} from '../utils/TestTool'

import List from './index'

describe("<List/>", function(){
    it('List.Item: 设置disabled属性', ()=>{
        const list = render(
            <List>
                <List.Item disabled>item</List.Item>
            </List>
        ),
        listitem = scry(list, List.Item)

        assert(findDOMNode(listitem).className.match('disabled'))
    })

    it('List.Item: 设置error属性', ()=>{
        const list = render(
            <List>
                <List.Item error>item</List.Item>
            </List>
        ),
        listitem = scry(list, List.Item)

        assert(findDOMNode(listitem).className.match('error'))
    })

    it('List.Item: 设置required属性', ()=>{
        const list = render(
            <List>
                <List.Item required>item</List.Item>
            </List>
        ),
        listitem = scry(list, List.Item)

        assert(findDOMNode(listitem).className.match('required'))
    })

    it('List.Item: 设置navigate属性', ()=>{
        const list = render(
            <List>
                <List.Item navigate>item</List.Item>
            </List>
        ),
        listitem = scry(list, List.Item)

        assert(findDOMNode(listitem).className.match('navigate'))
    })

    it('List.Col: 设置heading属性', ()=>{
        const list = render(
            <List>
                <List.Item>
                    <List.Col heading>col</List.Col>
                </List.Item>
            </List>
        ),
        listcol = scry(list, List.Col)

        assert(findDOMNode(listcol).className.match('heading'))
    })

    it('List.Col: 设置tail属性', ()=>{
        const list = render(
            <List>
                <List.Item>
                    <List.Col tail>col</List.Col>
                </List.Item>
            </List>
        ),
        listcol = scry(list, List.Col)

        assert(findDOMNode(listcol).className.match('tail'))
    })

})