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

var _utilsTool = require('../utils/Tool');

var _utilsLogger = require('../utils/logger');

var _utilsLogger2 = _interopRequireDefault(_utilsLogger);

/**
 * 拖拽组件<br/>
 * - 兼容移动端的touch和pc端的mouse事件。
 * - 可通过dragCallback设置抓取的回调函数, 返回抓取在屏幕上的位置, 分别保存在start和move中, 以x和y的形式展示。
 * - 可通过dropCallback设置松开瞬间的回调函数, 返回松开时在屏幕上的位置, 保存在end中, 以x和y的形式展示。
 *
 * 示例:
 * ```code
 *     <Drag dragCallback={::this.dragCallback} dropCallback={::this.dropCallback} style={{height:0}}>
 *         <div className='box' ref={(box)=>{this.box = box}}>Drag</div>
 *     </Drag>
 * ```
 * ```code
 *     dragCallback(event,position){
 *         this.prePosition = position.start;
 *         this.nowPosition = position.move;
 *
 *         this.distanceX = this.preDistanceX + this.nowPosition.x - this.prePosition.x;
 *         this.distanceY = this.preDistanceY + this.nowPosition.y - this.prePosition.y;
 *         console.log(this.distanceX, this.distanceY);
 *     }
 *     dropCallback(event,position){
 *         this.preDistanceX = this.distanceX;
 *         this.preDistanceY = this.distanceY;
 *     }
 * ```
 *
 * @class Drag
 * @module 辅助组件
 * @extends Component
 * @constructor
 * @since 1.0.0
 * @demo drag|drag.js {展示}
 * @show true
 * */

var Drag = (function (_Component) {
    _inherits(Drag, _Component);

    _createClass(Drag, null, [{
        key: 'propTypes',
        value: {
            /**
             * 抓取的执行函数,对应TouchStart/TouchMove
             * @method dragCallback
             * @param {object} event
             * @param {object} position 位置坐标
             * @type Function
             * */
            dragCallback: _propTypes2['default'].func,
            /**
             * 放开的执行函数,对应TouchEnd
             * @method dropCallback
             * @param {object} event
             * @param {object} position 位置坐标
             * @type Function
             * */
            dropCallback: _propTypes2['default'].func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classMapping: {}
        },
        enumerable: true
    }]);

    function Drag(props, context) {
        _classCallCheck(this, Drag);

        _Component.call(this, props, context);

        new _utilsLogger2['default']('Drag');

        this.mobile = _utilsTool.getDeviceInfo('mobile');

        this.state = {
            position: {}
        };

        this.onMouseMoveHandle = this.onMouseMove.bind(this);
        this.onMouseEndHandle = this.onMouseEnd.bind(this);

        this.isMouseDown = false;
    }

    Drag.prototype.onTouchStart = function onTouchStart(event) {
        var _props = this.props;
        var dragCallback = _props.dragCallback;
        var dragStartCallback = _props.dragStartCallback;

        event.stopPropagation();
        _utilsTool.preventDefault(event);

        this.state.position.start = { x: event.touches[0].pageX, y: event.touches[0].pageY };
        this.state.position.move = this.state.position.start;

        if (dragCallback) dragCallback(event, this.state.position);
        if (dragStartCallback) dragStartCallback(event, this.state.position);

        return false;
    };

    Drag.prototype.onMouseStart = function onMouseStart(event) {
        var _props2 = this.props;
        var dragCallback = _props2.dragCallback;
        var dragStartCallback = _props2.dragStartCallback;

        this.isMouseDown = true;
        event.stopPropagation();
        _utilsTool.preventDefault(event);

        this.state.position.start = { x: event.pageX, y: event.pageY };
        this.state.position.move = this.state.position.start;

        if (dragCallback) dragCallback(event, this.state.position);
        if (dragStartCallback) dragStartCallback(event, this.state.position);

        if (!this.mobile) {
            document.addEventListener('mousemove', this.onMouseMoveHandle, false);
            document.addEventListener('mouseup', this.onMouseEndHandle, false);
        }

        return false;
    };

    Drag.prototype.onTouchMove = function onTouchMove(event) {
        event.stopPropagation();
        _utilsTool.preventDefault(event);

        this.state.position.move = { x: event.touches[0].pageX, y: event.touches[0].pageY };

        if (this.props.dragCallback) this.props.dragCallback(event, this.state.position);

        return false;
    };

    Drag.prototype.onMouseMove = function onMouseMove(event) {
        if (!this.isMouseDown) return;
        event.stopPropagation();
        _utilsTool.preventDefault(event);

        this.state.position.move = { x: event.pageX, y: event.pageY };

        if (this.props.dragCallback) this.props.dragCallback(event, this.state.position);

        return false;
    };

    Drag.prototype.onTouchEnd = function onTouchEnd(event) {
        event.stopPropagation();
        _utilsTool.preventDefault(event);

        this.state.position.end = { x: event.changedTouches[0].pageX, y: event.changedTouches[0].pageY };
        this.state.position.start = this.state.position.move;

        if (this.props.dropCallback) this.props.dropCallback(event, this.state.position);

        return false;
    };

    Drag.prototype.onMouseEnd = function onMouseEnd(event) {
        event.stopPropagation();
        _utilsTool.preventDefault(event);

        this.state.position.end = { x: event.pageX, y: event.pageY };
        this.state.position.start = this.state.position.move;

        if (this.props.dropCallback) this.props.dropCallback(event, this.state.position);
        this.isMouseDown = false;

        if (!this.mobile) {
            document.removeEventListener('mousemove', this.onMouseMoveHandle, false);
            document.removeEventListener('mouseup', this.onMouseEndHandle, false);
        }
        return false;
    };

    Drag.prototype.onTouchCancel = function onTouchCancel(event) {
        // 触屏取消:忽然来电话等情况
    };

    Drag.prototype.componentWillUnmount = function componentWillUnmount() {
        if (!this.mobile) {
            document.removeEventListener('mousemove', this.onMouseMoveHandle, false);
            document.removeEventListener('mouseup', this.onMouseEndHandle, false);
        }
    };

    Drag.prototype.renderDrag = function renderDrag() {
        var _this = this;

        return _react2['default'].createElement(
            'div',
            _extends({}, this.otherProps, { className: _classnames2['default'](_utilsTool.setPhPrefix('drag-action'), this.props.className, 'user-none'),
                onTouchStart: function (event) {
                    _this.onTouchStart(event);
                },
                onTouchMove: function (event) {
                    _this.onTouchMove(event);
                },
                onTouchEnd: function (event) {
                    _this.onTouchEnd(event);
                },
                onTouchCancel: function (event) {
                    _this.onTouchCancel(event);
                },

                onMouseDown: function (event) {
                    _this.onMouseStart(event);
                },

                ref: function (dragAction) {
                    _this.dragAction = dragAction;
                }
            }),
            this.props.children
        );
    };

    Drag.prototype.render = function render() {
        return this.renderDrag();
    };

    return Drag;
})(_utilsComponent2['default']);

exports['default'] = Drag;
module.exports = exports['default'];