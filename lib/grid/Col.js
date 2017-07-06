'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsComponent = require('../utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _utilsTool = require('../utils/Tool');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require("phoenix-styles/less/modules/grid.less");

/**
 * 列组件<br/>
 * - 搭配Row行组件可实现自适应宽度布局。
 * - 可通过align定义单个项目在交叉轴上的对齐方式, 可选auto、top、bottom、center。
 * - 可通过width设置单个项目宽度的百分比, 目前支持5-100之间5的倍数、33（1\3）和66(2\3)。
 * - 可通过offset设置单个项目左边外边距。
 *
 * 主要属性和接口：
 * - align:单个项目在交叉轴上的对齐方式, 默认auto <br/>
 * ```code
 *     <Row>
 *         <Col align="top">
 *             <div className="col-demo">top</div>
 *         </Col>
 *         <Col align="center">
 *             <div className="col-demo">center</div>
 *         </Col>
 *         <Col align="bottom">
 *             <div className="col-demo">bottom</div>
 *         </Col>
 *     </Row>
 * ```
 * - width:单个项目的宽度百分比 <br/>
 * ```code
 *     <Row>
 *         <Col width="15">
 *             <div className="col-demo">15</div>
 *         </Col>
 *     </Row>
 * ```
 * - offset:单个项目的偏移值,即左边外边距 <br/>
 * ```code
 *     <Row>
 *         <Col width="20" offset="10">
 *             <div className="col-demo">10</div>
 *         </Col>
 *     </Row>
 * ```
 *
 * @class Col
 * @module 布局组件
 * @extends Component
 * @constructor
 * @demo grid|grid.js {展示}
 * @since 0.1.0
 * @show true
 * */

var Col = (function (_Component) {
    _inherits(Col, _Component);

    function Col() {
        _classCallCheck(this, Col);

        _Component.apply(this, arguments);
    }

    Col.prototype.render = function render() {
        var className = this.props.className;

        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className) }),
            this.props.children
        );
    };

    _createClass(Col, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'col'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 占100份的多少份，目前支持5-100之间5的倍数、33（1\3）和66(2\3)
             * @property width
             * @type Integer
             * */
            width: _react.PropTypes.string,
            /**
             * 偏移多少，目前支持5-100之间5的倍数、33（1\3）和66(2\3)，默认不偏移
             * @property offset
             * @type Integer
             * */
            offset: _react.PropTypes.string,
            /**
             * 竖直方向的排列是靠上、居中还是靠下
             * @property align
             * @type Integer
             * */
            align: _react.PropTypes.oneOf(['top', 'bottom', 'center'])
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