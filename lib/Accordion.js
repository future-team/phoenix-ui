'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsComponent = require('./utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsTool = require('./utils/Tool');

/**
 * 手风琴
 * @class Accordion
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @demo accordion.js {展示}
 * @demo accordion.js {源码}
 * @show true
 * */

var Accordion = (function (_Component) {
    _inherits(Accordion, _Component);

    _createClass(Accordion, null, [{
        key: 'propTypes',
        value: {
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * */
            componentTag: _react.PropTypes.string,
            /**
             * 是否可见标识
             * @property visible
             * @type Boolean
             * */
            visible: _react.PropTypes.bool,
            /**
             * 动作的执行函数
             * @property onChange
             * @type Function
             * */
            onChange: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            visible: false,
            classPrefix: 'accordion',
            componentTag: 'div',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Accordion(props, context) {
        _classCallCheck(this, Accordion);

        _Component.call(this, props, context);
    }

    Accordion.prototype.renderChildren = function renderChildren() {
        var newChildren = [];
        var _props = this.props;
        var visible = _props.visible;
        var onChange = _props.onChange;

        _react2['default'].Children.forEach(this.props.children, function (child, index) {
            newChildren.push(_react2['default'].cloneElement(child, {
                key: index,
                visible: visible,
                onChange: onChange
            }));
        });

        return newChildren;
    };

    Accordion.prototype.render = function render() {
        var _props2 = this.props;
        var Component = _props2.componentTag;
        var className = _props2.className;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className) }),
            this.renderChildren()
        );
    };

    return Accordion;
})(_utilsComponent2['default']);

var AccordionHeader = (function (_Component2) {
    _inherits(AccordionHeader, _Component2);

    function AccordionHeader(props, context) {
        _classCallCheck(this, AccordionHeader);

        _Component2.call(this, props, context);
    }

    AccordionHeader.prototype.render = function render() {
        var _props3 = this.props;
        var className = _props3.className;
        var onChange = _props3.onChange;

        return _react2['default'].createElement(
            'div',
            _extends({ className: _classnames2['default'](_utilsTool.setPhoenixPrefix('accordion-header'), className),
                onClick: onChange
            }, this.props),
            this.props.children
        );
    };

    return AccordionHeader;
})(_utilsComponent2['default']);

;

var AccordionBody = (function (_Component3) {
    _inherits(AccordionBody, _Component3);

    function AccordionBody(props, context) {
        _classCallCheck(this, AccordionBody);

        _Component3.call(this, props, context);

        this.height = 0;
    }

    AccordionBody.prototype.componentDidMount = function componentDidMount() {
        this.height = this.accordionBody.offsetHeight;
    };

    AccordionBody.prototype.render = function render() {
        var _this = this;

        var _props4 = this.props;
        var visible = _props4.visible;
        var children = _props4.children;
        var className = _props4.className;

        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, { className: _classnames2['default'](_utilsTool.setPhoenixPrefix('accordion-body'), 'animated', className), style: {
                    height: visible ? this.height + 'px' : '0'
                } }),
            _react2['default'].createElement(
                'div',
                { ref: function (accordionBody) {
                        _this.accordionBody = accordionBody;
                    } },
                children
            )
        );
    };

    return AccordionBody;
})(_utilsComponent2['default']);

Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

exports['default'] = Accordion;
module.exports = exports['default'];