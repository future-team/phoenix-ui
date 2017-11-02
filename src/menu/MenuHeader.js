import React from 'react'
import PropTypes from 'prop-types'
import Component from '../utils/Component'
import classnames from 'classnames'

import Icon from '../icon'

/**
 * 菜单头部组件<br/>
 * 如：
 * ```code
 *     <Menu>
 *         <Menu.Header>
 *             标题一
 *         </Menu.Header>
 *         <Menu.Body>
 *             ...
 *         </Menu.Body>
 *     </Menu>
 * ```
 *
 * @class MenuHeader
 * @module 菜单组件
 * @extends Component
 * @constructor
 * @since 1.3.0
 * @demo menu|menu.js {展示}
 * @show true
 * */
export default class MenuHeader extends Component {
    constructor(props, context){
        super(props, context);
    }

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'menu-header'
         * */
        classPrefix: PropTypes.string
    };

    static defaultProps = {
        classPrefix:'menu-header',
        classMapping : {}
    }

    renderMenuHeader(){
        let {className} = this.props;

        return (
            <div {...this.otherProps} className={classnames(
                    this.getProperty(true),
                    className
                )}
            >
                <div className={this.setPhPrefix('content')}>{this.props.children}</div>
            </div>
        )
    }

    render(){
        return this.renderMenuHeader()
    }
};