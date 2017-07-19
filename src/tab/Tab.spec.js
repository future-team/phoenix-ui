'use strict';

import React from 'react';
import {findDOMNode} from 'react-dom';
import assert from 'assert';
import TestUtils from 'react/lib/ReactTestUtils.js';

import Tabset from './Tabset';
import Tab from './Tab';

describe("<Tab/>", function(){
    it('默认第一个选中', ()=>{
        const tab = TestUtils.renderIntoDocument(
            <Tabset>
                <Tab heading='标题1'>
                    横向内容1
                </Tab>
                <Tab heading='标题2'>
                    横向内容2
                </Tab>
            </Tabset>
        );
        const firstTabnav = TestUtils.scryRenderedDOMComponentsWithClass(tab, 'ph-tab-nav')[0];

        assert(findDOMNode(firstTabnav).className.match('active'));
    });

    it('竖向Tab', ()=>{
        const tab = TestUtils.renderIntoDocument(
            <Tabset vertical width={30}>
                <Tab heading='标题1'>
                    竖向内容1
                </Tab>
                <Tab heading='标题2'>
                    竖向内容2
                </Tab>
            </Tabset>
        );

        assert(findDOMNode(tab).className.match('vertical'));
    });

    it('activeIndex传值显示正确', ()=>{
        let _index = 1;
        const tab = TestUtils.renderIntoDocument(
            <Tabset activeIndex={_index}>
                <Tab heading='标题1'>
                    横向内容1
                </Tab>
                <Tab heading='标题2'>
                    横向内容2
                </Tab>
            </Tabset>
        );
        const tabnav = TestUtils.scryRenderedDOMComponentsWithClass(tab, 'ph-tab-nav')[_index];

        assert(findDOMNode(tabnav).className.match('active'));
    });

    it('点击触发单个tab的clickCallback', ()=>{
        let flag = true;
        const tab = TestUtils.renderIntoDocument(
            <Tabset>
                <Tab heading='标题1' clickCallback={()=>{flag=false;}}>
                    横向内容1
                </Tab>
                <Tab heading='标题2'>
                    横向内容2
                </Tab>
            </Tabset>
        );
        const tabnav = TestUtils.scryRenderedDOMComponentsWithClass(tab, 'ph-tab-nav')[0];

        TestUtils.Simulate.click(tabnav);
        assert.equal(flag, false);
    });

    it('点击触发clickCallback', ()=>{
        let flag = true;
        const tab = TestUtils.renderIntoDocument(
            <Tabset clickCallback={()=>{flag=false;}}>
                <Tab heading='标题1'>
                    横向内容1
                </Tab>
                <Tab heading='标题2'>
                    横向内容2
                </Tab>
            </Tabset>
        );
        const tabnav = TestUtils.scryRenderedDOMComponentsWithClass(tab, 'ph-tab-nav')[0];

        TestUtils.Simulate.click(tabnav);
        assert.equal(flag, false);
    });


});