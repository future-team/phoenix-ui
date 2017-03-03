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

var _utilsTool = require('../utils/Tool');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

/**
 * 菜单头部组件<br/>
 * - 通过align设置菜单按钮的位置, 可选[left, right]。
 *
 * 主要属性和接口：
 * - align:设置菜单按钮的位置,默认left。 <br/>
 * 如：
 * ```code
 *     <Menu>
 *         <Menu.Header align="right">
 *             标题一
 *         </Menu.Header>
 *         <Menu.Body>
 *             ...
 *         </Menu.Body>
 *     </Menu>
 * ```
 *
 * @class MenuHeader
 * @module 菜单组件
 * @extends Component
 * @constructor
 * @since 1.3.0
 * @demo menu|menu.js {展示}
 * @show true
 * */

var MenuHeader = (function (_Component) {
    _inherits(MenuHeader, _Component);

    function MenuHeader(props, context) {
        _classCallCheck(this, MenuHeader);

        _Component.call(this, props, context);
    }

    MenuHeader.prototype.onChange = function onChange() {
        var _this = this;

        this.props.changeVisible(function () {
            if (_this.props.onChange) _this.props.onChange(_this.props.visible);
        });
    };

    MenuHeader.prototype.render = function render() {
        var className = this.props.className;

        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className)
            }),
            _react2['default'].createElement(_Icon2['default'], { phIcon: 'menu', onClick: this.onChange.bind(this) }),
            _react2['default'].createElement(
                'div',
                { className: _utilsTool.setPhoenixPrefix('menu-header-content') },
                this.props.children
            )
        );
    };

    _createClass(MenuHeader, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'menu-header'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 菜单按钮位置, 可选[left,right], left
             * @property align
             * @type String
             * @default 'left'
             * */
            align: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            align: 'left',
            classPrefix: 'menu-header',
            classMapping: {
                'left': 'left',
                'right': 'right'
            }
        },
        enumerable: true
    }]);

    return MenuHeader;
})(_utilsComponent2['default']);

exports['default'] = MenuHeader;
;
module.exports = exports['default'];