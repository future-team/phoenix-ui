import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';
import Row from './Row'

/**
 * List<br/>
 * - 
 *
 * 主要属性和接口：
 *
 * @class List
 * @module 列表组件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo list|list.js {展示}
 * @show true
 * */

class List extends Component{
    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'list'
         * */
        classPrefix: PropTypes.string,
    };

    static defaultProps ={
        classPrefix:'list',
        classMapping : {}
    };

    constructor(props,context){
        super(props,context);
    }

    render(){
        return(
            <ul className={classnames(
               this.getProperty(true),
               this.props.className
           )}>
               {this.props.children}
           </ul>
        )
    }
}

class ListHeader extends Component{
    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'list-header'
         * */
        classPrefix: PropTypes.string,
    };

    static defaultProps ={
        classPrefix:'list-header',
        classMapping : {}
    };

    constructor(props,context){
        super(props,context);
    }

    render(){
        return(
            <li className={classnames(
               this.getProperty(true),
               this.props.className
           )}>
               {this.props.children}
           </li>
        )
    }
}

class ListItem extends Component{
    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'list-item'
         * */
        classPrefix: PropTypes.string,
        /**
         * 是否不可用
         * @property disabled
         * @type Boolean
         * @default false
         * */
        disabled: PropTypes.bool,
        /**
         * 是否是输入有误
         * @property error
         * @type Boolean
         * @default false
         * */
        error: PropTypes.bool,
        /**
         * 是否必选项
         * @property required
         * @type Boolean
         * @default false
         * */
        required: PropTypes.bool,
        /**
         * 是否需要右箭头
         * @property navigate
         * @type Boolean
         * @default false
         * */
        navigate: PropTypes.bool,
    };

    static defaultProps ={
        classPrefix:'list-item',
        navigate: false,
        disabled: false,
        error: false,
        required: false,
        classMapping : {
            'disabled':'disabled',
            'error':'error',
            'required':'required'
        }
    };

    constructor(props,context){
        super(props,context);
    }

    render(){
        let {className, navigate} = this.props;

        return(
            <Row className={classnames(
               this.getProperty(true),
               className,
               navigate? setPhoenixPrefix('navigate-right'):''
           )}>
               {this.props.children}
           </Row>
        )
    }
}

List.Header = ListHeader
List.Item = ListItem

export default List