import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 * 功能组件-飘字
 * @class Toast
 * @module Action
 * @extends Component
 * @constructor
 * @demo toast.js {展示}
 * @demo toast.js {源码}
 * @show true
 * */
export default class Modal extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * */
        classPrefix:PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag:PropTypes.string,
        visible: PropTypes.bool
    };

    static defaultProps = {
        visible: false,
        duration: 1500,
        egSize:'',
        classPrefix:'',
        componentTag:'div',
        classMapping : {
        }
    };

    constructor(props, context) {
        super(props, context);
    }

    componentWillReceiveProps(nextProps){
        let _this = this,
            timer = null;

        if(nextProps.visible){
            timer = setTimeout(function(){
                _this.props.onClose();
                clearTimeout(timer);
            }, this.props.duration);
        }
    }

    render(){
        let {componentTag:Component, className, visible} = this.props;

        return (
            <Component {...this.props} className={classnames(
                    'toast',
                    this.getProperty(),
                    className,
                    visible? 'show':'hide'
            )}>
                <div className="toast-shadow"></div>
                <div className="toast-main">
                    <div className={classnames("toast-content")}>
                        {this.props.children}
                    </div>
                </div>
            </Component>
        );
    }

}