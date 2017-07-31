import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'
import Tab from './Tab.js'

import '../style'
import 'phoenix-styles/less/modules/tab.less'

/**
 * <h5>tab选项卡，主要包括一下两个组件:</h5>
 * <strong><a href='../classes/Tabset.html'>tabset</a></strong><br/>
 * <strong><a href='../classes/Tab.html'>tab</a></strong><br>
 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
 * @module 选项卡
 * @main 选项卡
 * @static
 *
 */
/**
 * tabset选项卡组件<br/>
 * - 通过index指定默认的选中tab的索引值。
 * - 选项卡默认横排, 可通过vertical设置为竖排。
 * - 当设置为vertical后, 可通过width设置tab标题部分的宽度占比。
 * - 可通过clickCallback设置点击选项卡的回调函数。
 * - 可自定义className等常用属性以及事件。
 *
 * 具体属性和接口如下：
 * - index:默认选中的标签卡索引值，默认0第一个tab
 * - vertical:是否竖排，如需要直接添加改属性即可，默认不竖排
 * - width:选项卡头部的宽度，取值0-100之间, 只有设置vertical下生效, 默认20
 * - clickCallback:点击选项卡执行的回调函数
 *
 * 示例:
 * - 横排
 * ```code
 *     <Tabset index={this.state.index} clickCallback={(index)=>{console.log(index);}>
 *         <Tab heading='标题1' className='tab-test'>
 *             横向内容1
 *         </Tab>
 *         <Tab heading='标题2' clickCallback={(index)=>{console.log(index);}>
 *             横向内容2
 *         </Tab>
 *     </Tabset>
 * ```
 * - 竖排
 * ```code
 *     <Tabset vertical width={30} index={this.state.index} clickCallback={(index)=>{console.log(index);}>
 *         <Tab heading='标题1'>
 *             竖向内容1
 *         </Tab>
 *         <Tab heading='标题2' clickCallback={(index)=>{console.log(index);}>
 *             竖向内容2
 *         </Tab>
 *     </Tabset>
 * ```
 *
 * @class Tabset
 * @module 选项卡
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo tab|tab.js{展示}
 * @show true
 * */

export default class Tabset extends Component {

    static propTypes={
        /**
         * 指定默认选中的选项卡，默认为0
         * @property index
         * @type Number
         * @default 0
         * */
        index:PropTypes.number,
        /**
         * 是否竖排
         * @property vertical
         * @type Boolean
         * @default false || null
         * */
        vertical: PropTypes.bool,
        /**
         * 设置选项卡头部的宽度，只有竖排的情况下才起作用
         * @property width
         * @type Number
         * @default '20'
         * */
        width: PropTypes.number,
        /**
         * 点击事件的回调函数,返回当前选中项
         * @method clickCallback
         * @type Function
         * @default null
         * */
        clickCallback: PropTypes.func
    };

    static defaultProps = {
        index: 0,
        vertical: false,
        width: 33,
        clickCallback: null,
        classPrefix:'tabs',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            activeIndex: this.props.index
        };
    }

    componentWillReceiveProps(nextProps){
        this.state.activeIndex != nextProps.index && this.changeActive(nextProps.index);
    }

    isVertial() {
        return !!this.props.vertical ? this.setPhPrefix('tabs-vertical',true)+' '+this.setPhPrefix('row',true) : '';
    }

    isActive(index) {
        return index == this.state.activeIndex ? 'active' : '';
    }

    changeActive(index) {
        if (index != this.state.activeIndex) {
            this.setState({
                activeIndex: index
            })
        }
        this.tabHandler(index);
    }

    getClass(flag) {
        let vertical = this.props.vertical;
        if(flag){
            let cols = this.setPhPrefix('col-'+this.props.width, true);
            return !vertical ? this.setPhPrefix('row',true): this.setPhPrefix('col',true)+' '+cols;
        }else{
            return vertical ? this.setPhPrefix('col',true): '';
        }

    }

    tabHandler(index){
        let {clickCallback} =this.props;
        clickCallback && clickCallback(index);
    }

    renderTabset(){
        let panels = [],
            {className} = this.props

        let headings = React.Children.map(this.props.children, (options, index)=> {
            let { vertical } = options.props;
            let opt = React.cloneElement(options, {
                key:index,
                index: index,
                activeIndex: this.state.activeIndex,
                changeActive: this.changeActive.bind(this),
                vertical: this.props.vertical
            });

            let panel = <div className={classnames(
                    this.setPhPrefix('tab-panel',true),
                   this.isActive(index),
                   options.props.className
                )} key={index}>
                {options.props.children}
            </div>;
            panels.push(panel);
            return opt;
        }, this);

        return (
            <div {...this.otherProps} className={classnames(
                this.setPhPrefix('tabs',true),
                this.isVertial(),
                className
            )}>
                <ul className={classnames(this.getClass(true), this.setPhPrefix('tab-navs',true))}>
                    {headings}
                </ul>
                <div className={classnames(
                    this.getClass(false),
                    this.setPhPrefix('tab-bd', true)
                )}>
                    {panels}
                </div>
            </div>
        )
    }

    render() {
        return this.renderTabset()
    }
}