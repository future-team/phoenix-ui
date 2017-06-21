import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';
import Icon from './Icon'

/**
 * input框组件<br/>
 * - 使用方式跟原生一致, 支持disabled。
 * - 通过type设置input的类型, 可选text,checkbox,radio,search,password。
 * - 当类型为text时, 可通过defaultValue设置默认值; 可通过value和onChange事件配合使用手动设置输入值。
 * - 当类型为checkbox&radio时, 可通过label设置展示的文字。
 * - 当类型为checkbox&radio时, 可通过defaultChecked设置默认值; 可通过checked和onChange事件配合使用手动设置输入值。
 * - 可通过getValueCallback获取当前元素的value值，仅适用于text、search。
 *
 * 主要属性和接口：
 * - type:input类型, 默认text <br/>
 * 如：`<Input type="checkbox" />`
 * - defaultValue:默认值(text) <br/>
 * 如：`<Input type="text" defaultValue="测试" />`
 * - value&onChange:(text)<br/>
 * 如：`<Input type="text" value={this.state.value} onChange={()=>{this.setState({value:"测试"})}} />`
 * - label:展示的文字信息(checkbox&radio), 默认空<br/>
 * 如：`<Input type="checkbox" label="测试" />`
 * - defaultChecked:默认值(checkbox&radio)<br/>
 * 如：`<Input type="checkbox" defaultChecked={true} />`
 * - checked&onChange:(checkbox&radio)<br/>
 * 如：`<Input type="checkbox" checked={this.state.checked} onChange={()=>{this.setState({checked:false})}} />`
 * - getValueCallback: 获取当前input的value。<br/>
 * 如：`<Input type="text" ref={(inputElem)=>{this.inputElem=inputElem}} />`<br/>
 * `this.inputElem.getValueCallback();`
 *
 * @class Input
 * @module 表单组件
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo input|input.js {展示}
 * @show true
 * */

export default class Input extends Component{

    static propTypes = {
        /**
         * input类型, 可选[text,checkbox,radio,search,password], 默认text
         * @property type
         * @type String
         * @default 'text'
         * */
        type: PropTypes.string,
        /**
         * 类型为checkbox&radio时, 展示的文字信息
         * @property label
         * @type String
         * @default ''
         * */
        label: PropTypes.string,
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'input'
         * */
        classPrefix:PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag:PropTypes.string,
        /**
         * 更改值时触发的回调
         * @event onChange
         * @type Function
         * */
        onChange: PropTypes.func,
        /**
         * 是否显示[清除已经输入的内容按钮]，仅适用于text,search,password的类型
         * @property clear
         * @type Boolean
         * */
        clear: PropTypes.bool,
        /**
         * 是否显示[密码是否可见按钮]，仅适用于password的类型
         * @property seePassword
         * @type Boolean
         * */
        seePassword: PropTypes.bool
    };

    static defaultProps = {
        type: 'text',
        clear: false,
        seePassword: false,
        phIcon: '',
        classPrefix:'input',
        componentTag:'div',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);

        this.setMethod('getValueCallback',this.getValue.bind(this))

        this.seeIcon = ['camera-fill','camera']

        this.state = {
            type: props.type,
            see: 0,
            focus: false,
            value: props.value || props.defaultValue || ''
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.value && nextProps.value !== this.state.value){
            this.setState({
                value: nextProps.value
            })
        }
    }

    otherView(type){ // checkbox & radio
        return (
            <label className={setPhoenixPrefix("multi-group")}>
                <div className={setPhoenixPrefix(type)}>
                    <input {...this.props} />
                    <i></i>
                </div>
                <span>{this.props.label ||''}</span>
            </label>
        );
    }

    renderInput(){ // input: text/search/password
        let {type, clear, seePassword, placeholder, phIcon} = this.props,
            {value, focus} = this.state;
        let clearStatus = clear && value && focus,
            seeStatus = seePassword && type=='password',
            placeholderShow = !focus && !value;

        if(type =='checkbox' || type=='radio'){
            return this.otherView(type)
        }else{
            return (
                <div className={classnames(
                    this.getProperty(true),
                    clearStatus ? setPhoenixPrefix('input-clear'):'',
                    seeStatus ? setPhoenixPrefix('input-see'):'',
                    phIcon ? setPhoenixPrefix('input-heading'):'',
                )}>
                    <input {...this.props} type={this.state.type} placeholder='' value={value}
                        ref={(inputElem)=>{this.inputElem=inputElem}}
                        onChange={this.onChange.bind(this)} 
                        onFocus={this.onFocus.bind(this)} 
                        onBlur={this.onBlur.bind(this)} />
                    <label className={classnames(
                        setPhoenixPrefix('input-placeholder'),
                        !placeholderShow? setPhoenixPrefix('input-placeholder-hide'):''
                    )}>
                        {phIcon ? <Icon phIcon={phIcon} />: null}
                        <span className={setPhoenixPrefix('input-placeholder-text')}>{placeholder}</span>
                    </label>
                    {this.renderClearButton(clearStatus)}
                    {this.renderSeeButton(seeStatus)}
                </div>
            );
        }
    }

    onChange(event){
        let {onChange} = this.props,
            value = event.target.value;

        if(onChange) onChange(event,value);
        
        this.setState({
            value: value,
            focus: true
        })
    }

    onFocus(e){
        let {onFocus} = this.props
        if(onFocus) onFocus()

        this.setState({
            focus: true
        })
    }

    onBlur(e){
        let {onBlur} = this.props
        if(onBlur) onBlur()

        this.timer = setTimeout(()=>{
            this.setState({
                focus: false
            })
        },0)            
    }

    renderClearButton(clear){
        if(clear){
            return <Icon className='gfs-icon-close' phIcon='fail-fill' onClick={this.clearButtonClickCallback.bind(this)} />
        }
    }

    clearButtonClickCallback(e){
        clearTimeout(this.timer)

        this.setState({
            value: ''
        },()=>{
            this.inputElem.focus()
        })
    }

    renderSeeButton(see){
        if(see){
            return <Icon className={classnames('gfs-icon-see', !this.state.see? 'gfs-icon-active':'')} 
                phIcon={this.seeIcon[this.state.see]} 
                onClick={this.seeButtonClickCallback.bind(this)} />
        }
    }

    seeButtonClickCallback(){
        if(this.state.see){
            this.setState({
                type: 'password',
                see: 0
            })
        }else{
            this.setState({
                type: 'text',
                see: 1
            })
        }        
    }

    getValue(){
        return this.state.value;
    }

    render(){
        let {componentTag:Component} = this.props

        return this.renderInput()
    }

}