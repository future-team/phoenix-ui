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
 * 开关切换，仿真ios的开关控件
 * @class Switch
 * @module Form
 * @extends Component
 * @constructor
 * @demo switch.js {展示}
 * @demo switch.js {源码}
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
             * @type Stringx
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * */
            componentTag: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            egSize: '',
            classPrefix: '',
            componentTag: 'div',
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
            { className: _classnames2['default']('label-switch', this.getProperty(), this.props.className) },
            _react2['default'].createElement('input', _extends({ type: 'checkbox' }, this.props)),
            _react2['default'].createElement('div', { className: 'checkbox' })
        );
    };

    return Switch;
})(_utilsComponent2['default']);

exports['default'] = Switch;
module.exports = exports['default'];