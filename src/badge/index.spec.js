'use strict';

import React from 'react';
import assert from 'assert';
import {shallowRender} from '../utils/TestTool';

import Badge from './index';

describe("<Badge/>", function(){
    it('默认default', ()=>{
        const badge = shallowRender(<Badge>惠</Badge>);
        assert(badge.props.className.match('default'));
    });

    it('phStyle设置为info', ()=>{
        const badge = shallowRender(<Badge phStyle="info">惠</Badge>);
        assert(badge.props.className.match('info'));
    });
});