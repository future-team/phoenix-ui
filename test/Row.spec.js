'use strict';

import React from 'react';
import assert from 'assert';
import {shallowRender} from './utils/Tool';

import Row from '../src/Row';

describe("<Row/>", function(){
    it('默认', ()=>{
        const row = shallowRender(<Row />);

        assert(row.props.className.match('row'));
    });

});