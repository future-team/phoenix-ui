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

var _input = require('../input/');

var _input2 = _interopRequireDefault(_input);

var _button = require('../button/');

var _button2 = _interopRequireDefault(_button);

require("phoenix-styles/less/modules/search-bar.less");

/**
 * SearchBar<br/>
 * - 可通过buttonText设置按钮的文字。
 * - 可通过clickCallback设置点击按钮的回调。
 * - 可通过queryCallback设置回车/搜索动作的回调函数。
 *
 * 主要属性和接口：
 * 
 *
 * @class SearchBar
 * @module 搜索组件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo search-bar|search-bar.js {展示}
 * @show true
 * */

var SearchBar = (function (_Component) {
    _inherits(SearchBar, _Component);

    _createClass(SearchBar, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'search-bar'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 按钮文案
             * @property buttonText
             * @type String
             * @default '取消'
             * */
            buttonText: _react.PropTypes.string,
            /**
             * 搜索的回调
             * @method queryCallback
             * @type Function
             * */
            queryCallback: _react.PropTypes.func,
            /**
             * 点击按钮的回调
             * @method clickCallback
             * @type Function
             * */
            clickCallback: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            buttonText: '取消',
            placeholder: '搜索',
            classPrefix: 'search-bar',
            classMapping: {}
        },
        enumerable: true
    }]);

    function SearchBar(props, context) {
        _classCallCheck(this, SearchBar);

        _Component.call(this, props, context);

        this.state = {
            focus: false
        };
    }

    SearchBar.prototype.renderButton = function renderButton() {
        var buttonText = this.props.buttonText;

        if (this.state.focus) {
            return _react2['default'].createElement(
                _button2['default'],
                { phStyle: 'link', onClick: this.buttonHandle.bind(this) },
                buttonText
            );
        }
    };

    SearchBar.prototype.buttonHandle = function buttonHandle() {
        var clickCallback = this.props.clickCallback;

        if (clickCallback) clickCallback(this.searchElem.getValueCallback());
    };

    SearchBar.prototype.onFocus = function onFocus() {
        this.setState({
            focus: true
        });
    };

    SearchBar.prototype.onBlur = function onBlur() {
        var _this = this;

        this.timer = setTimeout(function () {
            _this.setState({
                focus: false
            });
        }, 0);
    };

    SearchBar.prototype.onKeyDown = function onKeyDown(e) {
        var queryCallback = this.props.queryCallback;

        if (e.keyCode == '13') {
            if (queryCallback) queryCallback(this.searchElem.getValueCallback());
        }
    };

    SearchBar.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props;
        var className = _props.className;
        var placeholder = _props.placeholder;

        return _react2['default'].createElement(
            'div',
            { className: _classnames2['default'](this.getProperty(true), className, this.state.focus ? _utilsTool.setPhPrefix('search-bar-focus') : '') },
            _react2['default'].createElement(_input2['default'], { type: 'search', phIcon: 'search', placeholder: placeholder, clear: true,
                ref: function (searchElem) {
                    _this2.searchElem = searchElem;
                },
                onFocus: this.onFocus.bind(this),
                onBlur: this.onBlur.bind(this),
                onKeyDown: this.onKeyDown.bind(this)
            }),
            this.renderButton()
        );
    };

    return SearchBar;
})(_utilsComponent2['default']);

exports['default'] = SearchBar;
module.exports = exports['default'];