'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FilterPanelBaseJs = require('./FilterPanelBase.js');

var _FilterPanelBaseJs2 = _interopRequireDefault(_FilterPanelBaseJs);

/**
 * 面板<br/>
 * - 可通过selected设置选中的项目，格式如`{key:'ljz',value:'陆家嘴'}`。
 * - 可通过default设置没有选项时的默认显示文字。
 * - 可通过readOnly设置当前面板是否为只读模式。
 * - 可通过clickCallBack设置点击显隐panel的回调。
 * 
 * 主要属性和接口：
 * - selected: 默认打开的面板。
 * - default: 是否显示筛选头部。
 * - readOnly: 是否只读
 * - clickCallBack: 点击panel显隐的回调。
 * 
 * 如：
 * ```code
 * ...
 *  <FilterContainer>
 *      <Panel readOnly selected={{key:'s_flower',value:'花店'}} clickCallBack={(show)=>{console.log(show)}}>
 *          <ItemGroup label={<span style={{color:'red'}}>美食</span>}>
 *              <Item itemKey='f_all'>全部美食</Item>
 *              <Item itemKey='f_bbc'>本帮江浙菜</Item>
 *              ...
 *          </ItemGroup>
 *          <ItemGroup  label='电影'>
 *              <Item itemKey='m_all'>全部电影</Item>
 *              <Item itemKey='m_p'>私人影院</Item>
 *              ...
 *          </ItemGroup>
 *          ...
 *      </Panel>
 *  </FilterContainer>
 * ```
 *
 * @class FilterPanel
 * @module 筛选控件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo ph-filter|ph-filter.js {展示}
 * @show true
 * */

var FilterPanel = (function (_PanelBase) {
    _inherits(FilterPanel, _PanelBase);

    _createClass(FilterPanel, null, [{
        key: 'propTypes',
        value: {
            /**
             * panel下选中的item的key、value组成的对象，用于设置该panel初始状态下选中的item项
             * @property selected
             * @type Object 如{key:'ljz',value:'陆家嘴'}
             * */
            selected: _react.PropTypes.shape({
                key: _react.PropTypes.string,
                value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element])
            }),
            /**
             * 当不设置panel的选中项时（不选择任何item），可以设置一个默认字符展示在filter上
             * @property default
             * @type String
             * */
            'default': _react.PropTypes.string,
            /**
             * panel是否为只读模式
             * @property readOnly
             * @type Boolean
             * */
            readOnly: _react.PropTypes.bool,
            /**
            * 主菜单默认选中项
            * @property index
            * @type Number
            * @default 0
            * */
            index: _react.PropTypes.number,
            /**
             * 点击panel显隐的回调
             * @method clickCallback
             * @param {string} show 是否显示
             * @type Function
             * */
            clickCallBack: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            index: 0,
            selected: null,
            readOnly: false,
            buttons: null,
            'default': ''
        },
        enumerable: true
    }]);

    function FilterPanel(props, context) {
        _classCallCheck(this, FilterPanel);

        _PanelBase.call(this, props, context);

        this.state = {
            selectedKey: this.getSelectedKey(props),
            activeGroupIndex: this.getActiveGroupIndex()
        };
    }

    FilterPanel.prototype.getActiveGroupIndex = function getActiveGroupIndex() {
        var _props = this.props;
        var selected = _props.selected;
        var index = _props.index;
        var children = _props.children;
        var activeIndex = 0;
        var selectedKey = selected.key;

        if (index && index >= 0) return index;

        // 获取不到children,并不会执行
        if (selectedKey) {
            _react2['default'].Children.map(children, function (mainMenu, mainIndex) {

                _react2['default'].Children.map(mainMenu.props.children, function (subMenu, subIndex) {
                    if (subMenu.props.itemKey == selectedKey) {
                        activeIndex = mainIndex;
                    }
                });
            });
        }

        return activeIndex;
    };

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

    FilterPanel.prototype.renderPanel = function renderPanel() {
        var self = this;
        var _props2 = this.props;
        var show = _props2.show;
        var readOnly = _props2.readOnly;
        var className = _props2.className;
        var buttons = _props2.buttons;

        var mainMenuList = _react2['default'].Children.map(this.props.children, function (menu, index) {
            return _react2['default'].cloneElement(menu, {
                active: self.state.activeGroupIndex == index,
                groupIndex: index,
                readOnly: readOnly,
                mainKeyChange: self.mainKeyChange.bind(self)
            });
        }),
            subMenuList = this.renderSubMenuList(mainMenuList);

        return show ? _react2['default'].createElement(
            'div',
            { className: _classnames2['default']('ph-filter-selector', buttons ? 'ph-filter-selector-buttons' : '') },
            _react2['default'].createElement(
                'div',
                { className: _classnames2['default']('ph-row ph-tabs ph-tabs-vertical', className ? className : '') },
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
            ),
            this.renderButtons()
        ) : null;
    };

    FilterPanel.prototype.render = function render() {
        return this.renderPanel();
    };

    return FilterPanel;
})(_FilterPanelBaseJs2['default']);

exports['default'] = FilterPanel;
module.exports = exports['default'];