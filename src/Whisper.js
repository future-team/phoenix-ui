import React,{PropTypes, cloneElement} from 'react';
import ReactDOM from 'react-dom';
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
 * 倾听者
 * @class Whisper
 * @module 提示组件
 * @extends Component
 * @constructor
 * @demo popover.js {展示}
 * @demo popover.js {源码}
 * @show true
 * */
export default class Whisper extends Component{

    static propTypes = {
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
         * @property onChange
         * @type Function
         * */
        onChange: PropTypes.func
    };

    static defaultProps = {
        distance: 15,
        placement: 'bottom',
        classPrefix:'whisper',
        componentTag: 'div',
        classMapping : {
        }
    };

    constructor(props, context) {
        super(props, context);

        this.visible = false;
        this._layer = document.createElement('div');

        window.addEventListener('hashchange', ()=>{ // this指向当前组件
            if(this.visible) this.onClose();
        }, false);
    }

    componentDidMount(){
        setTimeout(()=>{
            this.getWhisperPosition();
        },0);
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
        if(this.props.onChange) this.props.onChange();

        this.visible = !this.visible;

        if(this.visible){
            this.renderTarget();
        }else{
            this.removeTarget();
        }
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
