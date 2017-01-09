import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

/**
 * 表单元素，input框，使用方式跟原生一致
 * @class Input
 * @module 表单组件
 * @extends Component
 * @constructor
 * @demo input.js {展示}
 * @demo input.js {源码}
 * @show true
 * */
export default class Input extends Component{

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
        classPrefix:'input',
        componentTag:'div',
        classMapping : {

        }
    };

    constructor(props, context) {
        super(props, context);
    }

    otherView(type){
        return (
            <label className={setPhoenixPrefix("multi-group")}>
                <div className={setPhoenixPrefix(type)}>
                    <input {...this.props} />
                    <i></i>
                </div>
                <span>{this.props.label ||''}</span>
            </label>
        );
    }

    renderInput(type){
        let html = <div></div>;

        if(type =='checkbox' || type=='radio'){
            html=this.otherView(type);
        }else{
            html = (<input {...this.props} className={
                classnames(
                    this.getProperty(true),
                    this.props.className
                )
                }/>);
        }

        return html;
    }


    render(){
        let {componentTag:Component,type} = this.props;
        return this.renderInput(type ? type:'text');
    }

}