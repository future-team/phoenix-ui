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

var _utilsClassNameMixin = require('./utils/ClassNameMixin');

var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

var _utilsTool = require('./utils/Tool');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

/**
 * tab选项卡组件<br/>
 * - 通过heading设置选项卡的显示内容。
 * - 可通过onChange设置点击选项卡的回调函数。
 * - 可自定义className等常用属性以及事件。
 *
 * 具体属性和接口如下：
 * - heading:选项卡的显示内容, 默认'tab'
 * - onChange:点击事件的回调函数
 *
 * 示例:
 * ```code
 *     <Tabset activeIndex ={this.state.index} tabCallback={(index)=>{console.log(index);}>
 *         <Tab heading='标题1' className='tab-test'>
 *             横向内容1
 *         </Tab>
 *         <Tab heading='标题2' onChange={(index)=>{console.log(index);}>
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
 * @demo Tab.js{展示}
 * @demo Tab.js{源码}
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
             * @method onChange
             * @type Function
             * @default null
             * */
            onChange: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            heading: 'tab',
            activeIndex: 0,
            vertical: false,
            onChange: null
        },
        enumerable: true
    }]);

    function Tab(props, context) {
        _classCallCheck(this, _Tab);

        _Component.call(this, props, context);
    }

    Tab.prototype.handleClick = function handleClick() {
        this.props.changeActive(this.props.index);
        this.props.onChange && this.props.onChange(this.props.index);
    };

    Tab.prototype.isActive = function isActive() {
        return this.props.index == this.props.activeIndex ? 'active' : '';
    };

    Tab.prototype.isVertical = function isVertical() {
        return !!this.props.vertical ? '' : _utilsTool.setPhoenixPrefix('col');
    };

    Tab.prototype.render = function render() {
        var _props = this.props;
        var className = _props.className;
        var onClick = _props.onClick;

        var other = _objectWithoutProperties(_props, ['className', 'onClick']);

        return _react2['default'].createElement(
            'li',
            _extends({ className: _classnames2['default'](this.isVertical(), _utilsTool.setPhoenixPrefix('tab-nav'), this.isActive(), className), onClick: this.handleClick.bind(this) }, other),
            this.props.heading
        );
    };

    var _Tab = Tab;
    Tab = _utilsClassNameMixin2['default'](Tab) || Tab;
    return Tab;
})(_react.Component);

exports['default'] = Tab;
module.exports = exports['default'];