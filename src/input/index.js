import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'
import {warning} from '../utils/Tool'
import Icon from '../icon/'

import '../style'
import 'phoenix-styles/less/modules/input.less'

/**
 * 输入框组件<br/>
 * - 使用方式跟原生一致, 支持disabled、maxLength等原生属性。
 * - 通过type设置input的类型, 可选text,search,password。
 * - 可通过value设置默认值。
 * - 可通过设置clear属性是否显示清除按钮，默认不显示。
 * - 可通过设置visible属性判断password类型是否显示可见密码的按钮，默认不显示。
 * - 可通过设置error设置当前输入错误。
 * - 可通过getValueCallback获取当前元素的value值，仅适用于text、search。
 * - 可通过设置phReg设置正则表达式，失焦时如果不符合正则显示错误样式。
 *
 * 主要属性和接口：
 * - type:input类型, 默认text <br/>
 * 如：`<Input type='search' disabled/>`
 * - value:设置默认值 <br/>
 * 如：`<Input value='测试' />`
 * - clear:是否显示清除按钮 <br/>
 * 如：`<Input value='测试' clear/>`
 * - visible: 是否显示可见密码的按钮(仅适用于password类型)<br/>
 * 如：`<Input type='password' value='123456' visible />`
 * - error: 当前输入错误<br/>
 * 如：`<Input type='password' value='123456' error />`
 * - phReg: 正则表达式<br/>
 * 如：`<Input type="text" placeholder="6-18位不以数字开头的用户名" phReg={/^[a-zA-Z$_]\w{5,17}$/} />`
 * - getValueCallback: 获取当前input的value。<br/>
 * 如：`<Input ref={(inputElem)=>{this.inputElem=inputElem}} />`<br/>
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
         * input类型, 可选[text,search,password], 默认text
         * @property type
         * @type String
         * @default 'text'
         * */
        type: PropTypes.string,
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
         * 是否显示[清除已经输入的内容按钮]，仅适用于text,search,password的类型
         * @property clear
         * @type Boolean
         * */
        clear: PropTypes.bool,
        /**
         * 是否显示[密码是否可见按钮]，仅适用于password的类型
         * @property visible
         * @type Boolean
         * */
        visible: PropTypes.bool,
        /**
         * 是否错误
         * @property error
         * @type Boolean
         * */
        error: PropTypes.bool,
        /**
         * 正则表达式
         * @property phReg
         * @type Object
         * */
        phReg: PropTypes.object,
        /**
         * icon符号类型
         * @property phIcon
         * @type string
         * @default ''
         **/
        phIcon:PropTypes.string
    };

    static defaultProps = {
        type: 'text',
        clear: false,
        error: false,
        visible: false,
        phIcon: '',
        phReg: null,
        classPrefix:'input',
        componentTag:'div',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);

        this.setMethod('getValueCallback',this.getValue.bind(this))

        this.visibleIcon = ['yinsi','biyan']

        this.state = {
            type: props.type,
            cansee: 0,
            focus: false,
            value: props.value || props.defaultValue || '',
            error: props.error
        }
    }

    componentDidMount(){
        let o = {},
            {phReg} = this.props
        
        if(!phReg || !this.state.value) return

        o.error = !phReg.test(this.state.value)
        
        this.setState(o)
    }

    componentWillReceiveProps(nextProps){
        let o = {}

        if(nextProps.value && nextProps.value !== this.state.value) o.value = nextProps.value
        if(nextProps.error && nextProps.error !== this.state.error) o.error = nextProps.error

        this.setState(o)
    }

    renderInput(){
        let {type, clear, visible, placeholder, phIcon} = this.props,
            {value, focus, error} = this.state;
        let clearStatus = clear && value && focus,
            visibleStatus = visible && type=='password',
            errorState = error && !focus,
            placeholderShow = !focus && !value;
        
        if(['checkbox', 'radio'].indexOf(type) >= 0){
            warning('Input组件: type 为 checkbox|radio 请对应使用 Checkbox|Radio 组件!')
            return null
        }else{
            return (
                <div className={classnames(
                    this.getProperty(true),
                    phIcon ? this.setPhPrefix('heading'):'',
                    clearStatus ? this.setPhPrefix('clear'):'',
                    visibleStatus ? this.setPhPrefix('visible'):'',
                    errorState ? this.setPhPrefix('error'):'',
                )}>
                    <input {...this.props} type={this.state.type} placeholder='' value={value}
                        ref={(inputElem)=>{this.inputElem=inputElem}}
                        onChange={this.onChange.bind(this)} 
                        onFocus={this.onFocus.bind(this)} 
                        onBlur={this.onBlur.bind(this)} />
                    <label className={classnames(
                        this.setPhPrefix('placeholder'),
                        !placeholderShow? this.setPhPrefix('placeholder-hide'):''
                    )}>
                        {phIcon ? <Icon phIcon={phIcon} />: null}
                        <span className={this.setPhPrefix('placeholder-text')}>{placeholder}</span>
                    </label>
                    {this.renderClearButton(clearStatus)}
                    {this.renderVisibleButton(visibleStatus)}
                    {this.renderErrorButton(errorState)}
                </div>
            );
        }
    }

    onChange(event){
        let o = {},
            {onChange, phReg} = this.props,
            value = event.target.value
        
        o.value = value
        o.focus = true
        if(phReg){
            o.error = !phReg.test(value)
        }

        if(onChange) onChange(event,value)
        
        this.setState(o)
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
            return <Icon className='gfs-icon-close' phIcon='fail-fill' onClick={this.clearHandle.bind(this)} />
        }
    }

    clearHandle(e){
        clearTimeout(this.timer)

        this.setState({
            value: ''
        },()=>{
            this.inputElem.focus()
        })
    }

    renderVisibleButton(visible){
        if(visible){
            return <Icon className={classnames('gfs-icon-visible', !this.state.cansee? 'gfs-icon-active':'')} 
                phIcon={this.visibleIcon[this.state.cansee]} 
                onClick={this.visibleHandle.bind(this)} />
        }
    }

    visibleHandle(){
        if(this.state.cansee){
            this.setState({
                type: 'password',
                cansee: 0
            })
        }else{
            this.setState({
                type: 'text',
                cansee: 1
            })
        }        
    }

    renderErrorButton(error){
        if(error){
            return <Icon className={classnames('gfs-icon-error')} phIcon='warning-fill' />
        }
    }

    getValue(){
        return this.state.value;
    }

    componentWillUnmount(){
        clearTimeout(this.timer)
    }

    render(){
        return this.renderInput()
    }

}