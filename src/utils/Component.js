import React,{Component,PropTypes} from 'react';
import classnames from 'classnames';

import ClassNameMixin from './ClassNameMixin';
import PropertyMixin from './PropertyMixin';
import MethodMixin from './MethodMixin';

import extend from 'extend';


//import 'babel-polyfill';


@ClassNameMixin
@PropertyMixin
@MethodMixin
export default class BaseComponent extends Component{

    constructor(props, context,defaultState) {
        super(props, context);

        if(defaultState){
            this.setDefaultState(defaultState);
        }
        this._properties = [];
        this._styles = [];
        this.otherProps = {};
        this.initCallback(this);
        //验证
        this.replaceProperties();
        //注册
        this.registerMethod(this.otherProps);

    }
    setDefaultState(obj){

        this.state = extend({},{
            _isShow:false,
            _checked:false,
            _active:false
        },obj||{});

    }

    uniqueId(){
        return (this.classPrefix||'unique')+'_'+(new Date().getTime()+(Math.random()*1e10).toFixed(0) );
    }

    initCallback(){
        this.props.initCallback && this.props.initCallback(this);
    }

    componentWillMount(){

    }

    shouldComponentUpdate(nextProps, nextState){
        this.replaceProperties(nextProps);
        return true;
    }


    componentDidMount(){
        this.loadedCallback && this.loadedCallback(this);
    }


    //注册回调
    registerMethod(methods){
        //注册回调
        let method = null,
            methodName='',
            other = {};
        for(let item in methods){
            method = this.methods[item];
            if(method){
                this.setMethod(item,methods[item] );
            }
        }
    }

    setMethod(methodName,method ){

        if(methodName.match('Callback') == null){
            throw new Error(`The callback method name format is wrong, should be ${methodName}Callback`);
        }
        if(!this[methodName]){
            this[methodName] =(function(method){
                let m = method;
                return function(){
                    return m.apply(m,Array.prototype.slice.call(arguments, 0) );
                };
            })(method);
        }
    }

    async execMethod(method){
        let data=null;
        method = method.indexOf('Callback')!=-1?method:method+'Callback';

        if(this[method]){
            data=await this[method].apply(this[method],Array.prototype.slice.call(arguments, 1).concat(this) );
        }
        return data;
    }

    setProperty(prop,val){
        if(val!== undefined){
            this.properties[prop] = val;
            if(this.props[prop]!==undefined){
                this.updateProperty({key:prop,value:val},this._properties,this._styles,this.otherProps);
            }
        }
    }
    filterClass(key){
        let value =typeof(key)=='string'?this.props.classMapping[key]:key;

        return value ? value : key;
    }
    updateProperty(props,propList,styleList,otherProps){
        let propKey=props.key,
            propValue=props.value,
            propConfig = this.properties[propKey];

        const type = 'property';
        if(propConfig ){
            this.filterClass();
            switch (typeof(propConfig)){
                case 'boolean':
                    if(propValue){
                        propList.push(this.filterClass(propKey) );
                    }
                    break;
                case 'function':
                    let param = propConfig.call(this,propValue);
                    if(typeof(param) == 'string' ){
                        propList.push(this.filterClass(param) );
                    }else if(param.type && param.type == type){
                        this[propKey] = param.value;
                    }else{
                        //{
                        //    border:val
                        //}
                        styleList.push(param);
                    }
                    break;
                default :
                    propList.push(this.filterClass(propConfig) );
                    break;
            }

        }else{
            otherProps[propKey] = propValue;
        }
    }
    replaceProperties(props){
        // 整体替换
        let propList = [],
            styleList = [],
            otherProps={};
        props=props?props:this.props;
        for(let key in props){
            this.updateProperty({key,value:props[key]},propList,styleList,otherProps);
        }
        this._properties = propList;
        this._styles = styleList;
        this.otherProps=otherProps;
    }

    getProperty(withPrefix=true){
        let p = this.classPrefix ? this.classPrefix+' ':'';
        p +=this._properties.join(' ');
        /*if(withPrefix){
            return this.getClassName(p);
        }else{
            return this.getClassName(p,false);
        }*/
        return this.getClassName(p,false);//+' '+this.getClassName(p);
    }

    getStyles(style={}){
        let obj = {},
            styles = this._styles;

        /*propertyMixn里设置的和style相关的属性，比如*/
        for(let i=0,len=styles.length;i<len;i++){
            obj = extend({},obj,styles[i]);
        }
        /*用户设置的style*/
        return extend({},obj,style);
    }

    show(){
        this.setState({
            _isShow:true
        });
    }

    hide(){
        this.setState({
            _isShow:false
        });
    }

    trim(str){
        return str.replace(/(^\s*)|(\s*$)/g,"");
    }

    getDisplay(){
        return this.state._isShow;
    }

    render(){
        return (
            <h1>请重写父类render()方法</h1>
        );
    }
}