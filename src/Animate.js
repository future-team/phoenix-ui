import React,{Component, PropTypes} from 'react';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/**
 * 动画外层
 * @class Animate
 * @module Action
 * @extends Component
 * @constructor
 * @show false
 * */
export default class Animate extends Component{

    static propTypes = {
        transitionName: PropTypes.string
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