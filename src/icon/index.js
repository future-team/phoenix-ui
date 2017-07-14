import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'

import '../style'
import 'phoenix-styles/less/modules/iconfont.less'

/**
 * Icon<br/>
 * - 可通过phIcon来配置不同类型的符号, 可选[查看所有icon类型](http://future-team.github.io/gfs-icons/index.html)。
 * - 支持自定义className，事件等操作。
 *
 * 主要属性和接口：
 * - phIcon:配置不同类型的符号 <br/>
 * 如：`<Icon phIcon='search' />`
 *
 * @class Icon
 * @module 标签组件
 * @extends Component
 * @constructor
 * @since 1.3.0
 * @demo icon|icon.js {展示}
 * @show true
 * */

export default class Icon extends Component{
    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'icon'
         * */
        classPrefix: PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * @default 'span'
         * */
        componentTag:PropTypes.string,
        /**
         * icon符号类型
         * @property phIcon
         * @type string
         * @default ''
         **/
        phIcon:PropTypes.string,
         /**
         * 按钮尺寸[xs、sm、md、lg], 默认为sm
         * @property phSize
         * @type String
         * @default 'sm'
         * */
        phSize:PropTypes.string,
        /**
         * 按钮颜色[primary、warning、danger、info、error、success], 默认primary
         * @property phStyle
         * @type Boolean
         * @default 'default'
         * */
        phStyle:PropTypes.string,
    };

    static defaultProps ={
        phIcon: '',
        classPrefix:'icon',
        componentTag:'span',
        classMapping : {
            'default':'default',
            'primary':'primary',
            'info':'info',
            'success':'success',
            'error':'error',
            'warning':'warning',
            'danger':'danger'
        }
    };

    constructor(props,context){
        super(props,context);
    }

    renderIcon(){
        let {componentTag:Component, className, phIcon, classPrefix} = this.props;
        return(
            <Component {...this.props} className={classnames(
                'gfs-icon',
                this.getProperty(true),
                className,
                phIcon? classPrefix + '-' + phIcon:''
           )}>
               {this.props.children}
           </Component>
        )
    }

    render(){
        return this.renderIcon()
    }
}