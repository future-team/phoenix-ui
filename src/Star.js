import React, {PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

/**
 * <h5>基础组件，主要包括:</h5>
 * <strong><a href='../classes/Star.html'>Star 星级</a></strong><br/>
 * <strong><a href='../classes/Button.html'>Button 按钮</a></strong><br>
 *  <strong><a href='../classes/ButtonGroup.html'>ButtonGroup 按钮组</a></strong><br>
 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
 * @module 基础组件
 * @main 基础组件
 * @static
 */
/**
 * 星级评价组件<br />
 * - 通过Rate设置星级评价的分数, 最低0, 最高50, 5的倍数。
 * - 通过phSize设置大小, 可选sm、md、lg。
 *
 * 主要属性和接口：
 * - phSize(v1.1.2以下用size):星星的大小。分别为sm、md、lg, 默认sm。 <br/>
 * 如：`<Star phSize="lg" />`
 * - Rate:星级评价的分数。最低0, 最高50, 5的倍数递增, 默认0。 <br/>
 * 如：`<Star Rate={10} />`
 *
 * @class Star
 * @module 基础组件
 * @extends Component
 * @constructor
 * @demo star|star.js {展示}
 * @show true
 * */

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
         * @property phSize
         * @type String
         * @default 'sm'
         * */
        phSize:PropTypes.string,
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'star'
         * */
        classPrefix: PropTypes.string,
    };

    static defaultProps = {
        phSize: 'sm',
        classPrefix: 'star',
        Rate: 0,
        classMapping: {}
    };

    constructor(props,context){
        super(props,context);
    }

    render(){
        let {Rate,className} = this.props;
        let rateCls = 'star-'+ Math.round((Rate*2)/10)*5;
        // let sizeCls = size && 'star-'+size;

        return (
            <div className={classnames(
                this.getProperty(true),
                setPhoenixPrefix(rateCls),
                className
            )}>
                <div className={setPhoenixPrefix("star-grey")}></div>
            </div>
        )
    }
}