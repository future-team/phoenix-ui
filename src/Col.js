import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';

/**
 * 列
 * @class Col
 * @module 布局组件
 * @extends Component
 * @constructor
 * @since 0.1.0
 * */
export default class Col extends Component{

    static propTypes = {
        /**
         * 占100份的多少份，目前支持5-100之间5的倍数、33（1\3）和66(2\3)
         * @property width
         * @type Integer
         * */
        width:PropTypes.string,
        /**
         * 偏移多少，，目前支持5-100之间5的倍数、33（1\3）和66(2\3)
         * @property offset，默认不偏移
         * @type Integer
         * */
        offset:PropTypes.string,
        /**
         * 竖直方向的排列是靠上、居中还是靠下
         * @property offset，默认不偏移
         * @type Integer
         * */
        align:React.PropTypes.oneOf(['top', 'bottom','center'])
    };
    static defaultProps = {
        classPrefix:'col'
    };
    render(){
        let  { width,offset,align,classPrefix, ...others } = this.props;
        return (
            <div {...others} className={
                classnames(
                    'col',
                    this.props.width?`${classPrefix}-${width}`:'',
                    this.props.offset?`${classPrefix}-offset-${offset}`:'',
                    this.props.align?`${classPrefix}-${align}`:'',
                    this.props.className
                )
                }>
                {this.props.children}
            </div>
        );
    }
}