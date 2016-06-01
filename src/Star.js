/**
 *
 * 星级评价
 */
/**
 * 星级评价(Star)组件<br />
 * 提供的UI展示属性接口包括<br/>
 * <ul>
 *     <li>rate：星级评价的分数(满分为50)<code>默认为0</code></li>
 *     <li>size：星星的大小(可选md、lg、默认3种size)<code></code></li>
 * </ul><br>
 * 使用方式:
 * <pre><code>&#60;Star rate={50} size={10}/&#62;</code>
 * </pre>
 * @class Star
 * @module UI
 * @extends Component
 * @constructor
 * @demo star.js {UI展示}
 * @demo star.js {源码}
 * @show true
 * */
import React, { Component ,PropTypes} from 'react';
import classNames from 'classnames';
import classNameMixin from './utils/ClassNameMixin.js';
@classNameMixin
export default class Star extends Component{
    static propTypes = {
        /**
         * 星级评价分数
         * @property Rate
         * @type number
         * @default 默认为0，最高50
         * */
        Rate:PropTypes.number,
        /**
         * 星星大小
         * @property size
         * @type String
         * @default
         * */
        size:PropTypes.string
    };
    static defaultProps = {
        Rate:0,
        size:undefined
    };
    constructor(){
        super();
    }
    render(){
        let {Rate,size} = this.props;
        let rateCls =Rate&&'star-'+ Math.round((Rate*2)/10)*5;
        let sizeCls = size&&'star-'+size;
        return (
            <div className={`star ${rateCls} ${sizeCls}`}>
                <div className="star-grey"></div>
            </div>
        )
    }
}