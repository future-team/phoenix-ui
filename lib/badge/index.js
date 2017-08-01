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

require('../style');

require('phoenix-styles/less/modules/badges.less');

/**
 * Badge标记<br/>
 * - 主要是用来提供不同颜色的标识, 通过phStyle来改变颜色, 可选default、primary、warning、danger、info、error、success。
 * - 不提供默认回调, 但支持自定义className，事件等操作。
 *
 * 主要属性和接口：
 * - phStyle:颜色, 默认primary <br/>
 * 如：`<Badge phStyle='info'>惠</Badge>`
 *
 * @class Badge
 * @module 标签组件
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo badge|badge.js {展示}
 * @show true
 * */

var Badge = (function (_Component) {
    _inherits(Badge, _Component);

    _createClass(Badge, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'badge'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 标记颜色[default、primary、warning、danger、info、error、success], 默认primary
             * @property phStyle
             * @type string
             * @default 'default'
             **/
            phStyle: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            phStyle: 'default',
            classPrefix: 'badge',
            classMapping: {
                'primary': 'primary',
                'info': 'info',
                'success': 'success',
                'error': 'error',
                'warning': 'warning',
                'danger': 'danger'
            }
        },
        enumerable: true
    }]);

    function Badge(props, context) {
        _classCallCheck(this, Badge);

        _Component.call(this, props, context);
    }

    Badge.prototype.renderBadge = function renderBadge() {
        var _props = this.props;
        var className = _props.className;
        var style = _props.style;
        var children = _props.children;

        return _react2['default'].createElement(
            'span',
            _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(true), className), style: this.getStyles(style) }),
            children
        );
    };

    Badge.prototype.render = function render() {
        return this.renderBadge();
    };

    return Badge;
})(_utilsComponent2['default']);

exports['default'] = Badge;
module.exports = exports['default'];