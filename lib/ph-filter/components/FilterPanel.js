'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FilterPanelBaseJs = require('./FilterPanelBase.js');

var _FilterPanelBaseJs2 = _interopRequireDefault(_FilterPanelBaseJs);

var FilterPanel = (function (_PanelBase) {
    _inherits(FilterPanel, _PanelBase);

    FilterPanel.prototype.getActiveGroupIndex = function getActiveGroupIndex() {
        var activeIndex = 0,
            selectedKey = this.props.selected.key;
        if (selectedKey) {
            _react2['default'].Children.map(this.props.children, function (mainMenu, mainIndex) {
                _react2['default'].Children.map(mainMenu.props.children, function (subMenu, subIndex) {
                    if (subMenu.props.itemKey == selectedKey) {
                        activeIndex = mainIndex;
                    }
                });
            });
        }
        return activeIndex;
    };

    function FilterPanel(props, context) {
        _classCallCheck(this, FilterPanel);

        _PanelBase.call(this, props, context);
        this.state = {
            activeGroupIndex: this.getActiveGroupIndex()
        };
    }

    FilterPanel.prototype.renderSubMenuList = function renderSubMenuList(mainMenuList) {
        var subMenuList = [],
            self = this;
        _react2['default'].Children.map(mainMenuList, function (menu, index) {
            if (menu.props.groupIndex == self.state.activeGroupIndex) {
                subMenuList = menu.props.children;
            }
        });
        return this.renderItemList(subMenuList);
    };

    FilterPanel.prototype.mainKeyChange = function mainKeyChange(key) {
        this.setState({
            activeGroupIndex: key
        });
    };

    FilterPanel.prototype.render = function render() {
        var self = this,
            mainMenuList = _react2['default'].Children.map(this.props.children, function (menu, index) {
            return _react2['default'].cloneElement(menu, {
                active: self.state.activeGroupIndex == index,
                groupIndex: index,
                readOnly: self.props.readOnly,
                mainKeyChange: self.mainKeyChange.bind(self)
            });
        }),
            subMenuList = this.renderSubMenuList(mainMenuList);

        return this.props.show ? _react2['default'].createElement(
            'div',
            { className: 'ph-filter-selector' },
            _react2['default'].createElement(
                'div',
                { className: _classnames2['default']('ph-row ph-tabs ph-tabs-vertical', this.props.className ? this.props.className : '') },
                _react2['default'].createElement(
                    'div',
                    { className: 'ph-col ph-col-33 ph-tab-navs' },
                    mainMenuList
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'ph-col ph-tab-bd' },
                    subMenuList
                )
            )
        ) : null;
    };

    return FilterPanel;
})(_FilterPanelBaseJs2['default']);

exports['default'] = FilterPanel;
module.exports = exports['default'];