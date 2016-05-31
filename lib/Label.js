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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

/**
 * <h5>label模块，主要包括一下两个组件:</h5>
 * <strong><a href='../classes/Label.html'>label 标签</a></strong><br/>
 * <strong><a href='../classes/Badge.html'>bridge 徽章</a></strong><br>
 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
 * @module Label(标签)
 * @main Label(标签)
 * @static
 *
 */
/**
 * Label标记，主要是用来提供不同颜色的标识<br/>
 * 可以通过phStyle来改变颜色,phSize改变大小<br/>
 * 因为发生回调的概率不大所以没有提供回调函数<br/>
 * 但支持自定义类名，事件等操作<br/>
 * 具体属性和接口如下：
 * <ul>
 *     <li>phStyle:label徽章颜色,可取值[primary、warning、danger、info、error、success]等，默认primary</li>
 *     <li>
 *         <code>
 *             Label phSize="lg" phStyle="success"
 *             惠
 *            /Label
 *         </code>
 *     </li>
 *     <li>phSize:badge徽章颜色,可取值[lg、md、'']，默认即为‘’</li>
 *     <li>
 *         <code>
 *            Label phSize="lg" phStyle="success"
 *             惠
 *            /Label
 *         </code>
 *     </li>
 * </ul>
 * @class Label
 * @module Label(标签)
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo Label.js{展示}
 * @demo Label.js{源码}
 * @show true
 * */

var Label = (function (_Component) {
    _inherits(Label, _Component);

    _createClass(Label, null, [{
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
             * label标签大小 [lg、md、'']默认为‘’即为sm不用指定
             * @property phSize
             * @type string
             * @default ''
             * */
            phSize: _react.PropTypes.string,
            /**
             * label标签颜色[primary、warning、danger、info、error、success]
             * @property phStyle
             * @type string
             * @default 'primary'
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
            phSize: '',
            classPrefix: 'label',
            phStyle: 'primary',
            classMapping: {
                'primary': 'label-primary',
                'info': 'label-info',
                'success': 'label-success',
                'error': 'label-error',
                'warning': 'label-warning',
                'danger': 'label-danger',
                'lg': 'label-lg',
                'md': 'label-md'
            }
        },
        enumerable: true
    }]);

    function Label(props, context) {
        _classCallCheck(this, Label);

        _Component.call(this, props, context);
    }

    Label.prototype.render = function render() {
        return _react2['default'].createElement(
            'span',
            { className: _classnames2['default']('label', this.getProperty()), style: this.getStyles(this.props.style) },
            this.props.children
        );
    };

    return Label;
})(_utilsComponent2['default']);

exports['default'] = Label;
module.exports = exports['default'];