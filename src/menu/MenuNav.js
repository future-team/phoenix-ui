import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'

/**
 * 菜单导航组件<br/>
 * - 通过align设置菜单导航部分的位置, 可选[top,center,bottom]。
 *
 * 主要属性和接口：
 * - align:设置菜单导航部分的位置,默认top。 <br/>
 * 如：
 * ```code
 *     <Menu>
 *         <Menu.Header>
 *             标题一
 *         </Menu.Header>
 *         <Menu.Body width={60}>
 *             <Menu.Nav align='center'>
 *                  ...
 *              </Menu.Nav>
 *         </Menu.Body>
 *     </Menu>
 * ```
 *
 * @class MenuNav
 * @module 菜单组件
 * @extends Component
 * @constructor
 * @since 1.4.0
 * @demo menu|menu.js {展示}
 * @show true
 * */
export default class MenuNav extends Component {
    constructor(props, context){
        super(props, context);
    }

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'menu-nav'
         * */
        classPrefix: PropTypes.string,
        /**
         * 导航的位置, 可选[top,center,bottom], 默认top
         * @property align
         * @type String
         * @default 'top'
         * */
        align: PropTypes.string,
    };

    static defaultProps = {
        align: 'top',
        classPrefix:'menu-nav',
        classMapping : {
            'top':'top',
            'center':'center',
            'bottom':'bottom'
        }
    };

    renderMenuNav(){
        let {className, children} = this.props;

        return (
            <nav {...this.props} className={classnames(
                    this.getProperty(true),
                    className
                )}
            >
                {children}
            </nav>
        )
    }

    render(){
        return this.renderMenuNav()
    }
};