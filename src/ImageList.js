import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

/**
 * 图片列表组件<br/>
 * 
 *
 * 主要属性和接口：
 * 
 * 
 * 示例：
 * ```code
 *  
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
         * 图片列数
         * @property column
         * @type Number
         * @default 1
         * */
        column: PropTypes.number
    };

    static defaultProps ={
        imageData: [],
        column: 1,
        classPrefix:'image-list',
        classMapping : {}
    };

    constructor(props,context){
        super(props,context);
    }

    renderImageList(){
        let {imageData, column, className, children} = this.props;

        return (
            <div className={classnames(this.getProperty(true), className, setPhoenixPrefix("column-"+column))}>
                {
                    imageData.map((data,index)=>{
                        return (
                            <dl key={index}>
                                <dt>
                                    <img src={data.image} alt={data.name} />
                                </dt>
                                <dd>
                                    <p>{data.name}</p>
                                    <p>{data.desp}</p>
                                    <p>{data.rest}</p>
                                </dd>
                            </dl>
                        )
                    })
                }
            </div>
        );
    }

    render(){
        return this.renderImageList();
    }
}