import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 * 拖动Drag
 * @class Drag
 * @module Basic
 * @extends Component
 * @constructor
 * @demo Swipe.js {源码}
 * @show false
 * */
export default class Drag extends Component{

    static propTypes = {

    };

    static defaultProps = {
        egSize:'',
        classPrefix:'',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            position: {}
        }
    }

    onStart(event){
        event.stopPropagation();

        this.state.position.start = {x:event.touches[0].pageX, y: event.touches[0].pageY};
        this.state.position.move = this.state.position.start;

        this.props.onDrag(event, this.state.position);

        return false;
    }

    onMove(event){
        event.stopPropagation();

        this.state.position.move = {x:event.touches[0].pageX, y: event.touches[0].pageY};
        this.props.onDrag(event, this.state.position);

        return false;
    }

    onEnd(event){
        event.stopPropagation();

        this.state.position.end = {x:event.changedTouches[0].pageX, y: event.changedTouches[0].pageY};
        this.state.position.start = this.state.position.move;

        this.props.onDrop(event, this.state.position);

        return false;
    }

    onCancel(event){
        // 触屏取消:忽然来电话等情况
    }

    render(){
        return (
            <div {...this.props} className={classnames('drag-action', this.props.className)}
                onTouchStart={(event)=>{this.onStart(event)}}
                onTouchMove={(event)=>{this.onMove(event)}}
                onTouchEnd={(event)=>{this.onEnd(event)}}
                onTouchCancel={(event)=>{this.onCancel(event)}}
            >
                {this.props.children}
            </div>
        );
    }

}