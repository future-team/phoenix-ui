'use strict';

import React from 'react';
import assert from 'assert';
import {shallowRender} from './utils/Tool';

import Grid from '../src/Grid';

describe("<Grid/>", function(){
    it('默认', ()=>{
        const grid = shallowRender(<Grid />);

        assert(grid.props.className.match('grid'));
    });

});