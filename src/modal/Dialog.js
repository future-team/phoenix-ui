import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'
import Logger from '../utils/logger'

import Animate from '../animate'
import Icon from '../icon'

import '../style'
import 'phoenix-styles/less/modules/dialog.less'

/**
 * <h5>弹出框组件，主要包括组件:</h5>
 * <strong><a href='../classes/Dialog.html'>Dialog 基础弹框</a></strong><br/>
 * <strong><a href='../classes/Alert.html'>Alert弹框</a></strong><br>
 * <strong><a href='../classes/Prompt.html'>Prompt弹框</a></strong>
 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
 * @module 弹出框组件
 * @main 弹出框组件
 * @static
 */
/**
 * 弹框组件<br/>
 * - 由于弹框的显示操作在组件以外, 所以需要在使用时自定义`visible`、`closeCallback`函数。
 * - 通过visible设置弹框是否显示, 可选true/false, 必需。
 * - 可通过closeCallback配置点击弹框阴影部分以及弹框右上角X按钮来关闭弹框。
 * - 可通过closeButton来配置弹框右上角X按钮是否显示, 默认不显示。
 * - 默认传了closeCallback之后阴影部分就具备点击关闭弹框的按钮, 如果需要去掉该功能需要额外传shadowDisabled作为标识。
 *
 * 主要属性和接口：
 * - visible:弹框是否显示标识, 默认false不可见<br/>
 * - closeCallback:关闭弹框的功能函数<br/>
 * - closeButton:右上角关闭按钮是否显示的标识, 默认不显示<br/>
 * - shadowDisabled:阴影部分是否可点击关闭按钮, 默认传了closeCallback函数就可以关闭<br/>
 *
 * 示例:
 * ```code
 *     <Dialog visible={this.state.visible} closeCallback={::this.closeCallback} closeButton shadowDisabled>
 *         <Dialog.Title>标题标题</Dialog.Title>
 *         <Dialog.Body>
 *             <p>可自定义表格内容</p>
 *         </Dialog.Body>
 *         <Dialog.Footer>
 *             <Button hollow phSize='lg' phStyle='gray' onClick={::this.closeCallback}>取消</Button>
 *         </Dialog.Footer>
 *     </Dialog>
 * ```
 * ```code
 *     onShow(){
 *         this.setState({
 *             visible: true
 *         });
 *     }
 *     closeCallback(){
 *         this.setState({
 *             visible: false
 *         });
 *     }
 * ```
 *
 * @class Dialog
 * @module 弹出框组件
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
         * @method closeCallback
         * @type Function
         * */
        closeCallback: PropTypes.func,
        /**
         * 右上角按钮是否可见, 默认不可见
         * @property closeButton
         * @type Boolean
         * */
        closeButton: PropTypes.bool,
        /**
         * 阴影部分是否点击可关闭弹框, 默认传了closeCallback之后可关闭
         * @property shadowDisabled
         * @type Boolean
         * */
        shadowDisabled: PropTypes.bool,
    };

    static defaultProps = {
        visible: false,
        closeButton: false,
        classPrefix:'dialog',
        componentTag:'div',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context)

        new Logger('Dialog')
    }

    onShadowClose(){
        let {shadowDisabled, closeCallback} = this.props;

        if(shadowDisabled) return;
        closeCallback();
    }

    renderShadow(){
        let {visible} = this.props;

        if(visible){
            return <div className={classnames(this.setPhPrefix('shadow'), 'animated')} onClick={this.onShadowClose.bind(this)}></div>;
        }else{
            return '';
        }
    }

    renderIcon(){
        let {closeButton, closeCallback} = this.props
        
        if(closeButton){
            return <Icon phIcon='close' onClick={closeCallback} className={classnames(this.setPhPrefix('close'))} />
        }        
    }

    renderContent(){
        let {visible} = this.props

        if(visible){
            return (
                <div className={classnames(this.setPhPrefix('main'), 'animated')}>
                    <div className={classnames(this.setPhPrefix('content'), 'animated')}>
                        {this.renderIcon()}
                        {this.renderChildren()}
                    </div>
                </div>
            )
        }else{
            return ''
        }
    }

    renderChildren(){
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

    renderDialog(){
        let {componentTag:Component, className} = this.props;

        return (
            <Component {...this.otherProps} className={classnames(
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
        )
    }

    render(){
        return this.renderDialog()
    }
}

class DialogTitle extends Component{

    constructor(props, context) {
        super(props, context);
    }

    static defaultProps = {
        classPrefix:'dialog-title',
        classMapping : {}
    }

    renderDialogTitle(){
        return (
            <h2 {...this.otherProps} className={classnames(
                this.getProperty(true),
                this.props.className
            )}>
                {this.props.children}
            </h2>
        )
    }

    render(){
        return this.renderDialogTitle()
    }
}

class DialogBody extends Component{

    constructor(props, context) {
        super(props, context);
    }

    static defaultProps = {
        classPrefix:'dialog-body',
        classMapping : {}
    }

    renderDialogBody(){
        return (
            <div {...this.otherProps} className={classnames(
                this.getProperty(true),
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }

    render(){
        return this.renderDialogBody()
    }
}

class DialogFooter extends Component{

    constructor(props, context) {
        super(props, context);
    }

    static defaultProps = {
        classPrefix:'dialog-footer',
        classMapping : {}
    }

    renderDialogFooter(){
        return (
            <div {...this.otherProps} className={classnames(
                this.getProperty(true),
                this.props.className,
                'clearfix'
            )}>
                {this.props.children}
            </div>
        )
    }

    render(){
        return this.renderDialogFooter()
    }
}

Dialog.Title = DialogTitle;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;

export default Dialog;