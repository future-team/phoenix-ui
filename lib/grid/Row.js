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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require("phoenix-styles/less/modules/buttons.less");

/**
 * 行组件<br/>
 * - 搭配Col列组件可实现自适应宽度布局。
 * - 可通过align定义项目在交叉轴上的对齐方式, 可选top、bottom、center、baseline、stretch。
 *
 * 主要属性和接口：
 * - align:项目在交叉轴上的对齐方式, 默认stretch
 * ```code
 *     <Row align="baseline">
 *         <Col>
 *             <div className='col-demo'>baseline</div>
 *         </Col>
 *         <Col>
 *             <div className='col-demo'>baseline<br />baseline</div>
 *         </Col>
 *     </Row>
 * ```
 *
 * @class Row
 * @module 布局组件
 * @extends Component
 * @constructor
 * @demo grid|grid.js {展示}
 * @since 0.1.0
 * @show true
 * */

var Row = (function (_Component) {
    _inherits(Row, _Component);

    function Row() {
        _classCallCheck(this, Row);

        _Component.apply(this, arguments);
    }

    Row.prototype.render = function render() {
        var Component = this.props.componentTag;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), this.props.className) }),
            this.props.children
        );
    };

    _createClass(Row, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'row'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 竖直方向的排列是靠上、居中、靠下、拉伸至父容器最大高度还是基于text的baseline对齐
             * @property align
             * @type String
             * */
            align: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            componentTag: 'div',
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