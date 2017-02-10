import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils.js';

let Tool = {
    shallowRender : function(Component){
        const renderer = TestUtils.createRenderer();
        renderer.render(Component);
        return renderer.getRenderOutput();
    }
};

export default Tool;