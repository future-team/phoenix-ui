import React,{PropTypes} from 'react';
import Component from '../utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix, closest} from '../utils/Tool';

import MenuHeader from './MenuHeader';
import MenuBody from './MenuBody';

/**
 * 菜单组件<br/>
 - 可通过visible设置菜单初始是否可见，默认不可见。
 - 不设置scrollCeiling时默认菜单不吸顶，设置scrollCeiling为具体数值时表示从当前距离开始吸顶，设置0表示至始至终吸顶。
 - 可通过onChange函数设置菜单打开收起的回调函数。
 *
 * 主要属性和接口：
 * - visible:初始展开或收起的状态, 默认false收起。
 * - scrollCeiling:设置吸顶的距离, 默认不吸顶, 设置0表示始终吸顶。
 * - onChange:菜单打开关闭时的回调函数。 <br/>
 * 如：
 * ```code
 *     <Menu scrollCeiling={100} visible={true} onChange={(visible)=>{console.log(visible);}}>
 *         <Menu.Header>
 *             标题一
 *         </Menu.Header>
 *         <Menu.Body>
 *             ...
 *         </Menu.Body>
 *     </Menu>
 * ```
 *
 * @class Menu
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @demo menu|menu.js {展示}
 * @show true
 * */

class Menu extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'menu'
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
        onChange: PropTypes.func,
        /**
         * 是否滚动吸顶, 默认不吸顶(false); 设置确定的数字从当前距离开始吸顶 
         * @property scrollCeiling
         * @type Number
         * @default 不设置
         * */
        scrollCeiling: PropTypes.number
    };

    static defaultProps = {
        visible: false,
        classPrefix:'menu',
        componentTag:'div',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: props.visible,
            ceiling: !(props.scrollCeiling === undefined || props.scrollCeiling > 0)
        };

        document.addEventListener('click', this.handleDocumentClick.bind(this), false);

        // 是否滚动吸顶
        if(props.scrollCeiling === undefined || props.scrollCeiling === 0) return;
        
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop >= props.scrollCeiling){
                if(!this.state.ceiling) this.setState({ceiling: true});
            }else{
                if(this.state.ceiling) this.setState({ceiling: false});
            }
        });
    }

    handleDocumentClick(event){
        if(!this.state.visible) return;
        let el = event.target;

        if(!closest(el,'.ph-menu')){
            this.setState({
                visible: false
            }, ()=>{
                if(this.props.onChange) this.props.onChange(this.state.visible);
            });
        }

        return false;
    }

    componentDidMount(){
        setTimeout(()=>{
            this.menuPlaceholder.style.height = this.menuCeiling.offsetHeight +'px';
        },0);
    }

    componentWillReceiveProps(nextProps){
        if(this.state.visible != nextProps.visible){
            this.setState({
                visible: nextProps.visible
            }, ()=>{
            if(this.props.onChange) this.props.onChange(nextProps.visible);
        });
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
            newChildren.push(React.cloneElement(child, {
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
                setPhoenixPrefix('menu-placeholder'),
                className
            )} ref={(menuPlaceholder)=>{this.menuPlaceholder=menuPlaceholder}}>
                <div className={this.state.ceiling? setPhoenixPrefix('menu-ceiling'):''} ref={(menuCeiling)=>{this.menuCeiling=menuCeiling}}>
                    {this.renderChildren()}
                </div>
            </Component>
        );
    }
}

Menu.Header = MenuHeader;
Menu.Body = MenuBody;

export default Menu;