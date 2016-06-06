import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';

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
 * @module Grid
 * @main Grid
 * @static
 *
 */

/**
 * 定义栅格容器,配合Col和Row使用
 * @class Grid
 * @module Grid
 * @extends Component
 * @constructor
 * @show true
 * */
export default class Grid extends Component{

    static propTypes = {
    };

    render(){

        return (
            <div {...this.props}
                className={classnames('grid',this.props.fluid?'grid-'+'fluid':'',this.props.className)}>
                {this.props.children}
            </div>
        );
    }
}