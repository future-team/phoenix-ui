import React,{PropTypes} from 'react'
import ReactDOM,{findDOMNode} from 'react/lib/ReactDOM'
import Component from '../utils/Component'
import classnames from 'classnames'
import {setPhPrefix} from '../utils/Tool'

import './steps.less'

/**
 * 步骤组件<br/>
 * - 通过list设置步骤过程名称数组，如["合作信息","公司信息","资质信息"]，必需。
 * - 可通过currentStep设置当前步骤，从0开始计算。
 * - 可通过clickCallback设置点击步骤的回调，函数返回步骤名称和索引。
 * - 可通过readOnly设置步骤是否只读不可点击，默认可点击。
 * 
 * 主要属性和接口：
 * - list:初始进度百分比, 默认0。 <br/>
 * 如: `<Steps list={["合作信息","公司信息","资质信息"]} />`
 * - currentStep:当前步骤，从0开始计算，默认0。 <br/>
 * 如: `<Steps currentStep={1} list={["合作信息","公司信息","资质信息"]} />`
 * - clickCallback:点击步骤的回调，函数返回步骤名称和索引。 <br/>
 * 如: `<Steps clickCallback={(str,index)=>{console.log(index);}} list={["合作信息","公司信息","资质信息"]}/>`
 * - readOnly:只读不可点击，默认false。<br/>
 * 如: `<Steps readOnly list={["合作信息","公司信息","资质信息"]} />`
 *
 * @class Steps
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 1.7.0
 * @demo steps|steps.js {展示}
 * @show true
 * */

export default class Steps extends Component{
    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'badge'
         * */
        classPrefix: PropTypes.string,
        /**
         * 是否为只读模式（只读模式不会触发点击回调），默认为false
         * @property readOnly
         * @type Boolean
         * @default false
         **/
        readOnly: PropTypes.bool,
        /**
         * steps内容数组，把每一步的文案放入数组中作为list的值
         * @property list
         * @type Array
         * @default []
         **/
        list: PropTypes.arrayOf(PropTypes.string),
        /**
         * 当前处于第几步，默认为0，也就是说所有的步骤都没有开始，如果到第一步的话将currentStep设置为1即可，注意currentStep不可以超过list数组长度
         * @property currentStep
         * @type Number
         * @default 0
         **/
        currentStep: PropTypes.number,
        /**
         * 点击每一步的回调，function(str,index){} str为步骤名称，index为第几步（从1开始计数）
         * @method clickCallback
         * @type Function
         * @default null
         **/
        clickCallback: PropTypes.func
    };

    static defaultProps = {
        readOnly: false,
        list: [],
        currentStep: 0,
        classPrefix:'steps',
        classMapping : {}
    };

    constructor(props,context){
        super(props,context);

        this.state = {
            currentStep: props.currentStep
        }
    }

    componentWillReceiveProps(nextProps){
         if(this.state.currentStep != nextProps.currentStep) this.setState({currentStep: nextProps.currentStep});
    }

    clickCallback(str, index, e){
        let {readOnly, clickCallback} = this.props, thisElemnt = e.currentTarget;
        if(readOnly) return;

        this.setState({
            currentStep: index
        });

        if(clickCallback) clickCallback(str,index);
    }

    renderLine(){
        let {list} = this.props,
            listLen = list.length;

        return (
            <div className="ph-steps-line">
                <div className="ph-steps-progress" style={{width:this.state.currentStep*(1/(listLen-1))*100+'%'}}></div>
            </div>
        )
    }

    renderSteps(){
        let {list} = this.props;
        let _this = this, listLen = list.length;

        return (
            <ul className={setPhPrefix('steps-content')}>
                {
                    list.map((item, index)=>{
                        return (
                            <li key={index} className={classnames(setPhPrefix('steps-list'), index==this.state.currentStep? 'active':index<this.state.currentStep? 'done':'')}
                                style={{left: index/(listLen-1)*100+'%' }}
                                onClick={_this.clickCallback.bind(_this,item,index)}
                            >
                                <span className={setPhPrefix('steps-dot')}></span>
                                <p>{item}</p>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }

    render(){
        return(
            <div className={classnames(this.getProperty(true),this.props.className)}>
                {this.renderLine()}
                {this.renderSteps()}
           </div>
        )
    }
}