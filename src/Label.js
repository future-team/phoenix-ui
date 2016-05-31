import React,{PropTypes} from 'react';
import Component from './utils/Component';
import ReactDom from 'react-dom';
import classnames from 'classnames';
/**
 * <h5>label模块，主要包括一下两个组件:</h5>
 * <strong><a href='../classes/Label.html'>label 标签</a></strong><br/>
 * <strong><a href='../classes/Badge.html'>bridge 徽章</a></strong><br>
 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
 * @module Label(标签)
 * @main Label(标签)
 * @static
 *
 */
/**
 * Label标记，主要是用来提供不同颜色的标识<br/>
 * 可以通过phStyle来改变颜色,phSize改变大小<br/>
 * 因为发生回调的概率不大所以没有提供回调函数<br/>
 * 但支持自定义类名，事件等操作<br/>
 * 具体属性和接口如下：
 * <ul>
 *     <li>phStyle:label徽章颜色,可取值[primary、warning、danger、info、error、success]等，默认primary</li>
 *     <li>
 *         <code>
 *             Label phSize="lg" phStyle="success"
 *             惠
 *            /Label
 *         </code>
 *     </li>
 *     <li>phSize:badge徽章颜色,可取值[lg、md、'']，默认即为‘’</li>
 *     <li>
 *         <code>
 *            Label phSize="lg" phStyle="success"
 *             惠
 *            /Label
 *         </code>
 *     </li>
 * </ul>
 * @class Label
 * @module Label(标签)
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo Label.js{展示}
 * @demo Label.js{源码}
 * @show true
 * */
export default class Label extends Component{
    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default btn
         * */
        classPrefix: PropTypes.string,
        /**
         * label标签大小 [lg、md、'']默认为‘’即为sm不用指定
         * @property phSize
         * @type string
         * @default ''
         * */
        phSize: PropTypes.string,
        /**
         * label标签颜色[primary、warning、danger、info、error、success]
         * @property phStyle
         * @type string
         * @default 'primary'
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
        phSize: '',
        classPrefix:'label',
        phStyle: 'primary',
        classMapping : {
            'primary':'label-primary',
            'info':'label-info',
            'success':'label-success',
            'error':'label-error',
            'warning':'label-warning',
            'danger':'label-danger',
            'lg':'label-lg',
            'md':'label-md'
        }
    }
    constructor(props,context){
        super(props,context);
    }
    render(){
        return(
           <span className={classnames(
               'label',
               this.getProperty()
           )} style={this.getStyles(this.props.style)}>
               {this.props.children}
           </span>
        )
    }
}