import React,{PropTypes} from 'react';
import Component from '../utils/Component';
import classnames from 'classnames';
import {setPhPrefix} from '../utils/Tool';
import Icon from '../icon/'

import "phoenix-styles/less/modules/form.less"

/**
 * 复选框组件<br/>
 * - 使用方式跟原生一致, 支持disabled等原生属性。
 * - 可通过label设置展示的文字。
 * - 可通过defaultChecked设置默认值; 可通过checked和onChange事件配合使用手动设置输入值。
 *
 * 主要属性和接口：
 * - label:展示的文字信息, 默认空<br/>
 * 如：`<Input type="checkbox" label="测试" />`
 * - defaultChecked:默认值<br/>
 * 如：`<Input type="checkbox" defaultChecked={true} />`
 * - checked&onChange:<br/>
 * 如：`<Input type="checkbox" checked={this.state.checked} onChange={()=>{this.setState({checked:false})}} />`
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
         * 展示的文字信息
         * @property label
         * @type String
         * @default ''
         * */
        label: PropTypes.string
    };

    static defaultProps = {
        type: 'checkbox',
        label: '',
        classPrefix:'input',
        componentTag:'div',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);
    }

    renderCheckbox(){
        let {label, type} = this.props

        return (
            <label className={setPhPrefix("multi-group")}>
                <div className={setPhPrefix(type)}>
                    <input {...this.props} />
                    <i></i>
                </div>
                <span>{label}</span>
            </label>
        );
    }

    render(){
        let {componentTag:Component} = this.props

        return this.renderCheckbox()
    }

}