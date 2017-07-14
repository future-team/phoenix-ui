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

/**
 * 菜单导航组件<br/>
 * - 通过align设置菜单导航部分的位置, 可选[top,center,bottom]。
 *
 * 主要属性和接口：
 * - align:设置菜单导航部分的位置,默认top。 <br/>
 * 如：
 * ```code
 *     <Menu>
 *         <Menu.Header>
 *             标题一
 *         </Menu.Header>
 *         <Menu.Body width={60}>
 *             <Menu.Nav align='center'>
 *                  ...
 *              </Menu.Nav>
 *         </Menu.Body>
 *     </Menu>
 * ```
 *
 * @class MenuNav
 * @module 菜单组件
 * @extends Component
 * @constructor
 * @since 1.4.0
 * @demo menu|menu.js {展示}
 * @show true
 * */

var MenuNav = (function (_Component) {
    _inherits(MenuNav, _Component);

    function MenuNav(props, context) {
        _classCallCheck(this, MenuNav);

        _Component.call(this, props, context);
    }

    MenuNav.prototype.renderMenuNav = function renderMenuNav() {
        var _props = this.props;
        var className = _props.className;
        var children = _props.children;

        return _react2['default'].createElement(
            'nav',
            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className)
            }),
            children
        );
    };

    MenuNav.prototype.render = function render() {
        return this.renderMenuNav();
    };

    _createClass(MenuNav, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'menu-nav'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 导航的位置, 可选[top,center,bottom], 默认top
             * @property align
             * @type String
             * @default 'top'
             * */
            align: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            align: 'top',
            classPrefix: 'menu-nav',
            classMapping: {
                'top': 'top',
                'center': 'center',
                'bottom': 'bottom'
            }
        },
        enumerable: true
    }]);

    return MenuNav;
})(_utilsComponent2['default']);

exports['default'] = MenuNav;
;
module.exports = exports['default'];