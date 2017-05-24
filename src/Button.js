import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import Icon from './Icon';

/**
 * 按钮组件<br/>
 * - 按钮组件提供所有properties中内置的颜色及字体大小样式供选择。
 * - 也可以自定义行内样式和className名字定义UI展示。
 * - 通过phSize设置大小, 可选sm、md、lg。
 * - 通过phStyle选择按钮颜色，可选primary、info、error、warning、danger、link、gray、success。
 * - 支持disabled, active属性定义。
 *
 * 主要属性和接口：
 * - phSize:按钮大小, 默认sm <br/>
 * 如: `<Button phSize="lg">button</Button>`
 * - phStyle:按钮颜色, 默认primary <br/>
 * 如: `<Button phStyle="info">button</Button>`
 * - block:是否块级显示，默认false <br/>
 * 如: `<Button block>button</Button>`
 * - phIcon:icon符号类型,默认没有符号 <br/>
 * 如: `<Button phIcon="search">button</Button>`
 *
 * @class Button
 * @module 基础组件
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo button|button.js {展示}
 * @show true
 * */
export default class Button extends Component{

    static propTypes = {
        /**
         * 按钮尺寸[sm、md、lg], 默认为sm
         * @property phSize
         * @type String
         * @default 'sm'
         * */
        phSize:PropTypes.string,
        /**
         * 按钮颜色[primary、warning、danger、info、error、success、link、gray], 默认primary
         * @property phStyle
         * @type Boolean
         * @default 'primary'
         * */
        phStyle:PropTypes.string,
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'button'
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
        block:PropTypes.bool,
        /**
         * 圆角
         * @property radius
         * @type Boolean
         * @default false
         * */
        radius:PropTypes.bool,
        /**
         * 空背景
         * @property hollow
         * @type Boolean
         * @default false
         * */
        hollow:PropTypes.bool,
        /**
         * 不可点状态
         * @property disabled
         * @type Boolean
         * @default false
         * */
        disabled:PropTypes.bool,
        /**
         * 激活状态
         * @property active
         * @type Boolean
         * @default false
         * */
        active:PropTypes.bool,
         /**
         * icon符号类型
         * @property phIcon
         * @type string
         * @default ''
         **/
        phIcon:PropTypes.string
    };

    static defaultProps = {
        phSize: 'sm',
        phStyle: 'primary',
        classPrefix:'button',
        componentTag:'button',
        classMapping : {
            'block':'block',
            'primary':'primary',
            'info':'info',
            'success':'success',
            'error':'error',
            'warning':'warning',
            'danger':'danger',
            'link':'link',
            'gray':'gray'
        }
    };

    constructor(props, context) {
        super(props, context);
        // this.setProperty('hollow','hollow');
    }

    onButtonClickHandle(e){
        if(this.props.clickHandle) this.props.clickHandle(e);
        if(this.props.onClick) this.props.onClick(e);
    }

    renderIcon(){
        let {phIcon} = this.props;

        if(phIcon){
            return <Icon phIcon={phIcon} />;
        }else{
            return '';
        }
    }

    render(){
        let {componentTag:Component} = this.props;

        return (
            <Component {...this.otherProps} className={
                classnames(
                    this.getProperty(true),
                    this.props.className
                )}
                style={this.getStyles(this.props.style)} onClick={::this.onButtonClickHandle}>
                {this.renderIcon()}
                {this.props.children}
            </Component>
        );
    }

}