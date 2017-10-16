import React, {PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'

/**
 * tab选项卡组件<br/>
 * - 通过heading设置选项卡的显示内容。
 * - 可通过clickCallback设置点击选项卡的回调函数。
 * - 可自定义className等常用属性以及事件。
 *
 * 具体属性和接口如下：
 * - heading:选项卡的显示内容, 默认'tab'
 * - clickCallback:点击事件的回调函数
 *
 * 示例:
 * ```code
 *     <Tabset index={this.state.index} tabCallback={(index)=>{console.log(index);}>
 *         <Tab heading='标题1' className='tab-test'>
 *             横向内容1
 *         </Tab>
 *         <Tab heading='标题2' clickCallback={(index)=>{console.log(index);}>
 *             横向内容2
 *         </Tab>
 *     </Tabset>
 * ```
 *
 * @class Tab
 * @module 选项卡
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo tab|tab.js{展示}
 * @show true
 * */

export default class Tab extends Component {
    static ProTypes = {
        /**
         * 选项卡的标题文字，默认为‘tab’
         * @property heading
         * @type String
         * @default 'tab'
         * */
        heading: PropTypes.string,
        /**
         * 点击事件的回调函数
         * @method clickCallback
         * @param {number} index 索引值
         * @type Function
         * @default null
         * */
        clickCallback: PropTypes.func
    };

    static defaultProps = {
        heading: 'tab',
        activeIndex:0,
        vertical:false,
        clickCallback: null,
        classPrefix:'tab',
        classMapping : {}
    };

    constructor(props,context){
        super(props,context);
    }

    handleClick(){
        this.props.changeActive(this.props.index);
        this.props.clickCallback && this.props.clickCallback(this.props.index);
    }

    isActive(){
        return this.props.index == this.props.activeIndex ? 'active':'';
    }

    isVertical(){
        return !!this.props.vertical ? '': this.setPhPrefix('col',true);
    }

    renderTab(){
        let {className} = this.props;
        return(
            <li {...this.otherProps} className={
                classnames(
                    this.isVertical(),
                    this.setPhPrefix('tab-nav',true),
                    this.isActive(),
                    className
                )
            } onClick={this.handleClick.bind(this)}>
                <a href='javascript:;'>{this.props.heading}</a>
            </li>
        )
    }

    render(){
        return this.renderTab()
    }
}