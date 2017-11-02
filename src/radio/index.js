import React from 'react'
import PropTypes from 'prop-types'
import Component from '../utils/Component'
import Checkbox from '../checkbox/'
import Logger from '../utils/logger'

import '../style'
import 'phoenix-styles/less/modules/checkbox.less'

/**
 * 单选框组件<br/>
 * - 使用方式跟原生一致, 支持disabled等原生属性。
 * - 可通过label设置展示的文字。
 * - 可通过defaultChecked设置默认值; 可通过checked和onChange事件配合使用手动设置输入值。
 * - className/style属性加在外层，其余属性均赋予input元素。
 *
 * 主要属性和接口：
 * - label:展示的文字信息, 默认空<br/>
 * 如：`<Radio label='测试' name='test'/>`
 * - defaultChecked:默认值<br/>
 * 如：`<Radio defaultChecked={true} />`
 * - checked&onChange:<br/>
 * 如：`<Radio checked={this.state.checked} onChange={()=>{this.setState({checked:false})}} />`
 *
 * @class Radio
 * @module 表单组件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo radio|radio.js {展示}
 * @show true
 * */

export default class Radio extends Component{

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
        type: 'radio',
        label: '',
        classPrefix:'radio',
        componentTag:'div',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context)
        new Logger('Radio')
    }

    renderRadio(){
        return <Checkbox {...this.props} />
    }

    render(){
        return this.renderRadio()
    }

}