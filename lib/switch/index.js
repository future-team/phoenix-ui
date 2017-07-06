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

require("phoenix-styles/less/modules/form.less");

/**
 * 开关切换组件，仿真ios的开关控件<br/>
 * - 可通过defaultChecked设置默认值。
 * - 可通过checked和onChange事件配合使用手动设置输入值。
 *
 * 主要属性和接口：
 * - defaultChecked:默认值<br/>
 * 如：`<Switch defaultChecked={true} />`
 * - checked&onChange:<br/>
 * 如：`<Switch checked={this.state.checked} onChange={()=>{this.setState({checked:false})}} />`
 *
 * @class Switch
 * @module 表单组件
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo switch|switch.js {展示}
 * @show true
 * */

var Switch = (function (_Component) {
    _inherits(Switch, _Component);

    _createClass(Switch, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'switch'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 默认开关值
             * @property defaultChecked
             * @type Boolean
             * */
            defaultChecked: _react.PropTypes.bool,
            /**
             * 开关值
             * @property checked
             * @type Boolean
             * */
            checked: _react.PropTypes.bool,
            /**
             * 更改值时触发的回调
             * @event onChange
             * @type Function
             * */
            onChange: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'switch',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Switch(props, context) {
        _classCallCheck(this, Switch);

        _Component.call(this, props, context);
    }

    Switch.prototype.render = function render() {

        return _react2['default'].createElement(
            'label',
            { className: _classnames2['default'](this.getProperty(true), this.props.className) },
            _react2['default'].createElement('input', _extends({ type: 'checkbox' }, this.props)),
            _react2['default'].createElement('div', { className: _utilsTool.setPhPrefix("checkbox") })
        );
    };

    return Switch;
})(_utilsComponent2['default']);

exports['default'] = Switch;
module.exports = exports['default'];