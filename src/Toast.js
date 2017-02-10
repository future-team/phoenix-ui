import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

/**
 * 飘字组件<br/>
 * - 由于飘字的使用范围可预估, 为方便使用在原组件的基础上更进一步改为函数式的使用方式。
 * - 使用: `Toast.info(message, duration, callback)`
 *
 * 示例: <br/>
 * - 显示普通飘字, 如:<br/>
 * `Toast.info('注册成功!', 1000, ()=>{console.log('飘字消失时执行的回调函数');})`
 *
 * @class Toast
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @show true
 * @demo toast.js
 * */

class Toast extends Component{

    static propTypes = {};

    static defaultProps = {
        classPrefix:'toast',
        componentTag:'div',
        classMapping : {}
    };

    constructor(props, context) {
        super(props, context);
    }

    render(){
        let {componentTag:Component} = this.props;

        return (
            <Component {...this.props} className={classnames(
                this.getProperty(true),
            )}>
                <div className={setPhoenixPrefix("toast-shadow")}></div>
                <div className={setPhoenixPrefix("toast-main")}>
                    <div className={setPhoenixPrefix("toast-content")}>
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
    remove(){
        _unrenderLayer();
        clearTimeout(timer);
    }
}