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

    scry: function(parent, elem, index){
        let _index = index || 0
        if(typeof elem == 'string'){
            if(elem.indexOf('.')>=0){
                elem = elem.replace('.','')
                return TestUtils.scryRenderedDOMComponentsWithClass(parent, elem)[_index]
            }else{
                return TestUtils.scryRenderedDOMComponentsWithTag(parent, elem)[_index]
            }
        }else{
            return TestUtils.scryRenderedComponentsWithType(parent, elem)[_index]
        }
    },

    find: function(parent, elem, index){
        let _index = index || 0
        if(typeof elem == 'string'){
            if(elem.indexOf('.')>=0){
                elem = elem.replace('.','')
                return TestUtils.findRenderedDOMComponentWithClass(parent, elem)[_index]
            }else{
                return TestUtils.findRenderedDOMComponentWithTag(parent, elem)[_index]
            }
        }else{
            return TestUtils.findRenderedComponentWithType(parent, elem)[_index]
        }
    },

    findAll: function(parent, elem){
        return TestUtils.findAllInRenderedTree(parent, elem)
    },

    nativeTouchData: function(x,y){
        return TestUtils.nativeTouchData(x,y)
    }
   
}

export default Tool