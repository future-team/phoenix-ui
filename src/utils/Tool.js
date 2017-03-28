/**
 * Created by mac on 16/11/28.
 */

let Tool = {
    closest: (el, selector)=>{
        var matchesFn;

        // find vendor prefix
        ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
            if (typeof document.body[fn] == 'function') {
                matchesFn = fn;
                return true;
            }
            return false;
        });

        var parent;

        // traverse parents
        while (el) {
            if (el[matchesFn](selector)) return el;

            parent = el.parentElement;
            if (parent && parent[matchesFn](selector)) return parent;

            el = parent;
        }

        return null;
    },

    setPhoenixPrefix: (val)=>{
        return 'ph-' + val;
    },

    getDeviceInfo(type){
        let u = navigator.userAgent;
        let typeList = {
            trident: u.indexOf('Trident') > -1, //IE内核  
            presto: u.indexOf('Presto') > -1, //opera内核  
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端  
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器  
            iPad: u.indexOf('iPad') > -1, //是否iPad    
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };

        return typeList[type];
    }
}

export default Tool;