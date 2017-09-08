'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsComponent = require('../utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _utilsLogger = require('../utils/logger');

var _utilsLogger2 = _interopRequireDefault(_utilsLogger);

require('../style');

require('phoenix-styles/less/modules/accordion.less');

/**
 * <h5>操作类组件，主要包括组件:</h5>
 * <strong><a href='../classes/Accordion.html'>Accordion 手风琴</a></strong><br/>
 * <strong><a href='../classes/Toast.html'>Toast 飘字</a></strong><br>
 * <strong><a href='../classes/Popup.html'>Popup 弹层</a></strong><br>
 * <strong><a href='../classes/Slider.html'>Slider 滑动输入条</a></strong><br>
 * <strong><a href='../classes/Swipe.html'>Swipe 左滑动</a></strong><br>
 * <strong><a href='../classes/Menu.html'>Menu 菜单</a></strong><br>
 * <strong><a href='../classes/LoadingList.html'>LoadingList 加载更多</a></strong><br>
 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
 * @module 操作类组件
 * @main 操作类组件
 * @static
 */
/**
 * 手风琴组件<br/>
 * - 通过visible设置初始展开或收起的状态, 可选true/false。
 * - 可通过clickCallback设置展开收起时额外的回调函数。
 * - 可通过hideIcon设置隐藏向下的箭头。
 *
 * 主要属性和接口：
 * - visible:初始展开或收起的状态, 默认false收起。
 * = hideIcon:设置隐藏向下的箭头, 默认false可见。<br/>
 * 如：
 * ```code
 *     <Accordion visible={true} hideIcon>
 *         <Accordion.Header>
 *             标题一
 *         </Accordion.Header>
 *         <Accordion.Body>
 *             ...
 *         </Accordion.Body>
 *     </Accordion>
 * ```
 * - clickCallback:点击收起展开的额外的回调执行函数。<br/>
 * 如：
 * ```code
 *     <Accordion clickCallback={(visible)=>{console.log(visible);}}>
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
 * @since 0.4.0
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
             * @method clickCallback
             * @type Function
             * */
            clickCallback: _react.PropTypes.func,
            /**
             * 向下的箭头是否可见， 默认可见
             * @property hideIcon
             * @type Boolean
             * @default false
             * */
            hideIcon: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            visible: false,
            hideIcon: false,
            classPrefix: 'accordion',
            componentTag: 'div',
            classMapping: {
                'visible': 'visible'
            }
        },
        enumerable: true
    }]);

    function Accordion(props, context) {
        _classCallCheck(this, Accordion);

        _Component.call(this, props, context);

        new _utilsLogger2['default']('Accordion');

        this.state = {
            visible: props.visible
        };
    }

    Accordion.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.state.visible != nextProps.visible) this.setState({ visible: nextProps.visible });
    };

    Accordion.prototype.changeVisible = function changeVisible() {
        var _this2 = this;

        this.setState({
            visible: !this.state.visible
        }, function () {
            if (_this2.props.clickCallback) _this2.props.clickCallback(_this2.state.visible);
        });
    };

    Accordion.prototype.renderChildren = function renderChildren() {
        var _this = this;
        var newChildren = [];
        var hideIcon = this.props.hideIcon;

        _react2['default'].Children.forEach(this.props.children, function (child, index) {
            newChildren.push(_react2['default'].cloneElement(child, {
                key: index,
                hideIcon: hideIcon,
                visible: _this.state.visible,
                changeVisible: _this.changeVisible.bind(_this)
            }));
        });

        return newChildren;
    };

    Accordion.prototype.renderAccordion = function renderAccordion() {
        var _props = this.props;
        var Component = _props.componentTag;
        var className = _props.className;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(true), className) }),
            this.renderChildren()
        );
    };

    Accordion.prototype.render = function render() {
        return this.renderAccordion();
    };

    return Accordion;
})(_utilsComponent2['default']);

var AccordionHeader = (function (_Component2) {
    _inherits(AccordionHeader, _Component2);

    function AccordionHeader(props, context) {
        _classCallCheck(this, AccordionHeader);

        _Component2.call(this, props, context);
    }

    AccordionHeader.prototype.clickHandle = function clickHandle() {
        var _props2 = this.props;
        var changeVisible = _props2.changeVisible;
        var onClick = _props2.onClick;

        this.props.changeVisible();
        if (onClick) onClick();
    };

    AccordionHeader.prototype.renderIcon = function renderIcon() {
        var _props3 = this.props;
        var visible = _props3.visible;
        var hideIcon = _props3.hideIcon;

        if (!hideIcon) {
            return _react2['default'].createElement(_icon2['default'], { phIcon: 'expand-more', className: visible ? 'active' : '' });
        } else {
            return '';
        }
    };

    AccordionHeader.prototype.renderAccordionHeader = function renderAccordionHeader() {
        var className = this.props.className;

        return _react2['default'].createElement(
            'div',
            _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(true), className),
                onClick: this.clickHandle.bind(this)
            }),
            this.props.children,
            this.renderIcon()
        );
    };

    AccordionHeader.prototype.render = function render() {
        return this.renderAccordionHeader();
    };

    _createClass(AccordionHeader, null, [{
        key: 'defaultProps',
        value: {
            classPrefix: 'accordion-header',
            classMapping: {}
        },
        enumerable: true
    }]);

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
        var _this3 = this;

        setTimeout(function () {
            _this3.height = _this3.accordionBody.offsetHeight + 'px';
            _this3.setHeight();
        }, 0);
    };

    AccordionBody.prototype.componentDidUpdate = function componentDidUpdate() {
        this.setHeight();
    };

    AccordionBody.prototype.setHeight = function setHeight() {
        this.accordionBodyParent.style.height = this.props.visible ? this.height : 0;
    };

    AccordionBody.prototype.renderAccordionBody = function renderAccordionBody() {
        var _this4 = this;

        var _props4 = this.props;
        var children = _props4.children;
        var className = _props4.className;

        return _react2['default'].createElement(
            'div',
            _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(true), 'animated', className), ref: function (accordionBodyParent) {
                    _this4.accordionBodyParent = accordionBodyParent;
                } }),
            _react2['default'].createElement(
                'div',
                { ref: function (accordionBody) {
                        _this4.accordionBody = accordionBody;
                    } },
                children
            )
        );
    };

    AccordionBody.prototype.render = function render() {
        return this.renderAccordionBody();
    };

    _createClass(AccordionBody, null, [{
        key: 'defaultProps',
        value: {
            classPrefix: 'accordion-body',
            classMapping: {}
        },
        enumerable: true
    }]);

    return AccordionBody;
})(_utilsComponent2['default']);

Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

exports['default'] = Accordion;
module.exports = exports['default'];