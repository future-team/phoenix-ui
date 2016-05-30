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

var _TabJs = require('./Tab.js');

var _TabJs2 = _interopRequireDefault(_TabJs);

/**
 * tabset选项卡组件
 * - 可以指定当前actie选项。
 * - 支持选项卡横排，竖排两种情况。
 * - 此外支持自定义类名,事件等操作
 * 具体属性和接口如下：
 * <ul>
 *     <li>activeIndex; 当前选中标签卡，默认0</li>
 *     <li>vertiacl; 是否竖排，如需要直接添加改属性即可，默认不竖排</li>
 *     <li>width; 选项卡头部的宽度，取值0-100之间 即class＝‘col－20’，取值即可，注只有在竖排的情况下生效，
 *          也就是没有vertical属性，设置width也没用的，默认20
 *          例如横排情况:
 *     </li>
 *     <li>
 *          <code>
 *             Tabset activeIndex ={0} width={30}
 *               Tab heading='tab1' className='测试'>hahadhdad1
 *               /Tab
 *            /Tabset
 *          </code>
 *         上面的width是不起作用的
 *        竖排情况:
 *          <code>
 *              Tabset activeIndex ={0} vertical width={30}
 *          </code>
 *         此时表明默认选中第一个选项卡，并且竖排标签部分width为30%
 *
 *          </li>
 *
 * </ul>
 * @class Tabset
 * @module Tab(选项卡)
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo Tab.js{展示}
 * @demo Tab.js{源码}
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
             * @default 0
             * */
            activeIndex: _react.PropTypes.number,
            /**
             * 是否竖排
             * @property vertical
             * @default false || null
             * */
            vertical: _react.PropTypes.bool,
            /**
             * 设置选项卡头部的宽度，只有竖排的情况下才起作用
             * @property width
             * @default '20'
             * */
            width: _react.PropTypes.number,
            /**
             * 点击事件的回调函数
             * @property clickCallback
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
            width: 20,
            clickCallback: null,
            activeCallback: null
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

    Tabset.prototype.isVertial = function isVertial() {
        return !!this.props.vertical ? 'vertical row' : '';
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
    };

    Tabset.prototype.getClass = function getClass(flag) {
        var vertical = this.props.vertical;
        if (flag) {
            var cols = 'col-' + this.props.width;
            return !vertical ? 'row' : cols;
        } else {
            return vertical ? 'col' : '';
        }
    };

    Tabset.prototype.render = function render() {
        var _this = this;

        var panels = [];
        var _props = this.props;
        var className = _props.className;
        var clickCallback = _props.clickCallback;

        var other = _objectWithoutProperties(_props, ['className', 'clickCallback']);

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
                { className: _classnames2['default']('tab-panel', _this.isActive(index), options.props.className), key: index },
                options.props.children
            );
            panels.push(panel);
            return opt;
        }, this);
        return _react2['default'].createElement(
            'div',
            _extends({ className: _classnames2['default']('ui-tabs', this.isVertial(), className), onClick: clickCallback }, other),
            _react2['default'].createElement(
                'ul',
                { className: this.getClass(true) },
                headings
            ),
            _react2['default'].createElement(
                'div',
                { className: _classnames2['default'](this.getClass(false), 'tab-bd"') },
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