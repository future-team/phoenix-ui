import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'
import {closest} from '../utils/Tool'

import MenuHeader from './MenuHeader'
import MenuBody from './MenuBody'
import MenuNav from './MenuNav'
import MenuList from './MenuList'
import MenuItem from './MenuItem'

import '../style'
import 'phoenix-styles/less/modules/menu.less'

/**
 * <h5>菜单组件，主要包括组件:</h5>
 * <strong><a href='../classes/Menu.html'>Menu 菜单</a></strong><br/>
 * <strong><a href='../classes/MenuHeader.html'>MenuHeader 菜单头部</a></strong><br>
 * <strong><a href='../classes/MenuBody.html'>MenuBody 菜单主体</a></strong><br>
 * <strong><a href='../classes/MenuNav.html'>MenuNav 菜单导航</a></strong><br>
 * <strong><a href='../classes/MenuList.html'>MenuList 菜单导航列表</a></strong><br>
 * <strong><a href='../classes/MenuItem.html'>MenuItem 菜单导航列表项</a></strong><br>
 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
 * @module 菜单组件
 * @main 菜单组件
 * @static
 */
/**
 * 菜单组件<br/>
 - 可通过visible设置菜单初始是否可见，默认不可见。
 - 不设置scrollCeiling时默认菜单不吸顶，设置scrollCeiling为具体数值时表示从当前距离开始吸顶，设置0表示至始至终吸顶。
 - 可通过clickCallback函数设置菜单打开收起的回调函数。
 *
 * 主要属性和接口：
 * - visible:初始展开或收起的状态, 默认false收起。
 * - scrollCeiling:设置吸顶的距离, 默认不吸顶, 设置0表示始终吸顶。
 * - clickCallback:菜单打开关闭时的回调函数。 <br/>
 * 如：
 * ```code
 *     <Menu scrollCeiling={100} visible={true} clickCallback={(visible)=>{console.log(visible);}}>
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
 * @module 菜单组件
 * @extends Component
 * @constructor
 * @since 1.3.0
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
         * @method clickCallback
         * @type Function
         * */
        clickCallback: PropTypes.func,
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

        this.handleDocumentClick = this.handleDocumentClick.bind(this);
        this.handleWindowScroll = this.handleWindowScroll.bind(this);

        this.state = {
            visible: props.visible,
            ceiling: !(props.scrollCeiling === undefined || props.scrollCeiling > 0),
            headerHeight: 0
        };

        document.addEventListener('click', this.handleDocumentClick, false);

        // 是否滚动吸顶
        if(props.scrollCeiling === undefined || props.scrollCeiling === 0) return;
        
        window.addEventListener('scroll', this.handleWindowScroll, false);
    }

    handleDocumentClick(event){
        if(!this.state.visible) return;
        let el = event.target;

        if(!closest(el,'.ph-menu')){
            this.setState({
                visible: false
            }, ()=>{
                if(this.props.clickCallback) this.props.clickCallback(this.state.visible);
            });
        }

        return false;
    }

    handleWindowScroll(){
        if(document.body.scrollTop >= this.props.scrollCeiling){
            if(!this.state.ceiling) this.setState({ceiling: true});
        }else{
            if(this.state.ceiling) this.setState({ceiling: false});
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.menuPlaceholder.style.height = this.menuCeiling.offsetHeight +'px';
            this.setState({headerHeight: this.menuCeiling.offsetHeight})
        },0);
    }

    // componentWillReceiveProps(nextProps){
    //     if(this.state.visible != nextProps.visible){
    //         this.setState({
    //             visible: nextProps.visible
    //         }, ()=>{
    //         if(this.props.clickCallback) this.props.clickCallback(nextProps.visible);
    //     });
    //     }
    // }

    changeVisible(){
        this.setState({
            visible: !this.state.visible
        }, ()=>{
            if(this.props.clickCallback) this.props.clickCallback(this.state.visible);
        });
    }

    renderChildren(){
        let _this = this;
        let newChildren = [];

        React.Children.forEach(this.props.children, function(child, index){
            newChildren.push(React.cloneElement(child, {
                key: index,
                visible: _this.state.visible,
                changeVisible: _this.changeVisible.bind(_this),
                headerHeight: _this.state.headerHeight
            }));
        });

        return newChildren;
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.handleDocumentClick, false);
        window.removeEventListener('scroll', this.handleWindowScroll, false);
    }

    renderMenu(){
        let {componentTag:Component, className} = this.props;

        return (
            <Component {...this.props} className={classnames(
                this.getProperty(true),
                this.setPhPrefix('placeholder'),
                className
            )} ref={(menuPlaceholder)=>{this.menuPlaceholder=menuPlaceholder}}>
                <div className={this.state.ceiling? this.setPhPrefix('ceiling'):''} ref={(menuCeiling)=>{this.menuCeiling=menuCeiling}}>
                    {this.renderChildren()}
                </div>
            </Component>
        )
    }

    render(){
        return this.renderMenu()
    }
}

Menu.Header = MenuHeader;
Menu.Body = MenuBody;
Menu.Nav = MenuNav;
Menu.List = MenuList;
Menu.Item = MenuItem;

export default Menu;