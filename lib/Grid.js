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

var _utilsTool = require('./utils/Tool');

/**
 * <h5>主要栅格化布局组件</h5>
 * <pre><code>
 *     &#60;Grid&#62;//定义栅格
 *         &#60;Col sm={6}&#62;//定义一列，总长度为12份
 *             &#60;Row&#62; &#60;/Row&#62;//定义一行
 *         &#60;/Col&#62;
 *     &#60;/Grid&#62;
 * </code></pre>
 *
 * <strong><a href='../classes/Grid.html'>Grid定义外框</a></strong><br>
 * <strong><a href='../classes/Row.html'>Row定义行排列</a></strong><br>
 * <strong><a href='../classes/Col.html'>Col定义竖排列</a></strong><br>
 * <h6>点击以上链接进行相关查看</h6>
 * @module 布局组件
 * @main 布局组件
 * @static
 *
 */

/**
 * 定义栅格容器,配合Col和Row使用
 * @class Grid
 * @module 布局组件
 * @extends Component
 * @constructor
 * @demo grid.js {展示}
 * @demo grid.js {源码}
 * @show true
 * */

var Grid = (function (_Component) {
    _inherits(Grid, _Component);

    _createClass(Grid, null, [{
        key: 'propTypes',
        value: {},
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

    Grid.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, {
                className: _classnames2['default'](this.getProperty(true), this.props.fluid ? _utilsTool.setPhoenixPrefix('grid-fluid') : '', this.props.className) }),
            this.props.children
        );
    };

    return Grid;
})(_utilsComponent2['default']);

exports['default'] = Grid;
module.exports = exports['default'];