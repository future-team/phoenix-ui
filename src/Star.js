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
 * @module 基础组件
 * @extends Component
 * @constructor
 * @demo star.js {UI展示}
 * @demo star.js {源码}
 * @show true
 * */
import React, {PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

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
    }

    static defaultProps = {
        classPrefix:'star',
        Rate:0,
        size:'xs'
    }

    constructor(props,context){
        super(props,context);
    }

    render(){
        let {Rate,size} = this.props;
        let rateCls = Rate && 'star-'+ Math.round((Rate*2)/10)*5;
        let sizeCls = size && 'star-'+size;

        return (
            <div className={classnames(
                this.getProperty(true),
                setPhoenixPrefix(rateCls),
                setPhoenixPrefix(sizeCls)
            )}>
                <div className={setPhoenixPrefix("star-grey")}></div>
            </div>
        )
    }
}