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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

/**
 * tab选项卡组件
 * - 标签内容为heading属性，children部分为对应要显示的内容<br/>
 * - 此外支持自定义类名,事件等操作<br/>
 * 具体属性和接口如下：
 * <ul>
 *     <li>heading; 标签卡的显示内容，默认‘tab’ 。
 *         虽然有默认值但是这应该是必填的。</li>
 *       <li>
 *         例如:
 *          <code>
 *            Tabset activeIndex ={0} width={30}
 *               Tab heading='tab1' className='测试'>hahadhdad1
 *               /Tab
 *            /Tabset
 *          </code>
 *       </li>
 *       <li>clickCallback: 点击事件的回调函数，默认为null</li>
 * </ul>
 * @class Tab
 * @module Tab(选项卡)
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
             * 但是这个应该是必填的，一个tab显示出来也没意思啦
             * @property heading
             * @default 'tab'
             * */
            heading: _react.PropTypes.string,
            /**
             * 点击事件的回调函数
             * @property clickCallback
             * @default null
             * */
            clickCallback: _react.PropTypes.func
        },
        enumerable: true
    }]);

    function Tab(props, context) {
        _classCallCheck(this, _Tab);

        _Component.call(this, props, context);
    }

    Tab.prototype.handleClick = function handleClick() {
        this.props.changeActive(this.props.index);
        this.props.clickCallback && this.props.clickCallback();
    };

    Tab.prototype.isActive = function isActive() {
        return this.props.index == this.props.activeIndex ? 'active' : '';
    };

    Tab.prototype.isVertical = function isVertical() {
        return !!this.props.vertical ? '' : 'col';
    };

    Tab.prototype.render = function render() {
        var _props = this.props;
        var className = _props.className;
        var onClick = _props.onClick;

        var other = _objectWithoutProperties(_props, ['className', 'onClick']);

        return _react2['default'].createElement(
            'li',
            _extends({ className: _classnames2['default'](this.isVertical(), 'tab-nav', this.isActive(), className), onClick: this.handleClick.bind(this) }, other),
            this.props.heading
        );
    };

    _createClass(Tab, null, [{
        key: 'defaultProps',
        value: {
            heading: 'tab',
            activeIndex: 0,
            vertical: false,
            clickCallback: null
        },
        enumerable: true
    }]);

    var _Tab = Tab;
    Tab = _utilsClassNameMixin2['default'](Tab) || Tab;
    return Tab;
})(_react.Component);

exports['default'] = Tab;
module.exports = exports['default'];