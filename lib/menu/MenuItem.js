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
 * 菜单导航列表项组件<br/>
 * - 可通过phIcon设置菜单项名称前符号的类型，具体可以参考[gfs-icons](https://future-team.github.io/gfs-icons/index.html)。 
 * - 可通过href设置菜单项的跳转地址，可不设置，自定义回调函数onMenuitemChange。
 * - 可通过name设置菜单项的唯一标识，对应MenuList的activeName。
 * - 通过onMenuitemChange设置点击菜单项时的回调。
 *
 * 主要属性和接口：
 * - phIcon:菜单项名称前符号的类型，不设置时默认没有符号。 
 * - href:菜单项的跳转地址，默认null。
 * - name:菜单项的唯一标识。
 * - onMenuitemChange:点击菜单项时的回调。<br/>
 * 如：
 * ```code
 *     <Menu>
 *         <Menu.Header>
 *             标题一
 *         </Menu.Header>
 *         <Menu.Body>
 *             <Menu.Nav>
 *                  <Menu.List activeName={this.state.activeName} onMenulistChange={(name)=>{this.setState({activeName:name})}}>
 *                      <Menu.Item name="home" href="#index" phIcon="home" onMenuitemChange={(name)=>{console.log(name);}}>首页</Menu.Item>
 *                  </Menu.List>
 *              </Menu.Nav>
 *         </Menu.Body>
 *     </Menu>
 * ```
 *
 * @class MenuItem
 * @module 菜单组件
 * @extends Component
 * @constructor
 * @since 1.4.0
 * @demo menu|menu.js {展示}
 * @show true
 * */

var MenuItem = (function (_Component) {
    _inherits(MenuItem, _Component);

    function MenuItem(props, context) {
        _classCallCheck(this, MenuItem);

        _Component.call(this, props, context);
    }

    MenuItem.prototype.isActive = function isActive() {
        var _props = this.props;
        var name = _props.name;
        var activeName = _props.activeName;

        return name === activeName ? 'active' : '';
    };

    MenuItem.prototype.onMenuitemChange = function onMenuitemChange() {
        this.props.changeActive(this.props.name);
        if (this.props.onMenuitemChange) this.props.onMenuitemChange(this.props.name);
    };

    MenuItem.prototype.renderIcon = function renderIcon() {
        var phIcon = this.props.phIcon;

        if (phIcon) {
            return _react2['default'].createElement(_Icon2['default'], { phIcon: phIcon });
        } else {
            return '';
        }
    };

    MenuItem.prototype.render = function render() {
        var _props2 = this.props;
        var className = _props2.className;
        var href = _props2.href;
        var children = _props2.children;

        return _react2['default'].createElement(
            'li',
            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), this.isActive(), className)
            }),
            _react2['default'].createElement(
                'a',
                { href: href, onClick: this.onMenuitemChange.bind(this) },
                this.renderIcon(),
                children
            )
        );
    };

    _createClass(MenuItem, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'menu-item'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * icon符号类型
             * @property phIcon
             * @type string
             * @default ''
             **/
            phIcon: _react.PropTypes.string,
            /**
             * 跳转地址
             * @property href
             * @type string
             * @default ''
             **/
            href: _react.PropTypes.string,
            /**
            * 当前项目的唯一标志
            * @property name
            * @type String
            * @default null
            * */
            name: _react.PropTypes.string,
            /**
             * 点击事件的回调函数
             * @method onMenuitemChange
             * @type Function
             * @default null
             * */
            onMenuitemChange: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            name: null,
            href: 'javascript:;',
            classPrefix: 'menu-item',
            classMapping: {}
        },
        enumerable: true
    }]);

    return MenuItem;
})(_utilsComponent2['default']);

exports['default'] = MenuItem;
;
module.exports = exports['default'];