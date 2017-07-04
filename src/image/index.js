import React,{PropTypes} from 'react';
import Component from '../utils/Component';
import classnames from 'classnames';
import {setPhPrefix} from '../utils/Tool';

/**
 * Image图片<br/>
 * - 
 *
 * @class Image
 * @module 标签组件
 * @extends Component
 * @constructor
 * @since 2.0.0
 * @demo image|image.js {展示}
 * @show true
 * */

export default class Image extends Component{
    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'badge'
         * */
        classPrefix: PropTypes.string,
    };

    static defaultProps ={
        imgSize: [100, 100],
        defaultSrc: '',
        src: '',
        alt: '',
        phSize: 'cover',
        position: [0,0],
        background: false,
        classPrefix:'image',
        classMapping : {
            
        }
    };

    constructor(props,context){
        super(props,context);
    }

    renderImage(){
        let {background, src, alt} = this.props;

        if(background){
            return <div className={setPhPrefix('image-main')} style={{backgroundImage:src}}></div>
        }else{
            return <img src={src} alt={alt} />
        }
    }

    render(){
        let {className} = this.props;

        return(
            <div className={classnames(
                this.getProperty(true),
                className
            )}>
                {this.renderImage()}
            </div>
        )
    }
}