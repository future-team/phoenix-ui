import React,{PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import Component from '../utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from '../utils/Tool';

import Animate from '../Animate';
import Icon from '../Icon';

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
 *     <Menu scrollCeiling={100} visible={true} onChange={(visible)=>{console.log(visible);}}>
 *         <Menu.Header>
 *             标题一
 *         </Menu.Header>
 *         <Menu.Body width={60} placement={this.state.placement} closeButton>
 *             ...
 *         </Menu.Body>
 *     </Menu>
 * ```
 *
 * @class MenuBody
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @demo menu|menu.js {展示}
 * @show true
 * */
export default class MenuBody extends Component{

    constructor(props, context) {
        super(props, context);
    }

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'menu-body'
         * */
        classPrefix: PropTypes.string,
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
    }

    componentDidMount(){
        this.setSize(); 
    }

    componentDidUpdate(){
        this.setSize();
    }

    setSize(){
        let {visible, placement, width} = this.props;

        // if(placement=="top") this.menuBodyParent.style.height = visible? this.menuBody.offsetHeight+'px' : 0;

        if(this.props.visible && width){
            if(placement=="top") return;
            if(placement=="full-screen") width = 100;
            this.menuBodyParent.style.width = width +'%';
        }
    }

    renderChildren(){
        let {visible,children,className} = this.props;

        if(visible){
            return (
                <div {...this.props} className={classnames(this.getProperty(true),className, 'animated')}
                    ref={(menuBodyParent)=>{this.menuBodyParent = menuBodyParent;}}>
                    {this.renderCloseButton()}
                    {children}
                </div>
            );
        }else{
            return '';
        }
    }

    renderCloseButton(){
        let {closeButton} = this.props;

        if(closeButton){
            return <Icon phIcon="close" className={classnames(setPhoenixPrefix('menu-close-button'))} onClick={::this.onChange}></Icon>;
        }else{
            return '';
        }

    }

    onChange(){
        this.props.changeVisible(()=>{
            if(this.props.onChange) this.props.onChange(this.props.visible);
        });
    }

    render(){
        let {placement} = this.props;
        let animateName = `slide-${this.props.placement}`;

        if(placement=="full-screen") animateName = "fade";

        return (
            <Animate transitionName={animateName}>
                {this.renderChildren()}
            </Animate>
        );
    }
}