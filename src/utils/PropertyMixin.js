/**
 * Created by mac on 16/1/3.
 */
import warning from './warning';

export default obj=>{

    let getVal= function(vals,val){
        let result=(vals.join(',')+',').match(val.toLowerCase()+',' )!=null ? val: '';
        if(!result){
            warning('属性的取值 %s 不在设定集合 %s 里',val , vals.join(','))
        }
        return result;
    };

    let properties={
        /*以下属性都是数组里固定值*/
        //类型
        phType:function(val){
            return getVal(['tacked','justify'],val);
        },
        phSize:function(val){
            return getVal(['lg','sm','default','xs','md'],val);
        },
        phStyle:function(val){
            return getVal(['primary','info','success','error','warning','danger','link','light','positive','calm','balanced','energized','assertive','lightbrown','lightgray'],val);
        },
        status:val=>{
            getVal(['diabled','active','enable'],val)
        },
        align:function(val){
            return getVal(['center','left','middle','auto','top','right','bottom'],val);
        },
        /*以下属性没有取值，需要的时候添加对应的属性即可*/
        disabled:true,
        active:true,
        radius:true,
        round:true,
        clearfix:true,
        clear:true,
        phHref:true,
        show:true,
        hide:true,
        block:true,


        /*以下属性相当于css属性的快速赋值，比如设置zIndex="2",则会被merge进style里，如果只有属性zIndex没有设置取值，则会被放入props列表中*/
        zIndex:val=>{
            if(typeof(val) =='string' ){
                return {
                    zIndex:val
                };
            }
            return 'zindex';
        },
        border:val=>{
            if(typeof(val) =='string' ){
                return {
                    border:val
                };
            }
            return  'border';
        },
        padding:val=>{
            if(typeof(val) =='string' ){
                return {
                    padding:val
                };
            }
            return 'padding';
        },
        margin:val=>{
            if(typeof(val) =='string' ){
                return {
                    margin:val
                };
            }
            return 'margin';
        },
        radiusSize:val=>{
            return {
                WebkitBorderRadius:val,
                borderRadius:val
            }
        },
        offset:function(val){
            return '-offset-'+val;
        }.bind(obj),
        /*以下属性会被直接挂载在component上，可以不用通过component.props获取*/
        classPrefix:val=>{
            return {
                type:'property',
                value:val
            };
        },
        componentTag:val=>{
            return {
                type:'property',
                value:val
            };
        },
        params:val=>{
            return {
                type:'property',
                value:val
            };
        }
    };

    obj.prototype.properties = properties;
}