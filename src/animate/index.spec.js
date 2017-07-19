'use strict';

import React from 'react';
import assert from 'assert';
import {shallowRender} from '../utils/TestTool';

import Animate from './index';

describe("<Animate/>", function(){
    it('默认transitionName为fade', ()=>{
        const animate = shallowRender(<Animate />);
        assert.equal(animate.props.transitionName, 'fade');
    });

    it('transitionName传值生效', ()=>{
        let transitionName = 'slide';
        const animate = shallowRender(<Animate transitionName={transitionName} />);

        assert.equal(animate.props.transitionName, transitionName);
    });
});