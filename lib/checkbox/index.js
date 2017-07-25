'use strict';

exports.__esModule = true;

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

require('phoenix-styles/less/modules/checkbox.less');

/**
 * 复选框组件<br/>
 * - 使用方式跟原生一致, 支持disabled等原生属性。
 * - 可通过label设置展示的文字。
 * - 可通过defaultChecked设置默认值; 可通过checked和onChange事件配合使用手动设置输入值。
 *
 * 主要属性和接口：
 * - label:展示的文字信息, 默认空<br/>
 * 如：`<Checkbox label='测试' />`
 * - defaultChecked:默认值<br/>
 * 如：`<Checkbox defaultChecked={true} />`
 * - checked&onChange:<br/>
 * 如：`<Checkbox checked={this.state.checked} onChange={()=>{this.setState({checked:false})}} />`
 *
 * @class Checkbox
 * @module 表单组件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo checkbox|checkbox.js {展示}
 * @show true
 * */

var Checkbox = (function (_Component) {
    _inherits(Checkbox, _Component);

    _createClass(Checkbox, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'input'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * */
            componentTag: _react.PropTypes.string,
            /**
             * 展示的文字信息
             * @property label
             * @type String
             * @default ''
             * */
            label: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            type: 'checkbox',
            label: '',
            classPrefix: 'checkbox',
            componentTag: 'div',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Checkbox(props, context) {
        _classCallCheck(this, Checkbox);

        _Component.call(this, props, context);
    }

    Checkbox.prototype.renderCheckbox = function renderCheckbox() {
        var _props = this.props;
        var label = _props.label;
        var type = _props.type;

        return _react2['default'].createElement(
            'label',
            { className: this.setPhPrefix('multi-group', true) },
            _react2['default'].createElement(
                'div',
                { className: this.getProperty(true) },
                _react2['default'].createElement('input', this.props),
                _react2['default'].createElement('i', null)
            ),
            _react2['default'].createElement(
                'span',
                null,
                label
            )
        );
    };

    Checkbox.prototype.render = function render() {
        return this.renderCheckbox();
    };

    return Checkbox;
})(_utilsComponent2['default']);

exports['default'] = Checkbox;
module.exports = exports['default'];