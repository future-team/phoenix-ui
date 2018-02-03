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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsTool = require('../../utils/Tool');

var _FilterItem = require('./FilterItem');

var _FilterItem2 = _interopRequireDefault(_FilterItem);

var _buttonGroup = require('../../button-group');

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _button = require('../../button');

var _button2 = _interopRequireDefault(_button);

/**
 * 多选面板<br/>
 * - 可通过selected设置选中的项目，格式如`{key:'ljz',value:'陆家嘴'}`。
 * - 可通过default设置没有选项时的默认显示文字。
 * - 可通过readOnly设置当前面板是否为只读模式。
 * - 可通过buttons设置底部按钮组的样式、文字、回调等，格式如`[{text:'取消', phStyle:'info', onHandle:this.cancelChoose.bind(this), close:true, otherProps: {hollow:true}}]`。
 * - 可通过clickCallBack设置点击显隐panel的回调。
 * - 可通过checkAll设置是否显示全选，默认显示。
 * - 可通过type来判断当前的模式是否简单。
 * 
 * 主要属性和接口：
 * - selected: 默认打开的面板。
 * - default: 是否显示筛选头部。
 * - readOnly: 是否只读。
 * - buttons: 按钮组。
 * - clickCallBack: 点击panel显隐的回调。
 * - checkAll: 是否显示全选。
 * - type: 简单模式。
 * 
 * 如：
 * ```code
 *  const buttons = [
 *      {onHandle: this.onSubmit.bind(this)}
 *  ]
 * ...
 *  <FilterContainer>
 *      <PanelCheckbox readOnly selected={{key:'s_flower,f_bbc',value:'花店,本帮江浙菜'}} buttons={buttons} checkAll={false} clickCallBack={(show)=>{console.log(show)}}>
 *          <ItemGroup mainKey='ms' label={<span style={{color:'red'}}>美食</span>}>
 *              <Item itemKey='f_bbc'>本帮江浙菜</Item>
 *              ...
 *          </ItemGroup>
 *          <ItemGroup mainKey='dy' label='电影'>
 *              <Item itemKey='m_p'>私人影院</Item>
 *              ...
 *          </ItemGroup>
 *          ...
 *      </PanelCheckbox>
 *  </FilterContainer>
 * 或
 * <FilterContainer>
 *      <PanelCheckbox readOnly selected={{key:'s_flower,f_bbc',value:'花店,本帮江浙菜'}} buttons={buttons} type='simple'>
 *          <Item itemKey='f_bbc'>本帮江浙菜</Item>
 *          ...
 *      </PanelCheckbox>
 *  </FilterContainer>
 * ```
 *
 * @class FilterPanelCheckbox
 * @module 筛选控件
 * @extends Component
 * @constructor
 * @since 2.2.0
 * @demo ph-filter|ph-filter.js {展示}
 * @show true
 * */

var FilterPanelCheckbox = (function (_Component) {
    _inherits(FilterPanelCheckbox, _Component);

    function FilterPanelCheckbox(props, context) {
        _classCallCheck(this, FilterPanelCheckbox);

        _Component.call(this, props, context);

        this.choose = this.dealWithSelected(props);
        this.nameList = {};

        this.state = {
            activeGroupIndex: props.index,
            allChecked: {},
            itemChecked: {},
            itemDisabled: {},
            selected: this.dealWithSelected(props),
            selectedName: this.dealWithSelected(props, 'value')
        };
    }

    FilterPanelCheckbox.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.state.selected !== this.dealWithSelected(nextProps)) {
            this.setState({
                selected: this.dealWithSelected(nextProps),
                selectedName: this.dealWithSelected(nextProps, 'value')
            });
        }
    };

    FilterPanelCheckbox.prototype.dealWithSelected = function dealWithSelected(props, param) {
        var key = param || 'key';
        if (props.selected && props.selected[key]) return _utilsTool.transToArray(props.selected[key]);else return [];
    };

    FilterPanelCheckbox.prototype.deleteFromArray = function deleteFromArray(val) {
        var _state = this.state;
        var selected = _state.selected;
        var selectedName = _state.selectedName;
        var _index = selected.indexOf(val);

        if (_index > -1) {
            selected.splice(_index, 1);
            selectedName.splice(_index, 1);
        }
    };

    FilterPanelCheckbox.prototype.mainKeyChange = function mainKeyChange(key) {
        this.setState({
            activeGroupIndex: key
        });
    };

    FilterPanelCheckbox.prototype.onAllItemChange = function onAllItemChange(mainKey, itemKey, name, e) {
        var _state2 = this.state;
        var selected = _state2.selected;
        var selectedName = _state2.selectedName;
        var allChecked = _state2.allChecked;
        var itemChecked = _state2.itemChecked;

        allChecked[mainKey] = e.target.checked;
        // 全选或全不选
        for (var i in itemChecked[mainKey]) {
            itemChecked[mainKey][i] = e.target.checked;

            if (e.target.checked) {
                // 全选
                if (selected.indexOf(i) == -1 && !this.state.itemDisabled[mainKey][i]) {
                    selected.push(i.toString());
                    selectedName.push(this.nameList[mainKey][i]);
                }
            } else {
                // 全不选
                this.deleteFromArray(i);
            }
        }

        this.setState({
            allChecked: allChecked,
            itemChecked: itemChecked
        });

        // if(this.props.getChooseData) this.props.getChooseData(choose.join());
    };

    FilterPanelCheckbox.prototype.onItemChange = function onItemChange(mainKey, itemKey, name, e) {
        var _state3 = this.state;
        var selected = _state3.selected;
        var selectedName = _state3.selectedName;
        var allChecked = _state3.allChecked;
        var itemChecked = _state3.itemChecked;
        var itemDisabled = _state3.itemDisabled;

        itemChecked[mainKey][itemKey] = e.target.checked;

        if (!e.target.checked) {
            // 其中一个不选时去掉全选
            allChecked[mainKey] = false;
            this.deleteFromArray(itemKey.toString());
        }

        if (e.target.checked) {
            var count = true;
            if (selected.indexOf(itemKey) == -1) {
                selected.push(itemKey.toString());
                selectedName.push(name);
            }
            for (var i in itemChecked[mainKey]) {
                if (!itemChecked[mainKey][i] && !itemDisabled[mainKey][i]) {
                    count = false;
                    break;
                }
            }
            if (count) allChecked[mainKey] = true;
        }

        this.setState({
            allChecked: allChecked,
            itemChecked: itemChecked
        });

        // if(this.props.getChooseData) this.props.getChooseData(selected.join());
    };

    FilterPanelCheckbox.prototype.renderMainMenuList = function renderMainMenuList() {
        var self = this;

        return _react2['default'].Children.map(this.props.children, function (menu, index) {
            return _react2['default'].cloneElement(menu, {
                active: self.state.activeGroupIndex == index,
                groupIndex: index,
                readOnly: self.props.readOnly,
                mainKeyChange: self.mainKeyChange.bind(self)
            });
        });
    };

    FilterPanelCheckbox.prototype.renderSubMenuList = function renderSubMenuList(mainMenuList) {
        var selected = this.state.selected;
        var _state4 = this.state;
        var itemChecked = _state4.itemChecked;
        var itemDisabled = _state4.itemDisabled;
        var mainMenu;var self = this;var checkAll = this.props.checkAll;

        mainMenu = _react2['default'].Children.map(mainMenuList, function (menu) {
            var mainKey = menu.props.mainKey || 0;

            if (menu.props.groupIndex == self.state.activeGroupIndex) {
                return self.renderSubMenuCore(menu.props.children, selected, mainKey);
            }
        });

        return mainMenu;
    };

    FilterPanelCheckbox.prototype.renderExtra = function renderExtra(showExtra, selected) {
        var newExtra = showExtra,
            numElem = ' <i>' + selected.length + '</i> ';

        if (showExtra) {
            if (showExtra.indexOf('#') != -1) {
                newExtra = _react2['default'].createElement('span', { dangerouslySetInnerHTML: { __html: showExtra.replace('#', numElem) } });
            }
        }
        return newExtra;
    };

    FilterPanelCheckbox.prototype.renderButtons = function renderButtons() {
        var _props = this.props;
        var buttons = _props.buttons;
        var panelIndex = _props.panelIndex;
        var showExtra = _props.showExtra;
        var _state5 = this.state;
        var selected = _state5.selected;
        var selectedName = _state5.selectedName;
        var self = this;
        console.log('>>selected', selected);
        return buttons ? _react2['default'].createElement(
            _buttonGroup2['default'],
            { phType: 'footer', extra: this.renderExtra(showExtra, selected) },
            buttons.map(function (button, index) {
                return _react2['default'].createElement(
                    _button2['default'],
                    _extends({ key: index }, button.otherProps, { phSize: 'lg', phStyle: button.phStyle || 'primary',
                        onClick: function () {
                            if (button.onHandle) {
                                button.onHandle(selected.join(), selectedName.join());
                                if (button.close) self.props.categoryChange(panelIndex, { key: selected.join(), value: selectedName.join() });
                            }
                        } }),
                    button.text || '确定'
                );
            })
        ) : null;
    };

    FilterPanelCheckbox.prototype.renderMenuList = function renderMenuList() {
        var selected = this.state.selected;
        var menuList = this.renderSubMenuCore(this.props.children, selected, 0);
        return menuList;
    };

    FilterPanelCheckbox.prototype.renderSubMenuCore = function renderSubMenuCore(children, selected, mainKey) {
        var _state6 = this.state;
        var itemChecked = _state6.itemChecked;
        var itemDisabled = _state6.itemDisabled;
        var allChecked = _state6.allChecked;
        var checkAll = this.props.checkAll;

        var subMenu = [],
            checkedCount = 0,
            disabledCount = 0,
            sum = 0,
            self = this;

        _react2['default'].Children.map(children, function (item) {
            var key = item.props.itemKey,
                disabled = item.props.disabled;

            itemChecked[mainKey] = itemChecked[mainKey] || {};
            itemDisabled[mainKey] = itemDisabled[mainKey] || {};
            self.nameList[mainKey] = self.nameList[mainKey] || {};

            if (itemChecked[mainKey][key] == undefined || self.choose != selected) {
                // 兼容通过请求获取choose的情况
                itemChecked[mainKey][key] = selected.indexOf(key.toString()) != -1;
            }
            if (itemDisabled[mainKey][key] == undefined || self.choose != selected) {
                itemDisabled[mainKey][key] = disabled;
            }
            if (self.nameList[mainKey][key] == undefined || self.choose != selected) {
                self.nameList[mainKey][key] = item.props.children;
            }

            if (itemChecked[mainKey][key]) checkedCount++;
            if (disabled) {
                self.deleteFromArray(key.toString());
                disabledCount++;
            }
            sum++;

            subMenu.push(_react2['default'].cloneElement(item, {
                active: false,
                readOnly: self.props.readOnly,
                categoryChange: self.props.categoryChange,
                panelIndex: self.props.panelIndex,
                // new props
                checked: itemChecked[mainKey][key],
                // selected:self.props.selected,
                filterType: 'checkbox',
                mainKey: mainKey,
                onItemChange: self.onItemChange.bind(self)
            }));
        });

        // new一个全部的elemecontext
        if (allChecked[mainKey] == undefined || self.choose != selected) {
            if (checkedCount + disabledCount == sum) allChecked[mainKey] = true;else allChecked[mainKey] = false;
        }

        if (checkAll) subMenu.unshift(_react2['default'].createElement(
            _FilterItem2['default'],
            { active: false, key: mainKey, itemKey: mainKey, mainKey: mainKey, disabled: disabledCount == sum,
                filterType: 'checkbox', checked: allChecked[mainKey],
                onItemChange: self.onAllItemChange.bind(self) },
            '全部'
        ));

        return subMenu;
    };

    FilterPanelCheckbox.prototype.isSimple = function isSimple() {
        var type = this.props.type;

        return type == 'simple';
    };

    FilterPanelCheckbox.prototype.renderSimpleMenu = function renderSimpleMenu(className) {
        var menuList = this.renderMenuList();

        return _react2['default'].createElement(
            'div',
            { className: _classnames2['default']('ph-row ph-tabs ph-tabs-vertical', className) },
            _react2['default'].createElement(
                'div',
                { className: 'ph-col ph-tab-bd' },
                menuList
            )
        );
    };

    FilterPanelCheckbox.prototype.renderMenu = function renderMenu(className) {
        var mainMenuList = this.renderMainMenuList(),
            subMenuList = this.renderSubMenuList(mainMenuList);

        return _react2['default'].createElement(
            'div',
            { className: _classnames2['default']('ph-row ph-tabs ph-tabs-vertical', className) },
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
        );
    };

    FilterPanelCheckbox.prototype.render = function render() {
        var _props2 = this.props;
        var className = _props2.className;
        var buttons = _props2.buttons;
        var show = _props2.show;
        var type = _props2.type;
        var children = _props2.children;

        return show ? _react2['default'].createElement(
            'div',
            { className: _classnames2['default']('ph-filter-selector', buttons ? 'ph-filter-selector-buttons' : '') },
            this.isSimple() ? this.renderSimpleMenu(className) : this.renderMenu(className),
            this.renderButtons()
        ) : null;
    };

    _createClass(FilterPanelCheckbox, null, [{
        key: 'propTypes',
        value: {
            /**
             * panel下选中的item的key、value组成的对象，用于设置该panel初始状态下选中的item项
             * @property selected
             * @type Object 如{key:'ljz,xjh',value:'陆家嘴,徐家汇'}
             * */
            selected: _propTypes2['default'].shape({
                key: _propTypes2['default'].string,
                value: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].element])
            }),
            /**
             * 当不设置panel的选中项时（不选择任何item），可以设置一个默认字符展示在filter上
             * @property default
             * @type String
             * */
            'default': _propTypes2['default'].string,
            /**
             * panel是否为只读模式
             * @property readOnly
             * @type Boolean
             * */
            readOnly: _propTypes2['default'].bool,
            /**
            * 按钮数组
            * @property buttons
            * @type Array
            * */
            buttons: _propTypes2['default'].array,
            /**
            * 是否可以全选
            * @property checkAll
            * @type Boolean
            * @default true
            * */
            checkAll: _propTypes2['default'].bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            selected: {},
            checkAll: true
        },
        enumerable: true
    }]);

    return FilterPanelCheckbox;
})(_react.Component);

exports['default'] = FilterPanelCheckbox;
module.exports = exports['default'];