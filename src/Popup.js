import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';
import Animate from './Animate';

/**
 * 弹层
 * @class Popup
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @demo popup.js {展示}
 * @demo popup.js {源码}
 * @show true
 * */
export default class Popup extends Component{

    static propTypes = {
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag: PropTypes.string,
        /**
         * 是否可见标识
         * @property visible
         * @type Boolean
         * */
        visible: PropTypes.bool,
        /**
         * 弹层的位置,默认top
         * @property align
         * @type String
         * */
        align: PropTypes.string,
        /**
         * 关闭的执行函数
         * @property onClose
         * @type Function
         * */
        onClose: PropTypes.func
    };

    static defaultProps = {
        visible: false,
        align: 'top',
        classPrefix:'popup',
        componentTag:'div',
        classMapping : {
            'top': 'top',
            'bottom': 'bottom'
        }
    };

    constructor(props, context) {
        super(props, context);
    }

    renderShadow(){
        let {visible, onClose} = this.props;

        if(visible){
            return <div className={classnames(setPhoenixPrefix("popup-shadow"),"animated")} onClick={onClose}></div>;
        }else{
            return '';
        }
    }

    renderPopup(){
        let {visible,children,className} = this.props;

        if(visible){
            return <div {...this.props} className={classnames(setPhoenixPrefix('popup-main'), 'animated', className)}>{children}</div>;
        }else{
            return '';
        }
    }

    render(){
        let {componentTag:Component, className} = this.props;

        return (
            <Component {...this.props} className={classnames(
                this.getProperty(true),
                className
            )}>
                <Animate>
                    {this.renderShadow()}
                </Animate>
                <Animate className={setPhoenixPrefix('popup-content')} transitionName={`slide-${this.props.align}`}>
                    {this.renderPopup()}
                </Animate>
            </Component>
        );
    }
}
