import React, { PropTypes } from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 * 行
 * @class Row
 * @module 布局组件
 * @extends Component
 * @constructor
 * @demo grid.js {展示}
 * @demo grid.js {源码}
 * @since 0.1.0
 * */
export default class Row extends Component{

    static propTypes={
        /**
         * 竖直方向的排列是靠上、居中、靠下、拉伸至父容器最大高度还是基于text的baseline对齐
         * @property offset，默认不偏移
         * @type Integer
         * */
        align: PropTypes.string
    }

    static defaultProps = {
        classPrefix: 'row',
        classMapping : {
            'top':'top',
            'bottom':'bottom',
            'center':'center',
            'stretch':'stretch',
            'baseline':'baseline'
        }
    }

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