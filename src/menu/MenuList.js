import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'

import Icon from '../icon'
import List from '../list'

/**
 * 菜单导航列表组件<br/>
 * - 通过activeName设置当前导航选中的菜单项， 必需。
 * - 通过clickCallback函数设置点击菜单项时的回调，函数内必需手动更改activeName值，必需。
 *
 * 主要属性和接口：
 * - activeName:设置当前导航选中的菜单项,默认null。 
 * - clickCallback:点击菜单项时的回调。 <br/>
 * 如：
 * ```code
 *     <Menu>
 *         <Menu.Header>
 *             标题一
 *         </Menu.Header>
 *         <Menu.Body>
 *             <Menu.List activeName={this.state.activeName} clickCallback={(name)=>{this.setState({activeName:name})}}>
 *                  ...
 *             </Menu.List>
 *         </Menu.Body>
 *     </Menu>
 * ```
 *
 * @class MenuList
 * @module 菜单组件
 * @extends Component
 * @constructor
 * @since 1.4.0
 * @demo menu|menu.js {展示}
 * @show true
 * */
export default class MenuList extends Component {
    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'menu-list'
         * */
        classPrefix: PropTypes.string,
        /**
         * 点击事件的回调函数
         * @method clickCallback
         * @param {string} name 菜单项的name值
         * @type Function
         * @default null
         * */
        clickCallback: PropTypes.func
    };

    static defaultProps = {
        classPrefix:'menu-list',
        classMapping : {}        
    };

    constructor(props, context){
        super(props, context)
    }

    changeActive(name){
        let {changeActive, clickCallback} = this.props

        changeActive(name)    
        if(clickCallback) clickCallback(name);
    }

    renderChildren(){
        let _this = this;
        let newChildren = [];
        
        React.Children.forEach(this.props.children, function(child, index){
            newChildren.push(React.cloneElement(child, {
                key: index,
                activeName: _this.props.activeName,
                changeActive: _this.changeActive.bind(_this)
            }))
        })

        return newChildren;
    }

    renderMenuList(){
        let {className, children} = this.props;

        return (
            <List {...this.otherProps} classPrefix='list' className={classnames(
                    this.getProperty(true),
                    className
                )}
            >
                {this.renderChildren()}
            </List>
        )
    }

    render(){
        return this.renderMenuList()
    }
};