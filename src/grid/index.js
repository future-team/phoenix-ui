import React,{ PropTypes } from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'
import {setPhPrefix} from '../utils/Tool'

import './grid.less'

/**
 * <h5>主要栅格化布局组件</h5>
 * <strong><a href='../classes/Grid.html'>Grid 外框</a></strong><br>
 * <strong><a href='../classes/Row.html'>Row 行排列</a></strong><br>
 * <strong><a href='../classes/Col.html'>Col 竖排列</a></strong><br>
 * <strong><a href='../classes/TableView.html'>TableView 仿表格组件</a></strong><br>
 * <h6>点击以上链接进行相关查看</h6>
 * @module 布局组件
 * @main 布局组件
 * @static
 */
/**
 * 栅格容器组件<br/>
 * - 配合Row、Col使用布局。
 * - 可自定义className、style等属性以及自定义事件。
 *
 * 示例:
 * ```code
 *     <Grid> //定义栅格
 *         <Row> //定义一行
 *             <Col> //定义一列，最多12份
 *                 <div className='col-demo'>内容</div>
 *             </Col>
 *             <Col>
 *                 <div className='col-demo'>stretch<br />baseline</div>
 *             </Col>
 *         </Row>
 *     </Grid>
 * ```
 *
 * @class Grid
 * @module 布局组件
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo grid|grid.js {展示}
 * @show true
 * */
export default class Grid extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'grid'
         * */
        classPrefix: PropTypes.string,
    };

    static defaultProps = {
        classPrefix:'grid',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);
    }

    render(){
        return (
            <div {...this.props}
                className={classnames(
                    this.getProperty(true),
                    this.props.fluid ? setPhPrefix('grid-fluid'):'',
                    this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}