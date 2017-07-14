import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'
import Icon from '../icon'

import '../style'
import 'phoenix-styles/less/modules/buttons.less'

/**
 * 按钮组件<br/>
 * - 按钮组件提供所有properties中内置的颜色及字体大小样式供选择。
 * - 也可以自定义行内样式和className名字定义UI展示。
 * - 通过phSize设置大小, 可选sm、md、lg。
 * - 通过phStyle选择按钮颜色，可选primary、info、error、warning、danger、link、gray、success。
 * - 支持disabled, active属性定义。
 * - 按钮内容默认居中，可通过stable属性设置按钮不占位，只有内容部分居中，适用于动态添加icon且不希望文字移位的情况。
 *
 * 主要属性和接口：
 * - phSize:按钮大小, 默认sm <br/>
 * 如: `<Button phSize='lg'>button</Button>`
 * - phStyle:按钮颜色, 默认primary <br/>
 * 如: `<Button phStyle='info'>button</Button>`
 * - block:是否块级显示，默认false <br/>
 * 如: `<Button block>button</Button>`
 * - phIcon:icon符号类型,默认没有符号 <br/>
 * 如: `<Button phIcon='search'>button</Button>`
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
        phIcon:PropTypes.string,
        /**
         * icon占位情况，默认占位，设置之后不影响文字居中
         * @property stable
         * @type Boolean
         * @default false
         * */
        stable: PropTypes.bool,
    };

    static defaultProps = {
        phSize: 'sm',
        phStyle: 'primary',
        classPrefix:'button',
        componentTag:'button',
        classMapping : {
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
    }

    clickHandle(e){
        let {clickHandle, onClick} = this.props;

        if(clickHandle) clickHandle(e);
        if(onClick) onClick(e);
    }

    renderIcon(){
        let {phIcon} = this.props;

        if(phIcon){
            let loading = phIcon.indexOf('loading')!=-1
            return <Icon phIcon={phIcon} phSize={loading?'sm':''}/>;
        }else{
            return '';
        }
    }

    renderButton(){
        let {componentTag:Component} = this.props;

        return (
            <Component {...this.otherProps} className={
                classnames(
                    this.getProperty(true),
                    this.props.className
                )}
                style={this.getStyles(this.props.style)} onClick={this.clickHandle.bind(this)}>
                {this.renderIcon()}
                {this.props.children}
            </Component>
        );
    }

    render(){
        return this.renderButton()
    }

}