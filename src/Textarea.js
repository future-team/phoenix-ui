import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

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
 * - 使用方式跟原生一致。
 * - 可通过defaultValue设置默认值,如果是通过请求获得的数据请使用value，defaultValue只有初始赋值有效。 
 * - 可通过value和onChange事件配合使用手动设置输入值。
 * - 可通过设置count判断是否显示当前输入字数。
 * - 可通过设置maxLength配置最大输入字数。
 *
 * 主要属性和接口：
 * - defaultValue:默认值 <br/>
 * 如：`<Textarea defaultValue="测试" />`
 * - value&onChange:<br/>
 * 如：`<Textarea value={this.state.value} onChange={()=>{this.setState({value:"测试"})}} />`
 * - count:是否显示当前输入字数, 默认false不显示, 配合maxLength使用<br/>
 * 如：`<Textarea count maxLength={150} />`
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
         * 默认值
         * @property defaultValue
         * @type String
         * */
        defaultValue: PropTypes.string,
        /**
         * 值
         * @property value
         * @type String
         * */
        value: PropTypes.string,
        /**
         * 输入时执行的回调
         * @event onChange
         * @type Function
         * */
        onChange:PropTypes.func,
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
        classPrefix:'textarea',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            inputLength: this.getInputLength(props)
        }
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
        this.setState({
            inputLength: event.target.value.length
        });
        if(this.props.onChange){
            this.props.onChange(event);
        }
    }

    render(){
        let {count, maxLength} = this.props;

        return (
            <div className={setPhoenixPrefix('textarea-field')}>
                <textarea {...this.props} className={classnames(
                    this.getProperty(true),
                    this.props.className
                )} onChange={(event)=>{this.onTextareaChange(event)}}></textarea>
                <span className={classnames(
                    setPhoenixPrefix('textarea-count'),
                    count? 'show':'hide'
                )}> 
                    <b className={setPhoenixPrefix('textarea-length')}>{this.state.inputLength}</b>/<b>{maxLength}</b>
                </span>
            </div>
        );
    }

}