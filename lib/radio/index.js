'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utilsComponent = require('../utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _checkbox = require('../checkbox/');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _utilsLogger = require('../utils/logger');

var _utilsLogger2 = _interopRequireDefault(_utilsLogger);

require('../style');

require('phoenix-styles/less/modules/checkbox.less');

/**
 * 单选框组件<br/>
 * - 使用方式跟原生一致, 支持disabled等原生属性。
 * - 可通过label设置展示的文字。
 * - 可通过defaultChecked设置默认值; 可通过checked和onChange事件配合使用手动设置输入值。
 * - className/style属性加在外层，其余属性均赋予input元素。
 *
 * 主要属性和接口：
 * - label:展示的文字信息, 默认空<br/>
 * 如：`<Radio label='测试' name='test'/>`
 * - defaultChecked:默认值<br/>
 * 如：`<Radio defaultChecked={true} />`
 * - checked&onChange:<br/>
 * 如：`<Radio checked={this.state.checked} onChange={()=>{this.setState({checked:false})}} />`
 *
 * @class Radio
 * @module 表单组件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo radio|radio.js {展示}
 * @show true
 * */

var Radio = (function (_Component) {
    _inherits(Radio, _Component);

    _createClass(Radio, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'input'
             * */
            classPrefix: _propTypes2['default'].string,
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * */
            componentTag: _propTypes2['default'].string,
            /**
             * 展示的文字信息
             * @property label
             * @type String
             * @default ''
             * */
            label: _propTypes2['default'].string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            type: 'radio',
            label: '',
            classPrefix: 'radio',
            componentTag: 'div',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Radio(props, context) {
        _classCallCheck(this, Radio);

        _Component.call(this, props, context);
        new _utilsLogger2['default']('Radio');
    }

    Radio.prototype.renderRadio = function renderRadio() {
        return _react2['default'].createElement(_checkbox2['default'], this.props);
    };

    Radio.prototype.render = function render() {
        return this.renderRadio();
    };

    return Radio;
})(_utilsComponent2['default']);

exports['default'] = Radio;
module.exports = exports['default'];