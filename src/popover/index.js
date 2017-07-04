import React,{PropTypes} from 'react'
import findDOMNode from 'react/lib/findDOMNode'
import ReactDOM from 'react-dom'
import Component from '../utils/Component'
import classnames from 'classnames'
import Tool from '../utils/Tool'

import './popover.less'

const SHOW_CLASS = 'show'

/**
 * 气泡组件<br/>
 * - 通过getTarget返回当前点击元素，必需。
 * - 可通过placement设置气泡的显示位置, 可选top、bottom、left、right。
 * - 当设置的位置不足够放置气泡，以下顺序顺延(top->bottom->left->right, bottom->top->left->right, left->right->top->bottom, right->left->top->bottom)。
 * - 可通过distance设置气泡到点击对象的位置。
 * - 可通过clickCallback定义气泡显隐时额外的回调函数。
 *
 * 示例:
 * ```code
 *  <Button phSize="lg" ref={(button)=>{this.button = button}}>按钮</Button>
 *  <Popover getTarget={()=>{return this.button}} placement="top">
 *      <div className="ph-popover-text">
 *          一条很长的很长的气泡提示语，为了占位存在的气泡提示语。一条很长的很长的气泡提示语，为了占位存在的气泡提示语。
 *      </div>
 *  </Popover>
 * ```
 * ```code
 *  <Button phSize="lg" ref={(button)=>{this.button1 = button}}>按钮</Button>
 *  <Popover getTarget={()=>{return this.button1}} placement="right">
 *      <ul className="ph-popover-list">
 *          <li className="ph-popover-item">未上线单店</li>
 *          <li className="ph-popover-item">未上线连锁店</li>
 *      </ul>
 *  </Popover>
 * ```
 *
 * @class Popover
 * @module 提示组件
 * @extends Component
 * @constructor
 * @since 1.0.0
 * @demo popover|popover.js {展示}
 * @show true
 * */
export default class Popover extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'popover'
         * */
        classPrefix: PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag: PropTypes.string,
        /**
         * 返回气泡的目标元素
         * @method getTarget
         * @type Function
         * */
        getTarget: PropTypes.func,
        /**
         * 气泡的位置,默认bottom
         * @property placement
         * @type String
         * */
        placement: PropTypes.string,
        /**
         * 气泡距离点击物的位置,默认5
         * @property distance
         * @type Number
         * */
        distance: PropTypes.number,
        /**
         * 气泡显隐时可执行的额外函数,自定义
         * @method clickCallback
         * @type Function
         * */
        clickCallback: PropTypes.func
    };

    static defaultProps = {
        placement: 'bottom',
        distance: 5,
        classPrefix:'popover',
        componentTag: 'div',
        classMapping : {
            'top': 'top',
            'bottom': 'bottom',
            'left': 'left',
            'right': 'right'
        }
    };

    constructor(props, context) {
        super(props, context);

        this.documentClickHandle = this.documentClickHandle.bind(this);
        this.targetClickHandle = this.targetClickHandle.bind(this)

        document.addEventListener('click', this.documentClickHandle, false);

        this.adaptePlacement = {
            'top': ['top', 'bottom', 'left', 'right'],
            'bottom': ['bottom', 'top', 'left', 'right'],
            'left': ['left', 'right', 'top', 'bottom'],
            'right': ['right', 'left', 'top', 'bottom']
        }
        this.placement = this.adaptePlacement[props.placement]
        this.placementCount = 0
    }

    componentWillReceiveProps(nextProps){
        if(this.state.visible != nextProps.visible){
            this.setState({
                visible: nextProps.visible
            });
        }        
    }

    componentDidMount(){
        // 获取点击的对象target，并绑定点击事件
        let target = this.props.getTarget()
        if(!target) Tool.warning('Popover 必须传递 getTarget[func]!')

        this.target = findDOMNode(target)
        this.target.addEventListener('click', this.targetClickHandle, false)

        // 将popover动态插入body
        this.renderPortal();

        this.bubble = findDOMNode(this.popoverMain)

        this.getTargetPosition()
    }

    renderPortal() {
        this.node = document.createElement('div');
        document.body.appendChild(this.node);

        let element = React.createElement('div', {
            className: classnames(this.getProperty(true), this.props.className),
            ref: (popover)=>{this.popover = popover}
        }, this.popoverArrow(), this.popoverMain())

        ReactDOM.render(element, this.node);
    }

    popoverArrow(){
        return <div className={Tool.setPhPrefix('popover-arrow')} ref={(popover)=>{this.popoverArrow=popover}}></div>
    }

    popoverMain(){
        return (
            <div className={Tool.setPhPrefix('popover-main')} ref={(popover)=>{this.popoverMain=popover}}>
                <div className={Tool.setPhPrefix('popover-content')}>
                    {this.props.children}
                </div>
            </div>
        )
    }

    targetClickHandle(){
        let {clickCallback} = this.props

        if(this.hasClass(this.popover, SHOW_CLASS)){
            this.removeClass(this.popover, SHOW_CLASS)
        }else{
            this.addClass(this.popover, SHOW_CLASS)
        }
        if(clickCallback) clickCallback(!!this.hasClass(this.popover, SHOW_CLASS))
    }

    documentClickHandle(event){
        let el = event.target

        if(el==this.target || Tool.contains(this.target,el) || Tool.contains(this.bubble,el)) return 
        
        this.removeClass(this.popover, SHOW_CLASS)
    }

    getTargetPosition(){
        document.body.style.position = 'relative'

        this.win = {}
        this.position = {}
        this.size = {}
        this.bubbleSize = {}

        this.win.width = parseInt(document.body.clientWidth)
        this.win.height = parseInt(document.body.clientHeight)

        this.position.x = parseInt(this.target.offsetLeft)
        this.position.y = parseInt(this.target.offsetTop)

        this.size.width = parseInt(this.target.offsetWidth)
        this.size.height = parseInt(this.target.offsetHeight)

        this.bubbleSize.width = parseInt(this.bubble.offsetWidth)
        this.bubbleSize.height = parseInt(this.bubble.offsetHeight)
        
        this.calcTooltipPosition(this.props.placement)
    }

    calcTooltipPosition(placement){
        let {distance} = this.props,
            topBottomLeft = this.position.x + this.size.width/2 - this.bubbleSize.width/2,
            leftRightTop = this.position.y + this.size.height/2 - this.bubbleSize.height/2
        
        this.style = {}

        this.placementCount ++
        let place = this.placement[this.placementCount]

        switch(placement){
            case 'top':
                this.style.top = this.position.y - this.bubbleSize.height - distance
                this.style.left = topBottomLeft

                if(this.style.top<0){
                    this.calcTooltipPosition(place)
                    return
                }
                if(this.style.left<0) this.style.left=0
                break;
            case 'bottom':
                this.style.top = this.position.y + this.size.height + distance;
                this.style.left = topBottomLeft;

                if(this.style.top>this.win.height-this.bubbleSize.height){
                    this.calcTooltipPosition(place)
                    return
                }
                if(this.style.left<0) this.style.left=0
                break;
            case 'left':
                this.style.left = this.position.x - this.bubbleSize.height - distance;
                this.style.top = leftRightTop;

                if(this.style.left<0){
                    this.calcTooltipPosition(place)
                    return
                }
                if(this.style.top<0) this.style.top=0
                break;
            case 'right':
                this.style.left = this.position.x + this.size.width + distance;
                this.style.top = leftRightTop;
                
                if(this.style.left>this.win.width-this.bubbleSize.width){
                    this.calcTooltipPosition(place)
                    return
                }
                if(this.style.top<0) this.style.top=0
                break;
            default:
                this.style.top = 0;
                this.style.left = 0;
        }

        this.calcArrowPosition(placement)
    }

    calcArrowPosition(placement){
        let {distance} = this.props,
            topBottomLeft = this.position.x + this.size.width/2,
            leftRightTop = this.position.y + this.size.height/2
        
        this.arrowStyle = {};
        
        switch(placement){
            case 'top':
                this.arrowStyle.top = this.position.y - distance;
                this.arrowStyle.left = topBottomLeft;
                break;
            case 'bottom':
                this.arrowStyle.top = this.position.y + this.size.height + distance;
                this.arrowStyle.left = topBottomLeft;
                break;
            case 'left':
                this.arrowStyle.left = this.position.x - distance;
                this.arrowStyle.top = leftRightTop;
                break;
            case 'right':
                this.arrowStyle.left = this.position.x + this.size.width + distance;
                this.arrowStyle.top = leftRightTop;
                break;
            default:
                this.arrowStyle.top = 0;
                this.arrowStyle.left = 0;
        }

        this.setPopoverStyle(placement)
    }

    setPopoverStyle(placement){
        this.popoverArrow.style.top = this.arrowStyle.top+'px'
        this.popoverArrow.style.left = this.arrowStyle.left+'px'

        this.popoverMain.style.top = this.style.top+'px'
        this.popoverMain.style.left = this.style.left+'px'

        if(this.props.placement !== placement){
            this.addClass(this.popover, Tool.setPhPrefix('popover-'+placement))
            this.removeClass(this.popover, Tool.setPhPrefix('popover-'+this.props.placement))
        }
    }

    componentWillUnmount(){
        this.target.removeEventListener('click', this.targetClickHandle, false)
        document.removeEventListener('click', this.handleDocumentClick, false);
        document.body.removeChild(this.node);
    }

    render() {
        return React.DOM.noscript();
    }
}
