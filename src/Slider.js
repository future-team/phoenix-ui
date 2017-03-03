import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

import Drag from './Drag';

/**
 * 滑动输入条组件<br/>
 * - 滑动进度条确定当前进度的百分比。
 * - 可通过设置process确定初始进度百分比, 范围从0-100。
 * - 可通过placement设置当前进度提示框的位置, 可选top/bottoom。
 * - 可通过onChange设置拖拽进度条松开时的回调函数。
 * - 可通过disabled设置进度条只读。
 *
 * 主要属性和接口：
 * - process:初始进度百分比, 默认0 <br/>
 * 如: `<Slider progress={10}/>`
 * - placement:进度提示框的位置, 默认top <br/>
 * 如: `<Slider placement="bottom" />`
 * - onChange:拖拽进度条松开时的回调函数 <br/>
 * 如: `<Slider onChange={(progress)=>{console.log(progress);} />`
 * - disabled:进度条只读, 不可操作 <br/>
 * 如: `<Slider disabled/>`
 *
 * @class Slider
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 1.0.0
 * @demo slider|slider.js {展示}
 * @show true
 * */

export default class Slider extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'slider'
         * */
        classPrefix: PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag:PropTypes.string,
        /**
         * 初始进程,默认0
         * @property progress
         * @type String
         * */
        progress:PropTypes.number,
        /**
         * 进程提示的位置,默认top
         * @property placement
         * @type String
         * @default 'top'
         * */
        placement: PropTypes.string,
        /**
         * 改变进程时的回调函数
         * @method onChange
         * @type Function
         * */
        onChange: PropTypes.func
    };

    static defaultProps = {
        placement: 'top',
        progress: 0,
        classPrefix:'slider',
        componentTag:'div',
        classMapping : {
            'disabled': 'disabled',
            'top': 'tip-top',
            'bottom': 'tip-bottom'
        }
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            newProgress: props.progress,
            tipVisible: false
        }
    }

    componentDidMount(){
        this.sliderLength = parseInt(this.sliderLine.offsetWidth);
        this.newProgressWidth = this.sliderLength * this.props.progress / 100;

        this.setSliderPosition(this.newProgressWidth + 'px');
    }

    setSliderPosition(distance){
        this.sliderProgress.style.width = distance;
        this.sliderBtn.style.left = distance;
    }

    onDrag(event, position){
        this.preX = position.start.x;
        this.X = position.move.x;
        this.distance = this.X - this.preX;

        this.prevProgressWidth = this.newProgressWidth + this.distance;

        if(this.newProgressWidth + this.distance <= 0) this.prevProgressWidth = 0;
        if(this.newProgressWidth + this.distance >= this.sliderLength) this.prevProgressWidth = this.sliderLength;

        this.setSliderPosition(this.prevProgressWidth + 'px');

        this.setState({
            tipVisible: true,
            newProgress: parseInt(this.prevProgressWidth/this.sliderLength * 100)
        });
    }

    onDrop(event, position){
        this.setState({
            tipVisible: false
        });

        this.newProgressWidth = this.prevProgressWidth;

        if(this.props.onChange) this.props.onChange(this.state.newProgress);
    }

    render(){
        let {componentTag:Component, className} = this.props;

        return (
            <Component {...this.props} className={classnames(
                this.getProperty(true),
                className
            )}>
                <div className={setPhoenixPrefix("slider-line")} ref={(sliderLine)=>{this.sliderLine=sliderLine}}>
                    <div className={setPhoenixPrefix("slider-progress")} ref={(sliderProgress)=>{this.sliderProgress=sliderProgress}}></div>
                    <div className={setPhoenixPrefix("slider-content")} ref={(sliderBtn)=>{this.sliderBtn=sliderBtn}}>
                        <div className={classnames(setPhoenixPrefix("slider-tip"), this.state.tipVisible?'show':'hide')}>{this.state.newProgress}</div>
                        <Drag className={setPhoenixPrefix("slider-btn")} onDrag={::this.onDrag} onDrop={::this.onDrop}></Drag>
                    </div>
                </div>
            </Component>
        );
    }

}