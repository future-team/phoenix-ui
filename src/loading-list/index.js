import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'
import {setPhPrefix} from '../utils/Tool'

import Drag from '../drag/'
import Button from '../button/'
import Icon from '../icon/'

import './loading-list.less'

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
 * @class LoadingList
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 1.6.0
 * @demo LoadingList|loading-list.js {展示}
 * @show true
 * */

export default class LoadingList extends Component{
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
         * @property phStyle
         * @type String
         * @default 'auto'
         **/
        phMode:PropTypes.string,
        /**
         * 加载状态：0加载更多, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多
         * @property loadingStatus
         * @type Number
         * @default 1
         **/
        loadingStatus: PropTypes.number,
        /**
         * 加载5个状态的文字描述，默认["加载更多","加载中","加载成功","加载失败","没有更多"]
         * @property loadTips
         * @type Array
         * @default ["加载更多","加载中","加载成功","加载失败","没有更多"]
         **/
        loadTips: PropTypes.array,
        /**
         * 加载5个状态的style，默认["primary","info","success","error","gray"]
         * @property buttonStyles
         * @type Array
         * @default ["primary","info","success","error","gray"]
         **/
        buttonStyles: PropTypes.array,
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
        phMode: 'auto',
        loadingStatus: 1, // 0加载更多, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多
        loadTips : ["加载更多","","加载成功","加载失败","没有更多"],
        buttonStyles: ["primary","info","success","error","gray"],
        classPrefix:'loading-list',
        classMapping : {}
    };

    constructor(props,context){
        super(props,context);

        this.count = 0;
        this.handleWindowScroll = this.handleWindowScroll.bind(this);

        if(props.phMode=="auto") window.addEventListener('scroll', this.handleWindowScroll, false);
    }

    handleWindowScroll(){
        if(document.body.scrollTop >= this.loadingPage.offsetHeight + this.loadingPage.offsetTop - window.screen.height){
            if(this.props.loadingStatus==0) this.loadCallback();
        }
    }

    renderButton(){
        let {phMode, loadTips, buttonStyles, loadingStatus} = this.props;
        if(phMode=="button"){
            return (
                <Button phStyle={buttonStyles[loadingStatus]} block disabled={loadingStatus==4} 
                    onClick={this.loadCallback.bind(this)}>
                    {this.renderIcon()}
                    {loadTips[loadingStatus]}
                </Button>
            );
        }else{
            return (
                <div className={setPhPrefix('loading-page-tip')}>
                    {this.renderIcon()}
                    {loadTips[loadingStatus]}
                </div>
            );
        }
    }

    renderIcon(){
        if(this.props.loadingStatus==1){
            return <Icon className="gfs-icon-loading" phIcon="loading" />;
        }else{
            return '';
        }        
    }

    loadCallback(){
        if(this.props.loadCallback) this.props.loadCallback();
    }

    onDrag(event, position){
        if(!position || !position.start) return; // 区别react的onDrag事件

        let {phMode, loadingStatus} = this.props;
        if(phMode=="button") return;

        let startY = position.start.y, moveY = position.move.y;
        let distanceY = moveY-startY;
        if(distanceY>0) return; //只可以上拉
        
        if(Math.abs(distanceY)>30){
            // 拖拽过程中只执行一次
            if(this.count==0){
                // 初始状态和错误状态可以上拉重新请求
                if(loadingStatus==0 || loadingStatus==3) this.loadCallback();
                this.count++;
            }            
        }

        if(Math.abs(distanceY)>=200) distanceY = -200;
        
        this.loadingPageMain.style.transform = "translateY("+distanceY+"px)";
    }

    onDrop(event, position){
        if(this.props.phMode=="button") return;
        this.count = 0;
        this.loadingPageMain.style.transform = "translateY(0px)";
    }

    componentDidMount(){
        // let {loadingStatus, loadEndCallback} = this.props;
        // if(loadingStatus==2 && loadEndCallback) loadEndCallback();
    }

    componentDidUpdate(){
        let {loadingStatus, loadEndCallback} = this.props;
        if(loadingStatus==2 && loadEndCallback) loadEndCallback();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleWindowScroll, false);
    }

    render(){
        let {className, children} = this.props;

        return(
            <Drag {...this.props} className={classnames(this.getProperty(true),className,'animated')}
                onDrag={::this.onDrag} onDrop={::this.onDrop}>
                <div className={setPhPrefix('loading-page-main')} ref={(loadingPageMain)=>{this.loadingPageMain=loadingPageMain;}}>
                    <div className={setPhPrefix('loading-page-content')} ref={(loadingPage)=>{this.loadingPage=loadingPage;}}>
                        {children}
                    </div>
                    {this.renderButton()}
                </div>
            </Drag>
        )
    }
}