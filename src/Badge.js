import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 * Badge徽章标记<br/>
 * - 主要是用来提供不同颜色的标识, 通过phStyle来改变颜色, 可选primary、warning、danger、info、error、success。
 * - 不提供默认回调, 但支持自定义className，事件等操作。
 *
 * 主要属性和接口：
 * - phStyle:徽章颜色, 默认primary <br/>
 * 如：`<Badge phStyle="info">惠</Badge>`
 *
 * @class Badge
 * @module 标签组件
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo badge|badge.js {展示}
 * @show true
 * */

export default class Badge extends Component{
    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'badge'
         * */
        classPrefix: PropTypes.string,
        /**
         * badge徽章颜色[primary、warning、danger、info、error、success], 默认primary
         * @property phStyle
         * @type string
         * @default 'primary'
         **/
        phStyle:PropTypes.string
    };

    static defaultProps ={
        phStyle: 'primary',
        classPrefix:'badge',
        classMapping : {
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

    render(){
        return(
            <span className={classnames(
               this.getProperty(true),
               this.props.className
           )} style={this.getStyles(this.props.style)}>
               {this.props.children}
           </span>
        )
    }
}