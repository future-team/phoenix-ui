import React,{Component, PropTypes, cloneElement} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

/**
 * 辅助功能组件 - 倾听者
 * @class Whisper
 * @module Tooltip
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
        placement: PropTypes.string,
        distance: PropTypes.number
    };

    static defaultProps = {
        distance: 15,
        placement: 'bottom',
        componentTag: 'div',
        classMapping : {
        }
    };

    constructor(props, context) {
        super(props, context);

        this.visible = false;
        this._layer = document.createElement('div');
    }

    componentDidMount(){
        this.getWhisperPosition();
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
        if(this.props.onToggle) this.props.onToggle();

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
            onClose: this.onClose.bind(this)
        });
    }

    renderTarget(){
        let newTarget = this.getTarget();

        ReactDOM.unstable_renderSubtreeIntoContainer(this, newTarget, this._layer);
        document.body.appendChild(this._layer);
    }

    removeTarget(){
        ReactDOM.unmountComponentAtNode(this._layer);
    }

    render(){
        let {className, children} = this.props;

        return (
            <div {...this.props}
                className={classnames('whisper', className)}
                onClick={::this.onToggle}
                ref={(whisper)=>{this.whisper = whisper}}
            >
                {children}
            </div>
        );
    }
}
