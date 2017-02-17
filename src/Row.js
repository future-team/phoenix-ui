import React, { PropTypes } from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 * 行组件<br/>
 * - 搭配Col列组件可实现自适应宽度布局。
 * - 可通过align定义项目在交叉轴上的对齐方式, 可选top、bottom、center、baseline、stretch。
 *
 * 主要属性和接口：
 * - align:项目在交叉轴上的对齐方式, 默认stretch
 * ```code
 *     <Row align="baseline">
 *         <Col>
 *             <div className='col-demo'>baseline</div>
 *         </Col>
 *         <Col>
 *             <div className='col-demo'>baseline<br />baseline</div>
 *         </Col>
 *     </Row>
 * ```
 *
 * @class Row
 * @module 布局组件
 * @extends Component
 * @constructor
 * @demo grid|grid.js {展示}
 * @since 0.1.0
 * @show true
 * */

export default class Row extends Component{

    static propTypes={
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'row'
         * */
        classPrefix: PropTypes.string,
        /**
         * 竖直方向的排列是靠上、居中、靠下、拉伸至父容器最大高度还是基于text的baseline对齐
         * @property align
         * @type String
         * */
        align: PropTypes.string
    };

    static defaultProps = {
        classPrefix: 'row',
        classMapping : {
            'top':'top',
            'bottom':'bottom',
            'center':'center',
            'stretch':'stretch',
            'baseline':'baseline'
        }
    };

    render(){
        let  { ...others } = this.props;
        return (
            <div {...others} className={classnames(
                this.getProperty(true),
                this.props.className
            )} >
                {this.props.children}
            </div>
        );
    }
}