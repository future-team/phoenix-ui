import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import Animate from './Animate';
import {setPhoenixPrefix} from './utils/Tool';

/**
 * 弹框组件<br/>
 * - 由于弹框的显示操作在组件以外, 所以需要在使用时自定义visible、onShow、onClose函数。
 * - 通过visible设置弹框是否显示, 可选true/false, 必需。
 * - 可通过onClose配置点击弹框阴影部分以及弹框右上角X按钮来关闭弹框。
 * - 可通过closeButton来配置弹框右上角X按钮是否显示, 默认不显示。
 * - 默认传了onClose之后阴影部分就具备点击关闭弹框的按钮, 如果需要去掉该功能需要额外传shadowDisabled作为标识。
 *
 * 主要属性和接口：
 * - visible:弹框是否显示标识, 默认false不可见<br/>
 * - onClose:关闭弹框的功能函数<br/>
 * - closeButton:右上角关闭按钮是否显示的标识, 默认不显示<br/>
 * - shadowDisabled:阴影部分是否可点击关闭按钮, 默认传了onClose函数就可以关闭<br/>
 *
 * 示例:
 * ```code
 *     <Dialog visible={this.state.visible} onClose={::this.onClose} closeButton shadowDisabled>
 *         <Dialog.Title>标题标题</Dialog.Title>
 *         <Dialog.Body>
 *             <p>可自定义表格内容</p>
 *         </Dialog.Body>
 *         <Dialog.Footer>
 *             <Button hollow phSize="lg" phStyle="gray" onClick={::this.onClose}>取消</Button>
 *         </Dialog.Footer>
 *     </Dialog>
 * ```
 * ```code
 *     onShow(){
 *         this.setState({
 *             visible: true
 *         });
 *     }
 *     onClose(){
 *         this.setState({
 *             visible: false
 *         });
 *     }
 * ```
 *
 * @class Dialog
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 0.4.0
 * @demo dialog|dialog.js {展示}
 * @show true
 * */

class Dialog extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'dialog'
         * */
        classPrefix: PropTypes.string,
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
        visible: PropTypes.bool,
        /**
         * 关闭弹框的执行函数
         * @method onClose
         * @type Function
         * */
        onClose: PropTypes.func,
        /**
         * 右上角按钮是否可见, 默认不可见
         * @property closeButton
         * @type Boolean
         * */
        closeButton: PropTypes.bool,
        /**
         * 阴影部分是否点击可关闭弹框, 默认传了onClose之后可关闭
         * @property shadowDisabled
         * @type Boolean
         * */
        shadowDisabled: PropTypes.bool,
    };

    static defaultProps = {
        visible: false,
        classPrefix:'dialog',
        componentTag:'div',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);
    }

    onShadowClose(){
        let {shadowDisabled, onClose} = this.props;

        if(shadowDisabled) return;
        onClose();
    }

    renderShadow(){
        let {visible} = this.props;

        if(visible){
            return <div className={classnames(setPhoenixPrefix("dialog-shadow"), "animated")} onClick={::this.onShadowClose}></div>;
        }else{
            return '';
        }
    }

    renderContent(){
        let {visible, closeButton, onClose} = this.props;

        if(visible){
            return (
                <div className={classnames(setPhoenixPrefix("dialog-main"), "animated")}>
                    <div className={classnames(setPhoenixPrefix("dialog-content"), "animated")}>
                        <a href="javascript:;" onClick={onClose} className={classnames(
                            setPhoenixPrefix("dialog-close"),
                            closeButton ? "show":"hide",
                            "ph-iconfont iconfont icon-close"
                        )}></a>
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

class DialogTitle extends Component{

    constructor(props, context) {
        super(props, context);
    }

    render(){
        return (
            <h2 {...this.props} className={classnames(
                setPhoenixPrefix('dialog-title'),
                this.props.className
            )}>
                {this.props.children}
            </h2>
        );
    }
}

class DialogBody extends Component{

    constructor(props, context) {
        super(props, context);
    }

    render(){
        return (
            <div {...this.props} className={classnames(
                setPhoenixPrefix('dialog-body'),
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}

class DialogFooter extends Component{

    constructor(props, context) {
        super(props, context);
    }

    render(){
        return (
            <div {...this.props} className={classnames(
                setPhoenixPrefix('dialog-footer'),
                this.props.className,
                'clearfix'
            )}>
                {this.props.children}
            </div>
        );
    }
}

Dialog.Title = DialogTitle;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;

export default Dialog;