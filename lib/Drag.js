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
 * 拖拽组件<br/>
 * - 兼容移动端的touch和pc端的mouse事件。
 * - 可通过onDrag设置抓取的回调函数, 返回抓取在屏幕上的位置, 分别保存在start和move中, 以x和y的形式展示。
 * - 可通过onDrop设置松开瞬间的回调函数, 返回松开时在屏幕上的位置, 保存在end中, 以x和y的形式展示。
 *
 * 示例:
 * ```code
 *     <Drag onDrag={::this.onDrag} onDrop={::this.onDrop} style={{height:0}}>
 *         <div className="box" ref={(box)=>{this.box = box}}>Drag</div>
 *     </Drag>
 * ```
 * ```code
 *     onDrag(event,position){
 *         this.prePosition = position.start;
 *         this.nowPosition = position.move;
 *
 *         this.distanceX = this.preDistanceX + this.nowPosition.x - this.prePosition.x;
 *         this.distanceY = this.preDistanceY + this.nowPosition.y - this.prePosition.y;
 *         console.log(this.distanceX, this.distanceY);
 *     }
 *     onDrop(event,position){
 *         this.preDistanceX = this.distanceX;
 *         this.preDistanceY = this.distanceY;
 *     }
 * ```
 *
 * @class Drag
 * @module 辅助组件
 * @extends Component
 * @constructor
 * @demo drag.js {展示}
 * @demo drag.js {源码}
 * @show true
 * */

var Drag = (function (_Component) {
    _inherits(Drag, _Component);

    _createClass(Drag, null, [{
        key: 'propTypes',
        value: {
            /**
             * 抓取的执行函数,对应TouchStart/TouchMove
             * @method onDrag
             * @type Function
             * */
            onDrag: _react.PropTypes.func,
            /**
             * 放开的执行函数,对应TouchEnd
             * @method onDrop
             * @type Function
             * */
            onDrop: _react.PropTypes.func
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

        this.state = {
            position: {}
        };

        this.isMouseDown = false;
    }

    Drag.prototype.onTouchStart = function onTouchStart(event) {
        event.stopPropagation();
        event.preventDefault();

        this.state.position.start = { x: event.touches[0].pageX, y: event.touches[0].pageY };
        this.state.position.move = this.state.position.start;

        this.props.onDrag(event, this.state.position);

        return false;
    };

    Drag.prototype.onMouseStart = function onMouseStart(event) {
        this.isMouseDown = true;
        event.stopPropagation();
        event.preventDefault();

        this.state.position.start = { x: event.pageX, y: event.pageY };
        this.state.position.move = this.state.position.start;

        this.props.onDrag(event, this.state.position);

        return false;
    };

    Drag.prototype.onTouchMove = function onTouchMove(event) {
        event.stopPropagation();
        event.preventDefault();

        this.state.position.move = { x: event.touches[0].pageX, y: event.touches[0].pageY };

        this.props.onDrag(event, this.state.position);

        return false;
    };

    Drag.prototype.onMouseMove = function onMouseMove(event) {
        if (!this.isMouseDown) return;
        event.stopPropagation();
        event.preventDefault();

        this.state.position.move = { x: event.pageX, y: event.pageY };

        this.props.onDrag(event, this.state.position);

        return false;
    };

    Drag.prototype.onTouchEnd = function onTouchEnd(event) {
        event.stopPropagation();
        event.preventDefault();

        this.state.position.end = { x: event.changedTouches[0].pageX, y: event.changedTouches[0].pageY };
        this.state.position.start = this.state.position.move;

        this.props.onDrop(event, this.state.position);

        return false;
    };

    Drag.prototype.onMouseEnd = function onMouseEnd(event) {
        event.stopPropagation();
        event.preventDefault();

        this.state.position.end = { x: event.pageX, y: event.pageY };
        this.state.position.start = this.state.position.move;

        this.props.onDrop(event, this.state.position);
        this.isMouseDown = false;

        return false;
    };

    Drag.prototype.onTouchCancel = function onTouchCancel(event) {
        // 触屏取消:忽然来电话等情况
    };

    Drag.prototype.render = function render() {
        var _this = this;

        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, { className: _classnames2['default'](_utilsTool.setPhoenixPrefix("drag-action"), this.props.className),
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
                onMouseMove: function (event) {
                    _this.onMouseMove(event);
                },
                onMouseUp: function (event) {
                    _this.onMouseEnd(event);
                }
            }),
            this.props.children
        );
    };

    return Drag;
})(_utilsComponent2['default']);

exports['default'] = Drag;
module.exports = exports['default'];