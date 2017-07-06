'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../../button');

var _button2 = _interopRequireDefault(_button);

var _input = require('../../input');

var _input2 = _interopRequireDefault(_input);

var _FilterContainerJs = require('./FilterContainer.js');

var _FilterContainerJs2 = _interopRequireDefault(_FilterContainerJs);

var _FilterPanelCheckboxJs = require("./FilterPanelCheckbox.js");

var _FilterPanelCheckboxJs2 = _interopRequireDefault(_FilterPanelCheckboxJs);

var FilterCheckbox = (function (_Component) {
    _inherits(FilterCheckbox, _Component);

    function FilterCheckbox(props, context) {
        _classCallCheck(this, FilterCheckbox);

        _Component.call(this, props, context);

        this.choose = props.choose;
    }

    FilterCheckbox.prototype.getChooseData = function getChooseData(data) {
        this.choose = data;
    };

    FilterCheckbox.prototype.onSubmitHandle = function onSubmitHandle(e) {
        e.preventDefault();
        if (this.props.onSubmit) this.props.onSubmit(this.choose);
    };

    FilterCheckbox.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'ph-checkbox-filter' },
            _react2['default'].createElement(
                _FilterContainerJs2['default'],
                { activeIndex: 0, hideCat: true, choose: this.props.choose, getChooseData: this.getChooseData.bind(this) },
                _react2['default'].createElement(
                    _FilterPanelCheckboxJs2['default'],
                    { groupIndex: this.props.groupIndex },
                    this.props.children
                )
            ),
            _react2['default'].createElement(
                'div',
                { className: 'ph-submit-field' },
                _react2['default'].createElement(
                    _button2['default'],
                    { block: true, onClick: this.onSubmitHandle.bind(this) },
                    this.props.buttonText
                )
            )
        );
    };

    _createClass(FilterCheckbox, null, [{
        key: 'propTypes',
        value: {
            groupIndex: _react.PropTypes.number
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            groupIndex: 0,
            buttonText: '提交',
            buttonStyle: 'primary'
        },
        enumerable: true
    }]);

    return FilterCheckbox;
})(_react.Component);

exports['default'] = FilterCheckbox;
module.exports = exports['default'];