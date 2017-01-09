import React,{ PropTypes } from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

/**
 * <h5>主要栅格化布局组件</h5>
 * <pre><code>
 *     &#60;Grid&#62;//定义栅格
 *         &#60;Col sm={6}&#62;//定义一列，总长度为12份
 *             &#60;Row&#62; &#60;/Row&#62;//定义一行
 *         &#60;/Col&#62;
 *     &#60;/Grid&#62;
 * </code></pre>
 *
 * <strong><a href='../classes/Grid.html'>Grid定义外框</a></strong><br>
 * <strong><a href='../classes/Row.html'>Row定义行排列</a></strong><br>
 * <strong><a href='../classes/Col.html'>Col定义竖排列</a></strong><br>
 * <h6>点击以上链接进行相关查看</h6>
 * @module 布局组件
 * @main 布局组件
 * @static
 *
 */

/**
 * 定义栅格容器,配合Col和Row使用
 * @class Grid
 * @module 布局组件
 * @extends Component
 * @constructor
 * @demo grid.js {展示}
 * @demo grid.js {源码}
 * @show true
 * */
export default class Grid extends Component{

    static propTypes = {

    }

    static defaultProps = {
        classPrefix:'grid',
        classMapping : {
        }
    }

    constructor(props, context) {
        super(props, context);
    }

    render(){
        return (
            <div {...this.props}
                className={classnames(
                    this.getProperty(true),
                    this.props.fluid ? setPhoenixPrefix('grid-fluid'):'',
                    this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }
}