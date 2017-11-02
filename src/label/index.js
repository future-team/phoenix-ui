import React from 'react'
import PropTypes from 'prop-types'
import Component from '../utils/Component'
import classnames from 'classnames'
import Icon from '../icon'
import Logger from '../utils/logger'

import '../style'
import 'phoenix-styles/less/modules/label.less'

/**
 * <h5>标签组件，主要包括组件:</h5>
 * <strong><a href='../classes/Label.html'>Label 标签</a></strong><br/>
 * <strong><a href='../classes/Badge.html'>Badge 徽章</a></strong><br>
 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
 * @module 标签组件
 * @main 标签组件
 * @static
 */
/**
 * 标签组件<br/>
 * - 通过phLabel设置label类型，可选参考[所有label类型](http://future-team.github.io/gfs-icons/index.html#label)
 * - 通过phStyle来改变颜色, 可选primary、info、success、calm、light、gray。
 * - 通过phSize设置大小, 可选sm、md。
 * - 不提供默认回调, 但支持自定义className，事件等操作。
 *
 * 主要属性和接口：
 * - phLabel:标签类型 <br/>
 * 如：`<Label phLabel='zu'/>`
 * - phStyle:标签颜色, 默认primary <br/>
 * 如：`<Label phStyle='info'/>`
 * - phSize:标签大小, 默认sm <br/>
 * 如：`<Label phSize='lg'/>`
 *
 * @class Label
 * @module 标签组件
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo label|label.js{展示}
 * @show true
 * */

export default class Label extends Component{
    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'label'
         * */
        classPrefix: PropTypes.string,
        /**
         * label类型
         * @property phLabel
         * @type String
         * @default ''
         * */
        phLabel: PropTypes.string,
        /**
         * label标签大小[sm、md], 默认为sm
         * @property phSize
         * @type string
         * @default 'sm'
         * */
        phSize: PropTypes.string,
        /**
         * label标签颜色[primary、info、success、calm、light、gray], 默认primary
         * @property phStyle
         * @type string
         * @default 'primary'
         **/
        phStyle:PropTypes.string
    };

    static defaultProps ={
        phLabel: '',
        phSize: 'sm',
        phStyle: 'primary',
        classPrefix:'label',
        classMapping : {
            'primary':'primary',
            'info':'info',
            'success':'success',
            'calm':'calm',
            'light':'light',
            'gray':'gray'
        }
    };

    constructor(props,context){
        super(props,context)
        new Logger('Label')
    }

    renderLabel(){
        let {className, style, children, phLabel} = this.props

        return(
           <Icon className={classnames(
               this.getProperty(true),
               className
           )} style={this.getStyles(style)} phIcon={phLabel? 'label-'+phLabel:''} />
        )
    }

    render(){
        return this.renderLabel()
    }
}