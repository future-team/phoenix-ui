'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsClassNameMixin = require('../utils/ClassNameMixin');

var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsTool = require('../utils/Tool');

var _TabJs = require('./Tab.js');

var _TabJs2 = _interopRequireDefault(_TabJs);

require("phoenix-styles/less/modules/tab.less");

/**
 * <h5>tab选项卡，主要包括一下两个组件:</h5>
 * <strong><a href='../classes/Tabset.html'>tabset</a></strong><br/>
 * <strong><a href='../classes/Tab.html'>tab</a></strong><br>
 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
 * @module 选项卡
 * @main 选项卡
 * @static
 *
 */
/**
 * tabset选项卡组件<br/>
 * - 通过activeIndex指定默认的选中tab的索引值。
 * - 选项卡默认横排, 可通过vertical设置为竖排。
 * - 当设置为vertical后, 可通过width设置tab标题部分的宽度占比。
 * - 可通过clickCallback设置点击选项卡的回调函数。
 * - 可自定义className等常用属性以及事件。
 *
 * 具体属性和接口如下：
 * - activeIndex:默认选中的标签卡索引值，默认0第一个tab
 * - vertical:是否竖排，如需要直接添加改属性即可，默认不竖排
 * - width:选项卡头部的宽度，取值0-100之间, 只有设置vertical下生效, 默认20
 * - clickCallback:点击选项卡执行的回调函数
 *
 * 示例:
 * - 横排
 * ```code
 *     <Tabset activeIndex ={this.state.index} clickCallback={(index)=>{console.log(index);}>
 *         <Tab heading='标题1' className='tab-test'>
 *             横向内容1
 *         </Tab>
 *         <Tab heading='标题2' clickCallback={(index)=>{console.log(index);}>
 *             横向内容2
 *         </Tab>
 *     </Tabset>
 * ```
 * - 竖排
 * ```code
 *     <Tabset vertical width={30} activeIndex ={this.state.index} clickCallback={(index)=>{console.log(index);}>
 *         <Tab heading='标题1'>
 *             竖向内容1
 *         </Tab>
 *         <Tab heading='标题2' clickCallback={(index)=>{console.log(index);}>
 *             竖向内容2
 *         </Tab>
 *     </Tabset>
 * ```
 *
 * @class Tabset
 * @module 选项卡
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo tab|tab.js{展示}
 * @show true
 * */

var Tabset = (function (_Component) {
    _inherits(Tabset, _Component);

    _createClass(Tabset, null, [{
        key: 'propTypes',
        value: {
            /**
             * 指定默认选中的选项卡，默认为0
             * @property activeIndex
             * @type Number
             * @default 0
             * */
            activeIndex: _react.PropTypes.number,
            /**
             * 是否竖排
             * @property vertical
             * @type Boolean
             * @default false || null
             * */
            vertical: _react.PropTypes.bool,
            /**
             * 设置选项卡头部的宽度，只有竖排的情况下才起作用
             * @property width
             * @type Number
             * @default '20'
             * */
            width: _react.PropTypes.number,
            /**
             * 点击事件的回调函数,返回当前选中项
             * @method clickCallback
             * @type Function
             * @default null
             * */
            clickCallback: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            activeIndex: 0,
            vertical: false,
            width: 33,
            clickCallback: null
        },
        enumerable: true
    }]);

    function Tabset(props, context) {
        _classCallCheck(this, _Tabset);

        _Component.call(this, props, context);

        this.state = {
            activeIndex: this.props.activeIndex
        };
    }

    Tabset.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.state.activeIndex != nextProps.activeIndex && this.changeActive(nextProps.activeIndex);
    };

    Tabset.prototype.isVertial = function isVertial() {
        return !!this.props.vertical ? _utilsTool.setPhPrefix('tabs-vertical') + ' ' + _utilsTool.setPhPrefix('row') : '';
    };

    Tabset.prototype.isActive = function isActive(index) {
        return index == this.state.activeIndex ? 'active' : '';
    };

    Tabset.prototype.changeActive = function changeActive(index) {
        if (index != this.state.activeIndex) {
            this.setState({
                activeIndex: index
            });
        }
        this.tabHandler(index);
    };

    Tabset.prototype.getClass = function getClass(flag) {
        var vertical = this.props.vertical;
        if (flag) {
            var cols = _utilsTool.setPhPrefix('col-' + this.props.width);
            return !vertical ? _utilsTool.setPhPrefix('row') : _utilsTool.setPhPrefix('col') + ' ' + cols;
        } else {
            return vertical ? _utilsTool.setPhPrefix('col') : '';
        }
    };

    Tabset.prototype.tabHandler = function tabHandler(index) {
        var clickCallback = this.props.clickCallback;

        clickCallback && clickCallback(index);
    };

    Tabset.prototype.render = function render() {
        var _this = this;

        var panels = [];
        var _props = this.props;
        var className = _props.className;

        var other = _objectWithoutProperties(_props, ['className']);

        var headings = _react2['default'].Children.map(this.props.children, function (options, index) {
            var _options$props = options.props;
            var vertical = _options$props.vertical;

            var other = _objectWithoutProperties(_options$props, ['vertical']);

            var opt = _react2['default'].cloneElement(options, {
                key: index,
                index: index,
                activeIndex: _this.state.activeIndex,
                changeActive: _this.changeActive.bind(_this),
                vertical: _this.props.vertical
            });

            var panel = _react2['default'].createElement(
                'div',
                { className: _classnames2['default'](_utilsTool.setPhPrefix('tab-panel'), _this.isActive(index), options.props.className), key: index },
                options.props.children
            );
            panels.push(panel);
            return opt;
        }, this);

        return _react2['default'].createElement(
            'div',
            _extends({ className: _classnames2['default'](_utilsTool.setPhPrefix('tabs'), this.isVertial(), className) }, other),
            _react2['default'].createElement(
                'ul',
                { className: _classnames2['default'](this.getClass(true), _utilsTool.setPhPrefix('tab-navs')) },
                headings
            ),
            _react2['default'].createElement(
                'div',
                { className: _classnames2['default'](this.getClass(false), _utilsTool.setPhPrefix('tab-bd')) },
                panels
            )
        );
    };

    var _Tabset = Tabset;
    Tabset = _utilsClassNameMixin2['default'](Tabset) || Tabset;
    return Tabset;
})(_react.Component);

exports['default'] = Tabset;
module.exports = exports['default'];