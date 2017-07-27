import React,{PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import Component from '../utils/Component'
import classnames from 'classnames'
import Tool from '../utils/Tool'

import Animate from '../animate'
import Icon from '../icon'

/**
 * 菜单内容组件<br/>
 * - 通过placement设置菜单出现的位置和类型, 可选 [top,left,right,left-full,right-full,full-screen]。
 * - 可通过width设置侧边菜单的宽度, 当前placement为top和full-screen不生效。
 * - 可通过closeButton来配置菜单主体右上角X按钮是否显示。
 *
 * 主要属性和接口：
 * - placement:菜单出现的位置和类型, 默认top。
 * - width:侧边菜单的宽度, 当前placement为top和full-screen不生效。
 * - closeButton:菜单主体右上角X按钮是否显示, 默认不显示。<br/>
 * 如：
 * ```code
 *     <Menu>
 *         <Menu.Header ref={(menuHandler)=>{this.menuHandler=menuHandler}}>
 *             标题一
 *         </Menu.Header>
 *         <Menu.Body width={60} placement='left' closeButton getTarget={()=>{return this.menuHandler}}>
 *             ...
 *         </Menu.Body>
 *     </Menu>
 * ```
 *
 * @class MenuBody
 * @module 菜单组件
 * @extends Component
 * @constructor
 * @since 1.3.0
 * @demo menu|menu.js {展示}
 * @show true
 * */
export default class MenuBody extends Component{
    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'menu-body'
         * */
        classPrefix: PropTypes.string,
        /**
         * 返回菜单的目标元素
         * @method getTarget
         * @type Function
         * */
        getTarget: PropTypes.func,
        /**
         * 菜单位置, 可选[top,left,right,left-full,right-full,full-screen], 默认top
         * @property placement
         * @type String
         * @default 'top'
         * */
        placement: PropTypes.string,
        /**
         * 自定义菜单宽度百分比（限左右）
         * @property width
         * @type Number
         * @default 50
         * */
        width: PropTypes.number,
        // closeMode: PropTypes.string,
        /**
         * 右上角按钮是否可见, 默认不可见
         * @property closeButton
         * @type Boolean
         * */
        closeButton: PropTypes.bool,
    };

    static defaultProps = {
        activeName: null,
        width: 50,
        classPrefix:'menu-body',
        placement: 'top',
        classMapping : {
            'top':'top',
            'left':'left',
            'right':'right',
            'left-full':'left-full',
            'right-full':'right-full',
            'full-screen':'full-screen'
        }
    };

    constructor(props, context) {
        super(props, context)

        this.handleDocumentClick = this.handleDocumentClick.bind(this)
        this.targetClickHandle = this.targetClickHandle.bind(this)

        this.state = {
            visible: props.visible,
            activeName: props.activeName
        }

        document.addEventListener('click', this.handleDocumentClick, false);
    }

    handleDocumentClick(event){
        if(!this.state.visible) return

        let el = event.target
        
        if(!Tool.closest(el,'.ph-menu')){
            this.targetClickHandle()
        }
    }

    componentDidMount(){
        this.setSize()

        let target = this.props.getTarget()
        if(!target) Tool.warning('MenuBody 必须传递 getTarget[func]!')

        this.target = findDOMNode(target)
        this.target.addEventListener('click', this.targetClickHandle, false)
    }

    componentDidUpdate(){
        this.setSize()
    }

    componentWillReceiveProps(nextProps){
        let {clickCallback} = nextProps.clickCallback
        
        if(this.state.visible !== nextProps.visible){
            this.setState({
                visible: nextProps.visible
            }, ()=>{
                if(clickCallback) clickCallback(nextProps.visible)
            })
        }
        
        if(nextProps.activeName !== this.state.activeName){
            this.setState({
                activeName: nextProps.activeName
            })
        }
    }

    changeActive(name){
        this.setState({
            activeName: name
        })
    }

    setSize(){
        let {visible, placement, width} = this.props

        if(this.state.visible && width){
            if(placement=='top') return
            if(placement=='full-screen') width = 100
            this.menuBodyParent.style.width = width +'%'
        }
    }

    renderAnimation(){
        let {children,className,style,width} = this.props,
            {visible} = this.state

        if(visible){
            return (
                <div {...this.otherProps} className={classnames(this.getProperty(true),className, 'animated')}
                    ref={(menuBodyParent)=>{this.menuBodyParent = menuBodyParent;}}>
                    {this.renderCloseButton()}
                    {this.renderChildren()}
                </div>
            );
        }else{
            return '';
        }
    }

    renderChildren(){
        let _this = this,
            newChildren = [],
            {activeName} = this.state
        
        React.Children.forEach(this.props.children, function(child, index){
            let opt = {}

            opt.key = index
            if(child.type.name=='MenuList'){
                opt.activeName = activeName
                opt.changeActive = _this.changeActive.bind(_this)
            } 

            newChildren.push(React.cloneElement(child, opt));
        });

        return newChildren;
    }

    renderCloseButton(){
        let {closeButton} = this.props;

        if(closeButton){
            return <Icon phIcon='close' className={classnames(this.setPhPrefix('menu-close-button', true))} onClick={this.targetClickHandle.bind(this)} />;
        }else{
            return '';
        }
    }

    targetClickHandle(){
        let {clickCallback} = this.props

        this.setState({
            visible: !this.state.visible
        }, ()=>{
            if(clickCallback) clickCallback(this.state.visible)
        })
    }

    renderMenuBody(){
        let {placement} = this.props,
            animateName = `slide-${this.props.placement}`;

        if(placement=='full-screen') animateName = 'fade';

        return (
            <Animate transitionName={animateName}>
                {this.renderAnimation()}
            </Animate>
        );
    }

    componentWillUnmount(){
        this.target.removeEventListener('click', this.targetClickHandle, false)
        document.removeEventListener('click', this.handleDocumentClick, false)
    }

    render(){
        return this.renderMenuBody()
    }
}