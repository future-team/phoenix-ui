import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'

let Tool = {
    simulate: TestUtils.Simulate,

    shallowRender : function(Component){
        const renderer = TestUtils.createRenderer();
        renderer.render(Component);
        return renderer.getRenderOutput();
    },

    render: function(node){
        return  TestUtils.renderIntoDocument(node)
    },

    scry: function(parent, elem){
        if(typeof elem == 'string'){
            if(elem.indexOf('.')>=0){
                elem = elem.replace('.','')
                return TestUtils.scryRenderedDOMComponentsWithClass(parent, elem)[0]
            }else{
                return TestUtils.scryRenderedDOMComponentsWithTag(parent, elem)[0]
            }
        }else{
            return TestUtils.scryRenderedComponentsWithType(parent, elem)[0]
        }
    },

    find: function(parent, elem){
        if(typeof elem == 'string'){
            if(elem.indexOf('.')>=0){
                elem = elem.replace('.','')
                return TestUtils.findRenderedDOMComponentWithClass(parent, elem)[0]
            }else{
                return TestUtils.findRenderedDOMComponentWithTag(parent, elem)[0]
            }
        }else{
            return TestUtils.findRenderedComponentWithType(parent, elem)[0]
        }
    },

    findAll: function(parent, elem){
        return TestUtils.findAllInRenderedTree(parent, elem)
    }
   
}

export default Tool