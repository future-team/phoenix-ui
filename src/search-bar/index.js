import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'

import Input from '../input'
import Button from '../button'

import '../style'
import 'phoenix-styles/less/modules/search-bar.less'

/**
 * SearchBar<br/>
 * - 可通过buttonText设置按钮的文字。
 * - 可通过clickCallback设置点击按钮的回调。
 * - 可通过queryCallback设置回车/搜索动作的回调函数。
 * - 可通过focusCallback设置聚焦的回调；可通过blurCallback设置失焦的回调。
 * - className/style属性加在外层，其余属性均赋予input元素。
 *
 * 主要属性和接口：
 * - buttonText: 按钮文字 <br/>
 * 如：`<SearchBar buttonText="no" />`
 * - clickCallback: 点击按钮的回调 <br/>
 * 如：`<SearchBar clickCallback={(value)=>{console.log(value)}} />`
 * - queryCallback: 回车/搜索动作的回调函数 <br/>
 * 如：`<SearchBar queryCallback={(value)=>{console.log(value)}} />`
 * - focusCallback: 聚焦的回调 <br/>
 * 如：`<SearchBar focusCallback={()=>{console.log("focus")}} />`
 * - blurCallback: 失焦的回调 <br/>
 * 如：`<SearchBar blurCallback={()=>{console.log("blur")}} />`
 *
 * @class SearchBar
 * @module 搜索组件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo search-bar|search-bar.js {展示}
 * @show true
 * */

export default class SearchBar extends Component{
    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'search-bar'
         * */
        classPrefix: PropTypes.string,
        /**
         * 按钮文案
         * @property buttonText
         * @type String
         * @default '取消'
         * */
        buttonText: PropTypes.string,
        /**
         * 输入框占位符
         * @property placeholder
         * @type String
         * @default '搜索'
         * */
        placeholder: PropTypes.string,
        /**
         * 聚焦的回调
         * @method focusCallback
         * @type Function
         * */
        focusCallback: PropTypes.func,
        /**
         * 失焦的回调
         * @method blurCallback
         * @type Function
         * */
        blurCallback: PropTypes.func,
        /**
         * 搜索的回调
         * @method queryCallback
         * @type Function
         * */
        queryCallback: PropTypes.func,
        /**
         * 点击按钮的回调
         * @method clickCallback
         * @type Function
         * */
        clickCallback: PropTypes.func,
    };

    static defaultProps ={
        buttonText: '取消',
        placeholder: '搜索',
        classPrefix:'search-bar',
        classMapping : { 
        }
    };

    constructor(props,context){
        super(props,context);

        this.state = {
            focus: false
        }
    }

    renderButton(){
        let {buttonText} = this.props
        
        if(this.state.focus){
            return <Button phStyle='link' onClick={this.buttonHandle.bind(this)}>{buttonText}</Button>
        }
    }

    buttonHandle(){
        let {clickCallback} = this.props
        if(clickCallback) clickCallback(this.searchElem.getValueCallback())
    }

    onFocus(){
        let {focusCallback} = this.props

        this.setState({
            focus: true
        })

        if(focusCallback) focusCallback()
    }

    onBlur(){
        let {blurCallback} = this.props

        this.timer = setTimeout(()=>{
            this.setState({
                focus: false
            })
        },0)

        if(blurCallback) blurCallback()
    }

    onKeyDown(e){
        let {queryCallback} = this.props

        if(e.keyCode == '13'){
            if(queryCallback) queryCallback(this.searchElem.getValueCallback())
        }
    }

    renderSearchBar(){
        let {className, placeholder, style} = this.props

        return(
            <div className={classnames(
               this.getProperty(true),
               className,
               this.state.focus? this.setPhPrefix('focus'):''
           )} style={this.getStyles(style)}>
               <Input {...this.otherProps} type='search' phIcon='search' placeholder={placeholder} clear 
                    ref={(searchElem)=>{this.searchElem=searchElem}}
                    onFocus={this.onFocus.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                    onKeyDown={this.onKeyDown.bind(this)}
               />
               {this.renderButton()}
           </div>
        )
    }

    componentWillUnmount(){
        clearTimeout(this.timer)
    }

    render(){
        return this.renderSearchBar()
    }
}