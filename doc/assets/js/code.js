$(function() {
    var txtCode = $("#txtCode"),
        txtHtml = $("#txtHtml"),
        ifrRender = $('#render')[0],
        editor, htmlEditor, code, html;

    editor = CodeMirror.fromTextArea(txtCode[0], {
        lineNumbers: true,
        mode: "javascript",
        keyMap: "sublime",
        autoCloseBrackets: true,
        matchBrackets: true,
        showCursorWhenSelecting: true,
        theme: "monokai",
        lint: true,
        extraKeys: {
            "Ctrl-J": "autocomplete"
        },
        gutters: ["CodeMirror-lint-markers"]
    });

    htmlEditor = CodeMirror.fromTextArea(txtHtml[0], {
        lineNumbers: true,
        mode: "text/html",
        keyMap: "sublime",
        autoCloseBrackets: true,
        matchBrackets: true,
        showCursorWhenSelecting: true,
        theme: "monokai",
        extraKeys: {
            "Ctrl-J": "autocomplete"
        }
    });


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

    code = getPramByUrl('code');
    html = getCode('html');
    code = getCode('script') ||  (html && code);

    function getCode(type) {
        var index = code.indexOf('<'+ type + '>');

        if (index > -1) {
            return code.substring(index + type.length + 2, code.indexOf('</'+ type + '>'));
        }
    }

    function resetCode() {
        editor.setValue(code);
        htmlEditor.setValue(html || '');
        ifrRender.src = "demo.html";
    }
    resetCode();

    $('#mod').text(getPramByUrl('n'));

    $('#btnRun').click(function() {
        var win = ifrRender.contentWindow;
        if(win && win.__st_render){
            win.__st_render(htmlEditor.getValue(),editor.getValue());
        }
    }).next().click(resetCode).next().click(function(){
        var code = editor.getValue(),
            html = htmlEditor.getValue();

            if(html)
            {
                code += '<html>' + html + '</html><script>' + code + '</script>';
            }
            window.open('show.html', code);


    });

});