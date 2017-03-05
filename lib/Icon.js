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

/**
 * Icon<br/>
 * - 可通过phIcon来配置不同类型的符号, 可选[查看所有icon类型](http://future-team.github.io/gfs-icons/index.html)。
 * - 支持自定义className，事件等操作。
 *
 * 主要属性和接口：
 * - phIcon:配置不同类型的符号 <br/>
 * 如：`<Icon phIcon="search" />`
 *
 * @class Icon
 * @module 标签组件
 * @extends Component
 * @constructor
 * @since 1.3.0
 * @demo icon|icon.js {展示}
 * @show true
 * */

var Icon = (function (_Component) {
    _inherits(Icon, _Component);

    _createClass(Icon, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'icon'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * @default 'span'
             * */
            componentTag: _react.PropTypes.string,
            /**
             * icon符号类型
             * @property phIcon
             * @type string
             * @default ''
             **/
            phIcon: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            phIcon: '',
            classPrefix: 'icon',
            componentTag: 'span',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Icon(props, context) {
        _classCallCheck(this, Icon);

        _Component.call(this, props, context);
    }

    Icon.prototype.render = function render() {
        var _props = this.props;
        var Component = _props.componentTag;
        var phIcon = _props.phIcon;
        var classPrefix = _props.classPrefix;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, { className: _classnames2['default']('gfs-icon', this.props.className, phIcon ? classPrefix + '-' + phIcon : '') }),
            this.props.children
        );
    };

    return Icon;
})(_utilsComponent2['default']);

exports['default'] = Icon;
module.exports = exports['default'];