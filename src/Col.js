import React,{ PropTypes } from 'react';
import Component from './utils/Component';
import {setPhoenixPrefix} from './utils/Tool';
import classnames from 'classnames';

/**
 * 列组件<br/>
 * - 搭配Row行组件可实现自适应宽度布局。
 * - 可通过align定义单个项目在交叉轴上的对齐方式, 可选auto、top、bottom、center。
 * - 可通过width设置单个项目宽度的百分比, 目前支持5-100之间5的倍数、33（1\3）和66(2\3)。
 * - 可通过offset设置单个项目左边外边距。
 *
 * 主要属性和接口：
 * - align:单个项目在交叉轴上的对齐方式, 默认auto <br/>
 * ```code
 *     <Row>
 *         <Col align="top">
 *             <div className="col-demo">top</div>
 *         </Col>
 *         <Col align="center">
 *             <div className="col-demo">center</div>
 *         </Col>
 *         <Col align="bottom">
 *             <div className="col-demo">bottom</div>
 *         </Col>
 *     </Row>
 * ```
 * - width:单个项目的宽度百分比 <br/>
 * ```code
 *     <Row>
 *         <Col width="15">
 *             <div className="col-demo">15</div>
 *         </Col>
 *     </Row>
 * ```
 * - offset:单个项目的偏移值,即左边外边距 <br/>
 * ```code
 *     <Row>
 *         <Col width="20" offset="10">
 *             <div className="col-demo">10</div>
 *         </Col>
 *     </Row>
 * ```
 *
 * @class Col
 * @module 布局组件
 * @extends Component
 * @constructor
 * @demo grid|grid.js {展示}
 * @since 0.1.0
 * @show true
 * */

export default class Col extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'col'
         * */
        classPrefix: PropTypes.string,
        /**
         * 占100份的多少份，目前支持5-100之间5的倍数、33（1\3）和66(2\3)
         * @property width
         * @type Integer
         * */
        width: PropTypes.string,
        /**
         * 偏移多少，目前支持5-100之间5的倍数、33（1\3）和66(2\3)，默认不偏移
         * @property offset
         * @type Integer
         * */
        offset: PropTypes.string,
        /**
         * 竖直方向的排列是靠上、居中还是靠下
         * @property align
         * @type Integer
         * */
        align: PropTypes.oneOf(['top', 'bottom','center']),
        /**
         * 是否为标题（配合List组件使用，表现为仿行内元素）
         * @property heading
         * @type Boolean
         * */
        heading: PropTypes.bool,
        /**
         * 是否为右边的项目（配合List组件使用，表现为内部的元素全部靠右）
         * @property right
         * @type Boolean
         * */
        tail: PropTypes.bool
    };

    static defaultProps = {
        classPrefix:'col',
        classMapping : {
            'top':'top',
            'bottom':'bottom',
            'center':'center',
            'heading':'heading',
            'tail':'tail'
        }
    };

    render(){
        let  {className} = this.props;

        return (
            <div {...this.props} className={
                classnames(
                    this.getProperty(true),
                    className
                )
            }>
                {this.props.children}
            </div>
        );
    }
}