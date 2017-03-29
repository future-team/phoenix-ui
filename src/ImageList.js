import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

/**
 * 图片列表组件<br/>
 * - 通过imageData配置图片列表数据，数组格式，其中图片地址对应`image`字段，名称对应`name`字段，描述对应`desp`字段。
 * - 通过column设置图片列表的列数，1-8列。
 * - 通过nameFormat设置名称的格式，以`#`代表名称；通过despFormat设置描述的格式，以`#`代表描述。
 * - 通过otherParams设置额外的字段和格式。
 * - 通过clickCallback设置点击单个图片块的回调函数，返回当前图片的所有数据。
 * - 可以自定义内容children，当有内容时除了column其他属性不起作用。
 *
 * 主要属性和接口：
 * - imageData:图片列表数据，默认[]。<br>
 * ```code
 * json:
 * {
 *  "data": [
 *      {
 *          "image": "http://img5.duitang.com/uploads/item/201602/11/20160211214958_RhdCY.jpeg",
 *          "name": "图1",
 *          "desp": "关于图是一个...",
 *          "score": 1
 *      },
 *      ...
 *  ]
 * }
 * ...
 * <ImageList imageData={this.state.imageData} />
 * ```
 * - column:列表的列数，默认1。<br>
 * 如: `<ImageList column={2}  imageData={this.state.imageData} />`
 * - nameFormat:名称的格式，以`#`代表名称，默认"#"；despFormat:描述的格式，以`#`代表描述，默认"#"。
 * 如: `<ImageList imageData={this.state.imageData} nameFormat={"姓名: #"} despFormat={"描述: #"} />`
 * - otherParams:额外的字段和格式，默认{}。
 * 如: `<ImageList imageData={this.state.imageData} otherParams={{"score":"分数: #"}} />`
 * - clickCallback:点击单个图片块的回调函数。
 * 如: `<ImageList imageData={this.state.imageData} clickCallback={(data)=>{console.log(data);}} />`
 * - 自定义内容:children，当有内容时除了column其他属性不起作用。
 * ```code
 * <ImageList column={4}>
 *  {
 *      this.state.imageData.map((data,index)=>{
 *          return (
 *              <dl key={index}>
 *                  <dd>
 *                      <p>{data.name}</p>
 *                      <p>{data.desp}</p>
 *                  </dd>
 *                  <dt>
 *                      <img src={data.image} alt={data.name} />
 *                  </dt>
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
         * 图片列表数据
         * @property imageData
         * @type Array
         * @default []
         * */
        imageData: PropTypes.array,
        /**
         * 图片列数
         * @property column
         * @type Number
         * @default 1
         * */
        column: PropTypes.number,
        /**
         * 名称格式
         * @property nameFormat
         * @type String
         * @default "#"
         * */
        nameFormat: PropTypes.string,
        /**
         * 描述格式
         * @property despFormat
         * @type String
         * @default "#"
         * */
        despFormat: PropTypes.string,
         /**
         * 其他参数，额外增加的可自定义的字段
         * @property otherParams
         * @type Object
         * @default {}
         * */
        otherParams: PropTypes.object,
        /**
         * 点击单个图片块的回调函数,返回当前图片的所有信息
         * @method clickCallback
         * @type Function
         * @default null
         **/
        clickCallback: PropTypes.func
    };

    static defaultProps ={
        imageData: [],
        column: 1,
        nameFormat: "#",
        despFormat: "#",
        otherParams: {},
        classPrefix:'image-list',
        classMapping : {}
    };

    constructor(props,context){
        super(props,context);
    }

    formatParams(format, param){
        if(param && format.indexOf('#')!=-1){
            return format.replace('#',param);
        }
    }

    clickCallback(data){
        let {clickCallback} = this.props;
        if(clickCallback) clickCallback(data);
    }

    renderImageList(){
        let {imageData, column, nameFormat, despFormat, otherParams, className, children} = this.props;

        if(children){
            return <div className={classnames(this.getProperty(true), className, setPhoenixPrefix("column-"+column))}>{children}</div>
        }else{
            return (
                <div className={classnames(this.getProperty(true), className, setPhoenixPrefix("column-"+column))}>
                    {
                        imageData.map((data,index)=>{
                            return (
                                <dl key={index} onClick={::this.clickCallback.bind(this,data)}>
                                    <dt>
                                        <img src={data.image} alt={data.name} />
                                    </dt>
                                    <dd>
                                        <p className={setPhoenixPrefix('image-name')}>{this.formatParams(nameFormat, data.name)}</p>
                                        <p className={setPhoenixPrefix('image-desp')}>{this.formatParams(despFormat, data.desp)}</p>
                                        {this.renderRest(otherParams, data)}
                                    </dd>
                                </dl>
                            )
                        })
                    }
                </div>
            );
        }
    }

    renderRest(otherParams, data){
        var newRest = [];

        for(let i in otherParams){
            newRest.push(<p key={i}>{this.formatParams(otherParams[i], data[i])}</p>);
        }

        return newRest;
    }

    render(){
        return this.renderImageList();
    }
}