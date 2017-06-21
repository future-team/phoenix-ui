import React, { Component ,PropTypes} from 'react'
import classnames from 'classnames'
import {transToArray} from '../../utils/Tool'

export default class FilterContainer extends Component{
    static propTypes= {
        /**
         * 用户选择了某一项item之后触发的回调函数
         * @method onChange
         * @type Function
         * */
        onChange:PropTypes.func,
        /**
         * 默认展开筛选的索引，默认－1，即都不展开
         * @property activeIndex
         * @type Number
         * */
        activeIndex: PropTypes.number,
        /**
         * 是否隐藏头部
         * @property hideCat
         * @type Boolean
         * */
        hideCat: PropTypes.bool
    }

    static defaultProps = {
        activeIndex: -1,
        choose: []
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

    categoryChange(index,category){
        var catList=this.state.catList.slice();
        catList[index]=category;
        this.setState({
            catList,
            activeCat:-1
        });
        this.props.onChange&&this.props.onChange(category.key);
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
            let show=(index==activeCat);
            if(self.props.hideCat&&index==0){
                show=true;
            }
            return  React.cloneElement(panel,{
                categoryChange:self.categoryChange.bind(self),
                selected:catList[index],
                panelIndex:index,
                show:show,
                choose:transToArray(self.props.choose),
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
                    <a href="javascript:;">
                        <span className="ph-filter-header-text">{catList[index].value}</span>
                        <span className="gfs-icon icon-expand-more"></span>
                    </a>
                </li>
            )
        });
    }

    hidePanel(){
        this.setState({
            activeCat: -1
        })
    }

    render(){
        return(
            <div className={classnames(
                    'ph-filter-container', 
                    this.state.activeCat==-1? '':'ph-filter-container-shadow',
                    this.state.fixed? 'ph-filter-container-fixed':''
                )}
                ref={(filterContainer)=>{this.filterContainer = filterContainer}}
            >
                <div className='ph-filter-shadow' onClick={this.hidePanel.bind(this)}></div>
                <ul className="cat ph-row ph-filter-header" >
                    {this.renderCatList()}
                </ul>
                {this.renderPanelList()}
            </div>
        );
    }
}
//如果设置了hideCat并且只有一个panel，则该panel一直会显示