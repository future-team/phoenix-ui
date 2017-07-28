import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'

import Drag from '../drag/'

import '../style'
import 'phoenix-styles/less/modules/slider.less'

/**
 * 滑动输入条组件<br/>
 * - 滑动进度条确定当前进度的百分比。
 * - 可通过设置process确定初始进度百分比, 范围从0-100。
 * - 可通过tipMode选择当前查看进度的方式，可选default和tooltip。
 * - 可通过placement设置当前进度提示框的位置, 可选top/bottoom(tipMode为tooltip时生效)。
 * - 可通过tipStay设置初始和松开按钮时提示是否消失，默认false不显示(tipMode为tooltip时生效)。
 * - 可通过range制定范围，默认0-100，必需是长度为2的数组，第一个数字表示初始，第二个数字表示终点。
 * - 可通过showRange判断是否在进度条前后显示范围，默认不显示。
 * - 可通过duration设置固定移动的距离，默认1。
 * - 可通过slideCallback设置拖拽进度条松开时的回调函数。
 * - 可通过disabled设置进度条只读。
 * - 使用Slider前确保父级是有宽度的元素；使用flex需要加一层宽度100%的外壳。
 *
 * 主要属性和接口：
 * - process:初始进度百分比, 默认0 <br/>
 * 如: `<Slider progress={10}/>`
 * - placement:进度提示框的位置, 默认top <br/>
 * 如: `<Slider placement='bottom' />`
 * - tipStay:初始和松开按钮时提示是否消失，默认false <br/>
 * 如: `<Slider tipStay />`
 * - range:范围，默认[0,100]。 <br/>
 * 如: `<Slider range={[20,50]} />`
 * - showRange:是否在进度条前后显示范围，默认不显示。 <br/>
 * 如: `<Slider showRange />`
 * - duration:固定移动的距离，默认1。 <br/>
 * 如: `<Slider duration={20} />`
 * - slideCallback:拖拽进度条松开时的回调函数 <br/>
 * 如: `<Slider slideCallback={(progress)=>{console.log(progress);} />`
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
         * 范围，默认0-100，可传固定范围的数组如：[25,50]
         * @property range
         * @type Array
         * @default [0,100]
         * */
        range: PropTypes.array,
        /**
         * 是否在进度条前后显示范围
         * @property showRange
         * @type Boolean
         * @default false
         * */
        showRange: PropTypes.bool,
        /**
         * 显示提示的模式，可选[default,tooltip]
         * @property tipMode
         * @type String
         * @default 'default'
         * */
        tipMode: PropTypes.string,
         /**
         * 每次移动的固定距离，默认1
         * @property duration
         * @type Number
         * @default 1
         * */
        duration: PropTypes.number,
        /**
         * 初始及松开按钮时是否显示tooltip
         * @property tipStay
         * @type Boolean
         * @default false
         * */
        tipStay: PropTypes.bool,
        /**
         * 改变进程时的回调函数
         * @method slideCallback
         * @type Function
         * */
        slideCallback: PropTypes.func
    };

    static defaultProps = {
        placement: 'top',
        progress: 0,
        range: [0,100],
        showRange: false,
        duration: 1,
        tipMode: 'default',
        tipStay: false,
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
        
        this.range = this.validateRange();
        this.rangeDiff = this.range[1]-this.range[0];

        this.duration = this.validateDuration();
        this.eachDur = (this.range[1]-this.range[0])/this.duration;
        
        this.state = {
            realProgress: props.progress || this.range[0],
            tipVisible: props.tipStay || false
        }
        
    }

    validateRange(){
        let {range} = this.props, defaultRange = [0,100];
        if(!range instanceof Array) return defaultRange;
        if(range.length != 2){
            console.error('Invalid prop `range` of length not equal to 2.');
            return defaultRange;
        } 
        if(range[0] >= range[1]){
            console.error('Invalid prop `range[0]` must be less than or equal to `range[1]`.');
            return defaultRange;
        } 
        return range;
    }

    validateDuration(){
        let {duration} = this.props, defaultDuration = 1;
        if(duration<=0) {
            console.error('Invalid prop `duration` have to be Positive.');
            return defaultDuration;
        }
        if((this.range[1] - this.range[0])%duration != 0){ // 不能整除的情况
            console.error('Prop `duration` can not be divided by `range`.');
            return defaultDuration;
        }
        return duration;
    }

    componentDidMount(){
        this.sliderLength = parseInt(this.sliderLine.offsetWidth);
        this.eachSection = this.sliderLength/this.rangeDiff*this.duration;
        // if(this.eachSection<1) this.eachSection = 1; // 最小1px

        this.newProgressWidth = this.getNewProgressWidth(this.state.realProgress);
        this.setSliderPosition(this.newProgressWidth + 'px');
    }

    componentWillReceiveProps(nextProps){
        if(this.state.realProgress != nextProps.progress){
            this.setState({
                realProgress: nextProps.progress
            });

            this.newProgressWidth = this.getNewProgressWidth(nextProps.progress);
            this.setSliderPosition(this.newProgressWidth + 'px');
        }
    }

    getNewProgressWidth(realProgress){ // 保留2位小数
        return this.sliderLength * (Math.round((realProgress-this.range[0])/this.rangeDiff*100)/100);
    }

    setSliderPosition(distance){
        this.sliderProgress.style.width = distance;
        this.sliderBtn.style.left = distance;
    }

    dragCallback(event, position){
        let newProgress, nowSec;

        this.preX = position.start.x;
        this.X = position.move.x;
        this.distance = this.X - this.preX;

        this.prevProgressWidth = this.newProgressWidth + this.distance;

        if(this.prevProgressWidth <= 0) this.prevProgressWidth = 0;
        if(this.prevProgressWidth >= this.sliderLength) this.prevProgressWidth = this.sliderLength;

        nowSec = Math.round(this.prevProgressWidth/this.eachSection, 0);
        this.prevProgressWidth = this.eachSection*nowSec;

        newProgress = this.prevProgressWidth/this.sliderLength * this.rangeDiff + this.range[0];

        this.setSliderPosition(this.prevProgressWidth + 'px');

        this.setState({
            tipVisible: true,
            realProgress: parseInt(newProgress)
        });
    }

    dropCallback(event, position){
        let {tipStay, slideCallback} = this.props
        if(!tipStay){
            this.setState({
                tipVisible: false
            });
        }

        this.newProgressWidth = this.prevProgressWidth;

        if(slideCallback) slideCallback(this.state.realProgress);
    }

    renderSliderText(showTipMode){
        if(showTipMode){
            return <div className={this.setPhPrefix('text')}>{this.state.realProgress}</div>
        }        
    }

    renderSliderRange(){
        if(this.props.showRange){
            return (
                <div className={this.setPhPrefix('range')}>
                    <strong className={this.setPhPrefix('range-start')}>{this.range[0]}</strong>
                    <strong className={this.setPhPrefix('range-end')}>{this.range[1]}</strong>
                </div>
            );
        }else{
            return '';
        }
    }

    renderSlider(){
        let {componentTag:Component, className, showRange, tipMode} = this.props,
            showTipMode = tipMode=='default';

        return (
            <Component {...this.otherProps} className={classnames(
                this.getProperty(true),
                className,
                showRange? this.setPhPrefix('keep-range',true):''
            )}>
                {this.renderSliderText(showTipMode)}
                {this.renderSliderRange()}
                <div className={this.setPhPrefix('line')} ref={(sliderLine)=>{this.sliderLine=sliderLine}}>
                    <div className={this.setPhPrefix('progress')} ref={(sliderProgress)=>{this.sliderProgress=sliderProgress}}></div>
                    <div className={this.setPhPrefix('content')} ref={(sliderBtn)=>{this.sliderBtn=sliderBtn}}>
                        <div className={classnames(this.setPhPrefix('tip'), this.state.tipVisible && !showTipMode?'show':'hide')}>{this.state.realProgress}</div>
                        <Drag className={classnames(this.setPhPrefix('btn'),'hardware')} dragCallback={this.dragCallback.bind(this)} dropCallback={this.dropCallback.bind(this)}></Drag>
                    </div>
                </div>
            </Component>
        );
    }

    render(){
        return this.renderSlider()
    }

}