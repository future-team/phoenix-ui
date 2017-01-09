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

var _utilsTool = require('./utils/Tool');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

/**
 * 展现形式如表格一般,用来组织数据，显示链接的集合，或一系列的控件。<br />
 * 使用时需注意组件的子元素需要跳转功能需加上href标签并赋予正确的url，不论什么标签
 * @class TableView
 * @module 布局组件
 * @extends Component
 * @constructor
 * @demo table-view.js {展示}
 * @demo table-view.js {源码}
 * @show true
 * */

var TableView = (function (_Component) {
    _inherits(TableView, _Component);

    _createClass(TableView, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * */
            componentTag: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'table-view',
            componentTag: 'ul',
            classMapping: {}
        },
        enumerable: true
    }]);

    function TableView(props, context) {
        _classCallCheck(this, TableView);

        _Component.call(this, props, context);
    }

    TableView.prototype.renderItem = function renderItem() {
        var items = _react2['default'].Children.map(this.props.children, function (options, index) {
            var _options$props = options.props;
            var href = _options$props.href;

            var other = _objectWithoutProperties(_options$props, ['href']);

            return _react2['default'].createElement(
                'li',
                { className: _utilsTool.setPhoenixPrefix("table-view-cell") },
                href && href != '' ? _react2['default'].createElement(
                    'a',
                    _extends({ href: href }, other, { className: _classnames2['default'](_utilsTool.setPhoenixPrefix('navigate-right'), options.props.className) }),
                    options.props.children
                ) : options.props.children
            );
        }, this);

        return items;
    };

    TableView.prototype.render = function render() {
        var Component = this.props.componentTag;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(true), this.props.className), style: this.getStyles(this.props.style) }),
            this.renderItem()
        );
    };

    return TableView;
})(_utilsComponent2['default']);

exports['default'] = TableView;
module.exports = exports['default'];