import React, {PropTypes,Component} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import ReactDom from 'react/lib/ReactDOM';
/**
 * tab选项卡组件
 * - 标签内容为heading属性，children部分为对应要显示的内容<br/>
 * - 此外支持自定义类名,事件等操作<br/>
 * 具体属性和接口如下：
 * <ul>
 *     <li>heading; 标签卡的显示内容，默认‘tab’ 。
 *         虽然有默认值但是这应该是必填的。</li>
 *       <li>
 *         例如:
 *          <code>
 *            Tabset activeIndex ={0} width={30}
 *               Tab heading='tab1' className='测试'>hahadhdad1
 *               /Tab
 *            /Tabset
 *          </code>
 *       </li>
 *       <li>clickCallback: 点击事件的回调函数，默认为null</li>
 * </ul>
 * @class Tab
 * @module Tab(选项卡)
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo Tab.js{展示}
 * @demo Tab.js{js}
 * @show true
 * */
@ClassNameMixin
export default class Tab extends Component {
    static ProTypes = {
        /**
         * 选项卡的标题文字，默认为‘tab’
         * 但是这个应该是必填的，一个tab显示出来也没意思啦
         * @property heading
         * @default 'tab'
         * */
        heading: PropTypes.string,
        /**
         * 点击事件的回调函数
         * @property clickCallback
         * @default null
         * */
        clickCallback: PropTypes.func
    }
    constructor(props,context){
        super(props,context);
    }
    static defaultProps = {
        heading: 'tab',
        activeIndex:0,
        vertical:false,
        clickCallback: null
    };
    handleClick(){
        this.props.changeActive(this.props.index);
        this.props.clickCallback && this.props.clickCallback();
    }
    isActive(){
        return this.props.index == this.props.activeIndex ? 'active':'';
    }
    isVertical(){
        return !!this.props.vertical ? '':'col';
    }
    render(){
        let {className,onClick,...other} = this.props;
        return(
            <li className={
                classnames(
                   this.isVertical(),
                   'tab-nav',
                   this.isActive(),
                   className
                )
            } onClick={::this.handleClick} {...other}>
                {this.props.heading}
            </li>
        )
    }
}