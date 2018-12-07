import React,{PropTypes, cloneElement} from 'react';
import ReactDOM from 'react/lib/ReactDOM';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 * <h5>提示模块，主要包括一下两个组件:</h5>
 * <strong><a href='../classes/Whisper.html'>Whisper</a></strong><br/>
 * <strong><a href='../classes/Popover.html'>Popover</a></strong><br>
 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
 * @module 提示组件
 * @main 提示组件
 * @static
 *
 */

/**
 * 倾听者组件<br/>
 * - 配合提示组件使用, 通过target设置显示的目标。
 * - 可通过placement设置目标物的显示位置, 可选top、bottom、left、right、top left、top right、bottom left、bottom right。
 * - 可通过distance设置目标物到点击对象(倾听者)的位置。
 * - 可通过onTargetChange定义目标物显隐时额外的回调函数。
 *
 * 主要属性和接口：
 * - target:目标物。
 * - placement:目标物的显示位置, 默认bottom。
 * - distance:目标物到点击对象(倾听者)的位置, 默认15。
 * - onTargetChange:目标物显隐时额外的回调函数。
 *
 * 示例:
 * ```code
 *     const popover = ( // 可以通过style自定义位置
 *         <Popover>
 *             <ul className="ph-popover-list">
 *                 <li className="ph-popover-item">未上线单店</li>
 *                 <li className="ph-popover-item">未上线连锁店</li>
 *             </ul>
 *         </Popover>
 *     );
 * ```
 * ```code
 *     <Whisper placement="top" onTargetChange={()=>{console.log('气泡出现消失时额外的执行函数');}} target={popover} distance={10} >Top</Whisper>
 * ```
 *
 * @class Whisper
 * @module 提示组件
 * @extends Component
 * @constructor
 * @since 1.0.0
 * @demo popover|popover.js {展示}
 * @show true
 * */
export default class Whisper extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'whisper'
         * */
        classPrefix: PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag: PropTypes.string,
        /**
         * 显示的目标气泡
         * @property target
         * @type Object
         * */
        target: PropTypes.object,
        /**
         * 气泡的位置,默认bottom
         * @property placement
         * @type String
         * */
        placement: PropTypes.string,
        /**
         * 气泡距离点击物的位置,默认15
         * @property distance
         * @type Number
         * */
        distance: PropTypes.number,
        /**
         * 气泡显隐时可执行的额外函数,自定义
         * @method onTargetChange
         * @type Function
         * */
        onTargetChange: PropTypes.func
    };

    static defaultProps = {
        distance: 15,
        placement: 'bottom',
        classPrefix:'whisper',
        componentTag: 'div',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);

        this.visible = false;
        this._layer = document.createElement('div');
    }

    componentDidMount(){
        // setTimeout(()=>{
        //     this.getWhisperPosition();
        // },0);
    }

    getWhisperPosition(){
        this.position = {};
        this.size = {};

        this.position.x = parseInt(this.whisper.offsetLeft);
        this.position.y = parseInt(this.whisper.offsetTop);

        this.size.width = parseInt(this.whisper.offsetWidth);
        this.size.height = parseInt(this.whisper.offsetHeight);

        this.calcTooltipPosition();
    }

    calcTooltipPosition(){
        const ARROW_SIZE = this.props.distance;
        let winWidth = parseInt(document.body.clientWidth),
            winHeight = parseInt(document.body.clientHeight);

        document.body.style.position = 'relative';
        this.style = {};

        switch(this.props.placement){
            case 'top':
                this.style.bottom = winHeight - this.position.y + ARROW_SIZE;
                this.style.left = this.position.x + this.size.width/2;
                break;
            case 'bottom':
                this.style.top = this.position.y + this.size.height + ARROW_SIZE;
                this.style.left = this.position.x + this.size.width/2;
                break;
            case 'left':
                this.style.right = winWidth - this.position.x + ARROW_SIZE;
                this.style.top = this.position.y + this.size.height/2;
                break;
            case 'right':
                this.style.left = this.position.x + this.size.width + ARROW_SIZE;
                this.style.top = this.position.y + this.size.height/2;
                break;
            case 'top left':
                this.style.bottom = winHeight - this.position.y + ARROW_SIZE;
                this.style.left = this.position.x;
                break;
            case 'top right':
                this.style.bottom = winHeight - this.position.y + ARROW_SIZE;
                this.style.right = winWidth - this.position.x - this.size.width;
                break;
            case 'bottom left':
                this.style.top = this.position.y + this.size.height + ARROW_SIZE;
                this.style.left = this.position.x;
                break;
            case 'bottom right':
                this.style.top = this.position.y + this.size.height + ARROW_SIZE;
                this.style.right = winWidth - this.position.x - this.size.width;
                break;
            default:
                this.style.top = 0;
                this.style.left = 0;
        }
    }

    onToggle(){
        this.visible = !this.visible;

        if(this.visible){
            this.getWhisperPosition();
            this.renderTarget();
        }else{
            this.removeTarget();
        }

        if(this.props.onTargetChange) this.props.onTargetChange();
    }

    onClose(){
        this.visible = false;
        this.removeTarget();
    }

    getTarget(){
        return cloneElement(this.props.target, {
            styles: this.style,
            placement: this.props.placement,
            onClose: this.onClose.bind(this),
            whisper: this.whisper,
            setVisible: this.setVisible
        });
    }

    renderTarget(){
        let newTarget = this.getTarget();

        ReactDOM.unstable_renderSubtreeIntoContainer(this, newTarget, this._layer);
        document.body.appendChild(this._layer);
    }

    removeTarget(){
        ReactDOM.unmountComponentAtNode(this._layer);
        document.body.removeChild(this._layer);
    }

    componentWillUnmount(){
        if(this.visible) this.onClose();
    }

    render(){
        let {className, children} = this.props;

        return (
            <div {...this.props}
                className={classnames(this.getProperty(true), className)}
                onClick={::this.onToggle}
                ref={(whisper)=>{this.whisper = whisper}}
            >
                {children}
            </div>
        );
    }
}
