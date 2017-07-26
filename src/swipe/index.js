import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'

import Drag from '../drag/'
import Button from '../button/'

import '../style'
import 'phoenix-styles/less/modules/swipe.less'

/**
 * 左滑组件<br/>
 * - 向左滑动出现可操作按钮, 类似IOS列表操作的组件。
 * - 通过buttons设置可操作按钮的文字text、样式phStyle以及点击按钮的回调函数onHandle。
 * - buttons的phStyle默认'primary', 可选primary、info、error、warning、danger、link、gray、success。
 *
 * 示例:
 * ```code
 *     <Swipe buttons={[
 *         {text: '删除', onHandle: this.onDelete, phStyle: 'error'},
 *         {text: '取消', onHandle: this.onCancle, phStyle: 'info'}
 *     ]}>
 *         <div style={{padding: '1rem'}}>
 *             // 内容
 *         </div>
 *     </Swipe>
 * ```
 *
 * @class Swipe
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 0.3.0
 * @demo swipe|swipe.js {展示}
 * @show true
 * */

export default class Swipe extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'swipe'
         * */
        classPrefix: PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag:PropTypes.string,
        /**
         * 按钮组
         * @property buttons
         * @type Array
         * */
        buttons: PropTypes.array
    };

    static defaultProps = {
        buttons: [],
        classPrefix:'swipe',
        componentTag:'div',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);

        this.btnsWidth = 0
        this.translateX = -1
        this.preTranslateX = -1
        this.isBtnsShow = false
    }

    renderButtons(){
        let {buttons} = this.props

        return (
            <div className={this.setPhPrefix('btns')} key='buttons' ref={(buttons)=>{this.buttons = buttons;}}>
                {
                    buttons.map((button,index) => {
                        return <Button key={index} {...button.otherProps} phStyle={button.phStyle || 'primary'} 
                                onClick={()=>{
                                    if(button.onHandle) button.onHandle()
                                    this.setSwipeBack()
                                }}>{button.text}</Button>
                    })
                }
            </div>
        );
    }

    setSwipeBack(){
        this.swipeElem.style.transform = 'translateX(0)';
    }

    componentDidMount(){ // 获取btns的宽度
        setTimeout(()=>{
            this.btnsWidth = this.buttons.offsetWidth
            this.swipeElem = this.dragElem.dragAction
        }, 0)        
    }

    dragCallback(event, position){ // position.start position.move
        if(!this.btnsWidth) return 

        let target = event.currentTarget;
        this.translateX = position.move.x - position.start.x + this.preTranslateX;

        if(position.move.x < position.start.x){
            this.isBtnsShow = true;
        }else{
            this.isBtnsShow = false;
        }

        if(this.translateX >= 0) this.translateX = 0;
        if(this.translateX <= - this.btnsWidth) this.translateX = - this.btnsWidth;

        target.style.transform = 'translateX('+ this.translateX +'px)';
    }

    dropCallback(event, position){ // position.end
        if(!this.btnsWidth) return 

        let target = event.currentTarget;

        if(Math.abs(this.translateX) < 10){ // 微弱操作保持不变
            this.isBtnsShow = !this.isBtnsShow;

            if(this.isBtnsShow){
                this.translateX = 0;
            }else{
                this.translateX = - this.btnsWidth;
            }
        }else{
            if(this.isBtnsShow){
                this.translateX = - this.btnsWidth;
            }else{
                this.translateX = 0;
            }
        }
        // console.log(this.isBtnsShow);

        this.preTranslateX = this.translateX;
        target.style.transform = 'translateX('+ this.translateX +'px)'
    }

    renderSwipe(){
        let {componentTag:Component, className, style, children} = this.props
        
        return (
            <Component {...this.otherProps} className={classnames(
                this.getProperty(true),
                className
            )} style={this.getStyles(style)}>
                <Drag className={this.setPhPrefix('content')} dragCallback={this.dragCallback.bind(this)} dropCallback={this.dropCallback.bind(this)} 
                    ref={(drag)=>{this.dragElem = drag}}>
                    {children}
                </Drag>
                {this.renderButtons()}
            </Component>
        );
    }

    render(){
        return this.renderSwipe()
    }

}