import React,{Component, PropTypes} from 'react';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/**
 * 动画外层
 * @class Animate
 * @module 辅助组件
 * @extends Component
 * @constructor
 * @show false
 * */
export default class Animate extends Component{

    static propTypes = {
        /**
         * 动画名称,默认fade
         * @property transitionName
         * @type String
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