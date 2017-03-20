'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _promiseQueue = require('promise-queue');

var _promiseQueue2 = _interopRequireDefault(_promiseQueue);

var _utilsTool = require('./utils/Tool');

/**
 * 路由切换组件<br/>
 * - 通过transitionName设置动画类型，可选[fade, slide-top, slide-bottom, slide-left, slide-right]。
 * - 通过onLoad函数设置动画完成的回调。
 * - 在列表页的最外层元素加`ph-transition-index`类，其他页面跳转到列表页都是回退的效果，到另一个新页面都是前进的效果。
 *
 * 主要属性和接口：
 * - transitionName:动画类型／动画名称，默认fade。
 * - onLoad:动画完成的回调函数。
 * 
 * 示例：
 * ```code
 *  let {PageTransition} from 'phoenix-ui';
 * 
 *  const RouteTransition = (props)=>(
 *      <PageTransition {...props} transitionName="slide-left" onLoad={()=>{console.log('end!!!');}}>{props.children}</PageTransition>
 *  );
 * ```
 * ```code
 *  let Index = class index extends Component {
 *      render() {
 *          return (
 *              <div className="menu ph-transition-index">
 *                  ...
 *               </div>
 *          );
 *      }
 *  };
 * ```
 * ```code
 *  <Router history={this.history}>
 *      <Route path="/" component={RouteTransition}>
 *          <Route path="/index" name="index" component={Index} />
 *          <Route path="/button" name="button" component={Button} />
 *          ...
 *          <Redirect from="/" to="/index" />
 *      </Route>
 *  </Router>
 * ```
 * 
 * @class PageTransition
 * @module 路由动画
 * @extends Component
 * @constructor
 * @since 1.6.0
 * @demo pagetransition|page-transition.js {展示}
 * @show true
 * */

var PageTransition = (function (_React$Component) {
    _inherits(PageTransition, _React$Component);

    _createClass(PageTransition, null, [{
        key: 'propTypes',
        value: {
            /**
             * 动画名称，可选[fade, slide-top, slide-bottom, slide-left, slide-right]
             * @property transitionName
             * @type String
             * @default 'fade'
             * */
            transitionName: _react.PropTypes.string,
            /**
             * 动画结束执行的回调
             * @method onLoad
             * @type Function
             * @default null
             * */
            onLoad: _react.PropTypes.func,
            timeout: _react.PropTypes.number,
            animateOnInit: _react.PropTypes.bool,
            data: _react.PropTypes.object
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            timeout: 300,
            transitionName: 'slide-left',
            animateOnInit: true,
            classMapping: {}
        },
        enumerable: true
    }]);

    function PageTransition(props, context) {
        _classCallCheck(this, PageTransition);

        _React$Component.call(this, props, context);

        if (this.props.animateOnInit) {
            this.state = {
                child1: null,
                child2: null,
                nextChild: 1
            };
        } else {
            this.state = {
                child1: this.props.children,
                child2: null,
                nextChild: 2
            };
        }

        this.transite = this.transite.bind(this);
        this.gerRef = this.getRef.bind(this);

        this.queue = new _promiseQueue2['default'](1, Infinity);

        this.itemClass = _utilsTool.setPhoenixPrefix('transition-item');

        this.routeRecord = [props.location.pathname];
        this.forward = true;
    }

    PageTransition.prototype.componentDidMount = function componentDidMount() {
        var _props = this.props;
        var animateOnInit = _props.animateOnInit;
        var data = _props.data;
        var children = _props.children;

        if (!animateOnInit) {
            var child = this.getRef('child1');
            if (child) {
                var dom = _reactDom2['default'].findDOMNode(child);
                child.onTransitionDidEnd && child.onTransitionDidEnd(data);
                dom.classList.remove(this.itemClass);
            }
        } else {
            this.transite(children);
        }
    };

    PageTransition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _this = this;

        // 判断当前是往前还是后退
        this.forward = this.routeForward(nextProps.location.pathname);

        var transitNewChild = function transitNewChild() {
            _this.queue.add(function () {
                return _this.transite(nextProps.children);
            });
        };
        var updateChild = function updateChild() {
            var currentChild = _this.state.nextChild === 1 ? 2 : 1;
            _this.state['child' + currentChild] = nextProps.children;
            _this.forceUpdate();
        };

        if (this.props.children && this.props.children.props && this.props.children.props['data-transition-id'] && nextProps.children.props['data-transition-id']) {

            if (this.props.children.props['data-transition-id'] !== nextProps.children.props['data-transition-id']) {
                transitNewChild();
            } else {
                updateChild();
            }
        } else {
            if (this.props.children !== nextProps.children) {
                transitNewChild();
            } else {
                updateChild();
            }
        }
    };

    PageTransition.prototype.routeForward = function routeForward(nextPathName) {
        var routeLen = this.routeRecord.length;

        if (routeLen > 1 && this.routeRecord[routeLen - 2] === nextPathName) {
            // back
            this.routeRecord.pop();
            return false;
        } else {
            this.routeRecord.push(nextPathName);
            return true;
        }
    };

    PageTransition.prototype.getClass = function getClass(mode) {
        if (mode && this.forward || !mode && !this.forward) {
            return _utilsTool.setPhoenixPrefix('transition-from');
        } else {
            return _utilsTool.setPhoenixPrefix('transition-to');
        }
    };

    PageTransition.prototype.getRef = function getRef(ref) {
        var child = this.refs[ref];
        if (child && child.getWrappedInstance) {
            child = child.getWrappedInstance();
        }
        return child;
    };

    PageTransition.prototype.transite = function transite(nextChild) {
        var _this2 = this;

        return new Promise(function (transiteDone, transiteFailed) {
            _this2.state['child' + _this2.state.nextChild] = nextChild;
            _this2.forceUpdate(function () {
                var prevChild = _this2.getRef('child' + (_this2.state.nextChild === 1 ? 2 : 1));
                var newChild = _this2.getRef('child' + _this2.state.nextChild);
                var prevChildDom = _reactDom2['default'].findDOMNode(prevChild);
                var newChildDom = _reactDom2['default'].findDOMNode(newChild);
                var timeout = 0;

                var willStart = function willStart() {
                    if (newChild.onTransitionWillStart) {
                        return newChild.onTransitionWillStart(_this2.props.data) || Promise.resolve();
                    }
                    if (prevChild && prevChild.onTransitionLeaveWillStart) {
                        return prevChild.onTransitionLeaveWillStart(_this2.props.data) || Promise.resolve();
                    }
                    return Promise.resolve();
                };

                var start = function start() {
                    if (newChildDom.classList.contains(_utilsTool.setPhoenixPrefix('transition-index'))) {
                        //  如果新页面包含'transition-index'强制为后退
                        _this2.forward = false;
                    } else if (prevChildDom && prevChildDom.classList.contains(_utilsTool.setPhoenixPrefix('transition-index'))) {
                        //  如果新页面包含'transition-index'强制为前进
                        _this2.forward = true;
                    }

                    if (newChildDom) {
                        timeout = _this2.props.timeout;
                        newChildDom.classList.add(_this2.props.transitionName + "-enter");
                        if (prevChildDom) newChildDom.classList.add(_this2.itemClass);
                        newChildDom.classList.add(_this2.getClass(true));

                        newChildDom.offsetHeight; // Trigger layout to make sure transition happen

                        if (newChild.transitionManuallyStart) {
                            return newChild.transitionManuallyStart(_this2.props.data, start) || Promise.resolve();
                        }
                        newChildDom.classList.add(_this2.props.transitionName + "-enter-active");
                    }

                    if (prevChildDom) {
                        prevChildDom.classList.add(_this2.props.transitionName + "-leave");
                        prevChildDom.classList.add(_this2.itemClass);
                        prevChildDom.classList.add(_this2.getClass(false));

                        timeout = _this2.props.timeout;
                        prevChildDom.offsetHeight; // Trigger layout to make sure transition happen

                        if (prevChild.transitionLeaveManuallyStart) {
                            return prevChild.transitionLeaveManuallyStart(_this2.props.data, start) || Promise.resolve();
                        }
                        prevChildDom.classList.add(_this2.props.transitionName + "-leave-active");
                    }
                    return Promise.resolve();
                };

                var didStart = function didStart() {
                    if (newChild.onTransitionDidStart) {
                        return newChild.onTransitionDidStart(_this2.props.data) || Promise.resolve();
                    }
                    if (prevChild && prevChild.onTransitionDidStartLeave) {
                        return prevChild.onTransitionLeaveDidStart(_this2.props.data) || Promise.resolve();
                    }
                    return Promise.resolve();
                };

                // Wait for transition
                var waitForTransition = function waitForTransition() {
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            // Swap child and remove the old child
                            _this2.state.nextChild = _this2.state.nextChild === 1 ? 2 : 1;
                            _this2.state['child' + _this2.state.nextChild] = null;
                            _this2.forceUpdate(resolve);
                        }, timeout);
                    });
                };

                // Before remove classes
                var willEnd = function willEnd() {
                    if (newChild.onTransitionWillEnd) {
                        return newChild.onTransitionWillEnd(_this2.props.data) || Promise.resolve();
                    }
                    if (prevChild && prevChild.onTransitionLeaveWillEnd) {
                        return prevChild.onTransitionLeaveWillEnd(_this2.props.data) || Promise.resolve();
                    }
                    return Promise.resolve();
                };

                // Remove appear and active class (or trigger manual end)
                var end = function end() {
                    if (newChildDom) {
                        newChildDom.classList.remove(_this2.props.transitionName + "-enter");
                        newChildDom.classList.remove(_this2.getClass(true));
                        newChildDom.classList.remove(_this2.itemClass);

                        if (newChild.transitionManuallyStop) {
                            return newChild.transitionManuallyStop(_this2.props.data) || Promise.resolve();
                        }
                        newChildDom.classList.remove(_this2.props.transitionName + "-enter-active");
                    }

                    if (prevChildDom) {
                        prevChildDom.classList.remove(_this2.props.transitionName + "-leave");
                        prevChildDom.classList.remove(_this2.getClass(false));
                        prevChildDom.classList.remove(_this2.itemClass);

                        if (prevChild.transitionLeaveManuallyStop) {
                            return prevChild.transitionLeaveManuallyStop(_this2.props.data) || Promise.resolve();
                        }
                        prevChildDom.classList.remove(_this2.props.transitionName + "-leave-active");
                    }
                    return Promise.resolve();
                };

                // After remove classes
                var didEnd = function didEnd() {
                    if (newChild.onTransitionDidEnd) {
                        return newChild.onTransitionDidEnd(_this2.props.data) || Promise.resolve();
                    }
                    if (prevChild && prevChild.onTransitionLeaveDidEnd) {
                        return prevChild.onTransitionLeaveDidEnd(_this2.props.data) || Promise.resolve();
                    }
                    return Promise.resolve();
                };

                Promise.resolve().then(willStart).then(start).then(didStart).then(waitForTransition).then(willEnd).then(end).then(didEnd).then(function () {
                    _this2.props.onLoad && _this2.props.onLoad();
                    transiteDone();
                })['catch'](transiteFailed);
            });
        });
    };

    PageTransition.prototype.render = function render() {
        var _props2 = this.props;
        var className = _props2.className;
        var children = _props2.children;

        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, { className: _classnames2['default'](_utilsTool.setPhoenixPrefix('transition-wrapper'), className) }),
            _react2['default'].Children.map(this.state.child1, function (element) {
                return _react2['default'].cloneElement(element, { ref: 'child1' });
            }),
            _react2['default'].Children.map(this.state.child2, function (element) {
                return _react2['default'].cloneElement(element, { ref: 'child2' });
            })
        );
    };

    return PageTransition;
})(_react2['default'].Component);

exports['default'] = PageTransition;
module.exports = exports['default'];