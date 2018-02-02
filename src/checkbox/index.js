import React from 'react'
import PropTypes from 'prop-types'
import Component from '../utils/Component'
import classnames from 'classnames'
import Logger from '../utils/logger'

import '../style'
import 'phoenix-styles/less/modules/checkbox.less'

/**
 * 复选框组件<br/>
 * - 使用方式跟原生一致, 支持disabled等原生属性。
 * - 可通过label设置展示的文字。
 * - 可通过defaultChecked设置默认值; 可通过checked和onChange事件配合使用手动设置输入值。
 * - className属性加在外层，其余属性均赋予input元素。
 *
 * 主要属性和接口：
 * - label:展示的文字信息, 默认空<br/>
 * 如：`<Checkbox label='测试' />`
 * - defaultChecked:默认值<br/>
 * 如：`<Checkbox defaultChecked={true} />`
 * - checked&onChange:<br/>
 * 如：`<Checkbox checked={this.state.checked} onChange={()=>{this.setState({checked:false})}} />`
 *
 * @class Checkbox
 * @module 表单组件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo checkbox|checkbox.js {展示}
 * @show true
 * */

export default class Checkbox extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'checkbox'
         * */
        classPrefix:PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag:PropTypes.string,
        /**
         * 展示的文字信息
         * @property label
         * @type String
         * @default ''
         * */
        label: PropTypes.string,
        /**
         * 大小，可选sm
         * @property phSize
         * @type String
         * @default ''
         * */
        phSize: PropTypes.string,
    };

    static defaultProps = {
        type: 'checkbox',
        label: '',
        disabled: false,
        classPrefix:'checkbox',
        componentTag:'div',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);
        new Logger('Checkbox');        
    }

    renderCheckbox(){
        let {label, type, disabled, className, style, id} = this.props

        return (
            <span className={classnames(this.setPhPrefix('multi-group',true), className)} style={this.getStyles(style)}>
                <div className={this.getProperty(true)}>
                    <input {...this.otherProps} className='' style={null} disabled={disabled}/>
                    <i></i>
                </div>
                <label htmlFor={id}>{label}</label>
            </span>
        );
    }

    render(){
        return this.renderCheckbox()
    }

}