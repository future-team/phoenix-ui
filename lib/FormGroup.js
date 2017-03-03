'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
 * 表单元素布局方式，整齐的排列一组表单元素<br/>
 *
 * 示例:
 * - 单列, 如:
 * ```code
 *     <FormGroup>
 *         <Row single>
 *             <Col>
 *                 <Input type="text" placeholder="姓名" />
 *             </Col>
 *         </Row>
 *     </FormGroup>
 * ```
 * - 多列, 如:
 * ```code
 *     <FormGroup>
 *         <Row>
 *             <Col>
 *                 <label>省</label>
 *                 <Input type="text" placeholder="省" />
 *             </Col>
 *             <Col>
 *                 <label>市</label>
 *                 <Input type="text" placeholder="市" />
 *             </Col>
 *         </Row>
 *     </FormGroup>
 * ```
 *
 * @class FormGroup
 * @module 表单组件
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo formgroup|form-group.js {展示}
 * @show true
 * */

var FormGroup = (function (_Component) {
    _inherits(FormGroup, _Component);

    _createClass(FormGroup, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'form-group'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 标签tagName
             * @property componentTag
             * @type String
             * */
            componentTag: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            classPrefix: 'form-group',
            componentTag: 'form',
            classMapping: {}
        },
        enumerable: true
    }]);

    function FormGroup(props, context) {
        _classCallCheck(this, FormGroup);

        _Component.call(this, props, context);
    }

    FormGroup.prototype.renderItem = function renderItem() {
        var items = _react2['default'].Children.map(this.props.children, function (options, index) {

            return _react2['default'].cloneElement(options, {
                className: _classnames2['default'](!options.props.single ? 'ph-form-row' : '', options.props.className)
            });
        }, this);

        return items;
    };

    FormGroup.prototype.render = function render() {
        var _props = this.props;
        var Component = _props.componentTag;
        var className = _props.className;

        var other = _objectWithoutProperties(_props, ['componentTag', 'className']);

        return _react2['default'].createElement(
            Component,
            _extends({ className: _classnames2['default'](this.getProperty(true), _utilsTool.setPhoenixPrefix('row-no-padding'), this.props.className) }, other),
            this.renderItem()
        );
    };

    return FormGroup;
})(_utilsComponent2['default']);

exports['default'] = FormGroup;
module.exports = exports['default'];