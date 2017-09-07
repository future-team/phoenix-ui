import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'
import Logger from '../utils/logger'

import '../style'
import 'phoenix-styles/less/modules/image-list.less'

/**
 * 图片列表组件<br/>
 * - 通过column设置图片列表的列数，1-8列。
 * - 若需要懒加载，请配合Image组件使用。
 *
 * 主要属性和接口：
 * - column:列表的列数，默认1列。<br>
 * ```code
 * <ImageList column={4}>
 *  {
 *      this.state.images.map((data,index)=>{
 *          return (
 *              <dl className='ph-image-item' key={index}>
 *                  <dt>
 *                      <Image src={data.image} alt={data.title} lazy/>
 *                  </dt>
 *                  <dd>
 *                      <p className='ph-image-title'>{data.title}</p>
 *                      <p className='ph-image-desp'>{data.desp}</p>
 *                  </dd>
 *              </dl>
 *          )
 *      })
 *  }
 * </ImageList>
 * ```
 * 
 * @class ImageList
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 1.7.0
 * @demo imagelist|image-list.js {展示}
 * @show true
 * */

export default class ImageList extends Component{
    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'image-list'
         * */
        classPrefix: PropTypes.string,
        /**
         * 图片列数，默认1列
         * @property column
         * @type Number
         * @default 1
         * */
        column: PropTypes.number
    };

    static defaultProps ={
        column: 1,
        classPrefix:'image-list',
        classMapping : {}
    };

    constructor(props,context){
        super(props,context)
        new Logger('ImageList')
    }

    renderImageList(){
        let {column, className, children} = this.props;

        return (
            <div {...this.otherProps} className={classnames(
                this.getProperty(true), 
                className, 
                this.setPhPrefix('column-'+column, true)
            )}>
                {children}
            </div>
        )
    }

    render(){
        return this.renderImageList();
    }
}