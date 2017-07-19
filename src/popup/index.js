import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'
import Animate from '../animate/'

import '../style'
import 'phoenix-styles/less/modules/popup.less'

/**
 * 弹层组件<br/>
 * - 由于弹层的显示操作在组件以外, 所以需要在使用时自定义visible、onShow、closeCallback函数。
 * - 通过align设置碳层弹出的位置, 可选top/bottom。
 * - 可通过closeCallback配置点击弹层阴影部分来关闭弹层。
 *
 * 主要属性和接口：
 * - visible:弹层是否显示标识, 默认false不可见
 * - closeCallback:关闭弹层的功能函数
 * - align:弹层的位置, 默认top
 *
 * 示例:
 * ```code
 *     <Popup align='top' visible={this.state.visible} closeCallback={::this.closeCallback}>
 *         <ul className='ph-popup-list'>
 *             <li className='ph-popup-item'>未上线单店</li>
 *             <li className='ph-popup-item'>未上线连锁店</li>
 *         </ul>
 *     </Popup>
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
 * @class Popup
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 0.4.0
 * @demo popup|popup.js {展示}
 * @show true
 * */

export default class Popup extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'popup'
         * */
        classPrefix: PropTypes.string,
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
         * @method closeCallback
         * @type Function
         * */
        closeCallback: PropTypes.func
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
        let {visible, closeCallback} = this.props;

        if(visible){
            return <div className={classnames(this.setPhPrefix('shadow'),'animated')} onClick={closeCallback}></div>;
        }else{
            return '';
        }
    }

    renderContent(){
        let {visible,children,className} = this.props;

        if(visible){
            return <div {...this.props} className={classnames(this.setPhPrefix('content'), 'animated', className)}>{children}</div>;
        }else{
            return '';
        }
    }

    renderPopup(){
        let {componentTag:Component, className} = this.props;

        return (
            <Component {...this.props} className={classnames(
                this.getProperty(true),
                className
            )}>
                <Animate>
                    {this.renderShadow()}
                </Animate>
                <Animate className={this.setPhPrefix('main')} transitionName={`slide-${this.props.align}`}>
                    {this.renderContent()}
                </Animate>
            </Component>
        )
    }

    render(){
        return this.renderPopup()
    }
}
