'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

require('../style');

require('phoenix-styles/less/modules/button-group.less');

/**
 * 按钮组组件<br/>
 * - 按钮组组件配合Button组件,提供了横、竖两种排列方式, 可选default,justify,segmente,tacked,footer。
 * - 可通过index设置默认的选中索引值。
 * - 可通过clickCallback实现点击回调，default和footer模式下不支持clickCallback。
 *
 * 主要属性和接口：
 * - phType:是否自适应宽度或者垂直排列, 默认default <br/>
 * 如:
 * ```code
 *     <ButtonGroup phType='tacked'>
 *         <Button block>tacked1</Button>
 *         <Button block>tacked2</Button>
 *     </ButtonGroup>
 * ```
 * index:默认的选中索引值, 默认0 <br/>
 * 如:
 * ```code
 *     <ButtonGroup phType='justify' index={1}>
 *         <Button>justify</Button>
 *         <Button>justify</Button>
 *     </ButtonGroup>
 * ```
 * - clickCallback:点击按钮组的回调函数。<br/>
 * ```code
 *     <ButtonGroup clickCallback={(target,html)=>{console.log(target,html);}}>
 *         <Button>tacked1</Button>
 *         <Button>tacked2</Button>
 *     </ButtonGroup>
 * ```
 *
 * @class ButtonGroup
 * @module 基础组件
 * @extends Component
 * @constructor
 * @since 0.1.4
 * @demo buttongroup|button-group.js {展示}
 * @show true
 * */

var ButtonGroup = (function (_Component) {
    _inherits(ButtonGroup, _Component);

    _createClass(ButtonGroup, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'button-group'
             * */
            classPrefix: _react.PropTypes.string,
            /**
            * 默认索引值
            * @property index
            * @type Number
            * @default 0
            * */
            index: _react.PropTypes.number,
            /**
             * 是否有自适应宽度，垂直排列等属性，取值为default(用于双按钮)、justify(水平排列)、tacked(垂直排列)、segmente(分割排列)、footer(尾部按钮)
             * @property phType
             * @type String
             * @default 'default'
             * */
            phType: _react.PropTypes.string,
            /**
             * 按钮被按下后的回调
             * @method clickCallback
             * @type Function
             * */
            clickCallback: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            clickable: true, // for modal
            index: 0,
            phType: 'default',
            classPrefix: 'button-group',
            componentTag: 'div',
            classMapping: {
                'default': 'default',
                'justify': 'justify',
                'tacked': 'tacked',
                'segmente': 'segmente',
                'footer': 'footer'
            }
        },
        enumerable: true
    }]);

    function ButtonGroup(props, context) {
        _classCallCheck(this, ButtonGroup);

        _Component.call(this, props, context);

        this.state = {
            activeIndex: this.props.index
        };

        this.clickable = props.clickable;
        if (['default', 'footer'].indexOf(props.phType) != -1) this.clickable = false;
    }

    ButtonGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.state.activeIndex != nextProps.index) this.setState({ activeIndex: nextProps.index });
    };

    ButtonGroup.prototype.clickHandler = function clickHandler(index) {
        var _props = this.props;
        var phType = _props.phType;
        var clickCallback = _props.clickCallback;

        if (!this.clickable) return;

        clickCallback && clickCallback(index);

        this.setState({
            activeIndex: index
        });
    };

    ButtonGroup.prototype.renderChildren = function renderChildren() {
        var _this = this;

        var _props2 = this.props;
        var phType = _props2.phType;
        var children = _props2.children;

        return _react2['default'].Children.map(children, function (child, index) {
            var options = {};

            options.clickCallback = _this.clickHandler.bind(_this, index);
            if (_this.clickable) options.hollow = _this.state.activeIndex != index;

            var newChildren = _react2['default'].cloneElement(child, options);

            return newChildren;
        }, this);
    };

    ButtonGroup.prototype.renderButtonGroup = function renderButtonGroup() {
        var _props3 = this.props;
        var Component = _props3.componentTag;
        var children = _props3.children;
        var className = _props3.className;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(true), className, 'clearfix') }),
            this.renderChildren()
        );
    };

    ButtonGroup.prototype.render = function render() {
        return this.renderButtonGroup();
    };

    return ButtonGroup;
})(_utilsComponent2['default']);

exports['default'] = ButtonGroup;
module.exports = exports['default'];