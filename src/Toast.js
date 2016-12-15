import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 * 功能组件-飘字
 * @class Toast
 * @module Action
 * @extends Component
 * @constructor
 * @demo toast.js {展示}
 * @demo toast.js {源码}
 * @show true
 * */
class Toast extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * */
        classPrefix:PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag:PropTypes.string
   };

    static defaultProps = {
        componentTag:'div',
        classMapping : {
        }
    };

    constructor(props, context) {
        super(props, context);
    }

    render(){
        let {componentTag:Component} = this.props;

        return (
            <Component {...this.props} className={classnames(
                'toast'
            )}>
                <div className="toast-shadow"></div>
                <div className="toast-main">
                    <div className={classnames("toast-content")}>
                        {this.props.children}
                    </div>
                </div>
            </Component>
        );
    }

}

let _layer = document.createElement('div'),
    timer  = null,
    visible = false;

function renderLayer(content){
    return <Toast>{content}</Toast>;
}

function _renderLayer(layerElement, duration, callback){
    visible = true;

    ReactDOM.render(layerElement, _layer);
    document.body.appendChild(_layer);

    window.addEventListener('hashchange', _unrenderLayer, false);

    timer = setTimeout(function(){
        visible = false;

        _unrenderLayer();
        callback();
    }, duration);
}

function _unrenderLayer(){
    ReactDOM.unmountComponentAtNode(_layer);
    if(visible) document.body.removeChild(_layer);

    window.removeEventListener('hashchange', _unrenderLayer, false);
    clearTimeout(timer);
}

export default {
    info(content, duration, callback){
        let layerElement = renderLayer(content);
        _renderLayer(layerElement, duration, callback);
    },
    show(content, duration, callback){
        this.info(content, duration, callback);
    },
    remove(){
        _unrenderLayer();
        clearTimeout(timer);
    }
}