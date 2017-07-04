import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'
import {setPhPrefix} from '../utils/Tool'

import Icon from '../icon'

/**
 * 菜单导航列表组件<br/>
 * - 通过activeName设置当前导航选中的菜单项， 必需。
 * - 通过onMenulistChange函数设置点击菜单项时的回调，函数内必需手动更改activeName值，必需。
 *
 * 主要属性和接口：
 * - activeName:设置当前导航选中的菜单项,默认null。 
 * - onMenulistChange:点击菜单项时的回调。 <br/>
 * 如：
 * ```code
 *     <Menu>
 *         <Menu.Header>
 *             标题一
 *         </Menu.Header>
 *         <Menu.Body>
 *             <Menu.Nav>
 *                  <Menu.List activeName={this.state.activeName} onMenulistChange={(name)=>{this.setState({activeName:name})}}>
 *                      ...
 *                  </Menu.List>
 *              </Menu.Nav>
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
         * 当前选中的项目name，对应item的name属性
         * @property activeName
         * @type String
         * @default null
         * */
        activeName: PropTypes.string,
        /**
         * 点击事件的回调函数
         * @method onMenulistChange
         * @type Function
         * @default null
         * */
        onMenulistChange: PropTypes.func
    };

    static defaultProps = {
        activeName: null,
        classPrefix:'menu-list',
        classMapping : {}        
    };

    constructor(props, context){
        super(props, context);
    }

    changeActive(name){
        if(this.props.onMenulistChange) this.props.onMenulistChange(name);
    }

    renderChildren(){
        let _this = this;
        let newChildren = [];

        React.Children.forEach(this.props.children, function(child, index){
            newChildren.push(React.cloneElement(child, {
                key: index,
                activeName: _this.props.activeName,
                changeActive: _this.changeActive.bind(_this)
            }));
        });

        return newChildren;
    }

    render(){
        let {className, children} = this.props;

        return (
            <ul {...this.props} className={classnames(
                    this.getProperty(true),
                    className
                )}
            >
                {this.renderChildren()}
            </ul>
        );
    }
};