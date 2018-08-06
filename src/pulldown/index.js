import React from 'react'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import Component from '../utils/Component'
import classnames from 'classnames'
import {setPhPrefix, getClientHeight, getScrollTop, getDocumentHeight, preventDefault} from '../utils/Tool'
import Logger from '../utils/logger'

import Button from '../button'
import Icon from '../icon'

import '../style'
import 'phoenix-styles/less/modules/pullup.less'

/**
 * 加载更多组件<br/>
 * - 书写时PullDown组件在可加载列表的前面。
 * - 可通过loadCallback设置下拉的执行回调。
 * - 如果当前列表存在自定义的滚动条，需要通过getTarget传递滚动的目标，且滚动元素的子元素必须只有一个。
 * - 只有getTarget的元素(默认window)滚到最顶端的时候，才能触发下拉。
 *
 * 主要属性和接口：
 * - loadCallback:点击按钮加载或滑到底部自动加载的回调函数。
 * - getTarget: 如果当前列表存在自定义的滚动条，需要传递滚动的目标。
 * 
 * 示例：
 * ```code
 *  <div style={{height:'300px',overflow:'auto'}} ref={(list)=>this.list=list}> // 用到getTarget需要保证只有一个子元素，包裹住滚动的所有内容
 *      <div> 
 *          <List>...</List> // 可加载列表的位置
 *          <PullDown loadCallback={this.loadCallback.bind(this)}
 *              getTarget={()=>{return list;}} />
 *      </div>
 *  </div>
 * ```
 * 
 * @class PullDown
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 3.3.0
 * @demo pulldown|pulldown.js {展示}
 * @show true
 * */
const MAX_HEIGHT = 800,
      MAX_DISTANCE = 200/2

export default class PullDown extends Component{
    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'pulldown'
         * */
        classPrefix: PropTypes.string,
        /**
         * 滑到底部自动加载的回调函数，用户在该函数内自定义请求
         * @method loadCallback
         * @type Function
         * @default null
         **/
        loadCallback: PropTypes.func,
        /**
         * 如果当前列表存在自定义的滚动条，需要传递滚动的目标
         * @method getTarget
         * @type Function
         * @default null
         * @return {object} 目标元素的ref
         **/
        getTarget: PropTypes.func
    }

    static defaultProps ={
        classPrefix:'pulldown',
        classMapping : {}
    }

    constructor(props,context){ // 记得做数据没有触底的判断
        super(props,context)
        new Logger('PullDown')

        this.touchTop = true
        this.distanceY = 0
        this.start = false

        this.scrollHandle = this.scrollHandle.bind(this)
        this.scrollElem = window
    }

    scrollHandle(e){
        let {getTarget} = this.props,
            offsetTop = this.nextElem.offsetTop,
            scrollTop = getScrollTop()
        
        if(getTarget){
            scrollTop = target.scrollTop
        }
        // console.log('offsetTop', offsetTop)
        // console.log('scrollTop', scrollTop)

        if(scrollTop>0){
            this.touchTop = false
        }else{
            this.touchTop = true
        }
    }

    componentDidMount(){
        let pullDownElem = findDOMNode(this.pullDown)
        
        this.dragElem = pullDownElem.parentNode
        this.nextElem = pullDownElem.nextElementSibling
        this.addClass(this.dragElem, 'animated')
        // this.addClass(this.nextElem, 'hardware')

        this.dragEventHandle(this.dragElem)

        if(this.props.getTarget){
            setTimeout(()=>{
                this.scrollElem = this.props.getTarget()
                this.scrollElem.addEventListener('scroll', this.scrollHandle, false)
            },0);  
        }else{
            this.scrollElem.addEventListener('scroll', this.scrollHandle, false)
        }              
    }

    dragEventHandle(elem){
        this.touchStartHandle = this.touchStartHandle.bind(this)
        elem.addEventListener('touchstart', this.touchStartHandle, false)

        this.touchMoveHandle = this.touchMoveHandle.bind(this)
        elem.addEventListener('touchmove', this.touchMoveHandle, false)

        this.touchEndHandle = this.touchEndHandle.bind(this)
        elem.addEventListener('touchend', this.touchEndHandle, false)

        this.touchCancelHandle = this.touchCancelHandle.bind(this)
        elem.addEventListener('touchcancel', this.touchCancelHandle, false)
    }

    loadCallback(){
        let {loadCallback} = this.props
        
        if(loadCallback) loadCallback()
    }

    touchStartHandle(e){
        if(!this.touchTop) return
        this.start = true
        
        this.distanceY = 0
        this.starY = event.touches[0].pageY
    }

    touchMoveHandle(e){
        if(!this.touchTop || !this.start) return

        this.moveY = event.touches[0].pageY
        this.distanceY = this.moveY - this.starY
        
        if(this.distanceY<=0) return
        else preventDefault(e)
        
        this.distanceY = Math.abs(this.distanceY)
        if(this.distanceY >= MAX_DISTANCE) this.distanceY = MAX_DISTANCE

        this.transform = Math.min(1, MAX_HEIGHT/this.distanceY) * Math.min(MAX_HEIGHT, this.distanceY)
        this.dragElem.style.marginTop = this.transform+'px'
    }

    touchEndHandle(){
        if(!this.touchTop || !this.start) return
        
        this.starY = this.moveY

        this.resetDragElem()
        
        if(Math.abs(this.distanceY) <= 80 || this.distanceY<=0) return

        this.loadCallback()
        this.start = false
    }

    touchCancelHandle(){
        this.resetDragElem()
    }

    resetDragElem(){
        this.dragElem.style.marginTop = '0'
    }

    componentWillUnmount(){
        this.scrollElem.removeEventListener('scroll', this.scrollHandle, false)

        this.dragElem.removeEventListener('touchstart', this.touchStartHandle, false)
        this.dragElem.removeEventListener('touchmove', this.touchMoveHandle, false)
        this.dragElem.removeEventListener('touchend', this.touchEndHandle, false)
    }

    renderPullDown(){
        return (
            <div {...this.otherProps} 
                ref={(pullDown)=>{this.pullDown=pullDown}} 
                className={classnames(this.getProperty(true), this.props.className)}
            >
                <div className={setPhPrefix('pulldown-tip')}>
                    <Icon className='gfs-icon-loading' phIcon='loading-gray' phSize='sm' />
                </div>
            </div>
        )
    }

    render(){
        return this.renderPullDown()
    }
}