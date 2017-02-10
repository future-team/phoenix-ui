'use strict';

import React from 'react';
import assert from 'assert';
import {shallowRender} from './utils/Tool';

import Badge from '../src/Badge';

describe("<Badge/>", function(){
    it('默认primry', ()=>{
        const badge = shallowRender(<Badge>惠</Badge>);
        assert(badge.props.className.match('primary'));
    });

    it('phStyle设置为info', ()=>{
        const badge = shallowRender(<Badge phStyle="info">惠</Badge>);
        assert(badge.props.className.match('info'));
    });
});