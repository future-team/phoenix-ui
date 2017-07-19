import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'

import ButtonGroup from '../button-group'
import Button from '../button'
import Dialog from './Dialog'

/**
 * Alert组件<br/>
 * - 由于弹框的显示操作在组件以外, 所以需要在使用时自定义`visible`、`closeCallback`函数。
 * - 可通过title设置弹出框标题，content设置内容，buttons设置尾部按钮。(相对Dialog新增参数)
 * - 默认有[确定]1个按钮，点击[确定]默认的执行函数是closeCallback直接关闭。
 * - 通过visible设置弹框是否显示, 可选true/false, 必需。
 * - 可通过closeCallback配置点击弹框阴影部分以及弹框右上角X按钮来关闭弹框。
 * - 可通过closeButton来配置弹框右上角X按钮是否显示, 默认不显示。
 * - 默认传了closeCallback之后阴影部分就具备点击关闭弹框的按钮, 如果需要去掉该功能需要额外传shadowDisabled作为标识。
 *
 * 主要属性和接口：
 * - title:弹框的标题，必需。
 * - content:弹框的内容，必需。
 * - buttons:尾部按钮的内容，必需是数组的形式，text标识填充的问题，phStyle表示主题，onHandle表示点击的回调，otherProps传递按钮的其他属性，如{active:true, block:true, hollow: true}。
 * - visible:弹框是否显示标识, 默认false不可见。
 * - closeCallback:关闭弹框的功能函数。
 * - closeButton:右上角关闭按钮是否显示的标识, 默认不显示。
 * - shadowDisabled:阴影部分是否可点击关闭按钮, 默认传了closeCallback函数就可以关闭。
 *
 * 示例:
 * ```code
 *      const buttons = [
            {text: '取消', phStyle: 'gray', otherProps: {hollow: true}}, // text默认'确定', phStyle默认primary，onHandle默认执行closeCallback
            {text: '确定', onHandle: this.confirmCallback}
        ];
        ...
 *      <Alert closeButton shadowDisabled visible={this.state.visible} closeCallback={this.closeCallback.bind(this,'visible')} 
 *          title='这是标题' content='这里是弹出框的内容...' buttons={buttons} />
 * ```
 *
 * @class Alert
 * @module 弹出框组件
 * @extends Component
 * @constructor
 * @since 1.5.0
 * @demo alert|alert.js {展示}
 * @show true
 * */

export default class Alert extends Component{

    static propTypes = {
        /**
         * 标题
         * @property title
         * @type String|Element
         * */
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        /**
         * 内容
         * @property title
         * @type String|Element
         * */
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        /**
         * 尾部按钮
         * @property buttons
         * @type Array
         * */
        buttons: PropTypes.array,
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
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);

        this.buttons = [
            {text: '确定', onHandle: props.closeCallback}
        ];
    }

    renderButtons(){
        let {buttons, closeCallback} = this.props;
        if(buttons) this.buttons = buttons;
        let buttonsType = this.buttons.length>2;
        
        return (
            <ButtonGroup phType={buttonsType ? 'tacked':'default'} clickable={false}>
                {
                    this.buttons.map((button,index) => {
                        return <Button hollow key={index} {...button.otherProps} phSize='lg' phStyle={button.phStyle || 'primary'} block={buttonsType}
                            onClick={button.onHandle || closeCallback}>{button.text || '确定'}</Button>
                    })
                }
            </ButtonGroup>
        );
    }

    renderAlert(){
        let {visible, closeCallback, title, content, closeButton, shadowDisabled} = this.props;

        return (
            <Dialog className={this.setPhPrefix('dialog-alert',true)} visible={visible} closeCallback={closeCallback} closeButton={closeButton} shadowDisabled={shadowDisabled}>
                <Dialog.Title>{title}</Dialog.Title>
                <Dialog.Body>{content}</Dialog.Body>
                <Dialog.Footer>{this.renderButtons()}</Dialog.Footer>
            </Dialog>
        )
    }

    render(){
        return this.renderAlert()
    }
}
