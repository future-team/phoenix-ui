import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

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
 * - 通过phStyle来改变颜色, 可选primary、warning、danger、info、error、success。
 * - 通过phSize设置大小, 可选sm、md、lg。
 * - 不提供默认回调, 但支持自定义className，事件等操作。
 *
 * 主要属性和接口：
 * - phStyle:标签颜色, 默认primary <br/>
 * 如：`<Label phStyle="info">惠</Label>`
 * - phSize:标签大小, 默认sm <br/>
 * 如：`<Label phSize="lg">惠</Label>`
 *
 * @class Label
 * @module 标签组件
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo label.js{展示}
 * @demo label.js{源码}
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
         * label标签大小[lg、md、sm], 默认为sm
         * @property phSize
         * @type string
         * @default 'sm'
         * */
        phSize: PropTypes.string,
        /**
         * label标签颜色[primary、warning、danger、info、error、success], 默认primary
         * @property phStyle
         * @type string
         * @default 'primary'
         **/
        phStyle:PropTypes.string
    };

    static defaultProps ={
        phSize: 'sm',
        phStyle: 'primary',
        classPrefix:'label',
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