import React, { Component ,PropTypes} from 'react'
import classnames from 'classnames'
import {transToArray} from '../../utils/Tool'

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
 * - 可通过activeIndex设置筛选默认打开的面板。默认－1，即都不打开。
 * - 可通过hideCat选择是否要显示筛选头部。
 * - 可通过clickCallback设置有效选择的回调，当没有按钮时选中即触发，有按钮时点击按钮时触发。
 *
 * 主要属性和接口：
 * - activeIndex: 默认打开的面板。
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
 *  <FilterContainer activeIndex={0} hideCat={false} clickCallback={this.clickCallback.bind(this)}>
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
 *  <FilterContainer activeIndex={0} hideCat={false} clickCallback={this.clickCallback.bind(this)}>
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
         * @property activeIndex
         * @type Number
         * @default -1
         * */
        activeIndex: PropTypes.number,
        /**
         * 是否隐藏头部
         * @property hideCat
         * @type Boolean
         * @default false
         * */
        hideCat: PropTypes.bool,
        /**
         * 有效选择触发的回调函数
         * @method clickCallback
         * @type Function
         * */
        clickCallback: PropTypes.func
    }

    static defaultProps = {
        activeIndex: -1,
        hideCat: false,
        clickCallback: null
    }

    constructor(props,context){
        super(props,context);
        this.state={
            catList:this.initCat(),
            activeCat:props.activeIndex,
            fixed: false
        };

        this.windowScrollHandle = this.windowScrollHandle.bind(this)
        this.containerOffsetTop = 0

        window.addEventListener('scroll', this.windowScrollHandle, false)
    }

    windowScrollHandle(){        
        if(document.body.scrollTop >= this.containerOffsetTop){
            if(!this.state.fixed) this.setState({fixed: true})
        }else{
            if(this.state.fixed) this.setState({fixed: false})
        }
    }

    componentDidMount(){
        this.containerOffsetTop = this.filterContainer.offsetTop
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.windowScrollHandle, false)
    }

    initCat(){
        let catList=React.Children.map(this.props.children,function(panel,index){
            //如果panel设置了selected属性的话直接读取selected属性；如果panel没有设置selected属性，则读取default用来展示在cat列表中
            let cat=panel.props.selected ? panel.props.selected:{
                key:'',
                value: panel.props.default ? panel.props.default:''
            };
            return cat
        })
        return catList
    }

    categoryChange(index,category,hasButtons){
        let catList = this.state.catList.slice(),
            {clickCallback} = this.props
        
        if(hasButtons) return
        
        catList[index] = category
        this.setState({
            catList,
            activeCat:-1
        })

        clickCallback && clickCallback(category.key)
    }

    activeCat(index){
        //展开某一个cat
        if(index==this.state.activeCat){
            index=-1;
        }
        this.setState({
            activeCat:index
        });
    }

    renderPanelList(){
        let self=this,
            {catList,activeCat}=self.state;
        return React.Children.map(this.props.children,function(panel,index){
            let show = (index==activeCat)
            
            if(self.props.hideCat&&index==0){
                show=true;
            }

            return  React.cloneElement(panel,{
                categoryChange: self.categoryChange.bind(self),
                selected: catList[index],
                panelIndex: index,
                show: show,
                choose: transToArray(self.props.choose),
                getChooseData: self.props.getChooseData
            })
        });
    }

    renderCatList(){
        if(this.props.hideCat){
            return null;
        }
        let self=this,
            {catList,activeCat}=self.state;

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

    hidePanel(){
        this.setState({
            activeCat: -1
        })
    }

    render(){
        return(
            <div className='ph-filter-occupy'>
                <div className={classnames(
                        'ph-filter-container', 
                        this.state.activeCat==-1? '':'ph-filter-container-shadow',
                        this.state.fixed? 'ph-filter-container-fixed':''
                    )}
                    ref={(filterContainer)=>{this.filterContainer = filterContainer}}
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
