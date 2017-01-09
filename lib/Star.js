/**
 *
 * 星级评价
 */
/**
 * 星级评价(Star)组件<br />
 * 提供的UI展示属性接口包括<br/>
 * <ul>
 *     <li>rate：星级评价的分数(满分为50)<code>默认为0</code></li>
 *     <li>size：星星的大小(可选md、lg、默认3种size)<code></code></li>
 * </ul><br>
 * 使用方式:
 * <pre><code>&#60;Star rate={50} size={10}/&#62;</code>
 * </pre>
 * @class Star
 * @module 基础组件
 * @extends Component
 * @constructor
 * @demo star.js {UI展示}
 * @demo star.js {源码}
 * @show true
 * */
'use strict';

exports.__esModule = true;

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

var _utilsTool = require('./utils/Tool');

var Star = (function (_Component) {
    _inherits(Star, _Component);

    _createClass(Star, null, [{
        key: 'propTypes',
        value: {
            /**
             * 星级评价分数
             * @property Rate
             * @type number
             * @default 默认为0，最高50
             * */
            Rate: _react.PropTypes.number,
            /**
             * 星星大小
             * @property size
             * @type String
             * @default
             * */
            size: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'star',
            Rate: 0,
            size: 'xs'
        },
        enumerable: true
    }]);

    function Star(props, context) {
        _classCallCheck(this, Star);

        _Component.call(this, props, context);
    }

    Star.prototype.render = function render() {
        var _props = this.props;
        var Rate = _props.Rate;
        var size = _props.size;

        var rateCls = Rate && 'star-' + Math.round(Rate * 2 / 10) * 5;
        var sizeCls = size && 'star-' + size;

        return _react2['default'].createElement(
            'div',
            { className: _classnames2['default'](this.getProperty(true), _utilsTool.setPhoenixPrefix(rateCls), _utilsTool.setPhoenixPrefix(sizeCls)) },
            _react2['default'].createElement('div', { className: _utilsTool.setPhoenixPrefix("star-grey") })
        );
    };

    return Star;
})(_utilsComponent2['default']);

exports['default'] = Star;
module.exports = exports['default'];