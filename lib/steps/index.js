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

var _utilsLogger = require('../utils/logger');

var _utilsLogger2 = _interopRequireDefault(_utilsLogger);

require('../style');

require('phoenix-styles/less/modules/steps.less');

/**
 * 步骤组件<br/>
 * - 通过list设置步骤过程名称数组，如['合作信息','公司信息','资质信息']，必需。
 * - 可通过index设置当前步骤，从0开始计算。
 * - 可通过clickCallback设置点击步骤的回调，函数返回步骤名称和索引。
 * - 可通过readOnly设置步骤是否只读不可点击，默认可点击。
 * 
 * 主要属性和接口：
 * - list:初始进度百分比, 默认0。 <br/>
 * 如: `<Steps list={['合作信息','公司信息','资质信息']} />`
 * - index:当前步骤，从0开始计算，默认0。 <br/>
 * 如: `<Steps index={1} list={['合作信息','公司信息','资质信息']} />`
 * - clickCallback:点击步骤的回调，函数返回步骤名称和索引。 <br/>
 * 如: `<Steps clickCallback={(str,index)=>{console.log(index);}} list={['合作信息','公司信息','资质信息']}/>`
 * - readOnly:只读不可点击，默认false。<br/>
 * 如: `<Steps readOnly list={['合作信息','公司信息','资质信息']} />`
 *
 * @class Steps
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 1.7.0
 * @demo steps|steps.js {展示}
 * @show true
 * */

var Steps = (function (_Component) {
    _inherits(Steps, _Component);

    _createClass(Steps, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'badge'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 是否为只读模式（只读模式不会触发点击回调），默认为false
             * @property readOnly
             * @type Boolean
             * @default false
             **/
            readOnly: _react.PropTypes.bool,
            /**
             * steps内容数组，把每一步的文案放入数组中作为list的值
             * @property list
             * @type Array
             * @default []
             **/
            list: _react.PropTypes.arrayOf(_react.PropTypes.string),
            /**
             * 当前处于第几步，默认为0，也就是说所有的步骤都没有开始，如果到第一步的话将index设置为1即可，注意index不可以超过list数组长度
             * @property index
             * @type Number
             * @default 0
             **/
            index: _react.PropTypes.number,
            /**
             * 点击每一步的回调，function(str,index){} str为步骤名称，index为第几步（从1开始计数）
             * @method clickCallback
             * @type Function
             * @default null
             **/
            clickCallback: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            readOnly: false,
            list: [],
            index: 0,
            classPrefix: 'steps',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Steps(props, context) {
        _classCallCheck(this, Steps);

        _Component.call(this, props, context);

        new _utilsLogger2['default']('Steps');

        this.state = {
            currentStep: props.index
        };
    }

    Steps.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.state.currentStep != nextProps.index) this.setState({ currentStep: nextProps.index });
    };

    Steps.prototype.clickCallback = function clickCallback(str, index, e) {
        var _props = this.props;
        var readOnly = _props.readOnly;
        var clickCallback = _props.clickCallback;var thisElemnt = e.currentTarget;
        if (readOnly) return;

        this.setState({
            currentStep: index
        });

        if (clickCallback) clickCallback(str, index);
    };

    Steps.prototype.renderLine = function renderLine() {
        var list = this.props.list;
        var listLen = list.length;

        return _react2['default'].createElement(
            'div',
            { className: 'ph-steps-line' },
            _react2['default'].createElement('div', { className: 'ph-steps-progress', style: { width: this.state.currentStep * (1 / (listLen - 1)) * 100 + '%' } })
        );
    };

    Steps.prototype.renderContent = function renderContent() {
        var _this2 = this;

        var list = this.props.list;

        var _this = this,
            listLen = list.length;

        return _react2['default'].createElement(
            'ul',
            { className: this.setPhPrefix('content') },
            list.map(function (item, index) {
                return _react2['default'].createElement(
                    'li',
                    { key: index, className: _classnames2['default'](_this2.setPhPrefix('list'), index == _this2.state.currentStep ? 'active' : index < _this2.state.currentStep ? 'done' : ''),
                        style: { left: index / (listLen - 1) * 100 + '%' },
                        onClick: _this.clickCallback.bind(_this, item, index)
                    },
                    _react2['default'].createElement('span', { className: _this2.setPhPrefix('dot') }),
                    _react2['default'].createElement(
                        'p',
                        null,
                        item
                    )
                );
            })
        );
    };

    Steps.prototype.renderSteps = function renderSteps() {
        return _react2['default'].createElement(
            'div',
            _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(true), this.props.className) }),
            this.renderLine(),
            this.renderContent()
        );
    };

    Steps.prototype.render = function render() {
        return this.renderSteps();
    };

    return Steps;
})(_utilsComponent2['default']);

exports['default'] = Steps;
module.exports = exports['default'];