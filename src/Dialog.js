import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import Animate from './Animate';

import DialogTitle from './DialogTitle';
import DialogBody from './DialogBody';
import DialogFooter from './DialogFooter';

/**
 * 功能组件 - 弹框
 * @class Dialog
 * @module Action
 * @extends Component
 * @constructor
 * @demo dialog.js {展示}
 * @demo dialog.js {源码}
 * @show true
 * */
class Dialog extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * */
        classPrefix:PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag:PropTypes.string,
        visible: PropTypes.bool
    };

    static defaultProps = {
        visible: false,
        egSize:'',
        classPrefix:'',
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
            return <div className="dialog-shadow animated" onClick={onClose}></div>;
        }else{
            return '';
        }
    }

    renderContent(){
        if(this.props.visible){
            return (
                <div className="dialog-main animated">
                    <div className="dialog-content">
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
            console.log(child.type.name);

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
                'dialog',
                this.getProperty(),
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