import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

/**
 * 行
 * @class Row
 * @module GRID
 * @extends Component
 * @constructor
 * @since 0.1.0
 * */
export default class Row extends Component{

    static propTypes={
        /**
         * 竖直方向的排列是靠上、居中、靠下、拉伸至父容器最大高度还是基于text的baseline对齐
         * @property offset，默认不偏移
         * @type Integer
         * */
        align:React.PropTypes.oneOf(['top', 'bottom','center','stretch','baseline'])
    };
    static defaultProps = {
        classPrefix:'row'
    };
    render(){
        let  { align, ...others } = this.props;
        return (
            <div {...others} className={classnames(
                'row',
                this.props.align?`${this.props.classPrefix}-${align}`:'',
                this.props.className
            )} >
                {this.props.children}
            </div>
        );
    }
}