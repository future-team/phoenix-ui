(function(){

    function getPramByUrl(name){
        var reg = new RegExp(''+name+'=.*','g');
        var code = location.search.match(reg);
        if(code && code.length>0){
            code = code[0].split('&')[0].split('=')[1] ;
        }else{
            code = '';
            if(name =='code'){
                code = window.name;
            }
        }

        return decodeURIComponent(decodeURIComponent(code));
    }

	var code = getPramByUrl('code'),
    html = getCode('html');
    code = getCode('script') || code;

	function getCode(type) {
        var index = code.indexOf('<'+ type + '>');

        if (index > -1) {
            return code.substring(index + type.length + 2, code.indexOf('</'+ type + '>'));
        }
    }
    
    if(window.__st_render)
    {
    	window.__st_render(html,code);
    }
})();