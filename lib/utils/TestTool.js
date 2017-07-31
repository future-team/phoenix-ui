'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLibReactTestUtils = require('react/lib/ReactTestUtils');

var _reactLibReactTestUtils2 = _interopRequireDefault(_reactLibReactTestUtils);

var Tool = {
    simulate: _reactLibReactTestUtils2['default'].Simulate,

    shallowRender: function shallowRender(Component) {
        var renderer = _reactLibReactTestUtils2['default'].createRenderer();
        renderer.render(Component);
        return renderer.getRenderOutput();
    },

    render: function render(node) {
        return _reactLibReactTestUtils2['default'].renderIntoDocument(node);
    },

    scry: function scry(parent, elem, index) {
        var _index = index || 0;
        if (typeof elem == 'string') {
            if (elem.indexOf('.') >= 0) {
                elem = elem.replace('.', '');
                return _reactLibReactTestUtils2['default'].scryRenderedDOMComponentsWithClass(parent, elem)[_index];
            } else {
                return _reactLibReactTestUtils2['default'].scryRenderedDOMComponentsWithTag(parent, elem)[_index];
            }
        } else {
            return _reactLibReactTestUtils2['default'].scryRenderedComponentsWithType(parent, elem)[_index];
        }
    },

    find: function find(parent, elem, index) {
        var _index = index || 0;
        if (typeof elem == 'string') {
            if (elem.indexOf('.') >= 0) {
                elem = elem.replace('.', '');
                return _reactLibReactTestUtils2['default'].findRenderedDOMComponentWithClass(parent, elem)[_index];
            } else {
                return _reactLibReactTestUtils2['default'].findRenderedDOMComponentWithTag(parent, elem)[_index];
            }
        } else {
            return _reactLibReactTestUtils2['default'].findRenderedComponentWithType(parent, elem)[_index];
        }
    },

    findAll: function findAll(parent, elem) {
        return _reactLibReactTestUtils2['default'].findAllInRenderedTree(parent, elem);
    },

    nativeTouchData: function nativeTouchData(x, y) {
        return _reactLibReactTestUtils2['default'].nativeTouchData(x, y);
    }

};

exports['default'] = Tool;
module.exports = exports['default'];