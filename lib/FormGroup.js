'use strict';

exports.__esModule = true;

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

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

/**
 * 表单元素布局方式，整齐的排列一组表单元素
 * @class FormGroup
 * @module Form
 * @extends Component
 * @constructor
 * @demo form-group.js {展示}
 * @demo form-group.js {源码}
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
            egSize: '',
            classPrefix: '',
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
        var _this = this;

        var items = _react2['default'].Children.map(this.props.children, function (options, index) {

            return _react2['default'].cloneElement(options, {
                className: _classnames2['default']({
                    'input-row': !options.props.single
                }, _this.props.className)

            });
        }, this);

        return items;
    };

    FormGroup.prototype.render = function render() {
        var Component = this.props.componentTag;

        return _react2['default'].createElement(
            Component,
            { className: _classnames2['default']('input-group', this.getProperty(), this.props.className) },
            this.renderItem()
        );
    };

    return FormGroup;
})(_utilsComponent2['default']);

exports['default'] = FormGroup;
module.exports = exports['default'];