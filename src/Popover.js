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
        classPrefix:'popover',
        componentTag: 'div',
        classMapping : {
            'top': 'top center-x',
            'bottom': 'bottom center-x',
            'left': 'left center-y',
            'right': 'right center-y',
            'top left': 'top left-x',
            'top right': 'top right-x',
            'bottom left': 'bottom left-x',
            'bottom right': 'bottom right-x'
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
                    this.getProperty(true),
                    className
                )}
                style={Object.assign(styles, style)}
            >
                <div className={Tool.setPhoenixPrefix('popover-arrow')}></div>
                <div className={Tool.setPhoenixPrefix('popover-content')}>
                    {children}
                </div>
            </Component>
        );
    }
}
