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

/**
 * tab选项卡组件<br/>
 * - 通过heading设置选项卡的显示内容。
 * - 可通过clickCallback设置点击选项卡的回调函数。
 * - 可自定义className等常用属性以及事件。
 *
 * 具体属性和接口如下：
 * - heading:选项卡的显示内容, 默认'tab'
 * - clickCallback:点击事件的回调函数
 *
 * 示例:
 * ```code
 *     <Tabset index={this.state.index} tabCallback={(index)=>{console.log(index);}>
 *         <Tab heading='标题1' className='tab-test'>
 *             横向内容1
 *         </Tab>
 *         <Tab heading='标题2' clickCallback={(index)=>{console.log(index);}>
 *             横向内容2
 *         </Tab>
 *     </Tabset>
 * ```
 *
 * @class Tab
 * @module 选项卡
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo tab|tab.js{展示}
 * @show true
 * */

var Tab = (function (_Component) {
    _inherits(Tab, _Component);

    _createClass(Tab, null, [{
        key: 'ProTypes',
        value: {
            /**
             * 选项卡的标题文字，默认为‘tab’
             * @property heading
             * @type String
             * @default 'tab'
             * */
            heading: _react.PropTypes.string,
            /**
             * 点击事件的回调函数
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
            heading: 'tab',
            activeIndex: 0,
            vertical: false,
            clickCallback: null,
            classPrefix: 'tab',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Tab(props, context) {
        _classCallCheck(this, Tab);

        _Component.call(this, props, context);
    }

    Tab.prototype.handleClick = function handleClick() {
        this.props.changeActive(this.props.index);
        this.props.clickCallback && this.props.clickCallback(this.props.index);
    };

    Tab.prototype.isActive = function isActive() {
        return this.props.index == this.props.activeIndex ? 'active' : '';
    };

    Tab.prototype.isVertical = function isVertical() {
        return !!this.props.vertical ? '' : this.setPhPrefix('col', true);
    };

    Tab.prototype.renderTab = function renderTab() {
        var className = this.props.className;

        return _react2['default'].createElement(
            'li',
            _extends({}, this.otherProps, { className: _classnames2['default'](this.isVertical(), this.setPhPrefix('tab-nav', true), this.isActive(), className), onClick: this.handleClick.bind(this) }),
            _react2['default'].createElement(
                'a',
                { href: 'javascript:;' },
                this.props.heading
            )
        );
    };

    Tab.prototype.render = function render() {
        return this.renderTab();
    };

    return Tab;
})(_utilsComponent2['default']);

exports['default'] = Tab;
module.exports = exports['default'];