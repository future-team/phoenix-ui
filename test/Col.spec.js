'use strict';

import React from 'react';
import assert from 'assert';
import {shallowRender} from './utils/Tool';

import Col from '../src/Col';

describe("<Col/>", function(){
    it('默认', ()=>{
        const col = shallowRender(<Col />);

        assert(col.props.className.match('col'));
    });

});