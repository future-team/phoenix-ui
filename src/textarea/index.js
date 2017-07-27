import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'

import '../style'
import 'phoenix-styles/less/modules/textarea.less'

/**
 * <h5>表单组件，主要包括组件:</h5>
 * <strong><a href='../classes/Input.html'>Input 文本框/单选框/多选框</a></strong><br/>
 * <strong><a href='../classes/Textarea.html'>Textarea 多行文本框</a></strong><br>
 * <strong><a href='../classes/FormGroup.html'>FormGroup 表单组</a></strong><br/>
 * <strong><a href='../classes/Switch.html'>Switch 开关</a></strong><br>
 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
 * @module 表单组件
 * @main 表单组件
 * @static
 */
/**
 * 多行文本框组件<br/>
 * - 可通过valuee设置默认值。 
 * - 可通过设置count判断是否显示当前输入字数，需要配合maxLength配置最大输入字数。
 * - getValueCallback: 获取当前的输入值。
 *
 * 主要属性和接口：
 * - value:默认值 <br/>
 * 如：`<Textarea value='测试' />`
 * - count:是否显示当前输入字数, 默认false不显示, 配合maxLength使用<br/>
 * 如：`<Textarea count maxLength={150} />`
 * - getValueCallback: 获取当前的输入值。<br/>
 * 如：`<Textarea ref={(textElem)=>{this.textElem=textElem}} />`<br/>
 * `this.textElem.getValueCallback();`
 *
 * @class TextArea
 * @module 表单组件
 * @extends Component
 * @constructor
 * @since 0.3.0
 * @demo textarea|textarea.js {展示}
 * @show true
 * */

export default class Textarea extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'textarea'
         * */
        classPrefix: PropTypes.string,
        /**
         * 初始值
         * @property value
         * @type String
         * */
        value: PropTypes.string,
        /**
         * 是否显示输入计数
         * @property count
         * @type Boolean
         * */
        count: PropTypes.bool,
        /**
         * 可输入的总长度
         * @property maxLength
         * @type Number
         * */
        maxLength: PropTypes.number
    };

    static defaultProps = {
        disabled: false,
        classPrefix:'textarea',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);

        this.setMethod('getValueCallback',this.getValue.bind(this))

        this.state = {
            value: props.value || props.defaultValue || '',
            inputLength: this.getInputLength(props)
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.value && nextProps.value !== this.state.value){
            this.setState({
                value: nextProps.value
            })
        }
    }

    getValue(){
        return this.state.value;
    }

    getInputLength(props){
        return props.value? props.value.length: props.defaultValue? props.defaultValue.length:0;
    }

    componentWillReceiveProps(nextProps){
        let {defaultValue, value} = this.props;

        if(defaultValue != nextProps.defaultValue || value != nextProps.value){
            this.setState({
                inputLength: this.getInputLength(nextProps)
            });
        }        
    }

    onTextareaChange(event){
        let {onChange} = this.props,
            value = event.target.value;

        if(onChange) onChange(event,value);
        
        this.setState({
            value: value,
            inputLength: event.target.value.length
        })
    }

    renderCount(){
        let {count, maxLength} = this.props

        if(count){
            return (
                <span className={classnames(this.setPhPrefix('count'))}> 
                    <b className={this.setPhPrefix('length')}>{this.state.inputLength}</b>/<b>{maxLength}</b>
                </span>
            )
        }
    }

    renderTextarea(){
        let {className, disabled} = this.props

        return (
            <div className={this.setPhPrefix('field')}>
                <textarea {...this.otherProps} className={classnames(
                    this.getProperty(true),
                    className
                )} value={this.state.value} onChange={(event)=>{this.onTextareaChange(event)}} disabled={disabled}></textarea>
                {this.renderCount()}
            </div>
        )
    }

    render(){
        return this.renderTextarea()
    }

}