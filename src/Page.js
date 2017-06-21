import React,{Component, PropTypes} from 'react';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/**
 * 动画外层组件<br/>
 * - 使用时需要在子元素增加animated类名实现动画效果, animated定义的是过渡的duration和fill-mode, 默认300ms, 完全可以自定义。
 * 
 *
 * 示例:
 * ```code
 *     <Animate className='popup-content' transitionName='slide-top'>
 *         {this.renderPopup()}
 *     </Animate>
 * ```
 *
 * @class Page
 * @module 布局组件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo page|page.js {展示}
 * @show true
 * */

export default class Page extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'page'
         * */
        classPrefix: PropTypes.string,
    };

    static defaultProps ={
        classPrefix:'page',
        classMapping : {}
    };

    constructor(props,context){
        super(props,context);
    }

    render(){
        return(
            <div className={classnames(
               this.getProperty(true),
               this.props.className
           )}>
               {this.props.children}
           </div>
        )
    }
}