import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
/**
 * Badge徽章标记，主要是用来提供不同颜色的标识<br/>
 * 可以通过phStyle来改变颜色<br/>
 * 因为发生回调的概率不大所以没有提供回调函数<br/>
 * 但支持自定义类名，事件等操作<br/>
 * 具体属性和接口如下：
 * <ul>
 *     <li>phStyle:badge徽章颜色,可取值[primary、warning、danger、info、error、success]等，默认primary</li>
 *     <li>
 *         <code>
 *            Badge  phStyle="success"
 *            惠2
 *            /Badge
 *         </code>
 *     </li>
 * </ul>
 * @class Badge
 * @module 标签组件
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo Badge.js{展示}
 * @demo Badge.js{源码}
 * @show true
 * */
export default class Badge extends Component{
    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default btn
         * */
        classPrefix: PropTypes.string,
        /**
         * badge徽章颜色[primary、warning、danger、info、error、success]
         * @property phStyle
         * @type string
         * @default ''
         **/
        phStyle:PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * @default a
         * */
        componentTag:PropTypes.string
    }
    static defaultProps ={
        classPrefix:'badge',
        classMapping : {
            'primary':'badge-primary',
            'info':'badge-info',
            'success':'badge-success',
            'error':'badge-error',
            'warning':'badge-warning',
            'danger':'badge-danger'
        }
    }
    constructor(props,context){
        super(props,context);
    }
    render(){
        return(
            <span className={classnames(
               'badge',
               this.getProperty(),
               this.props.className
           )} style={this.getStyles(this.props.style)}>
               {this.props.children}
           </span>
        )
    }
}