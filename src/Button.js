import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

export default class Button extends Component{

    static propTypes = {
        /**
         * 按钮尺寸,分别为xs、sm、lg
         * @property egSize
         * @type String
         * @default sm
         * */
        phSize:PropTypes.string,
        /**
         * 颜色[error、warning、danger、link、gray、white、success、'']
         * @property egStyle
         * @type Boolean
         * @default ''
         * */
        phStyle:PropTypes.string,
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default btn
         * */
        classPrefix:PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * @default a
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