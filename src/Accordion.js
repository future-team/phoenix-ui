import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

/**
 * <h5>操作类组件，主要包括组件:</h5>
 * <strong><a href='../classes/Accordion.html'>Accordion 手风琴</a></strong><br/>
 * <strong><a href='../classes/Dialog.html'>Dialog 弹框</a></strong><br>
 * <strong><a href='../classes/Toast.html'>Toast 飘字</a></strong><br>
 * <strong><a href='../classes/Popup.html'>Popup 弹层</a></strong><br>
 * <strong><a href='../classes/Slider.html'>Slider 滑动输入条</a></strong><br>
 * <strong><a href='../classes/Swipe.html'>Swipe 左滑动</a></strong><br>
 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
 * @module 操作类组件
 * @main 操作类组件
 * @static
 */
/**
 * 手风琴组件<br/>
 * - 通过visible设置初始展开或收起的状态, 可选true/false。
 * - 可通过onChange设置展开收起时额外的回调函数。
 *
 * 主要属性和接口：
 * - visible:初始展开或收起的状态, 默认false收起 <br/>
 * 如：
 * ```code
 *     <Accordion visible={true}>
 *         <Accordion.Header>
 *             标题一
 *         </Accordion.Header>
 *         <Accordion.Body>
 *             ...
 *         </Accordion.Body>
 *     </Accordion>
 * ```
 * - onChange:点击收起展开的额外的回调执行函数 <br/>
 * 如：
 * ```code
 *     <Accordion onChange={(visible)=>{console.log(visible);}}>
 *         <Accordion.Header>
 *             标题一
 *         </Accordion.Header>
 *         <Accordion.Body>
 *             ...
 *         </Accordion.Body>
 *     </Accordion>
 * ```
 *
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
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'badge'
         * */
        classPrefix: PropTypes.string,
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
         * @default false
         * */
        visible: PropTypes.bool,
        /**
         * 点击收起展开的回调函数
         * @method onChange
         * @type Function
         * */
        onChange: PropTypes.func
    };

    static defaultProps = {
        visible: false,
        classPrefix:'accordion',
        componentTag:'div',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: props.visible
        }
    }

    changeVisible(fn){
        this.setState({
            visible: !this.state.visible
        }, fn);
    }

    renderChildren(){
        let _this = this;
        let newChildren = [];
        let {onChange} = this.props;

        React.Children.forEach(this.props.children, function(child, index){
            newChildren.push(React.cloneElement(child,{
                key: index,
                visible: _this.state.visible,
                onChange: onChange,
                changeVisible: _this.changeVisible.bind(_this)
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

    onChange(){
        this.props.changeVisible(()=>{
            if(this.props.onChange) this.props.onChange(this.props.visible);
        });
    }

    render(){
        let {className} = this.props;

        return (
            <div className={classnames(
                    setPhoenixPrefix('accordion-header'),
                    className
                )}
                onClick={::this.onChange}
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
        this.height =  this.accordionBody.offsetHeight+'px';
        this.setHeight();
    }

    componentDidUpdate(){
        this.setHeight();
    }

    setHeight(){
        this.accordionBodyParent.style.height = this.props.visible? this.height : 0;
    }

    render(){
        let {visible,children,className} = this.props;

        return (
            <div {...this.props} className={classnames(
                    setPhoenixPrefix('accordion-body'),
                    'animated',
                    className
                )} ref={(accordionBodyParent)=>{this.accordionBodyParent = accordionBodyParent;}}>
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