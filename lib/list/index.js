'use strict';

exports.__esModule = true;

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

var _gridRow = require('../grid/Row');

var _gridRow2 = _interopRequireDefault(_gridRow);

var _gridCol = require('../grid/Col');

var _gridCol2 = _interopRequireDefault(_gridCol);

require("phoenix-styles/less/modules/list.less");

/**
 * List<br/>
 * - 
 *
 * 主要属性和接口：
 *
 * @class List
 * @module 列表组件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo list|list.js {展示}
 * @show true
 * */

var List = (function (_Component) {
    _inherits(List, _Component);

    _createClass(List, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'list'
             * */
            classPrefix: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        /**
         * 是否能加载更多
         * @property loading
         * @type Boolean
         * @default false
         * */
        // loading: PropTypes.bool,
        // mode: PropTypes.oneOf(['auto','button']),
        value: {
            classPrefix: 'list',
            classMapping: {}
        },
        enumerable: true
    }]);

    function List(props, context) {
        _classCallCheck(this, List);

        _Component.call(this, props, context);
    }

    List.prototype.renderList = function renderList() {
        return _react2['default'].createElement(
            'ul',
            { className: _classnames2['default'](this.getProperty(true), this.props.className) },
            this.props.children
        );
    };

    List.prototype.render = function render() {
        return this.renderList();
    };

    return List;
})(_utilsComponent2['default']);

var ListHeader = (function (_Component2) {
    _inherits(ListHeader, _Component2);

    _createClass(ListHeader, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'list-header'
             * */
            classPrefix: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'list-header',
            classMapping: {}
        },
        enumerable: true
    }]);

    function ListHeader(props, context) {
        _classCallCheck(this, ListHeader);

        _Component2.call(this, props, context);
    }

    ListHeader.prototype.render = function render() {
        return _react2['default'].createElement(
            'li',
            { className: _classnames2['default'](this.getProperty(true), this.props.className) },
            this.props.children
        );
    };

    return ListHeader;
})(_utilsComponent2['default']);

var ListItem = (function (_Component3) {
    _inherits(ListItem, _Component3);

    _createClass(ListItem, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'list-item'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 是否不可用
             * @property disabled
             * @type Boolean
             * @default false
             * */
            disabled: _react.PropTypes.bool,
            /**
             * 是否是输入有误
             * @property error
             * @type Boolean
             * @default false
             * */
            error: _react.PropTypes.bool,
            /**
             * 是否必选项
             * @property required
             * @type Boolean
             * @default false
             * */
            required: _react.PropTypes.bool,
            /**
             * 是否需要右箭头
             * @property navigate
             * @type Boolean
             * @default false
             * */
            navigate: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'list-item',
            navigate: false,
            disabled: false,
            error: false,
            required: false,
            classMapping: {
                'disabled': 'disabled',
                'error': 'error',
                'required': 'required'
            }
        },
        enumerable: true
    }]);

    function ListItem(props, context) {
        _classCallCheck(this, ListItem);

        _Component3.call(this, props, context);
    }

    ListItem.prototype.render = function render() {
        var _props = this.props;
        var className = _props.className;
        var navigate = _props.navigate;

        return _react2['default'].createElement(
            _gridRow2['default'],
            { componentTag: 'li', className: _classnames2['default'](this.getProperty(true), className, navigate ? _utilsTool.setPhPrefix('navigate-right') : '') },
            this.props.children
        );
    };

    return ListItem;
})(_utilsComponent2['default']);

var ListCol = (function (_Component4) {
    _inherits(ListCol, _Component4);

    _createClass(ListCol, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'list-col'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 是否为标题，表现为仿行内元素
             * @property heading
             * @type Boolean
             * */
            heading: _react.PropTypes.bool,
            /**
             * 是否为右边的项目，表现为内部的元素全部靠右
             * @property right
             * @type Boolean
             * */
            tail: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'list-col',
            classMapping: {}
        },
        enumerable: true
    }]);

    function ListCol(props, context) {
        _classCallCheck(this, ListCol);

        _Component4.call(this, props, context);
    }

    ListCol.prototype.render = function render() {
        var className = this.props.className;

        return _react2['default'].createElement(
            _gridCol2['default'],
            { className: _classnames2['default'](this.getProperty(true), className) },
            this.props.children
        );
    };

    return ListCol;
})(_utilsComponent2['default']);

List.Header = ListHeader;
List.Item = ListItem;
List.Col = ListCol;

exports['default'] = List;
module.exports = exports['default'];