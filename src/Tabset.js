import React,{PropTypes, Component} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Tab from './Tab.js';
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
 * tabset选项卡组件
 * - 可以指定当前actie选项。
 * - 支持选项卡横排，竖排两种情况。
 * - 此外支持自定义类名,事件等操作
 * 具体属性和接口如下：
 * <ul>
 *     <li>activeIndex; 当前选中标签卡，默认0</li>
 *     <li>vertiacl; 是否竖排，如需要直接添加改属性即可，默认不竖排</li>
 *     <li>width; 选项卡头部的宽度，取值0-100之间 即class＝‘col－20’，取值即可，注只有在竖排的情况下生效，
 *          也就是没有vertical属性，设置width也没用的，默认20
 *          例如横排情况:
 *     </li>
 *     <li>
 *          <code>
 *             Tabset activeIndex ={0} width={30}
 *               Tab heading='tab1' className='测试'>hahadhdad1
 *               /Tab
 *            /Tabset
 *          </code>
 *         上面的width是不起作用的
 *        竖排情况:
 *          <code>
 *              Tabset activeIndex ={0} vertical width={30}
 *          </code>
 *         此时表明默认选中第一个选项卡，并且竖排标签部分width为30%
 *
 *          </li>
 *
 * </ul>
 * @class Tabset
 * @module 选项卡
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo Tab.js{展示}
 * @demo Tab.js{源码}
 * @show true
 * */
@ClassNameMixin
export default
class Tabset extends Component {

    static propTypes={
        /**
         * 指定默认选中的选项卡，默认为0
         * @property activeIndex
         * @default 0
         * */
        activeIndex:PropTypes.number,
        /**
         * 是否竖排
         * @property vertical
         * @default false || null
         * */
        vertical: PropTypes.bool,
        /**
         * 设置选项卡头部的宽度，只有竖排的情况下才起作用
         * @property width
         * @default '20'
         * */
        width: PropTypes.number,
        /**
         * 点击事件的回调函数,返回当前选中项
         * @property tabCallback
         * @default null
         * */
        tabCallback: PropTypes.func
    }
    static defaultProps = {
        activeIndex: 0,
        vertical: false,
        width: 20,
        tabCallback: null
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            activeIndex: this.props.activeIndex
        };
        /**
         * 首次进入获取active
         * */
        this.props.tabCallback && this.props.tabCallback(this.props.activeIndex);
    }
    /**
     * props再次改变，再次判断active
     * */
    componentWillReceiveProps(nextProps){
        this.state.activeIndex != nextProps.activeIndex && this.changeActive(nextProps.activeIndex);
    }
    isVertial() {
        return !!this.props.vertical ? 'vertical row' : '';
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
            let cols = 'col-'+this.props.width;
            return !vertical ? 'row': 'col '+cols;
        }else{
            return vertical ? 'col': '';
        }

    }
    /**
     * tab handler
     * */
    tabHandler(index){
        let {tabCallback} =this.props;
        tabCallback && tabCallback(index);
    }

    render() {
        let panels = [];
        let {className,...other} = this.props;
        let headings = React.Children.map(this.props.children, (options, index)=> {
            let { vertical,...other} = options.props;
            let opt = React.cloneElement(options, {
                key:index,
                index: index,
                activeIndex: this.state.activeIndex,
                changeActive: this.changeActive.bind(this),
                vertical: this.props.vertical
            });

            let panel = <div className={classnames(
                   'tab-panel',
                   this.isActive(index),
                   options.props.className
                )} key={index}>
                {options.props.children}
            </div>;
            panels.push(panel);
            return opt;
        }, this);
        return (
            <div className={classnames(
               'ui-tabs',
               this.isVertial(),
               className
            )}  {...other}>
                <ul className={this.getClass(true)}>
                    {headings}
                </ul>
                <div className={classnames(
                    this.getClass(false),
                    'tab-bd'
                )}>
                    {panels}
                </div>
            </div>)
    }
}