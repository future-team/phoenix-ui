import React,{PropTypes} from 'react'
import Component from '../utils/Component'
import classnames from 'classnames'
import {warning,setPhPrefix} from '../utils/Tool'

import "phoenix-styles/less/modules/image.less"

/**
 * 图片组件<br/>
 * - 
 *
 * 主要属性和接口：
 * - 
 * ```code
 * 
 * ```
 * 
 * @class Image
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 1.7.0
 * @demo image|image.js {展示}
 * @show true
 * */

export default class Images extends Component{
    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'image'
         * */
        classPrefix: PropTypes.string,
        /**
         * 是否懒加载
         * @property lazy
         * @type Boolean
         * @default false
         * */
        lazy: PropTypes.bool,
        /**
         * 默认图片地址
         * @property defaultSrc
         * @type String
         * @default null
         * */
        defaultSrc: PropTypes.string,
        /**
         * 图片地址
         * @property src
         * @type String
         * @default null
         * */
        src: PropTypes.string,
        align: PropTypes.string,
        phSize: PropTypes.oneOf(['cover','contain'])
    };

    static defaultProps ={
        src: null,
        align: 'center',
        lazy: false,
        defaultSrc: null,
        classPrefix:'image',
        classMapping : {}
    };

    constructor(props,context){
        super(props,context)

        // 对默认图片预加载
        this.defaultImagePreload()

        this.state = {
            src: this.getInitSrc()
        }

        this.scrollHandle = this.scrollHandle.bind(this)
        window.addEventListener('scroll', this.scrollHandle, false)
    }

    defaultImagePreload(){
        let {defaultSrc} = this.props

        if(defaultSrc){
            let img = new Image()
            img.src = defaultSrc
        }
    }

    getInitSrc(){
        let {defaultSrc, src, lazy} = this.props

        if(defaultSrc) return defaultSrc
        if(!lazy){
            return src
        }else{
            return null
        }
    }

    scrollHandle(){
        this.lazyLoad()
    }

    lazyLoad(){
        this.bodyTop = document.body.scrollTop
        this.bodyHeight = document.body.offsetHeight
        this.imageTop = this.phImage.offsetTop

        if(this.bodyTop+this.bodyHeight >= this.imageTop){
            this.imageLoad()
        }
    }

    componentDidMount(){
        let {defaultSrc, lazy} = this.props

        if(defaultSrc && !lazy) this.imageLoad()
        if(lazy) this.lazyLoad()
    }

    imageLoad(){
        let {src} = this.props

        let img = new Image()
        img.src = src

        if(img.complete){ // 如果已经存在，直接加载
            this.setState({src: src})
            return
        }

        img.onload = ()=>{ // 否则等到图片加载完成
            img.onload = null

            this.setState({src: src})
        }
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollHandle, false)
    }

    renderImage(){
        let {className, children} = this.props;

        return (
            <div className={classnames(this.getProperty(true), className)} ref={(phImage)=>{this.phImage=phImage}}>
                <img {...this.props} src={this.state.src} />
            </div>
        )
    }

    render(){
        return this.renderImage();
    }
}