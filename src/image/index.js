import React from 'react'
import PropTypes from 'prop-types'
import Component from '../utils/Component'
import classnames from 'classnames'
import {warning,getScrollTop,getClientHeight} from '../utils/Tool'
import Logger from '../utils/logger'

import '../style'
import 'phoenix-styles/less/modules/image.less'

/**
 * 图片组件<br/>
 * - 和普通图片使用方式一致，src为必填选项，可自行添加alt属性。
 * - 可通过defaultSrc添加默认图片地址，在图片未加载出来之前显示。
 * - 可通过phSize设置图片大小，default为宽高和父级一致；cover为覆盖，不变形，没有空白区域；contain包含，不变形，可能有空白区域。
 * - 可通过lazy设置图片为懒加载的模式，当图片进入视口之后才开始加载，可配合ImageList使用。
 * - 可通过loadCallback设置图片加载完成的回调函数。
 * - cover和contain必须设置定高。
 *
 * 主要属性和接口：
 * - src: 图片地址。<br/>
 * 如：`<Image src={IMAGE_URL} alt='图片没有加载上的提示语'/>`
 * - defaultSrc: 默认图片地址。<br/>
 * 如：`<Image src={IMAGE_URL} defaultSrc={DEFAULT_URL}/>`
 * - phSize: 图片大小。<br/>
 * 如：`<Image src={IMAGE_URL} phSize='cover'/>`
 * - lazy: 是否懒加载<br/>
 * 如：`<Image src={IMAGE_URL} lazy/>`
 * - loadCallback: 图片加载完成的回调<br/>
 * 如：`<Image src={IMAGE_URL} loadCallback={(err)=>{if(!err) console.log('success!')}}/>`
 * 
 * @class Image
 * @module 基础组件
 * @extends Component
 * @constructor
 * @since 2.0.0
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
         * 图片地址
         * @property src
         * @type String
         * @default null
         * */
        src: PropTypes.string,
        /**
         * 默认图片地址
         * @property defaultSrc
         * @type String
         * @default null
         * */
        defaultSrc: PropTypes.string,
        /**
         * 图片大小，[default, cover, contain]
         * @property phSize
         * @type String
         * @default 'default'
         * */
        phSize: PropTypes.oneOf(['default','cover','contain']),
        /**
         * 是否懒加载
         * @property lazy
         * @type Boolean
         * @default false
         * */
        lazy: PropTypes.bool,
        /**
         * 图片加载完成的回调
         * @property loadCallback
         * @type Function
         * @default null
         * */
        loadCallback: PropTypes.func
    };

    static defaultProps ={
        src: null,
        defaultSrc: null,
        lazy: false,
        phSize: 'default',
        classPrefix:'image',
        classMapping : {}
    };

    constructor(props,context){
        super(props,context)

        new Logger('Image')

        this.load = false

        // 对默认图片预加载
        this.defaultImagePreload()

        this.state = {
            src: props.defaultSrc || null
        }

        this.scrollHandle = this.scrollHandle.bind(this)
        if(props.lazy) window.addEventListener('scroll', this.scrollHandle, false)
    }

    componentWillReceiveProps(nextProps){
        let {src, defaultSrc, lazy} = nextProps

        if(this.state.src !== src){
            this.load = false

            this.setState({
                src: defaultSrc || null
            }, ()=>{
                if(nextProps.lazy) window.addEventListener('scroll', this.scrollHandle, false)
                this.isLazyCallback(nextProps)
            })
        }
    }

    defaultImagePreload(){
        let {defaultSrc} = this.props

        if(defaultSrc){
            let img = new Image()
            img.src = defaultSrc
        }
    }

    scrollHandle(){
        this.lazyLoad()
    }

    lazyLoad(){
        this.scrollTop = getScrollTop()
        this.bodyHeight = getClientHeight()
        this.imageTop = this.phImage.offsetTop

        if(this.scrollTop + this.bodyHeight >= this.imageTop){
            console.log('lazyLoad')
            if(!this.load) {
                this.imageLoad(true)
            }
        }
    }

    componentDidMount(){
        this.isLazyCallback(this.props)
    }

    isLazyCallback(props){
        let {lazy} = props
        
        if(lazy && !this.load){
            this.lazyLoad()
        }else{
            this.imageLoad()
        }
    }

    getImageSize(){
        let {phSize} = this.props

        switch(phSize){
            case 'cover':
                if(this.imageWidth>this.imageHeight){
                    this.image.style.height = '100%'
                }else{
                    this.image.style.width = '100%'
                }
                break
            case 'contain':
                if(this.imageWidth>this.imageHeight){
                    this.image.style.width = '100%'
                }else{
                    this.image.style.height = '100%'
                }
                break
            default:
                this.image.style.width = '100%'
                this.image.style.height = '100%'
        }
    }

    imageLoad(isLazy){
        let {src, loadCallback} = this.props

        try{
            let img = new Image()
            img.src = src

            this.load = true
            console.log(src)
            if(img.complete){ // 如果已经存在，直接加载
                this.loadSuccessCallback(img, isLazy)
                return
            }

            img.onload = (e)=>{ // 否则等到图片加载完成
                img.onload = null
                this.loadSuccessCallback(img, isLazy)
            }
        }catch(err){
            if(loadCallback) loadCallback(err)
        }
    }

    loadSuccessCallback(img, isLazy){
        let {src, lazy, loadCallback} = this.props
        if(lazy) window.removeEventListener('scroll', this.scrollHandle, false)

        this.isLazy = isLazy

        this.setState({src: src})

        this.imageWidth = img.width
        this.imageHeight = img.height

        this.getImageSize()
        if(loadCallback) loadCallback()
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollHandle, false)
    }

    renderImage(){
        let {className, style, alt, children} = this.props;

        return (
            <div className={classnames(this.getProperty(true), className)} 
                ref={(phImage)=>{this.phImage=phImage}}
                style={this.getStyles(style)}
            >
                <img {...this.otherProps} className='' src={this.state.src} ref={(image)=>{this.image=image}} />
            </div>
        )
    }

    render(){
        return this.renderImage();
    }
}