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

/**
 * Badge徽章标记，主要是用来提供不同颜色的标识<br/>
 * 可以通过phStyle来改变颜色<br/>
 * 因为发生回调的概率不大所以没有提供回调函数<br/>
 * 但支持自定义类名，事件等操作<br/>
 * 具体属性和接口如下：
 * <ul>
 *     <li>phStyle:badge徽章颜色,可取值[primary、warning、danger、info、error、success]等，默认primary</li>
 *     <li>
 *         <code>
 *            Badge  phStyle="success"
 *            惠2
 *            /Badge
 *         </code>
 *     </li>
 * </ul>
 * @class Badge
 * @module Label(标签)
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo Badge.js{展示}
 * @demo Badge.js{源码}
 * @show true
 * */

var Badge = (function (_Component) {
    _inherits(Badge, _Component);

    _createClass(Badge, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default btn
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * badge徽章颜色[primary、warning、danger、info、error、success]
             * @property phStyle
             * @type string
             * @default ''
             **/
            phStyle: _react.PropTypes.string,
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * @default a
             * */
            componentTag: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'badge',
            classMapping: {
                'primary': 'badge-primary',
                'info': 'badge-info',
                'success': 'badge-success',
                'error': 'badge-error',
                'warning': 'badge-warning',
                'danger': 'badge-danger'
            }
        },
        enumerable: true
    }]);

    function Badge(props, context) {
        _classCallCheck(this, Badge);

        _Component.call(this, props, context);
    }

    Badge.prototype.render = function render() {
        return _react2['default'].createElement(
            'span',
            { className: _classnames2['default']('badge', this.getProperty(), this.props.className), style: this.getStyles(this.props.style) },
            this.props.children
        );
    };

    return Badge;
})(_utilsComponent2['default']);

exports['default'] = Badge;
module.exports = exports['default'];