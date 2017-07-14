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

var _utilsTool = require('../utils/Tool');

require('../style');

require('phoenix-styles/less/modules/grid.less');

/**
 * <h5>主要栅格化布局组件</h5>
 * <strong><a href='../classes/Grid.html'>Grid 外框</a></strong><br>
 * <strong><a href='../classes/Row.html'>Row 行排列</a></strong><br>
 * <strong><a href='../classes/Col.html'>Col 竖排列</a></strong><br>
 * <strong><a href='../classes/TableView.html'>TableView 仿表格组件</a></strong><br>
 * <h6>点击以上链接进行相关查看</h6>
 * @module 布局组件
 * @main 布局组件
 * @static
 */
/**
 * 栅格容器组件<br/>
 * - 配合Row、Col使用布局。
 * - 可自定义className、style等属性以及自定义事件。
 *
 * 示例:
 * ```code
 *     <Grid> //定义栅格
 *         <Row> //定义一行
 *             <Col> //定义一列，最多12份
 *                 <div className='col-demo'>内容</div>
 *             </Col>
 *             <Col>
 *                 <div className='col-demo'>stretch<br />baseline</div>
 *             </Col>
 *         </Row>
 *     </Grid>
 * ```
 *
 * @class Grid
 * @module 布局组件
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo grid|grid.js {展示}
 * @show true
 * */

var Grid = (function (_Component) {
    _inherits(Grid, _Component);

    _createClass(Grid, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'grid'
             * */
            classPrefix: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'grid',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Grid(props, context) {
        _classCallCheck(this, Grid);

        _Component.call(this, props, context);
    }

    Grid.prototype.renderGrid = function renderGrid() {
        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, {
                className: _classnames2['default'](this.getProperty(true), this.props.fluid ? _utilsTool.setPhPrefix('grid-fluid') : '', this.props.className) }),
            this.props.children
        );
    };

    Grid.prototype.render = function render() {
        return this.renderGrid();
    };

    return Grid;
})(_utilsComponent2['default']);

exports['default'] = Grid;
module.exports = exports['default'];