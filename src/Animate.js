import React,{Component, PropTypes} from 'react';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/**
 * 动画外层组件<br/>
 * - 用`react-addons-css-transition-group`实现, 所以使用时需要额外安装该模块。
 * - 使用时需要在子元素增加animated类名实现动画效果, animated定义的是过渡的duration和fill-mode, 默认300ms, 完全可以自定义。
 * - 可通过transitionName设置动画名称, 可选fade、slide-top、slide-bottom(还将补充), 默认fade。
 * - 可通过transitionEnterTimeout设置进入延迟时间。
 * - 可通过transitionLeaveTimeout设置离开延迟时间。
 *
 * 示例:
 * ```code
 *     <Animate className='popup-content' transitionName='slide-top'>
 *         {this.renderPopup()}
 *     </Animate>
 * ```
 * ```code
 *     renderPopup(){
 *         let {visible,children,className} = this.props;
 *         if(visible){
 *             return <div {...this.props} className={'popup-main', 'animated', className)}>{children}</div>;
 *         }else{
 *             return '';
 *         }
 *     }
 * ```
 *
 * @class Animate
 * @module 辅助组件
 * @extends Component
 * @constructor
 * @since 1.0.0
 * @demo animate|animate.js {展示}
 * @show true
 * */

export default class Animate extends Component{

    static propTypes = {
        /**
         * 动画名称,默认fade
         * @property transitionName
         * @type String
         * @default 'fade'
         * */
        transitionName: PropTypes.string,
        /**
         * 动画进入延迟时间
         * @property transitionEnterTimeout
         * @type Number
         * */
        transitionEnterTimeout: PropTypes.number,
        /**
         * 动画退出延迟时间
         * @property transitionLeaveTimeout
         * @type Number
         * */
        transitionLeaveTimeout: PropTypes.number
    };

    static defaultProps = {
        transitionName: 'fade',
        transitionEnterTimeout: 100,
        transitionLeaveTimeout: 300
    };

    constructor(props, context) {
        super(props, context);
    }

    render(){
        let {transitionName, transitionEnterTimeout, transitionLeaveTimeout, className, children} = this.props;
        return (
            <ReactCSSTransitionGroup {...this.props}
                transitionName={transitionName}
                transitionEnterTimeout={transitionEnterTimeout}
                transitionLeaveTimeout={transitionLeaveTimeout}
            >
                {children}
            </ReactCSSTransitionGroup>
        );
    }
}