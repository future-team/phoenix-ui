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
    timer  = null;

window.onhashchange = function(){ // 处理url变动时手动插入dom不消失
    _unrenderLayer();
}

function renderLayer(content){
    return <Toast>{content}</Toast>;
}

function _renderLayer(layerElement, duration, callback){
    ReactDOM.render(layerElement, _layer);
    document.body.appendChild(_layer);

    timer = setTimeout(function(){
        _unrenderLayer();
        clearTimeout(timer);
        callback();
    }, duration);
}

function _unrenderLayer(){
    ReactDOM.unmountComponentAtNode(_layer);
}

export default {
    info(content, duration, callback){
        let layerElement = renderLayer(content);
        _renderLayer(layerElement, duration, callback);
    },
    remove(){
        _unrenderLayer();
        clearTimeout(timer);
    }
}