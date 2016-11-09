import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 * 表单元素textarea
 * @class TextArea
 * @module Form
 * @extends Component
 * @constructor
 * @demo textarea.js {展示}
 * @demo TextArea.js {源码}
 * @show true
 * */
export default class Textarea extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * */
        classPrefix:PropTypes.string,
        /**
         * 是否显示输入计数
         * @property isCount
         * @type Boolean
         * */
        isCount: PropTypes.bool,
        /**
         * 可输入的总长度
         * @property maxLength
         * @type Number
         * */
        maxLength: PropTypes.number
    };

    static defaultProps = {
        isCount: false,
        egSize:'',
        classPrefix:'',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            inputLength: props.value.length
        }
    }

    onChange(event){
        this.setState({
            inputLength: event.target.value.length
        });
        if(this.props.onChange){
            this.props.onChange(event);
        }
    }

    render(){
        let {isCount, maxLength} = this.props;

        return (
            <div className='textarea-field'>
                <textarea {...this.props} className={classnames(
                    'form-textarea',
                    this.getProperty(),
                    this.props.className
                )} onChange={(event)=>{this.onChange(event)}}></textarea>
                <span className={classnames(
                    'textarea-count',
                    isCount? 'show':'hide'
                )}>
                    <b className='input-length'>{this.state.inputLength}</b>/<b>{maxLength}</b>
                </span>
            </div>
        );
    }

}