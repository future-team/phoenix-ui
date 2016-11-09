import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 * 功能组件-弹框
 * @class Modal
 * @module Action?
 * @extends Component
 * @constructor
 * @demo modal.js {展示}
 * @demo modal.js {源码}
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
        egSize:'',
        classPrefix:'',
        componentTag:'div',
        classMapping : {
        }
    };

    constructor(props, context) {
        super(props, context);
    }

    render(){
        let {componentTag:Component, className, visible} = this.props;

        return (
            <Component {...this.props} className={classnames(
                    'modal',
                    this.getProperty(),
                    className,
                    visible? 'show':'hide'
            )}>
                <div className="modal-shadow"></div>
                <div className="modal-main">
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                </div>
            </Component>
        );
    }

}