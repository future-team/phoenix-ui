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

var _buttonGroup = require('../../button-group');

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _button = require('../../button');

var _button2 = _interopRequireDefault(_button);

var FilterPanelBase = (function (_Component) {
    _inherits(FilterPanelBase, _Component);

    _createClass(FilterPanelBase, null, [{
        key: 'propTypes',
        value: {
            selected: _propTypes2['default'].shape({
                key: _propTypes2['default'].string,
                value: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].element])
            }),
            'default': _propTypes2['default'].string,
            readOnly: _propTypes2['default'].bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            readOnly: false,
            buttons: null,
            'default': ''
        },
        enumerable: true
    }]);

    function FilterPanelBase(props, context) {
        _classCallCheck(this, FilterPanelBase);

        _Component.call(this, props, context);
        this.category = props.selected || {};

        this.state = {
            selectedKey: this.getSelectedKey(props)
        };
    }

    FilterPanelBase.prototype.getSelectedKey = function getSelectedKey(props) {
        return props.selected && props.selected.key ? props.selected.key : '';
    };

    FilterPanelBase.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (this.props.selected !== nextProps.selected) {
            this.setState({
                selectedKey: this.getSelectedKey(nextProps)
            }, function () {
                _this2.props.setCatList();
            });
        }
    };

    FilterPanelBase.prototype.renderButtons = function renderButtons() {
        var _this3 = this;

        var _props = this.props;
        var buttons = _props.buttons;
        var categoryChange = _props.categoryChange;

        return buttons ? _react2['default'].createElement(
            _buttonGroup2['default'],
            { phType: 'footer' },
            buttons.map(function (button, index) {
                return _react2['default'].createElement(
                    _button2['default'],
                    _extends({ key: index }, button.otherProps, { phSize: 'lg', phStyle: button.phStyle || 'primary',
                        onClick: function () {
                            if (button.onHandle) {
                                button.onHandle(_this3.category);
                                categoryChange(_this3.index, _this3.category);
                            }
                        } }),
                    button.text || '确定'
                );
            })
        ) : null;
    };

    FilterPanelBase.prototype.renderItemList = function renderItemList(itemList) {
        var _this = this;
        var _props2 = this.props;
        var selected = _props2.selected;
        var readOnly = _props2.readOnly;
        var categoryChange = _props2.categoryChange;
        var panelIndex = _props2.panelIndex;
        var buttons = _props2.buttons;

        return _react2['default'].Children.map(itemList, function (item, index) {
            var key = item.props.itemKey;

            return _react2['default'].cloneElement(item, {
                index: index,
                active: _this.state.selectedKey == key,
                readOnly: readOnly,
                categoryChange: _this.categoryChange.bind(_this),
                panelIndex: panelIndex,
                onItemChange: _this.onItemChange.bind(_this)
            });
        });
    };

    FilterPanelBase.prototype.categoryChange = function categoryChange(index, category, options) {
        var _props3 = this.props;
        var buttons = _props3.buttons;
        var categoryChange = _props3.categoryChange;
        var activeGroupIndex = this.state.activeGroupIndex;

        this.index = index;
        this.category = category;

        if (activeGroupIndex || activeGroupIndex == 0) options.groupIndex = activeGroupIndex;

        categoryChange(index, category, !!buttons, options);
    };

    FilterPanelBase.prototype.onItemChange = function onItemChange(key) {
        this.setState({
            selectedKey: key
        });
    };

    return FilterPanelBase;
})(_react.Component);

exports['default'] = FilterPanelBase;
module.exports = exports['default'];