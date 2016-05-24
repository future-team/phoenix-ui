/**
 * Created by panqianjin on 16/5/24.
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsClassNameMixin = require('./utils/ClassNameMixin');

var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

/**
 *  - input组件，与基本的input类型相对应，改变了默认的风格，<br/>
 *  - 使用方式还是与基本的input相同，例如'Input type="radio" name='nba' label="76ers" value="76ers"/'<br/>
 *  - 支持自定义className，内联style，以及自定义属性<br/>
 *  - 针对radio和checkbox，有disabled,checked等属性，对应于不同的状态。具体如下<br/>
 *  主要属性和接口：
 * <ul>
 *     <li>type:input的具体类型，对应基本input的type。默认为text<br>
 *         如：<code>
 *              Input type="radio"
 *            </code>
 *     </li>
 *     <li>label:标签内容，针对radio和checkbox类型。默认为空<br>
 *         如：<code>
 *              Input type="radio" label="76ers"
 *            </code>
 *     </li>
 *     <li>checked:选中状态，同样针对radio和checkbox类型。默认为false<br>
 *         如：<code>
 *              Input type="radio" label="76ers" checked
 *            </code>
 *     </li>
 *     <li>disabled:不可操作状态，再次针对radio和checkbox类型。默认为false<br>
 *         如：<code>
 *              Input type="radio" label="76ers" disabled
 *            </code>
 *     </li>
 * </ul>
 * @class Input
 * @module form(表单)
 * @extend Component
 * @constructor
 * @since 0.1.0
 * @demo input.js {展示}
 * @demo input.js {源码}
 * @show true
 * */

var Input = (function (_Component) {
    _inherits(Input, _Component);

    function Input() {
        _classCallCheck(this, _Input);

        _Component.apply(this, arguments);
    }

    Input.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            { className: _classnames2['default']('test') },
            _react2['default'].createElement('input', this.props)
        );
    };

    var _Input = Input;
    Input = _utilsClassNameMixin2['default'](Input) || Input;
    return Input;
})(_react.Component);

exports['default'] = Input;
module.exports = exports['default'];