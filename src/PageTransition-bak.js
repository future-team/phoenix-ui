import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {setPhoenixPrefix} from './utils/Tool';

export default class PageTransition extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'loading-list'
         * */
        classPrefix: PropTypes.string,
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
        transitionName: 'slide-top',
        transitionEnterTimeout: 100,
        transitionLeaveTimeout: 300,
        classPrefix:'page-transition',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);
    }

    componentWillAppear(cb){
        console.log(1111);
    }

    render(){
        let {transitionName, transitionEnterTimeout, transitionLeaveTimeout, className, children} = this.props;
        
        return (
            <ReactCSSTransitionGroup {...this.props} 
                className={classnames(this.getProperty(true), className)}
                transitionName={transitionName}
                transitionEnterTimeout={transitionEnterTimeout}
                transitionLeaveTimeout={transitionLeaveTimeout}
            >
                {
                    React.cloneElement(children, { 
                        key: this.props.location.pathname
                    })
                }
            </ReactCSSTransitionGroup>
        );
    }
}