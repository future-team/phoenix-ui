import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'

import Row from '../grid/Row'
import Col from '../grid/Col'

import '../style'
import 'phoenix-styles/less/modules/list.less'

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
        /**
         * 是否能加载更多
         * @property loading
         * @type Boolean
         * @default false
         * */
        // loading: PropTypes.bool,
        // mode: PropTypes.oneOf(['auto','button']),
    };

    static defaultProps ={
        classPrefix:'list',
        classMapping : {}
    };

    constructor(props,context){
        super(props,context);
    }

    renderList(){
        return (
            <ul {...this.props} className={classnames(
                this.getProperty(true),
                this.props.className
            )}>
                {this.props.children}
            </ul>
        )
    }

    render(){
        return this.renderList()
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

    renderListHeader(){
        return(
            <li {...this.props} className={classnames(
               this.getProperty(true),
               this.props.className
           )}>
               {this.props.children}
           </li>
        )
    }

    render(){
        return this.renderListHeader()
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

        // this.setProperty('error','error')
    }

    renderListItem(){
        let {className, error, navigate} = this.props;

        return(
            <Row {...this.props} classPrefix='row' componentTag='li' className={classnames(
               this.getProperty(true),
               className,
               navigate? this.setPhPrefix('navigate-right',true):'',
               error ? this.setPhPrefix('error'):''
           )}>
               {this.props.children}
           </Row>
        )
    }

    render(){
        return this.renderListItem()
    }
}

class ListCol extends Component{
    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'list-col'
         * */
        classPrefix: PropTypes.string,
        /**
         * 是否为标题，表现为仿行内元素
         * @property heading
         * @type Boolean
         * */
        heading: PropTypes.bool,
        /**
         * 是否为右边的项目，表现为内部的元素全部靠右
         * @property right
         * @type Boolean
         * */
        tail: PropTypes.bool
    };

    static defaultProps ={
        classPrefix:'list-col',
        classMapping : {}
    };

    constructor(props,context){
        super(props,context);
    }
    
    renderListCol(){
        let {className, children} = this.props;

        return(
            <Col {...this.props} classPrefix='col' className={classnames(
               this.getProperty(true),
               className
           )}>
               {children}
           </Col>
        )
    }

    render(){
        return this.renderListCol()
    }
}

List.Header = ListHeader
List.Item = ListItem
List.Col = ListCol

export default List