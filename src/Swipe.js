import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

import Drag from './Drag';
import Button from './Button';

/**
 * 功能组件-左滑swipe
 * @class Swipe
 * @module Action
 * @extends Component
 * @constructor
 * @demo swipe.js {展示}
 * @demo swipe.js {源码}
 * @show true
 * */
export default class Swipe extends Component{

    static propTypes = {
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag:PropTypes.string
    };

    static defaultProps = {
        buttons: [],
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
            <div className={`swipe-btns`} key='buttons' ref={(buttons)=>{this.buttons = buttons;}}>
                {
                    btnInfo.map((item,index) => {
                        return <Button key={index} phStyle={item.phStyle}>{item.text}</Button>
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
                'swipe-action',
                className
            )} style={this.getStyles(this.props.style)}>
                <Drag className="swipe-content" onDrag={::this.onDrag} onDrop={::this.onDrop}>
                    {this.props.children}
                </Drag>
                {this.renderOperationButton(buttons)}
            </Component>
        );
    }

}