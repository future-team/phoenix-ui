import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'

import Icon from '../icon'
import List from '../list'

/**
 * 菜单导航列表项组件<br/>
 * - 可通过phIcon设置菜单项名称前符号的类型，具体可以参考[gfs-icons](https://future-team.github.io/gfs-icons/index.html)。 
 * - 可通过href设置菜单项的跳转地址，可不设置，自定义回调函数clickCallback。
 * - 可通过name设置菜单项的唯一标识，对应MenuList的activeName。
 * - 通过clickCallback设置点击菜单项时的回调。
 *
 * 主要属性和接口：
 * - phIcon:菜单项名称前符号的类型，不设置时默认没有符号。 
 * - href:菜单项的跳转地址，默认null。
 * - name:菜单项的唯一标识。
 * - name:点击菜单项时的回调。<br/>
 * 如：
 * ```code
 *     <Menu>
 *         <Menu.Header>
 *             标题一
 *         </Menu.Header>
 *         <Menu.Body>
 *             <Menu.Nav>
 *                  <Menu.List activeName={this.state.activeName} clickCallback={(name)=>{this.setState({activeName:name})}}>
 *                      <Menu.Item name='home' href='#index' phIcon='home' clickCallback={(name)=>{console.log(name);}}>首页</Menu.Item>
 *                  </Menu.List>
 *              </Menu.Nav>
 *         </Menu.Body>
 *     </Menu>
 * ```
 *
 * @class MenuItem
 * @module 菜单组件
 * @extends Component
 * @constructor
 * @since 1.4.0
 * @demo menu|menu.js {展示}
 * @show true
 * */
export default class MenuItem extends Component {
    constructor(props, context){
        super(props, context);
    }

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'menu-item'
         * */
        classPrefix: PropTypes.string,
        /**
         * icon符号类型
         * @property phIcon
         * @type string
         * @default ''
         **/
        phIcon:PropTypes.string,
        /**
         * 跳转地址
         * @property href
         * @type string
         * @default ''
         **/
        href:PropTypes.string,
         /**
         * 当前项目的唯一标志
         * @property name
         * @type String
         * @default null
         * */
        name: PropTypes.string,
        /**
         * 点击事件的回调函数
         * @method clickCallback
         * @type Function
         * @default null
         * */
        clickCallback: PropTypes.func
    };

    static defaultProps = {
        name: null,
        href: 'javascript:;',
        classPrefix:'menu-item',
        classMapping : {}
    };

    isActive(){
        let {name, activeName} = this.props;
        return name === activeName ? 'active':'';
    }

    clickCallback(){
        let {name, changeActive, clickCallback} = this.props

        changeActive(name);
        if(clickCallback) clickCallback(this.props.name);
    }

    renderIcon(){
        let {phIcon} = this.props;

        if(phIcon){
            return <Icon phIcon={phIcon} />;
        }else{
            return '';
        }
    }

    renderMenuItem(){
        let {className, href, children} = this.props;

        return (
            <List.Item {...this.props} classPrefix='list-item' className={classnames(
                    this.getProperty(true),
                    this.isActive(),
                    className
                )}
            >
                <List.Col href={href} onClick={this.clickCallback.bind(this)}>
                    <label>
                        {this.renderIcon()}
                        {children}
                    </label>
                </List.Col>
            </List.Item>
        )
    }

    render(){
        return this.renderMenuItem()
    }
};