import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

/**
 * 飘字组件<br/>
 * - 由于飘字的使用范围可预估, 为方便使用在原组件的基础上更进一步改为函数式的使用方式。
 * - 普通信息: `Toast.info(message, duration, callback)`
 * - 成功信息: `Toast.success(message, duration, callback)`
 * - 失败信息: `Toast.fail(message, duration, callback)`
 * - 加载中: `Toast.loading(message, duration, callback)`
 *
 * 示例: <br/>
 * - 显示普通飘字, 如:<br/>
 * `Toast.info('只显示信息的toast！', 1000, ()=>{console.log('飘字消失时执行的回调函数');})`
 * - 显示成功信息, 如:<br/>
 * `Toast.success('操作成功', 1000, ()=>{console.log('飘字消失时执行的回调函数');})`
 * - 显示失败信息, 如:<br/>
 * `Toast.fail('操作失败', 1000, ()=>{console.log('飘字消失时执行的回调函数');})`
 * - 显示加载中, 如:<br/>
 * `Toast.loading('加载中...', 1000, ()=>{console.log('飘字消失时执行的回调函数');})`
 *
 * @class Toast
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 0.3.0
 * @demo toast|toast.js
 * @show true
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
        let {componentTag:Component, className} = this.props;

        return (
            <Component {...this.props} className={classnames(
                this.getProperty(true),
                className
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

function renderLayer(content,className){
    return <Toast className={className}>{content}</Toast>;
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
    success(content, duration, callback){
        let layerElement = renderLayer(content, setPhoenixPrefix('toast-success'));
        _renderLayer(layerElement, duration, callback);
    },
    fail(content, duration, callback){
        let layerElement = renderLayer(content, setPhoenixPrefix('toast-fail'));
        _renderLayer(layerElement, duration, callback);
    },
    loading(content, duration, callback){
        let layerElement = renderLayer(content, setPhoenixPrefix('toast-loading'));
        _renderLayer(layerElement, duration, callback);
    },
    remove(){
        _unrenderLayer();
        clearTimeout(timer);
    }
}