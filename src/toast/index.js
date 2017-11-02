import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Component from '../utils/Component'
import classnames from 'classnames'
import Logger from '../utils/logger'

import Icon from '../icon'

import '../style'
import 'phoenix-styles/less/modules/toast.less'

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
        super(props, context)
        new Logger('Toast')
    }

    renderChildren(){
        let {phIcon,children} = this.props

        if(phIcon){
            let loading = phIcon.indexOf('loading')!=-1

            return (
                <div className={classnames(
                    this.setPhPrefix('body'), 
                    loading? this.setPhPrefix('loading'):'',
                    children? '':this.setPhPrefix('only-icon')                    
                )}>
                    {phIcon? <Icon phIcon={phIcon} phSize={loading?'lg':'xlg'} /> :null}
                    {children? <p>{children}</p>:null}
                </div>
            )
        }else{
            return children;
        }
    }

    renderToast(){
        let {componentTag:Component, className, phIcon} = this.props;

        return (
            <Component {...this.otherProps} className={classnames(
                this.getProperty(true),
                className
            )}>
                <div className={this.setPhPrefix('shadow')}></div>
                <div className={this.setPhPrefix('main')}>
                    <div className={classnames(this.setPhPrefix('content'), phIcon? this.setPhPrefix('rect'):'')}>
                        {this.renderChildren(className)}
                    </div>
                </div>
            </Component>
        );
    }

    render(){
        return this.renderToast()
    }

}

let _layer = document.createElement('div'),
    timer  = null,
    visible = false;

function renderLayer(content,phIcon){
    return <Toast phIcon={phIcon}>{content}</Toast>;
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
            if(callback) callback();
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
        let layerElement = renderLayer(content, 'success-circle');
        _renderLayer(layerElement, duration, callback);
    },
    fail(content, duration, callback){
        let layerElement = renderLayer(content, 'fail-circle');
        _renderLayer(layerElement, duration, callback);
    },
    tip(content, duration, callback){
        let layerElement = renderLayer(content, 'warning-circle');
        _renderLayer(layerElement, duration, callback);
    },
    loading(content, duration, callback){
        let layerElement = renderLayer(content, 'loading-white');
        _renderLayer(layerElement, duration, callback);
    },
    remove(){
        _unrenderLayer();
        clearTimeout(timer);
    }
}