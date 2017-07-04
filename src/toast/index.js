import React,{PropTypes} from 'react'
import ReactDOM from 'react/lib/ReactDOM'
import Component from '../utils/Component'
import classnames from 'classnames'
import {setPhPrefix} from '../utils/Tool'

import './toast.less'

/**
 * 飘字组件<br/>
 * - 由于飘字的使用范围可预估, 为方便使用在原组件的基础上更进一步改为函数式的使用方式。
 * - 普通信息: `Toast.info(message, duration, callback)`
 * - 成功信息: `Toast.success(message, duration, callback)`
 * - 失败信息: `Toast.fail(message, duration, callback)`
 * - 加载中: `Toast.loading(message, duration, callback)`
 * - 移除: `Toast.remove()`
 * - 如果不根据设置的时间移除飘字，`duration`设置为false，`Toast.remove()`移除飘字。
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
 * - 移除飘字, 如:<br/>
 * `Toast.remove()`
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

    renderChildren(){
        let {className,children} = this.props;

        if(className){
            return <div className={setPhPrefix("toast-body")}>{children}</div>
        }else{
            return children;
        }
    }

    render(){
        let {componentTag:Component, className} = this.props;

        return (
            <Component {...this.props} className={classnames(
                this.getProperty(true),
                className
            )}>
                <div className={setPhPrefix("toast-shadow")}></div>
                <div className={setPhPrefix("toast-main")}>
                    <div className={setPhPrefix("toast-content")}>
                        {this.renderChildren(className)}
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

    if(duration){
        timer = setTimeout(function(){
            visible = false;

            _unrenderLayer();
            callback();
        }, duration);
    }    
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
        let layerElement = renderLayer(content, setPhPrefix('toast-success'));
        _renderLayer(layerElement, duration, callback);
    },
    fail(content, duration, callback){
        let layerElement = renderLayer(content, setPhPrefix('toast-fail'));
        _renderLayer(layerElement, duration, callback);
    },
    loading(content, duration, callback){
        let layerElement = renderLayer(content, setPhPrefix('toast-loading'));
        _renderLayer(layerElement, duration, callback);
    },
    remove(){
        _unrenderLayer();
        clearTimeout(timer);
    }
}