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

/**
 * 拖动Drag
 * @class Drag
 * @module Basic
 * @extends Component
 * @constructor
 * @demo Swipe.js {源码}
 * @show false
 * */

var Drag = (function (_Component) {
    _inherits(Drag, _Component);

    _createClass(Drag, null, [{
        key: 'propTypes',
        value: {},
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            egSize: '',
            classPrefix: '',
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
    }

    Drag.prototype.onStart = function onStart(event) {
        event.stopPropagation();

        this.state.position.start = { x: event.touches[0].pageX, y: event.touches[0].pageY };
        this.state.position.move = this.state.position.start;

        this.props.onDrag(event, this.state.position);

        return false;
    };

    Drag.prototype.onMove = function onMove(event) {
        event.stopPropagation();

        this.state.position.move = { x: event.touches[0].pageX, y: event.touches[0].pageY };
        this.props.onDrag(event, this.state.position);

        return false;
    };

    Drag.prototype.onEnd = function onEnd(event) {
        event.stopPropagation();

        this.state.position.end = { x: event.changedTouches[0].pageX, y: event.changedTouches[0].pageY };
        this.state.position.start = this.state.position.move;

        this.props.onDrop(event, this.state.position);

        return false;
    };

    Drag.prototype.onCancel = function onCancel(event) {
        // 触屏取消:忽然来电话等情况
    };

    Drag.prototype.render = function render() {
        var _this = this;

        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, { className: _classnames2['default']('drag-action', this.props.className),
                onTouchStart: function (event) {
                    _this.onStart(event);
                },
                onTouchMove: function (event) {
                    _this.onMove(event);
                },
                onTouchEnd: function (event) {
                    _this.onEnd(event);
                },
                onTouchCancel: function (event) {
                    _this.onCancel(event);
                }
            }),
            this.props.children
        );
    };

    return Drag;
})(_utilsComponent2['default']);

exports['default'] = Drag;
module.exports = exports['default'];