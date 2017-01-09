'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsComponent = require('./utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

/**
 * 行
 * @class Row
 * @module 布局组件
 * @extends Component
 * @constructor
 * @demo grid.js {展示}
 * @demo grid.js {源码}
 * @since 0.1.0
 * */

var Row = (function (_Component) {
    _inherits(Row, _Component);

    function Row() {
        _classCallCheck(this, Row);

        _Component.apply(this, arguments);
    }

    Row.prototype.render = function render() {
        var others = _objectWithoutProperties(this.props, []);

        return _react2['default'].createElement(
            'div',
            _extends({}, others, { className: _classnames2['default'](this.getProperty(true), this.props.className) }),
            this.props.children
        );
    };

    _createClass(Row, null, [{
        key: 'propTypes',
        value: {
            /**
             * 竖直方向的排列是靠上、居中、靠下、拉伸至父容器最大高度还是基于text的baseline对齐
             * @property offset，默认不偏移
             * @type Integer
             * */
            align: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'row',
            classMapping: {
                'top': 'top',
                'bottom': 'bottom',
                'center': 'center',
                'stretch': 'stretch',
                'baseline': 'baseline'
            }
        },
        enumerable: true
    }]);

    return Row;
})(_utilsComponent2['default']);

exports['default'] = Row;
module.exports = exports['default'];