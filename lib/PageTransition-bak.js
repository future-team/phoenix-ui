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

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _utilsTool = require('./utils/Tool');

var PageTransition = (function (_Component) {
    _inherits(PageTransition, _Component);

    _createClass(PageTransition, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'loading-list'
             * */
            classPrefix: _react.PropTypes.string,
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
            transitionName: 'slide-top',
            transitionEnterTimeout: 100,
            transitionLeaveTimeout: 300,
            classPrefix: 'page-transition',
            classMapping: {}
        },
        enumerable: true
    }]);

    function PageTransition(props, context) {
        _classCallCheck(this, PageTransition);

        _Component.call(this, props, context);
    }

    PageTransition.prototype.componentWillAppear = function componentWillAppear(cb) {
        console.log(1111);
    };

    PageTransition.prototype.render = function render() {
        var _props = this.props;
        var transitionName = _props.transitionName;
        var transitionEnterTimeout = _props.transitionEnterTimeout;
        var transitionLeaveTimeout = _props.transitionLeaveTimeout;
        var className = _props.className;
        var children = _props.children;

        return _react2['default'].createElement(
            _reactAddonsCssTransitionGroup2['default'],
            _extends({}, this.props, {
                className: _classnames2['default'](this.getProperty(true), className),
                transitionName: transitionName,
                transitionEnterTimeout: transitionEnterTimeout,
                transitionLeaveTimeout: transitionLeaveTimeout
            }),
            _react2['default'].cloneElement(children, {
                key: this.props.location.pathname
            })
        );
    };

    return PageTransition;
})(_utilsComponent2['default']);

exports['default'] = PageTransition;
module.exports = exports['default'];