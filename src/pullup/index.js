import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'
import {setPhPrefix} from '../utils/Tool'

import Drag from '../drag/'
import Button from '../button/'
import Icon from '../icon/'

// import './loading-list.less'

/**
 * 加载更多组件<br/>
 * - 通过phMode设置加载更多的模式，有点击按钮加载更多，以及滑到最底端自动加载，可选 [button,auto] 2种参数。
 * - 通过loadingStatus设置当前状态，包括 0加载更多, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多。
 * - 可通过loadTips设置按钮文字和状态提示语，默认["加载更多","加载中","加载成功","加载失败","没有更多"]，分别对应loadingStatus的状态。
 * - 可通过buttonStyles设置按钮的样式，如果当前phMode为auto设置是看不到效果的，默认["primary","info","success","error","gray"]，分别对应loadingStatus的状态。
 * - 可通过loadCallback设置点击按钮加载或滑到底部自动加载的回调函数。
 * - 可通过loadEndCallback设置每次加载结束的回调函数。
 *
 * 主要属性和接口：
 * - phMode:加载更多的模式，默认auto。
 * - loadingStatus:当前状态:0加载更多, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多，默认1。
 * - loadTips:按钮文字和状态提示语，默认["加载更多","加载中","加载成功","加载失败","没有更多"]。
 * - buttonStyles:按钮的样式，默认["primary","info","success","error","gray"]。
 * - loadCallback:点击按钮加载或滑到底部自动加载的回调函数。
 * - loadEndCallback:每次加载结束的回调函数。
 * 
 * 示例：
 * ```code
 *  <LoadingList phMode="auto" loadingStatus={this.state.loadingStatus} 
 *      loadTips={["点击加载更多","加载中...","加载成功！","加载失败！","没有更多"]} 
 *      buttonStyles={["primary","gray","success","danger","gray"]} 
 *      loadCallback={::this.loadCallback} loadEndCallback={::this.loadEndCallback}>
 *          ...
 *  </LoadingList>
 * ```
 * 
 * @class PullUp
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo pullup|pullup.js {展示}
 * @show true
 * */

export default class PullUp extends Component{
    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'loading-list'
         * */
        classPrefix: PropTypes.string,
        /**
         * 加载更多的模式，可选[button,auto], 默认auto
         * @property mode
         * @type String
         * @default 'auto'
         **/
        mode:PropTypes.string,
        /**
         * 加载状态：0加载更多, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多
         * @property status
         * @type Number
         * @default 1
         **/
        status: PropTypes.number,
        /**
         * 加载5个状态的文字描述，默认["加载更多","加载中","加载成功","加载失败","没有更多"]
         * @property tips
         * @type Array
         * @default ["加载更多","加载中","加载成功","加载失败","没有更多"]
         **/
        tips: PropTypes.array,
        /**
         * 加载5个状态的style，默认["primary","info","success","error","gray"]
         * @property btnStyle
         * @type Array
         * @default ["primary","info","success","error","gray"]
         **/
        btnStyle: PropTypes.array,
        /**
         * 点击按钮加载或滑到底部自动加载的回调函数，用户在该函数内自定义请求
         * @method loadCallback
         * @type Function
         * @default null
         **/
        loadCallback: PropTypes.func,
        /**
         * 每次加载结束的回调函数
         * @method loadEndCallback
         * @type Function
         * @default null
         **/
        loadEndCallback: PropTypes.func
    };

    static defaultProps ={
        mode: 'auto',
        status: 4, // 0加载更多, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多
        tips : ["加载更多","","加载成功","加载失败","没有更多"],
        btnStyle: ["primary","info","success","error","gray"],
        classPrefix:'pullup',
        classMapping : {}
    };

    constructor(props,context){
        super(props,context)

        this.scrollHandle = this.scrollHandle.bind(this)
        window.addEventListener('scroll', this.scrollHandle, false)

        // document.addEventListener('touchstart')
    }

    scrollHandle(){
        this.bodyTop = document.body.scrollTop
        if(!this.bodyHeight) this.bodyHeight = document.body.offsetHeight
        if(!this.pullTop) this.pullTop = this.pullUp.offsetTop
        if(!this.pullHeight) this.pullHeight = this.pullUp.offsetHeight

        if(this.bodyTop+this.bodyHeight >= this.pullTop+this.pullHeight){

        }

    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollHandle, false)
    }

    renderPullUp(){
        if(this.props.mode=='auto'){
            return this.renderAutoPullUp()
        }else{
            return this.renderButtonPullUp()
        }
    }

    renderAutoPullUp(){
        let {tips, status} = this.props
        return (
            <div className={setPhPrefix('loading-page-tip')}>
                {this.renderIcon()}
                {tips[status]}
            </div>
        )
    }

    renderButtonPullUp(){
        let {tips, btnStyle, status} = this.props
        return (
            <Button phStyle={btnStyle[status]} block disabled={status==4} 
                    onClick={this.loadCallback.bind(this)}>
                    {this.renderIcon()}
                    {tips[status]}
            </Button>
        )
    }

    renderIcon(){
        if(this.props.status==1){
            return <Icon className="gfs-icon-loading" phIcon="loading" />;
        }    
    }

    render(){
        let {className, children} = this.props;

        return (
            <div ref={(pullUp)=>{this.pullUp=pullUp}}>{this.renderPullUp()}</div>
        )
    }
}