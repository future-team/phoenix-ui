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

var _Drag = require('./Drag');

var _Drag2 = _interopRequireDefault(_Drag);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

/**
 * 加载更多组件<br/>
 * - 通过phMode设置加载更多的模式，有点击按钮加载更多，以及滑到最底端自动加载，可选 [button,auto] 2种参数。
 * - 通过loadingStatus设置当前状态，包括 0加载更多, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多。
 * - 可通过loadTips设置按钮文字和状态提示语，默认["加载更多","加载中","加载成功","加载失败","没有更多"]，分别对应loadingStatus的状态。
 * - 可通过buttonStyles设置按钮的样式，如果当前phMode为auto设置是看不到效果的，默认["primary","info","success","error","gray"]，分别对应loadingStatus的状态。
 * - 可通过onLoading设置点击按钮加载或滑到底部自动加载的回调函数。
 * - 可通过onLoadingEnd设置每次加载结束的回调函数。
 *
 * 主要属性和接口：
 * - phMode:加载更多的模式，默认auto。
 * - loadingStatus:当前状态:0加载更多, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多，默认1。
 * - loadTips:按钮文字和状态提示语，默认["加载更多","加载中","加载成功","加载失败","没有更多"]。
 * - buttonStyles:按钮的样式，默认["primary","info","success","error","gray"]。
 * - onLoading:点击按钮加载或滑到底部自动加载的回调函数。
 * - onLoadingEnd:每次加载结束的回调函数。
 * 
 * 示例：
 * ```code
 *  <LoadingList phMode="auto" loadingStatus={this.state.loadingStatus} 
 *      loadTips={["点击加载更多","加载中...","加载成功！","加载失败！","没有更多"]} 
 *      buttonStyles={["primary","gray","success","danger","gray"]} 
 *      onLoading={::this.onLoading} onLoadingEnd={::this.onLoadingEnd}>
 *          ...
 *  </LoadingList>
 * ```
 * 
 * @class LoadingList
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 1.6.0
 * @demo LoadingList|loading-list.js {展示}
 * @show true
 * */

var LoadingList = (function (_Component) {
    _inherits(LoadingList, _Component);

    _createClass(LoadingList, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'loading-list'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 加载更多的模式，可选[button,auto], 默认auto
             * @property phStyle
             * @type String
             * @default 'auto'
             **/
            phMode: _react.PropTypes.string,
            /**
             * 加载状态：0加载更多, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多
             * @property loadingStatus
             * @type Number
             * @default 1
             **/
            loadingStatus: _react.PropTypes.number,
            /**
             * 加载5个状态的文字描述，默认["加载更多","加载中","加载成功","加载失败","没有更多"]
             * @property loadTips
             * @type Array
             * @default ["加载更多","加载中","加载成功","加载失败","没有更多"]
             **/
            loadTips: _react.PropTypes.array,
            /**
             * 加载5个状态的style，默认["primary","info","success","error","gray"]
             * @property buttonStyles
             * @type Array
             * @default ["primary","info","success","error","gray"]
             **/
            buttonStyles: _react.PropTypes.array,
            /**
             * 点击按钮加载或滑到底部自动加载的回调函数，用户在该函数内自定义请求
             * @method onLoading
             * @type Function
             * @default null
             **/
            onLoading: _react.PropTypes.func,
            /**
             * 每次加载结束的回调函数
             * @method onLoadingEnd
             * @type Function
             * @default null
             **/
            onLoadingEnd: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            phMode: 'auto',
            loadingStatus: 1, // 0加载更多, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多
            loadTips: ["加载更多", "加载中", "加载成功", "加载失败", "没有更多"],
            buttonStyles: ["primary", "info", "success", "error", "gray"],
            classPrefix: 'loading-list',
            classMapping: {}
        },
        enumerable: true
    }]);

    function LoadingList(props, context) {
        _classCallCheck(this, LoadingList);

        _Component.call(this, props, context);

        this.count = 0;
        this.handleWindowScroll = this.handleWindowScroll.bind(this);

        if (props.phMode == "auto") window.addEventListener('scroll', this.handleWindowScroll, false);
    }

    LoadingList.prototype.handleWindowScroll = function handleWindowScroll() {
        if (document.body.scrollTop >= this.loadingPage.offsetHeight + this.loadingPage.offsetTop - window.screen.height) {
            if (this.props.loadingStatus == 0) this.onLoading();
        }
    };

    LoadingList.prototype.renderButton = function renderButton() {
        var _props = this.props;
        var phMode = _props.phMode;
        var loadTips = _props.loadTips;
        var buttonStyles = _props.buttonStyles;
        var loadingStatus = _props.loadingStatus;

        if (phMode == "button") {
            return _react2['default'].createElement(
                _Button2['default'],
                { phStyle: buttonStyles[loadingStatus], block: true, disabled: loadingStatus == 4,
                    onClick: this.onLoading.bind(this) },
                this.renderIcon(),
                loadTips[loadingStatus]
            );
        } else {
            return _react2['default'].createElement(
                'div',
                { className: _utilsTool.setPhoenixPrefix('loading-page-tip') },
                this.renderIcon(),
                loadTips[loadingStatus]
            );
        }
    };

    LoadingList.prototype.renderIcon = function renderIcon() {
        if (this.props.loadingStatus == 1) {
            return _react2['default'].createElement(_Icon2['default'], { phIcon: 'loading' });
        } else {
            return '';
        }
    };

    LoadingList.prototype.onLoading = function onLoading() {
        if (this.props.onLoading) this.props.onLoading();
    };

    LoadingList.prototype.onDrag = function onDrag(event, position) {
        if (!position || !position.start) return; // 区别react的onDrag事件

        var _props2 = this.props;
        var phMode = _props2.phMode;
        var loadingStatus = _props2.loadingStatus;

        if (phMode == "button") return;

        var startY = position.start.y,
            moveY = position.move.y;
        var distanceY = moveY - startY;
        if (distanceY > 0) return; //只可以上拉

        if (Math.abs(distanceY) > 30) {
            // 拖拽过程中只执行一次
            if (this.count == 0) {
                // 初始状态和错误状态可以上拉重新请求
                if (loadingStatus == 0 || loadingStatus == 3) this.onLoading();
                this.count++;
            }
        }

        if (Math.abs(distanceY) >= 200) distanceY = -200;

        this.loadingPageMain.style.transform = "translateY(" + distanceY + "px)";
    };

    LoadingList.prototype.onDrop = function onDrop(event, position) {
        if (this.props.phMode == "button") return;
        this.count = 0;
        this.loadingPageMain.style.transform = "translateY(0px)";
    };

    LoadingList.prototype.componentDidMount = function componentDidMount() {
        // let {loadingStatus, onLoadingEnd} = this.props;
        // if(loadingStatus==2 && onLoadingEnd) onLoadingEnd();
    };

    LoadingList.prototype.componentDidUpdate = function componentDidUpdate() {
        var _props3 = this.props;
        var loadingStatus = _props3.loadingStatus;
        var onLoadingEnd = _props3.onLoadingEnd;

        if (loadingStatus == 2 && onLoadingEnd) onLoadingEnd();
    };

    LoadingList.prototype.componentWillUnmount = function componentWillUnmount() {
        window.removeEventListener('scroll', this.handleWindowScroll, false);
    };

    LoadingList.prototype.render = function render() {
        var _this = this;

        var _props4 = this.props;
        var className = _props4.className;
        var children = _props4.children;

        return _react2['default'].createElement(
            _Drag2['default'],
            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className, 'animated'),
                onDrag: this.onDrag.bind(this), onDrop: this.onDrop.bind(this) }),
            _react2['default'].createElement(
                'div',
                { className: _utilsTool.setPhoenixPrefix('loading-page-main'), ref: function (loadingPageMain) {
                        _this.loadingPageMain = loadingPageMain;
                    } },
                _react2['default'].createElement(
                    'div',
                    { className: _utilsTool.setPhoenixPrefix('loading-page-content'), ref: function (loadingPage) {
                            _this.loadingPage = loadingPage;
                        } },
                    children
                ),
                this.renderButton()
            )
        );
    };

    return LoadingList;
})(_utilsComponent2['default']);

exports['default'] = LoadingList;
module.exports = exports['default'];