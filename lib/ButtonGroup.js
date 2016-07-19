/**
 * Created by mac on 15/9/8.
 */
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
 * 按钮组组件配合Button组件,提供了横、竖两种排列方式<br/>
 *  主要属性和接口：
 * <ul>
 *     <li>phType:是否自适应宽度或者垂直排列，可选'justify,tacked'默认'justify'
 *     </li>
 * </ul>
 * @class ButtonGroup
 * @module Form
 * @extends Component
 * @constructor
 * @since 0.1.4
 * @demo button.js {展示}
 * @demo button.js {源码}
 * @show true
 * */

var ButtonGroup = (function (_Component) {
    _inherits(ButtonGroup, _Component);

    _createClass(ButtonGroup, null, [{
        key: 'propTypes',
        value: {
            /**
             * 是否有自适应宽度，垂直排列等属性，取值为justify(水平排列)或者tacked(垂直排列)
             * @property phType
             * @type String
             * @default 'justify'
             * */
            phType: _react.PropTypes.string,
            /**
             * 某个按钮被按下后的回调
             * @property activeCallback
             * @type Function
             * */
            activeCallback: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'btn-group',
            phType: 'justify',
            componentTag: 'div',
            classMapping: {
                'justify': 'btn-group-justify',
                'tacked': 'btn-group-tacked'
            }
        },
        enumerable: true
    }]);

    function ButtonGroup(props, context) {
        _classCallCheck(this, ButtonGroup);

        _Component.call(this, props, context);

        this.state = {
            active: this.props.active
        };
    }

    ButtonGroup.prototype.clickHandler = function clickHandler(e) {
        var target = e.target;
        this.props.activeCallback && this.props.activeCallback(target, target.innerHTML);
        this.setState({
            active: target.innerHTML
        });
    };

    ButtonGroup.prototype.render = function render() {
        var _this = this;

        var Component = this.props.componentTag;

        var options = _react2['default'].Children.map(this.props.children, function (option) {

            var opt = _react2['default'].cloneElement(option, {
                onClick: _this.clickHandler.bind(_this),
                active: _this.state.active == option.props.children
            });
            return opt;
        }, this);

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, { className: _classnames2['default']('btn-group', this.getProperty(), 'clearfix') }),
            options
        );
    };

    return ButtonGroup;
})(_utilsComponent2['default']);

exports['default'] = ButtonGroup;
module.exports = exports['default'];