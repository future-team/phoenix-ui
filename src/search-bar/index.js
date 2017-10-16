import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'
import Logger from '../utils/logger'

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
 * - 可通过showButton设置当前按钮是否显示。
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
         * @param {string} value 输入框的值
         * @type Function
         * */
        focusCallback: PropTypes.func,
        /**
         * 失焦的回调
         * @method blurCallback
         * @param {string} value 输入框的值
         * @type Function
         * */
        blurCallback: PropTypes.func,
        /**
         * 搜索的回调
         * @method queryCallback
         * @param {string} value 输入框的值
         * @type Function
         * */
        queryCallback: PropTypes.func,
        /**
         * 点击按钮的回调
         * @method clickCallback
         * @param {string} value 输入框的值
         * @type Function
         * */
        clickCallback: PropTypes.func,
        /**
         * 当前是否显示按钮
         * @property showButton
         * @type Boolean
         * @default undefined
         * */
        showButton: PropTypes.bool
    };

    static defaultProps = {
        buttonText: '取消',
        placeholder: '搜索',
        classPrefix:'search-bar',
        classMapping : { 
        }
    };

    constructor(props,context){
        super(props,context)
        new Logger('Searchbar')

        this.focus = false

        // this.state = {
        //     value: props.value || ''
        // }

        this.timer = null
    }

    componentDidMount(){
        if(this.searchElem.getValueCallback()) this.dealClass(true)
    }

    componentWillReceiveProps(nextProps){
        let o = {}
        
        // if(nextProps.value!==undefined && nextProps.value !== this.state.value) o.value = nextProps.value
        if(nextProps.showButton!==undefined && nextProps.showButton !== this.focus){
            clearTimeout(this.timer)
            this.dealClass(nextProps.showButton)
        } 
        
        // this.setState(o)
    }

    renderButton(){
        let {buttonText} = this.props
        
        return <Button type="button" phStyle='link' onClick={this.buttonHandle.bind(this)} ref={(button)=>{this.button=button}}>{buttonText}</Button>
    }

    buttonHandle(){
        let {showButton, clickCallback} = this.props

        this.focus = showButton || false
        this.dealClass(this.focus)
        
        if(clickCallback) clickCallback(this.searchElem.getValueCallback())
    }

    onFocus(){
        let {showButton, focusCallback} = this.props

        this.focus = showButton==false? false:true

        if(focusCallback) focusCallback(this.searchElem.getValueCallback())
        
        this.dealClass(this.focus)
    }

    onBlur(){
        let {showButton, blurCallback} = this.props

        this.focus = showButton || !!this.searchElem.getValueCallback()

        if(blurCallback) blurCallback(this.searchElem.getValueCallback())
        
        // this.timer = setTimeout(()=>{
        //     this.dealClass(this.focus) 
        // },0)
        this.dealClass(this.focus)
    }

    onKeyDown(e){
        let {queryCallback} = this.props

        if(e.keyCode == '13'){
            if(queryCallback) queryCallback(this.searchElem.getValueCallback())
        }
    }

    dealClass(focus){
        if(focus){
            this.searchBar.classList.add(this.setPhPrefix('focus'))
        }else{
            this.searchBar.classList.remove(this.setPhPrefix('focus'))
        }  
    }

    renderSearchBar(){
        let {className, placeholder, style} = this.props
        
        return(
            <form action="javascript:;">
                <div className={classnames(
                    this.getProperty(true),
                    className
                )} style={this.getStyles(style)} ref={(searchBar)=>{this.searchBar = searchBar}}>
                    <Input {...this.otherProps} type='search' phIcon='search' placeholder={placeholder} clear 
                            ref={(searchElem)=>{this.searchElem=searchElem}}
                            onFocus={this.onFocus.bind(this)}
                            onBlur={this.onBlur.bind(this)}
                            onKeyDown={this.onKeyDown.bind(this)}
                    />
                    {this.renderButton()}
                </div>
           </form>
        )
    }

    componentWillUnmount(){
        clearTimeout(this.timer)
    }

    render(){
        return this.renderSearchBar()
    }
}