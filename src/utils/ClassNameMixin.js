/**
 * Created by mac on 15/9/7.
 */
import {classConstants} from './constants.js';
let consts = classConstants;

const PREFIX = 'ph-';

export default obj=>{
    /*
     * 给className添加前缀后返回className
     * @method getClassName
     * @param name {String} 从该字符串中去查找
     * @param pre {Boolean} 是否添加Component中定义的class前缀，默认添加
     * @return {String}
     * */
    obj.prototype.getClassName=function(name,pre=true){
        name=name?name:'';
        name = (name+'').split(' ');
        let list = [],
            _this = this;
        name.forEach(function(item){
            if(item) list.push(PREFIX + _this.setPrefix(item,pre) );
        });

        return list.join(' ');
    };
    /*
     * 验证props中的样式是否符合规则
     * @method getClassNames
     * @param props {Object} 从该对象中去查找
     * @param pre {Boolean} 是否添加Component中定义的class前缀，默认添加
     * @return {String}
     * */
    obj.prototype.getClassNames=function(props,pre=true){
        let clazz = {};
        for(var item in props){
            if(props[item] && item === consts[item]){
                clazz[this.getClassName(item,pre)] = true;
            }
        }
        return clazz;
    };
    /*
     * 给多个className添加前缀后返回
     * @method getClassNamesForArguments
     * @param arguments {Arguments String} 多个class参数
     * @return {String}
     * */
    obj.prototype.getClassNamesForArguments=function(){
        let arg = arguments;
        let arr = [];
        let _this = this;

        if(arg && arg.length>0 ){
            for(let i=0,len=arg.length;i<len;i++){
                if(arg[i]){
                    arr.push(_this.getClassName(arg[i]) );
                }
            }

        }

        return arr.join(' ');
    };
    /*
     * 设置css类名前缀
     * @method setPrefix
     * @param name{String} class名字
     * @param pre{Boolean} 是否添加前缀
     * @return {String}
     * */
    obj.prototype.setPrefix= function(name,pre=true){
        var classArray=consts.classNameNamespace?[consts.classNameNamespace] :[];

        if(pre && this.props.classPrefix){
            classArray.push(this.props.classPrefix);
        }
        if(name&&name !=this.props.classPrefix){
            classArray.push(name);
        }

        return classArray.join(classArray.length>1?'-':'');
    };

    /*
     * 检查元素是否存在样式名
     * @method hasClass
     * @param obj {Object} 元素
     * @param cls {String} 需要检查的样式名
     * @return {Boolean}
     * */
    obj.prototype.hasClass = function(obj,cls){
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    };

    /*
     * 给元素增加一个样式名
     * @method addClass
     * @param obj {Object} 元素
     * @param cls {String} 样式名
     * */
    obj.prototype.addClass = function(obj,cls){
        if (!this.hasClass(obj, cls)) obj.className += " " + cls;
    };
    /*
     * 给元素删除一个样式名
     * @method removeClass
     * @param obj {Object} 元素
     * @param cls {String} 样式名
     * */
    obj.prototype.removeClass = function(obj,cls){
        if (this.hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
        }
    };
}
