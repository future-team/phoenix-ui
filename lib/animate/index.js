'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

require("phoenix-styles/less/modules/animation.less");

/**
 * 动画外层组件<br/>
 * - 使用时需要在子元素增加animated类名实现动画效果, animated定义的是过渡的duration和fill-mode, 默认300ms, 完全可以自定义。
 * - 可通过transitionName设置动画名称, 可选fade、slide-top、slide-bottom(还将补充), 默认fade。
 * - 可通过transitionEnterTimeout设置进入延迟时间。
 * - 可通过transitionLeaveTimeout设置离开延迟时间。
 *
 * 示例:
 * ```code
 *     <Animate className='popup-content' transitionName='slide-top'>
 *         {this.renderPopup()}
 *     </Animate>
 * ```
 * ```code
 *     renderPopup(){
 *         let {visible,children,className} = this.props;
 *         if(visible){
 *             return <div {...this.props} className={'popup-main', 'animated', className)}>{children}</div>;
 *         }else{
 *             return '';
 *         }
 *     }
 * ```
 *
 * @class Animate
 * @module 辅助组件
 * @extends Component
 * @constructor
 * @since 1.0.0
 * @demo animate|animate.js {展示}
 * @show true
 * */

var Animate = (function (_Component) {
    _inherits(Animate, _Component);

    _createClass(Animate, null, [{
        key: 'propTypes',
        value: {
            /**
             * 动画名称,默认fade
             * @property transitionName
             * @type String
             * @default 'fade'
             * */
            transitionName: _react.PropTypes.string,
            /**
             * 动画进入延迟时间
             * @property transitionEnterTimeout
             * @type Number
             * */
            transitionEnterTimeout: _react.PropTypes.number,
            /**
             * 动画退出延迟时间
             * @property transitionLeaveTimeout
             * @type Number
             * */
            transitionLeaveTimeout: _react.PropTypes.number
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            transitionName: 'fade',
            transitionEnterTimeout: 100,
            transitionLeaveTimeout: 300
        },
        enumerable: true
    }]);

    function Animate(props, context) {
        _classCallCheck(this, Animate);

        _Component.call(this, props, context);
    }

    Animate.prototype.render = function render() {
        var _props = this.props;
        var transitionName = _props.transitionName;
        var transitionEnterTimeout = _props.transitionEnterTimeout;
        var transitionLeaveTimeout = _props.transitionLeaveTimeout;
        var children = _props.children;

        return _react2['default'].createElement(
            _reactAddonsCssTransitionGroup2['default'],
            _extends({}, this.props, {
                transitionName: transitionName,
                transitionEnterTimeout: transitionEnterTimeout,
                transitionLeaveTimeout: transitionLeaveTimeout
            }),
            children
        );
    };

    return Animate;
})(_react.Component);

exports['default'] = Animate;
module.exports = exports['default'];