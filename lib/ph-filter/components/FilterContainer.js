'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsTool = require('../../utils/Tool');

var _utilsLogger = require('../../utils/logger');

var _utilsLogger2 = _interopRequireDefault(_utilsLogger);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

/**
 * <h5>筛选控件，主要包括组件:</h5>
 * <strong><a href='../classes/FilterContainer.html'>FilterContainer 单选筛选</a></strong><br/>
 * <strong><a href='../classes/FilterCheckbox.html'>FilterCheckbox 多选筛选</a></strong><br>
 * <strong><a href='../classes/FilterPanelSimple.html'>FilterPanelSimple 简单面板</a></strong><br>
 * <strong><a href='../classes/FilterPanel.html'>FilterPanel 面板</a></strong><br>
 * <strong><a href='../classes/FilterItemGroup.html'>FilterItemGroup 主菜单</a></strong><br>
 * <strong><a href='../classes/FilterItem.html'>FilterItem 筛选项</a></strong><br>
 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
 * @module 筛选控件
 * @main 筛选控件
 * @static
 */

/**
 * 单选筛选<br/>
 * - 可通过index设置筛选默认打开的面板。默认－1，即都不打开。
 * - 可通过hideCat选择是否要显示筛选头部。
 * - 可通过clickCallback设置有效选择的回调，当没有按钮时选中即触发，有按钮时点击按钮时触发。
 *
 * 主要属性和接口：
 * - index: 默认打开的面板。
 * - hideCat: 是否显示筛选头部。
 * - clickCallback: 有效选择的回调。
 * 
 * 有2种形式，其一，简单模式。<br/>
 * 如：
 * ```code
 *  this.state = {
 *      panel1:[
 *          {key:'sndq',value:'上南地区'},
 *          {key:'ljz',value:'陆家嘴'},
 *          {key:'bbb',value:'八佰伴'},
 *          {key:'pdxq',value:'浦东新区'}
 *      ]
 *  }
 * ...
 *  <FilterContainer index={0} hideCat={false} clickCallback={this.clickCallback.bind(this)} stable>
 *      <PanelSimple readOnly className='panel1' selected={{key:'ljz',value:'陆家嘴'}}>
 *          {
 *              this.state.panel1.map(function(item){
 *                  return <Item key={item.key} itemKey={item.key}>{item.value}</Item>
 *              })
 *          }
 *      </PanelSimple>
 *  </FilterContainer>
 * ```
 * 其一，双栏模式。<br/>
 * 如：
 * ```code
 *  <FilterContainer index={0} hideCat={false} clickCallback={this.clickCallback.bind(this)}>
 *      <Panel readOnly selected={{key:'s_flower',value:'花店'}}>
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
 * @class FilterContainer
 * @module 筛选控件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo ph-filter|ph-filter.js {展示}
 * @show true
 * */

var FilterContainer = (function (_Component) {
    _inherits(FilterContainer, _Component);

    _createClass(FilterContainer, null, [{
        key: 'propTypes',
        value: {
            /**
             * 默认展开筛选的索引，默认－1，即都不展开
             * @property index
             * @type Number
             * @default -1
             * */
            index: _react.PropTypes.number,
            /**
             * 是否隐藏头部
             * @property hideCat
             * @type Boolean
             * @default false
             * */
            hideCat: _react.PropTypes.bool,
            /**
             * 有效选择触发的回调函数
             * @method clickCallback
             * @type Function
             * */
            clickCallback: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            index: -1,
            hideCat: false,
            clickCallback: null,
            stable: false
        },
        enumerable: true
    }]);

    function FilterContainer(props, context) {
        _classCallCheck(this, FilterContainer);

        _Component.call(this, props, context);

        new _utilsLogger2['default']('ph-filter');

        this.state = {
            catList: this.getCatList(),
            activeCat: props.index,
            fixed: false
        };

        this.windowScrollHandle = this.windowScrollHandle.bind(this);
        this.preventDefault = this.preventDefault.bind(this);
        this.containerOffsetTop = 0;

        window.addEventListener('scroll', this.windowScrollHandle, false);
    }

    FilterContainer.prototype.preventDefault = function preventDefault(e) {
        _utilsTool.preventDefault(e);
    };

    FilterContainer.prototype.windowScrollHandle = function windowScrollHandle() {
        if (_utilsTool.getScrollTop() > this.containerOffsetTop) {
            if (!this.state.fixed) this.setState({ fixed: true });
        } else {
            if (this.state.fixed) this.setState({ fixed: false });
        }
    };

    FilterContainer.prototype.componentDidMount = function componentDidMount() {
        var _this = this;

        setTimeout(function () {
            _this.containerOffsetTop = _this.filterContainer.offsetTop;
        }, 0);
    };

    FilterContainer.prototype.componentWillUnmount = function componentWillUnmount() {
        this.willScroll();
        window.removeEventListener('scroll', this.windowScrollHandle, false);
    };

    FilterContainer.prototype.getCatList = function getCatList() {
        var catList = _react2['default'].Children.map(this.props.children, function (panel, index) {
            //如果panel设置了selected属性的话直接读取selected属性；如果panel没有设置selected属性，则读取default用来展示在cat列表中
            return panel.props.selected ? panel.props.selected : {
                key: '',
                value: panel.props['default'] ? panel.props['default'] : ''
            };
        });
        return catList;
    };

    FilterContainer.prototype.setCatList = function setCatList() {
        this.setState({
            catList: this.getCatList()
        });
    };

    FilterContainer.prototype.categoryChange = function categoryChange(index, category, hasButtons) {
        var catList = this.state.catList.slice();
        var clickCallback = this.props.clickCallback;

        if (hasButtons) return;

        catList[index] = category;
        this.setState({
            catList: catList,
            activeCat: -1
        });

        this.willScroll();

        clickCallback && clickCallback(category.key);
    };

    FilterContainer.prototype.activeCat = function activeCat(index) {
        //展开某一个cat
        if (index == this.state.activeCat) {
            index = -1;
            this.willScroll();
        } else {
            this.noScroll();
        }

        this.setState({
            activeCat: index
        });
    };

    FilterContainer.prototype.renderPanelList = function renderPanelList() {
        var self = this;
        var _self$state = self.state;
        var catList = _self$state.catList;
        var activeCat = _self$state.activeCat;

        return _react2['default'].Children.map(this.props.children, function (panel, index) {
            var show = index == activeCat;

            if (self.props.hideCat && index == 0) {
                show = true;
            }

            return _react2['default'].cloneElement(panel, {
                categoryChange: self.categoryChange.bind(self),
                // selected: catList[index],
                setCatList: self.setCatList.bind(self),
                panelIndex: index,
                show: show,
                choose: _utilsTool.transToArray(self.props.choose),
                getChooseData: self.props.getChooseData
            });
        });
    };

    FilterContainer.prototype.renderCatList = function renderCatList() {
        if (this.props.hideCat) {
            return null;
        }
        var self = this;
        var _self$state2 = self.state;
        var catList = _self$state2.catList;
        var activeCat = _self$state2.activeCat;

        return catList.map(function (catCfg, index) {
            return _react2['default'].createElement(
                'li',
                { key: 'cat-' + index,
                    className: _classnames2['default']('ph-col', 'ph-filter-header-item', index == activeCat ? 'active' : ''),
                    onClick: function () {
                        self.activeCat(index);
                    }
                },
                _react2['default'].createElement(
                    'a',
                    { href: 'javascript:;' },
                    _react2['default'].createElement(
                        'span',
                        { className: 'ph-filter-header-text' },
                        catList[index].value
                    ),
                    _react2['default'].createElement(_icon2['default'], { phIcon: 'expand-more' })
                )
            );
        });
    };

    FilterContainer.prototype.noScroll = function noScroll() {
        document.body.classList.add('noscroll');
        // this.filterShadow.addEventListener('touchmove', this.preventDefault);
    };

    FilterContainer.prototype.willScroll = function willScroll() {
        document.body.classList.remove('noscroll');
        // this.filterShadow.removeEventListener('touchmove', this.preventDefault);
    };

    FilterContainer.prototype.hidePanel = function hidePanel() {
        var _this2 = this;

        this.setState({
            activeCat: -1
        }, function () {
            _this2.willScroll();
        });
    };

    FilterContainer.prototype.render = function render() {
        var _this3 = this;

        var _props = this.props;
        var stable = _props.stable;
        var className = _props.className;
        var style = _props.style;
        var _state = this.state;
        var activeCat = _state.activeCat;
        var fixed = _state.fixed;

        return _react2['default'].createElement(
            'div',
            { className: 'ph-filter-occupy' },
            _react2['default'].createElement(
                'div',
                { className: _classnames2['default']('ph-filter-container', activeCat == -1 ? '' : 'ph-filter-container-shadow', fixed ? 'ph-filter-container-fixed' : '', className),
                    ref: function (filterContainer) {
                        _this3.filterContainer = filterContainer;
                    },
                    style: _extends({ top: stable && !fixed && activeCat > -1 ? this.containerOffsetTop + 'px' : '' }, style)
                },
                _react2['default'].createElement('div', { className: 'ph-filter-shadow', onClick: this.hidePanel.bind(this) }),
                _react2['default'].createElement(
                    'ul',
                    { className: 'cat ph-row ph-filter-header' },
                    this.renderCatList()
                ),
                this.renderPanelList()
            )
        );
    };

    return FilterContainer;
})(_react.Component);

exports['default'] = FilterContainer;
module.exports = exports['default'];