/**
 * Created by panqianjin on 16/5/26.
 */
'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsClassNameMixin = require('./utils/ClassNameMixin');

var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLibReactDOM = require('react/lib/ReactDOM');

var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);

var Tab = (function (_Component) {
    _inherits(Tab, _Component);

    function Tab(props, context) {
        _classCallCheck(this, _Tab);

        _Component.call(this, props, context);
    }

    Tab.prototype.handleClick = function handleClick() {
        this.props.onClick && this.props.onClick();
        this.props.clickCallBack && this.props.clickCallBack(this.props.index);
    };

    Tab.prototype.isActive = function isActive() {
        return this.props.index == this.props.activeIndex ? 'active' : '';
    };

    Tab.prototype.isVertical = function isVertical() {
        return !!this.props.vertical ? '' : 'col';
    };

    Tab.prototype.render = function render() {
        return _react2['default'].createElement(
            'li',
            { className: _classnames2['default'](this.isVertical(), 'tab-nav', this.isActive(), this.props.className), onClick: this.handleClick.bind(this) },
            this.props.heading
        );
    };

    _createClass(Tab, null, [{
        key: 'defaultProps',
        value: {
            activeIndex: 0,
            vertical: false
        },
        enumerable: true
    }]);

    var _Tab = Tab;
    Tab = _utilsClassNameMixin2['default'](Tab) || Tab;
    return Tab;
})(_react.Component);

exports['default'] = Tab;
module.exports = exports['default'];