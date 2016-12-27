import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 * 拖动Drag
 * @class Drag
 * @module 辅助组件
 * @extends Component
 * @constructor
 * @show false
 * */
export default class Drag extends Component{

    static propTypes = {
        /**
         * 抓取的执行函数,对应TouchStart/TouchMove
         * @property onDrag
         * @type Function
         * */
        onDrag: PropTypes.func,
        /**
         * 放开的执行函数,对应TouchEnd
         * @property onDrop
         * @type Function
         * */
        onDrop: PropTypes.func
    };

    static defaultProps = {
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            position: {}
        }

        this.isMouseDown = false;
    }

    onTouchStart(event){
        event.stopPropagation();

        this.state.position.start = {x:event.touches[0].pageX, y: event.touches[0].pageY};
        this.state.position.move = this.state.position.start;

        this.props.onDrag(event, this.state.position);

        return false;
    }

    onMouseStart(event){
        this.isMouseDown = true;
        event.stopPropagation();

        this.state.position.start = {x:event.pageX, y: event.pageY};
        this.state.position.move = this.state.position.start;

        this.props.onDrag(event, this.state.position);

        return false;
    }

    onTouchMove(event){
        event.stopPropagation();

        this.state.position.move = {x:event.touches[0].pageX, y: event.touches[0].pageY};

        this.props.onDrag(event, this.state.position);

        return false;
    }

    onMouseMove(event){
        if(!this.isMouseDown) return;
        event.stopPropagation();

        this.state.position.move = {x:event.pageX, y: event.pageY};

        this.props.onDrag(event, this.state.position);

        return false;
    }

    onTouchEnd(event){
        event.stopPropagation();

        this.state.position.end = {x:event.changedTouches[0].pageX, y: event.changedTouches[0].pageY};
        this.state.position.start = this.state.position.move;

        this.props.onDrop(event, this.state.position);

        return false;
    }

    onMouseEnd(event){
        event.stopPropagation();

        this.state.position.end = {x:event.pageX, y: event.pageY};
        this.state.position.start = this.state.position.move;

        this.props.onDrop(event, this.state.position);
        this.isMouseDown = false;

        return false;
    }

    onTouchCancel(event){
        // 触屏取消:忽然来电话等情况
    }

    render(){
        return (
            <div {...this.props} className={classnames('ph-drag-action', this.props.className)}
                onTouchStart={(event)=>{this.onTouchStart(event)}}
                onTouchMove={(event)=>{this.onTouchMove(event)}}
                onTouchEnd={(event)=>{this.onTouchEnd(event)}}
                onTouchCancel={(event)=>{this.onTouchCancel(event)}}

                onMouseDown={(event)=>{this.onMouseStart(event)}}
                onMouseMove={(event)=>{this.onMouseMove(event)}}
                onMouseUp={(event)=>{this.onMouseEnd(event)}}
            >
                {this.props.children}
            </div>
        );
    }

}