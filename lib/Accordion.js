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
 * <h5>操作类组件，主要包括组件:</h5>
 * <strong><a href='../classes/Accordion.html'>Accordion 手风琴</a></strong><br/>
 * <strong><a href='../classes/Dialog.html'>Dialog 弹框</a></strong><br>
 * <strong><a href='../classes/Toast.html'>Toast 飘字</a></strong><br>
 * <strong><a href='../classes/Popup.html'>Popup 弹层</a></strong><br>
 * <strong><a href='../classes/Slider.html'>Slider 滑动输入条</a></strong><br>
 * <strong><a href='../classes/Swipe.html'>Swipe 左滑动</a></strong><br>
 * <strong><a href='../classes/Menu.html'>Menu 菜单</a></strong><br>
 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
 * @module 操作类组件
 * @main 操作类组件
 * @static
 */
/**
 * 手风琴组件<br/>
 * - 通过visible设置初始展开或收起的状态, 可选true/false。
 * - 可通过onChange设置展开收起时额外的回调函数。
 *
 * 主要属性和接口：
 * - visible:初始展开或收起的状态, 默认false收起 <br/>
 * 如：
 * ```code
 *     <Accordion visible={true}>
 *         <Accordion.Header>
 *             标题一
 *         </Accordion.Header>
 *         <Accordion.Body>
 *             ...
 *         </Accordion.Body>
 *     </Accordion>
 * ```
 * - onChange:点击收起展开的额外的回调执行函数 <br/>
 * 如：
 * ```code
 *     <Accordion onChange={(visible)=>{console.log(visible);}}>
 *         <Accordion.Header>
 *             标题一
 *         </Accordion.Header>
 *         <Accordion.Body>
 *             ...
 *         </Accordion.Body>
 *     </Accordion>
 * ```
 *
 * @class Accordion
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @demo accordion|accordion.js {展示}
 * @show true
 * */

var Accordion = (function (_Component) {
    _inherits(Accordion, _Component);

    _createClass(Accordion, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'accordion'
             * */
            classPrefix: _react.PropTypes.string,
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
             * @default false
             * */
            visible: _react.PropTypes.bool,
            /**
             * 点击收起展开的回调函数
             * @method onChange
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

        this.state = {
            visible: props.visible
        };
    }

    Accordion.prototype.changeVisible = function changeVisible(fn) {
        this.setState({
            visible: !this.state.visible
        }, fn);
    };

    Accordion.prototype.renderChildren = function renderChildren() {
        var _this = this;
        var newChildren = [];
        var onChange = this.props.onChange;

        _react2['default'].Children.forEach(this.props.children, function (child, index) {
            newChildren.push(_react2['default'].cloneElement(child, {
                key: index,
                visible: _this.state.visible,
                onChange: onChange,
                changeVisible: _this.changeVisible.bind(_this)
            }));
        });

        return newChildren;
    };

    Accordion.prototype.render = function render() {
        var _props = this.props;
        var Component = _props.componentTag;
        var className = _props.className;

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

    AccordionHeader.prototype.onChange = function onChange() {
        var _this2 = this;

        this.props.changeVisible(function () {
            if (_this2.props.onChange) _this2.props.onChange(_this2.props.visible);
        });
    };

    AccordionHeader.prototype.render = function render() {
        var className = this.props.className;

        return _react2['default'].createElement(
            'div',
            _extends({ className: _classnames2['default'](_utilsTool.setPhoenixPrefix('accordion-header'), className),
                onClick: this.onChange.bind(this)
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
        this.height = this.accordionBody.offsetHeight + 'px';
        this.setHeight();
    };

    AccordionBody.prototype.componentDidUpdate = function componentDidUpdate() {
        this.setHeight();
    };

    AccordionBody.prototype.setHeight = function setHeight() {
        this.accordionBodyParent.style.height = this.props.visible ? this.height : 0;
    };

    AccordionBody.prototype.render = function render() {
        var _this3 = this;

        var _props2 = this.props;
        var visible = _props2.visible;
        var children = _props2.children;
        var className = _props2.className;

        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, { className: _classnames2['default'](_utilsTool.setPhoenixPrefix('accordion-body'), 'animated', className), ref: function (accordionBodyParent) {
                    _this3.accordionBodyParent = accordionBodyParent;
                } }),
            _react2['default'].createElement(
                'div',
                { ref: function (accordionBody) {
                        _this3.accordionBody = accordionBody;
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