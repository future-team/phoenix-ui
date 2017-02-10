import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

/**
 * input框组件<br/>
 * - 使用方式跟原生一致, 支持disabled。
 * - 通过type设置input的类型, 可选text,checkbox,radio。
 * - 当类型为text时, 可通过defaultValue设置默认值; 可通过value和onChange事件配合使用手动设置输入值。
 * - 当类型为checkbox&radio时, 可通过label设置展示的文字。
 * - 当类型为checkbox&radio时, 可通过defaultChecked设置默认值; 可通过checked和onChange事件配合使用手动设置输入值。
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
 *
 * @class Input
 * @module 表单组件
 * @extends Component
 * @constructor
 * @demo input.js {展示}
 * @demo input.js {源码}
 * @show true
 * */

export default class Input extends Component{

    static propTypes = {
        /**
         * input类型, 可选[text,checkbox,radio], 默认text
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
        onChange: PropTypes.func
    };

    static defaultProps = {
        type: 'text',
        classPrefix:'input',
        componentTag:'div',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);
    }

    otherView(type){
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

    renderInput(type){
        let html = <div></div>;

        if(type =='checkbox' || type=='radio'){
            html=this.otherView(type);
        }else{
            html = (<input {...this.props} className={
                classnames(
                    this.getProperty(true),
                    this.props.className
                )
                }/>);
        }

        return html;
    }


    render(){
        let {componentTag:Component,type} = this.props;
        return this.renderInput(type ? type:'text');
    }

}