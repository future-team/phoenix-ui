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
 * 列
 * @class Col
 * @module 布局组件
 * @extends Component
 * @constructor
 * @demo grid.js {展示}
 * @demo grid.js {源码}
 * @since 0.1.0
 * */

var Col = (function (_Component) {
    _inherits(Col, _Component);

    function Col() {
        _classCallCheck(this, Col);

        _Component.apply(this, arguments);
    }

    Col.prototype.render = function render() {
        var others = _objectWithoutProperties(this.props, []);

        return _react2['default'].createElement(
            'div',
            _extends({}, others, { className: _classnames2['default'](this.getProperty(true), this.props.className) }),
            this.props.children
        );
    };

    _createClass(Col, null, [{
        key: 'propTypes',
        value: {
            /**
             * 占100份的多少份，目前支持5-100之间5的倍数、33（1\3）和66(2\3)
             * @property width
             * @type Integer
             * */
            width: _react.PropTypes.string,
            /**
             * 偏移多少，，目前支持5-100之间5的倍数、33（1\3）和66(2\3)
             * @property offset，默认不偏移
             * @type Integer
             * */
            offset: _react.PropTypes.string,
            /**
             * 竖直方向的排列是靠上、居中还是靠下
             * @property offset，默认不偏移
             * @type Integer
             * */
            align: _react2['default'].PropTypes.oneOf(['top', 'bottom', 'center'])
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'col',
            classMapping: {
                'top': 'top',
                'bottom': 'bottom',
                'center': 'center'
            }
        },
        enumerable: true
    }]);

    return Col;
})(_utilsComponent2['default']);

exports['default'] = Col;
module.exports = exports['default'];