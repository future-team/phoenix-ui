import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

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

class AccordionHeader extends Component {
    constructor(props, context){
        super(props, context);
    }

    render(){
        let {className, onChange} = this.props;

        return (
            <div className={classnames(
                    setPhoenixPrefix('accordion-header'),
                    className
                )}
                onClick={onChange}
                {...this.props}
            >
                {this.props.children}
            </div>
        );
    }
};

class AccordionBody extends Component{

    constructor(props, context) {
        super(props, context);

        this.height = 0;
    }

    componentDidMount(){
        this.height =  this.accordionBody.offsetHeight;
    }

    render(){
        let {visible,children,className} = this.props;

        return (
            <div {...this.props} className={classnames(
                    setPhoenixPrefix('accordion-body'),
                    'animated',
                    className
                )} style={{
                    height: visible? this.height+'px':'0'
                }}>
                <div ref={(accordionBody)=>{this.accordionBody = accordionBody;}}>
                    {children}
                </div>
            </div>
        );
    }
}

Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;