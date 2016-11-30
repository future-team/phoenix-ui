import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import Animate from './Animate';

/**
 * 功能组件-弹框
 * @class Popup
 * @module Action
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
        visible: PropTypes.bool
    };

    static defaultProps = {
        visible: false,
        align: 'top',
        componentTag:'div',
        classMapping : {
            'top': 'popup-top',
            'bottom': 'popup-bottom'
        }
    };

    constructor(props, context) {
        super(props, context);
    }

    renderShadow(){
        let {visible, onClose} = this.props;

        if(visible){
            return <div className="popup-shadow animated" onClick={onClose}></div>;
        }else{
            return '';
        }
    }

    renderPopup(){
        let {visible,children,className} = this.props;

        if(visible){
            return <div {...this.props} className={classnames('popup-main', 'animated', className)}>{children}</div>;
        }else{
            return '';
        }
    }

    render(){
        let {componentTag:Component, className} = this.props;

        return (
            <Component {...this.props} className={classnames(
                'popup',
                this.getProperty(),
                className
            )}>
                <Animate>
                    {this.renderShadow()}
                </Animate>
                <Animate className='popup-content' transitionName={`slide-${this.props.align}`}>
                    {this.renderPopup()}
                </Animate>
            </Component>
        );
    }
}
