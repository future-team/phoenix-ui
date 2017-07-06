'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FilterPanelBase = require('./FilterPanelBase');

var _FilterPanelBase2 = _interopRequireDefault(_FilterPanelBase);

var FilterPanelSimple = (function (_PanelBase) {
    _inherits(FilterPanelSimple, _PanelBase);

    function FilterPanelSimple(props, context) {
        _classCallCheck(this, FilterPanelSimple);

        _PanelBase.call(this, props, context);
    }

    FilterPanelSimple.prototype.render = function render() {
        var itemList = this.renderItemList(this.props.children);
        var className = this.props.className;

        return this.props.show ? _react2['default'].createElement(
            'div',
            { className: _classnames2['default'](className ? className : '', "ph-filter-selector") },
            _react2['default'].createElement(
                'div',
                { className: 'ph-list' },
                _react2['default'].createElement(
                    'div',
                    null,
                    itemList
                )
            )
        ) : null;
    };

    return FilterPanelSimple;
})(_FilterPanelBase2['default']);

exports['default'] = FilterPanelSimple;
module.exports = exports['default'];