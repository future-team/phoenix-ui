import React,{PropTypes} from 'react';
import Component from './utils/Component';
import {setPhoenixPrefix} from './utils/Tool';
import classnames from 'classnames';

/**
 * 展现形式如表格一般, 用来组织数据, 显示链接的集合, 或一系列的控件。<br />
 * - 使用时如果需要跳转功能可通过添加href属性并赋予正确的url(任何标签)。
 * - 可搭配其他组件一起使用, 如徽章组件Badge, 开关组件Switch等。
 *
 * 示例:
 * ```code
 *     <TableView>
 *         <a href="https://github.com/future-team/phoenix-ui">Item 1</a>
 *         <a>Item 2 <Badge>2</Badge></a>
 *         <a>Item 3 <Switch /></a>
 *     </TableView>
 * ```
 *
 * @class TableView
 * @module 布局组件
 * @extends Component
 * @constructor
 * @demo tableview|table-view.js {展示}
 * @show true
 * */

export default class TableView extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'table-view'
         * */
        classPrefix: PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag:PropTypes.string
    };

    static defaultProps = {
        classPrefix:'table-view',
        componentTag:'ul',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);
    }

    renderItem(){
        let items = React.Children.map(this.props.children, (options, index)=> {
            let {href, ...other} = options.props;

            return (
                <li className={setPhoenixPrefix("table-view-cell")}>
                    {href && href!=''?<a href={href} {...other} className={
                        classnames(
                            setPhoenixPrefix('navigate-right'),
                            options.props.className
                        )
                }>{options.props.children}</a>:options.props.children}
                </li>
            );
        }, this);

        return items;
    }

    render(){
        let {componentTag:Component} = this.props;

        return (
            <Component {...this.otherProps} className={
                classnames(
                    this.getProperty(true),
                    this.props.className
                )
                } style={this.getStyles(this.props.style) }>{this.renderItem() }</Component>
        );
    }

}