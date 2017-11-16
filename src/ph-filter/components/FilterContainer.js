import React, { Component ,PropTypes} from 'react'
import classnames from 'classnames'
import {transToArray, getScrollTop} from '../../utils/Tool'
import Logger from '../../utils/logger'

import Icon from '../../icon'

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

export default class FilterContainer extends Component{
    static propTypes= {
        /**
         * 默认展开筛选的索引，默认－1，即都不展开
         * @property index
         * @type Number
         * @default -1
         * */
        index: PropTypes.number,
        /**
         * 是否隐藏头部
         * @property hideCat
         * @type Boolean
         * @default false
         * */
        hideCat: PropTypes.bool,
        /**
         * 是否显示阴影
         * @property noShadow
         * @type Boolean
         * @default false
         * */
        noShadow: PropTypes.bool,
        /**
         * 有效选择触发的回调函数
         * @method clickCallback
         * @param {string} key 返回选中的key值
         * @type Function
         * */
        clickCallback: PropTypes.func
    }

    static defaultProps = {
        index: -1,
        hideCat: false,
        clickCallback: null,
        stable: false
    }

    constructor(props,context){
        super(props,context)

        new Logger('ph-filter')

        this.catClick = false
        this.activeIndex = props.index

        this.state={
            catList: this.getCatList(props),
            activeCat: props.index,
            fixed: false
        }

        this.windowScrollHandle = this.windowScrollHandle.bind(this)
        this.containerOffsetTop = 0

        window.addEventListener('scroll', this.windowScrollHandle, false)
    }

    windowScrollHandle(){
        if(getScrollTop() > this.containerOffsetTop){
            if(!this.state.fixed) this.setState({fixed: true})
        }else{
            if(this.state.fixed) this.setState({fixed: false})
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.containerOffsetTop = this.filterContainer.offsetTop
        }, 0)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.windowScrollHandle, false)
    }

    componentWillReceiveProps(nextProps){
        let self = this,
            setted = false // 解决map无法跳出的问题

        React.Children.map(nextProps.children, function(panel,index){
            if(setted) return
            if(self.state.catList[index] !== panel.props.selected){
                self.setState({
                    catList: self.getCatList(nextProps)
                })
                setted = true
            }
        })
    }

    getCatList(props){
        return React.Children.map(props.children, function(panel,index){
            //如果panel设置了selected属性的话直接读取selected属性；如果panel没有设置selected属性，则读取default用来展示在cat列表中
            return panel.props.selected ? panel.props.selected:{
                key:'',
                value: panel.props.default ? panel.props.default:''
            }
        })
    }

    setCatList(){
        this.setState({
            catList: this.getCatList(this.props)
        })
    }

    categoryChange(index,category,hasButtons){
        let catList = this.state.catList.slice(),
            {clickCallback} = this.props
        
        if(hasButtons) return
        
        catList[index] = category
        this.setState({
            catList,
            activeCat: -1
        })

        clickCallback && clickCallback(category.key, this.state.activeCat)
    }

    activeCat(index){
        //展开某一个cat
        if(this.filterContainer.offsetTop && getScrollTop() < this.filterContainer.offsetTop){ // 打开时滚动到顶部
            document.documentElement.scrollTop = this.filterContainer.offsetTop
        }

        this.catClick = true
        this.activeIndex = index

        if(index==this.state.activeCat){
            index = -1
        }

        this.setState({
            activeCat:index
        }, ()=>{
            this.catClick = false
        });
    }

    renderPanelList(){
        let self=this,
            {catList,activeCat}=self.state
        
        return React.Children.map(this.props.children,function(panel,index){
            let {choose, getChooseData, hideCat} = self.props,
                {clickCallback} = panel.props,
                show = (index==activeCat)
            
            if(hideCat && index==0) show=true;console.log('self.catClick', self.catClick)
            if(self.catClick && self.activeIndex==index) clickCallback && clickCallback(activeCat==index);
            
            let panelProps = {
                categoryChange: self.categoryChange.bind(self),
                // selected: catList[index],
                setCatList: self.setCatList.bind(self),
                panelIndex: index,
                show: show,
                getChooseData: transToArray(getChooseData)
            }
            
            return  React.cloneElement(panel, panelProps)
        })
    }

    renderCatList(){
        if(this.props.hideCat){
            return null;
        }
        let self=this,
            {catList,activeCat}=self.state
            
        return catList.map(function(catCfg,index){
            return (
                <li key={'cat-'+index} 
                    className={classnames('ph-col', 'ph-filter-header-item', index==activeCat ? 'active':'')} 
                    onClick={function(){self.activeCat(index);}}
                >
                    <a href='javascript:;'>
                        <span className='ph-filter-header-text'>{catList[index].value}</span>
                        <Icon phIcon='expand-more' />
                    </a>
                </li>
            )
        })
    }

    noScroll(){
        document.body.classList.add('noscroll')
    }

    willScroll(){
        document.body.classList.remove('noscroll')
    }

    hidePanel(){
        this.setState({
            activeCat: -1
        })
    }

    render(){
        let {stable, className, noShadow, style} = this.props,
            {activeCat, fixed} = this.state
        
        return(
            <div className='ph-filter-occupy'>
                <div className={classnames(
                        'ph-filter-container', 
                        activeCat==-1? '':'ph-filter-container-shadow',
                        noShadow? 'ph-filter-container-noshadow':'',
                        fixed? 'ph-filter-container-fixed':'',
                        className
                    )}
                    ref={(filterContainer)=>{this.filterContainer = filterContainer}}
                    style={{top: stable && !fixed && activeCat>-1? this.containerOffsetTop+'px':'', ...style}}
                >
                    <div className='ph-filter-shadow' onClick={this.hidePanel.bind(this)}></div>
                    <ul className='cat ph-row ph-filter-header'>
                        {this.renderCatList()}
                    </ul>
                    {this.renderPanelList()}
                </div>
            </div>
        );
    }
}
