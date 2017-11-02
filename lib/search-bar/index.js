'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utilsComponent = require('../utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsLogger = require('../utils/logger');

var _utilsLogger2 = _interopRequireDefault(_utilsLogger);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

require('../style');

require('phoenix-styles/less/modules/search-bar.less');

/**
 * SearchBar<br/>
 * - 可通过buttonText设置按钮的文字。
 * - 可通过clickCallback设置点击按钮的回调。
 * - 可通过queryCallback设置回车/搜索动作的回调函数。
 * - 可通过focusCallback设置聚焦的回调；可通过blurCallback设置失焦的回调。
 * - className/style属性加在外层，其余属性均赋予input元素。
 * - 可通过showButton设置当前按钮是否显示。
 *
 * 主要属性和接口：
 * - buttonText: 按钮文字 <br/>
 * 如：`<SearchBar buttonText="no" />`
 * - clickCallback: 点击按钮的回调 <br/>
 * 如：`<SearchBar clickCallback={(value)=>{console.log(value)}} />`
 * - queryCallback: 回车/搜索动作的回调函数 <br/>
 * 如：`<SearchBar queryCallback={(value)=>{console.log(value)}} />`
 * - focusCallback: 聚焦的回调 <br/>
 * 如：`<SearchBar focusCallback={()=>{console.log("focus")}} />`
 * - blurCallback: 失焦的回调 <br/>
 * 如：`<SearchBar blurCallback={()=>{console.log("blur")}} />`
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
            classPrefix: _propTypes2['default'].string,
            /**
             * 按钮文案
             * @property buttonText
             * @type String
             * @default '取消'
             * */
            buttonText: _propTypes2['default'].string,
            /**
             * 输入框占位符
             * @property placeholder
             * @type String
             * @default '搜索'
             * */
            placeholder: _propTypes2['default'].string,
            /**
             * 聚焦的回调
             * @method focusCallback
             * @param {string} value 输入框的值
             * @type Function
             * */
            focusCallback: _propTypes2['default'].func,
            /**
             * 失焦的回调
             * @method blurCallback
             * @param {string} value 输入框的值
             * @type Function
             * */
            blurCallback: _propTypes2['default'].func,
            /**
             * 搜索的回调
             * @method queryCallback
             * @param {string} value 输入框的值
             * @type Function
             * */
            queryCallback: _propTypes2['default'].func,
            /**
             * 点击按钮的回调
             * @method clickCallback
             * @param {string} value 输入框的值
             * @type Function
             * */
            clickCallback: _propTypes2['default'].func,
            /**
             * 当前是否显示按钮
             * @property showButton
             * @type Boolean
             * @default undefined
             * */
            showButton: _propTypes2['default'].bool
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
        new _utilsLogger2['default']('Searchbar');

        this.focus = false;

        // this.state = {
        //     value: props.value || ''
        // }

        this.timer = null;
    }

    SearchBar.prototype.componentDidMount = function componentDidMount() {
        if (this.searchElem.getValueCallback()) this.dealClass(true);
    };

    SearchBar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var o = {};

        // if(nextProps.value!==undefined && nextProps.value !== this.state.value) o.value = nextProps.value
        if (nextProps.showButton !== undefined && nextProps.showButton !== this.focus) {
            clearTimeout(this.timer);
            this.dealClass(nextProps.showButton);
        }

        // this.setState(o)
    };

    SearchBar.prototype.renderButton = function renderButton() {
        var _this = this;

        var buttonText = this.props.buttonText;

        return _react2['default'].createElement(
            _button2['default'],
            { type: 'button', phStyle: 'link', onClick: this.buttonHandle.bind(this), ref: function (button) {
                    _this.button = button;
                } },
            buttonText
        );
    };

    SearchBar.prototype.buttonHandle = function buttonHandle() {
        var _props = this.props;
        var showButton = _props.showButton;
        var clickCallback = _props.clickCallback;

        this.focus = showButton || false;
        this.dealClass(this.focus);

        if (clickCallback) clickCallback(this.searchElem.getValueCallback());
    };

    SearchBar.prototype.onFocus = function onFocus() {
        var _props2 = this.props;
        var showButton = _props2.showButton;
        var focusCallback = _props2.focusCallback;

        this.focus = showButton == false ? false : true;

        if (focusCallback) focusCallback(this.searchElem.getValueCallback());

        this.dealClass(this.focus);
    };

    SearchBar.prototype.onBlur = function onBlur() {
        var _props3 = this.props;
        var showButton = _props3.showButton;
        var blurCallback = _props3.blurCallback;

        this.focus = showButton || !!this.searchElem.getValueCallback();

        if (blurCallback) blurCallback(this.searchElem.getValueCallback());

        // this.timer = setTimeout(()=>{
        //     this.dealClass(this.focus)
        // },0)
        this.dealClass(this.focus);
    };

    SearchBar.prototype.onKeyDown = function onKeyDown(e) {
        var queryCallback = this.props.queryCallback;

        if (e.keyCode == '13') {
            if (queryCallback) queryCallback(this.searchElem.getValueCallback());
        }
    };

    SearchBar.prototype.dealClass = function dealClass(focus) {
        if (focus) {
            this.searchBar.classList.add(this.setPhPrefix('focus'));
        } else {
            this.searchBar.classList.remove(this.setPhPrefix('focus'));
        }
    };

    SearchBar.prototype.renderSearchBar = function renderSearchBar() {
        var _this2 = this;

        var _props4 = this.props;
        var className = _props4.className;
        var placeholder = _props4.placeholder;
        var style = _props4.style;

        return _react2['default'].createElement(
            'form',
            { action: 'javascript:;' },
            _react2['default'].createElement(
                'div',
                { className: _classnames2['default'](this.getProperty(true), className), style: this.getStyles(style), ref: function (searchBar) {
                        _this2.searchBar = searchBar;
                    } },
                _react2['default'].createElement(_input2['default'], _extends({}, this.otherProps, { type: 'search', phIcon: 'search', placeholder: placeholder, clear: true,
                    ref: function (searchElem) {
                        _this2.searchElem = searchElem;
                    },
                    onFocus: this.onFocus.bind(this),
                    onBlur: this.onBlur.bind(this),
                    onKeyDown: this.onKeyDown.bind(this)
                })),
                this.renderButton()
            )
        );
    };

    SearchBar.prototype.componentWillUnmount = function componentWillUnmount() {
        clearTimeout(this.timer);
    };

    SearchBar.prototype.render = function render() {
        return this.renderSearchBar();
    };

    return SearchBar;
})(_utilsComponent2['default']);

exports['default'] = SearchBar;
module.exports = exports['default'];