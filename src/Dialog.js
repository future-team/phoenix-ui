import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import Animate from './Animate';
import {setPhoenixPrefix} from './utils/Tool';

import DialogTitle from './DialogTitle';
import DialogBody from './DialogBody';
import DialogFooter from './DialogFooter';

/**
 * 弹框
 * @class Dialog
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @demo dialog.js {展示}
 * @demo dialog.js {源码}
 * @show true
 * */
class Dialog extends Component{

    static propTypes = {
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag:PropTypes.string,
        /**
         * 是否可见标识
         * @property visible
         * @type Boolean
         * */
        visible: PropTypes.bool
    };

    static defaultProps = {
        visible: false,
        classPrefix:'dialog',
        componentTag:'div',
        classMapping : {
        }
    };

    constructor(props, context) {
        super(props, context);
    }

    renderShadow(){
        let {visible, onClose} = this.props;

        if(visible){
            return <div className={classnames(setPhoenixPrefix("dialog-shadow"), "animated")} onClick={onClose}></div>;
        }else{
            return '';
        }
    }

    renderContent(){
        if(this.props.visible){
            return (
                <div className={classnames(setPhoenixPrefix("dialog-main"), "animated")}>
                    <div className={classnames(setPhoenixPrefix("dialog-content"), "animated")}>
                        {this.renderDialog()}
                    </div>
                </div>
            );
        }else{
            return '';
        }
    }

    renderDialog(){
        let newChildren = [];
        let {visible, children} = this.props;

        React.Children.forEach(children, function(child, index){
            // console.log(child.type.name);

            newChildren.push(React.cloneElement(child,{
                key: index,
                visible: visible
            }));
        });

        return newChildren;
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
                <Animate>
                    {this.renderContent()}
                </Animate>
            </Component>
        );
    }
}

Dialog.Title = DialogTitle;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;

export default Dialog;