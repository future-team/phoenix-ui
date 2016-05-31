import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 * 展现形式如表格一般,用来组织数据，显示链接的集合，或一系列的控件。<br />
 * 使用时需注意组件的子元素需要跳转功能需加上href标签并赋予正确的url，不论什么标签
 * @class TableView
 * @module UI
 * @extends Component
 * @constructor
 * @demo table-view.js {展示}
 * @demo table-view.js {源码}
 * @show true
 * */
export default class TableView extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * */
        classPrefix:PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag:PropTypes.string
    };

    static defaultProps = {
        classPrefix:'',
        componentTag:'ul',
        classMapping : {

        }
    };

    constructor(props, context) {
        super(props, context);
    }

    renderItem(){
        let items = React.Children.map(this.props.children, (options, index)=> {
            let {href, ...other} = options.props;

            return (
                <li className="table-view-cell">
                    {href && href!=''?<a href={href} className="navigate-right" {...other} className={
                        classnames(
                            'navigate-right',
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
                    'table-view',
                    this.getProperty(),
                    this.props.className
                )
                } style={this.getStyles(this.props.style) }>{this.renderItem() }</Component>
        );
    }

}