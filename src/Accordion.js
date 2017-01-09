import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

import AccordionHeader from './AccordionHeader';
import AccordionBody from './AccordionBody';

/**
 * 手风琴
 * @class Accordion
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @demo accordion.js {展示}
 * @demo accordion.js {源码}
 * @show true
 * */
class Accordion extends Component{

    static propTypes = {
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag:PropTypes.string,
        /**
         * 是否可见标识
         * @property visible
         * @type Boolean
         * */
        visible: PropTypes.bool,
        /**
         * 动作的执行函数
         * @property onChange
         * @type Function
         * */
        onChange: PropTypes.func
    };

    static defaultProps = {
        visible: false,
        classPrefix:'accordion',
        componentTag:'div',
        classMapping : {
        }
    };

    constructor(props, context) {
        super(props, context);
    }

    renderChildren(){
        let newChildren = [];
        let {visible, onChange} = this.props;

        React.Children.forEach(this.props.children, function(child, index){
            newChildren.push(React.cloneElement(child,{
                key: index,
                visible: visible,
                onChange: onChange
            }));
        });

        return newChildren;
    }

    render(){
        let {componentTag:Component, className} = this.props;

        return (
            <Component {...this.props} className={classnames(
                this.getProperty(true),
                className
            )}>
                {this.renderChildren()}
            </Component>
        );
    }
}

Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;