import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';
import Animate from './Animate';

/**
 * 弹层组件<br/>
 * - 由于弹层的显示操作在组件以外, 所以需要在使用时自定义visible、onShow、onClose函数。
 * - 通过align设置碳层弹出的位置, 可选top/bottom。
 * - 可通过onClose配置点击弹层阴影部分来关闭弹层。
 *
 * 主要属性和接口：
 * - visible:弹层是否显示标识, 默认false不可见
 * - onClose:关闭弹层的功能函数
 * - align:弹层的位置, 默认top
 *
 * 示例:
 * ```code
 *     <Popup align="top" visible={this.state.visible} onClose={::this.onClose}>
 *         <ul className="ph-popup-list">
 *             <li className="ph-popup-item" onClick={::this.onClose}>未上线单店</li>
 *             <li className="ph-popup-item" onClick={::this.onClose}>未上线连锁店</li>
 *         </ul>
 *     </Popup>
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
         * @method onClose
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
            return <div {...this.props} className={classnames(setPhoenixPrefix('popup-content'), 'animated', className)}>{children}</div>;
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
                <Animate className={setPhoenixPrefix('popup-main')} transitionName={`slide-${this.props.align}`}>
                    {this.renderPopup()}
                </Animate>
            </Component>
        );
    }
}
