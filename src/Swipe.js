import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

import Drag from './Drag';
import Button from './Button';

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

        this.state = {
            translateX: -1,
            preTranslateX : -1,
            btnsWidth: 0,
            isBtnsShow: false,
            OPE_RANGE: 10
        }
    }

    renderOperationButton(buttons){
        let buttonsDom = [];

        if(buttons.length!=0) buttonsDom.push(this.renderButtonByType(buttons));

        return buttonsDom;
    }

    renderButtonByType(btnInfo){
        return (
            <div className={setPhoenixPrefix("swipe-btns")} key='buttons' ref={(buttons)=>{this.buttons = buttons;}}>
                {
                    btnInfo.map((item,index) => {
                        return <Button key={index} phStyle={item.phStyle || 'primary'}>{item.text}</Button>
                    })
                }
            </div>
        );
    }

    componentDidMount(){ // 获取btns的宽度
        if(this.buttons) this.state.btnsWidth = this.buttons.offsetWidth;
    }

    onDrag(event, position){ // position.start position.move
        let target = event.currentTarget;
        this.state.translateX = position.move.x - position.start.x + this.state.preTranslateX;

        if(position.move.x < position.start.x){
            this.state.isBtnsShow = true;
        }else{
            this.state.isBtnsShow = false;
        }

        if(this.state.translateX >= 0) this.state.translateX = 0;
        if(this.state.translateX <= - this.state.btnsWidth) this.state.translateX = - this.state.btnsWidth;

        target.style.transform = 'translateX('+ this.state.translateX +'px)';
    }

    onDrop(event, position){ // position.end
        let target = event.currentTarget;

        if(Math.abs(this.state.translateX) < 10){ // 微弱操作保持不变
            this.state.isBtnsShow = !this.state.isBtnsShow;

            if(this.state.isBtnsShow){
                this.state.translateX = 0;
            }else{
                this.state.translateX = - this.state.btnsWidth;
            }
        }else{
            if(this.state.isBtnsShow){
                this.state.translateX = - this.state.btnsWidth;
            }else{
                this.state.translateX = 0;
            }
        }
        // console.log(this.state.isBtnsShow);

        this.state.preTranslateX = this.state.translateX;
        target.style.transform = 'translateX('+ this.state.translateX +'px)';
    }

    render(){
        let {componentTag:Component, buttons, className} = this.props;

        return (
            <Component className={classnames(
                this.getProperty(true),
                className
            )} style={this.getStyles(this.props.style)}>
                <Drag className={setPhoenixPrefix("swipe-content")} onDrag={::this.onDrag} onDrop={::this.onDrop}>
                    {this.props.children}
                </Drag>
                {this.renderOperationButton(buttons)}
            </Component>
        );
    }

}