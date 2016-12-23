import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import Tool from './utils/Tool'

/**
 * 气泡
 * @class Popover
 * @module 提示组件
 * @extends Component
 * @constructor
 * @demo popover.js {展示}
 * @demo popover.js {源码}
 * @show true
 * */
export default class Popover extends Component{

    static propTypes = {
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag: PropTypes.string
    };

    static defaultProps = {
        componentTag: 'div',
        classMapping : {
            'top': 'ph-popover-top center-x',
            'bottom': 'ph-popover-bottom center-x',
            'left': 'ph-popover-left center-y',
            'right': 'ph-popover-right center-y',
            'top left': 'ph-popover-top left-x',
            'top right': 'ph-popover-top right-x',
            'bottom left': 'ph-popover-bottom left-x',
            'bottom right': 'ph-popover-bottom right-x'
        }
    };

    constructor(props, context) {
        super(props, context);

        this.handleDocumentClick = this.handleDocumentClick.bind(this);

        document.addEventListener('click', this.handleDocumentClick, false);
    }

    handleDocumentClick(event){
        let el = event.target;

        if(!Tool.closest(el,'.ph-popover') && !(this.props.whisper==event.target)){
            this.props.onClose();
        }

        return false;
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.handleDocumentClick, false);
    }

    render(){
        let {componentTag:Component, className, styles, style, children} = this.props;

        return (
            <Component {...this.props}
                className={classnames(
                    'ph-popover',
                    this.getProperty(),
                    className
                )}
                style={Object.assign(styles, style)}
            >
                <div className='ph-popover-arrow'></div>
                <div className='ph-popover-content'>
                    {children}
                </div>
            </Component>
        );
    }
}
