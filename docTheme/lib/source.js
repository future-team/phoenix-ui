/**
 * Created by slashhuang on 16/2/23.
 * 相关配置文件请写在configStaticFile变量
 */
var filePaths = function(configStaticFile){
    var href = location.href;
    //根据不同的页面加载正确的路径，兼容http网上地址
    var regExp = /(module.*|classes.*)+/i;
    if(href.match(regExp)){
        href = href.replace(regExp,'');
    };
    var newPathObj={};
    for(var key in configStaticFile){
        newPathObj[key] = configStaticFile[key].reduce(function(pre,ele){
            if(ele.indexOf('http')>-1){
                return pre.concat(ele);
            }else{
                var splitArr = ele.split('/');
                return pre.concat(href+'/docTheme/'+splitArr[splitArr.length-1]);
            }
        },[])
    }
    return newPathObj;
};
var addLink = function(paths){
    var link=document.createElement('link');
    link.rel="stylesheet";
    link.href=paths;
    document.head.appendChild(link);

};
var addScript = function(paths){
    var script=document.createElement('script');
    script.src=paths;
    document.head.appendChild(script)
};
//根据configStaticFile对象，按照类型加载脚本或者css
(function(){
    var filePath = filePaths(configStaticFile);
    for(var key in filePath ){
       switch (key){
           case 'js':
               var scriptArr =filePath['js'];
               for(var i=0;i<scriptArr.length;i++){
                   addScript(scriptArr[i]);
               }
             break;
           case 'css':
               var cssArr =filePath['css'];
               for(var i=0;i<cssArr.length;i++){
                   addLink(cssArr[i]);
               }
               break;
           case 'external':
               var externalArr =filePath['external'];
               for(var i=0;i<externalArr.length;i++){
                   addScript(externalArr[i]);
               }
               break;
           default:break;
       }
    }
}());
