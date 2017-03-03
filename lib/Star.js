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

/**
 * <h5>基础组件，主要包括:</h5>
 * <strong><a href='../classes/Star.html'>Star 星级</a></strong><br/>
 * <strong><a href='../classes/Button.html'>Button 按钮</a></strong><br>
 *  <strong><a href='../classes/ButtonGroup.html'>ButtonGroup 按钮组</a></strong><br>
 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
 * @module 基础组件
 * @main 基础组件
 * @static
 */
/**
 * 星级评价组件<br />
 * - 通过Rate设置星级评价的分数, 最低0, 最高50, 5的倍数。
 * - 通过phSize设置大小, 可选sm、md、lg。
 *
 * 主要属性和接口：
 * - phSize(v1.1.2以下用size):星星的大小。分别为sm、md、lg, 默认sm。 <br/>
 * 如：`<Star phSize="lg" />`
 * - Rate:星级评价的分数。最低0, 最高50, 5的倍数递增, 默认0。 <br/>
 * 如：`<Star Rate={10} />`
 *
 * @class Star
 * @module 基础组件
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo star|star.js {展示}
 * @show true
 * */

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
             * @property phSize
             * @type String
             * @default 'sm'
             * */
            phSize: _react.PropTypes.string,
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'star'
             * */
            classPrefix: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            phSize: 'sm',
            classPrefix: 'star',
            Rate: 0,
            classMapping: {}
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
        var className = _props.className;

        var rateCls = 'star-' + Math.round(Rate * 2 / 10) * 5;
        // let sizeCls = size && 'star-'+size;

        return _react2['default'].createElement(
            'div',
            { className: _classnames2['default'](this.getProperty(true), _utilsTool.setPhoenixPrefix(rateCls), className) },
            _react2['default'].createElement('div', { className: _utilsTool.setPhoenixPrefix("star-grey") })
        );
    };

    return Star;
})(_utilsComponent2['default']);

exports['default'] = Star;
module.exports = exports['default'];