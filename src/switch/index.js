import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'

import '../style'
import 'phoenix-styles/less/modules/switch.less'

/**
 * 开关切换组件，仿真ios的开关控件<br/>
 * - 可通过defaultChecked设置默认值。
 * - 可通过checked和onChange事件配合使用手动设置输入值。
 * - className属性加在外层，其余属性均赋予input元素。
 *
 * 主要属性和接口：
 * - defaultChecked:默认值<br/>
 * 如：`<Switch defaultChecked={true} />`
 * - checked&onChange:<br/>
 * 如：`<Switch checked={this.state.checked} onChange={()=>{this.setState({checked:false})}} />`
 *
 * @class Switch
 * @module 表单组件
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo switch|switch.js {展示}
 * @show true
 * */

export default class Switch extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'switch'
         * */
        classPrefix: PropTypes.string,
        /**
         * 默认开关值
         * @property defaultChecked
         * @type Boolean
         * */
        defaultChecked: PropTypes.bool,
        /**
         * 开关值
         * @property checked
         * @type Boolean
         * */
        checked: PropTypes.bool,
        /**
         * 更改值时触发的回调
         * @event onChange
         * @type Function
         * */
        onChange: PropTypes.func
    };

    static defaultProps = {
        disabled: false,
        classPrefix:'switch',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);
    }

    renderSwitch(){
        let {className, disabled, style} = this.props

        return (
            <label className={
                classnames(
                    this.getProperty(true),
                    className
                )
            } style={this.getStyles(style)}>
                <input type='checkbox' {...this.otherProps} className='' style={null} disabled={disabled}/>
                <div className={this.setPhPrefix('checkbox',true)}></div>
            </label>
        )
    }

    render(){
        return this.renderSwitch()  
    }

}