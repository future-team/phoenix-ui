import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 *  - 按钮组件提供所有properties中内置的颜色及字体大小样式供选择<br/>
 *  - 也可以自定义行内样式和className名字定义UI展示<br/>
 *  - 支持disabled, active, enable等属性定义<br/>
 *  - 可以通过phSize 设置大小，可选xs、sm、lg。<br/>
 *  - 通过phStyle选择按钮颜色，可选error、warning、danger、link、gray、white、success
 *  主要属性和接口：
 * <ul>
 *     <li>phSize:按钮颜色<br>
 *         如：<code>
 *            Button radius phSize="sm" egStyle="warning"
 *         </code>
 *     </li>
 *     <li>egStyle:按钮的大小。分别为md、sm、lg，默认sm<br>
 *         如：<code>
 *            Button radius phSize="md" phStyle="warning"
 *         </code>
 *     </li>
 *     <li>block:是否块级显示，默认false<br>
 *         如：<code>
 *            Button block
 *         </code>
 *     </li>
 * </ul>
 * @class Button
 * @module Form
 * @extends Component
 * @constructor
 * @demo button.js {展示}
 * @demo button.js {源码}
 * @show true
 * */
export default class Button extends Component{

    static propTypes = {
        /**
         * 按钮尺寸,分别为xs、sm、lg
         * @property phSize
         * @type String
         * @default sm
         * */
        phSize:PropTypes.string,
        /**
         * 颜色[error、warning、danger、link、gray、white、success、'']
         * @property phStyle
         * @type Boolean
         * @default ''
         * */
        phStyle:PropTypes.string,
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * */
        classPrefix:PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag:PropTypes.string,
        /**
         * 块级显示
         * @property block
         * @type Boolean
         * @default false
         * */
        block:PropTypes.bool
    };

    static defaultProps = {
        egSize:'',
        classPrefix:'',
        componentTag:'button',
        classMapping : {
            'block':'btn-block',
            'primary':'btn-primary',
            'info':'btn-info',
            'success':'btn-success',
            'error':'btn-error',
            'warning':'btn-warning',
            'danger':'btn-danger',
            'link':'btn-link'
        }
    };

    constructor(props, context) {
        super(props, context);
        this.setProperty('hollow','hollow');
    }

    render(){
        let {componentTag:Component} = this.props;

        return (
            <Component {...this.otherProps} className={
                classnames(
                    'btn',
                    this.getProperty(),
                    this.props.className
                )
                } style={this.getStyles(this.props.style) }>{this.props.children}</Component>
        );
    }

}