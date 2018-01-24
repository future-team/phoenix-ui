/* global $:true */
$(function() {
    'use strict';
    var _assetsPath = $(document.body).attr("_assetsPath");

    //nav init
    function navInit() {
        var sidebar = $('#sidebar_list');
        sidebar.find(' > dt > span').click(function() {
            if($(this).hasClass('glyphicon-plus')){
                $(this).addClass('glyphicon-minus').removeClass('glyphicon-plus');
            }else{
                $(this).addClass('glyphicon-plus').removeClass('glyphicon-minus');
            }
            $(this).parent().next().toggleClass('hide');
        })

        $('#txtSearch').keyup(function(e) {
            //if(e.keyCode === 13){
            filter($(this).parent().next().children('dd'), $.trim(this.value));
            //}
        })

        var path = window.location.pathname,
            name = path.substring(path.lastIndexOf('/'));
        if(decodeURI){name=decodeURI(name);}
        var current = sidebar.find('a[href$="' + name + '"]:first').addClass('active').parent().parent().parent();
        if (current.hasClass('hide')) {
            current.removeClass('hide').prev().children('span').removeClass('glyphicon-plus');
        }
    }

    function filter(list, text) {
        if (text) {
            var fnMatch = matchText(text);
            list.each(function() {
                var modMatch, mod;
                mod = $(this).find(' > ul > li').each(function() {
                    var cls = $(this);
                    if (fnMatch(cls.text())) {
                        cls.removeClass('hide');
                        modMatch = true;
                    } else {
                        cls.addClass('hide');
                    }
                }).end().prev();

                if (!modMatch) {
                    modMatch = fnMatch(mod.children('a').text());
                }
                mod.toggleClass('hide', !modMatch);
            })
        } else {
            list.parent().find('.hide').removeClass('hide');
        }
    }

    function matchText(match) {
        match = match.toLowerCase();
        return function(text) {
            return text.toLowerCase().indexOf(match) > -1;
        }
    }

    function InitClasses() {
        $('#classesItems').find('a').on('click', function(event) {
            var tabToActivate = $(this).attr('data-tabid'),
                anchor = $(this).attr('data-anchor');
            event.preventDefault();
            anchorTo(tabToActivate, anchor);
        });

        var tab = $('#itemTab'),
            doc = $(document);

        function anchorTo(tabToActivate, anchor) {
            tab.find('[href="' + tabToActivate + '"]').click();
            doc.scrollTop($(anchor).offset().top - 50);
        }

        function gotoItem() {
            var hash = location.hash,
                params;
            if (hash.length > 1) {
                params = hash.split('_');
                setTimeout(function() {
                    anchorTo(params[0], hash);
                }, 100)
            }
        }
        window.onhashchange = gotoItem;

        gotoItem();
    }

    /* 代码行定位 */
    function gotoCode() {
        var line = location.hash,
            item, top;
        if (line && line.length > 2) {
            line = location.hash.substring(2);
            item = $('#src_code > ol > li:eq(' + line + ")");
            if (item.length) {
                item.addClass('active');
                top = item.position().top - 100;
                setTimeout(function() {
                    $(document).scrollTop(top);
                }, 0)
            }
        }
    }

    var html_ifr = '<iframe class="example-show" />';

    function toggleDemoTab(target) {
        target.siblings('.active').removeClass('active')
        target.addClass('active');
    }

    function initDemoView() {
        //demo tab切换处理
        var list = $('.example-list').on('click', 'li', function(i) {
            var title = $(this),
                active;
            if (!title.hasClass('active')) {
                active = title.parent().next().children(':eq(' + title.attr("_no") + ')');
                toggleDemoTab(title);
                toggleDemoTab(active);
                loadShowDemo(active);
            }
        });

        //处理初始化代码显示
        list.next().each(function(){
            var demo = $(this).children(':first').addClass('active');
             loadShowDemo(demo);
        });

        $('.btn-viewDemo').on('click',openDemo).next().on('click',editDemo);
    }
    function loadShowDemo(code){
        if(code.hasClass('demo-loaded'))
            return;

        var codeText = code.text().trim(),
            ifr;

        if (code.parent().hasClass('showdemo')) {
            var demoUrl =$('.example-list li').eq(code.index() ).attr('data-demo') ||'';
            ifr = $(html_ifr);
            ifr.load(loadDemo.bind(ifr,demoUrl));
            code.prepend(ifr);
            if(demoUrl && demoUrl!=''){
                ifr.attr('src', demoUrl);
                //隐藏查看示例和编辑代码按钮
                $('.btn-viewDemo').hide().next().hide();
            }else{
                ifr.attr('src', _assetsPath + '/show.html');
            }


        }
        code.addClass('demo-loaded');
    }
    function buildShowDemo(code, no) {
        var codeText = code.text().trim(),
            ifr;

        if (code.parent().hasClass('showdemo')) {
            ifr = $(html_ifr).load(loadDemo);
            code.before(ifr);
            ifr.attr('src', _assetsPath + '/show.html');
        }

        (ifr || code).attr('id', no);
    }

    function openDemo() {
        var code = $(this).prev().children('.active').text().trim();
        window.open(_assetsPath + '/show.html', code);
    }

    function editDemo() {
        var btn = $(this),
            code = btn.prev().prev().children('.active').text().trim();
        window.open(_assetsPath + '/code.html?n=' + btn.parent().parent().children(':first').text(), code);
    }

    function loadDemo(demoUrl) {
        var ifr = $(this),
            code = ifr.next().text().trim(),
            html, js;

        ifr.addClass('demo-loaded');

        demoUrl = demoUrl? demoUrl:'';

        var win = ifr[0].contentWindow;
        if (demoUrl==''&& win && win.__st_render) {
            html = getCode(code, 'html');
            js = getCode(code, 'script') || (html && code);

            win.__st_render(html, js);
            //($('.app-example').size()<=0 || $(window).width()>768) &&(ifr.height(win.document.body.scrollHeight) );
        }

        if($('.app-example').size()>0){
            if($(window).width()<=768){
                ifr.height(win.document.body.scrollHeight);
            }
        }else{
            ifr.height(win.document.body.scrollHeight);
        }

        //ifr.height(win.document.body.scrollHeight);
        //ifr.css('height',ifr.eq(0).contents().find('html').height() + 'px');
    }

    function getCode(code, type) {
        var index = code.indexOf('<'+ type + '>');

        if (index > -1) {
            return code.substring(index + type.length + 2, code.indexOf('</'+ type + '>'));
        }
    }

    function initFilterApi() {
        var config = window.__docConfig,
            filterItems = config.filterItems,
            filterList = $('#filterList'),
            txtSearchAPI = $('#txtSearchAPI'),
            path = location.pathname;

        if (path.charAt(path.length - 1) === '/' || path.lastIndexOf('/index.html') > 0)
            path = "./";
        else
            path = "../";

        var timer, curItem;
        txtSearchAPI.keyup(function(e) {
            var code = e.keyCode;
            if (code === 38 || code === 40) {
                moveItem(e.keyCode);
            } else if (code === 13) {
                if (filterList.css('display') === 'none')
                    filterList.show();
                else if (curItem)
                    location.href = curItem.children().attr('href');
            } else {
                if (timer)
                    clearTimeout(timer);

                timer = setTimeout(filterAPI, 200);

            }

            return false;
        }).blur(function() {
            setTimeout(function() {
                filterList.hide();
            }, 300);
        })

        function moveItem(code) {
            var next, isNext = code === 40;
            if (curItem) {
                curItem.removeClass('active');
                curItem = isNext ? curItem.next() : curItem.prev();
                if (curItem.length === 0)
                    curItem = null;
            }

            if (!curItem)
                curItem = filterList.children(isNext ? ':first' : ':last')

            curItem.addClass('active');
        }

        function filterAPI() {
            timer = null;
            var text = $.trim(txtSearchAPI.val()),
                fnMatch, result = [];

            if (text) {
                var fnMatch = matchText(text);
                filterItems.forEach(function(item) {
                    var itemTag;
                    if (fnMatch(item.name)) {
                        result.push('<li><a href="', path, item.type === 'module' ? 'modules/' : 'classes/', item.className || item.name, '.html');

                        if (item.className) {
                            result.push("#", item.type, "_", item.name);
                            itemTag = '<b>' + item.className + '</b>-' + item.type;
                        }

                        result.push('">', item.name, " <em>[", itemTag || item.type, "]</em></a></li>");
                    }
                })
                filterList.html(result.join('')).show();
                curItem = filterList.children(':first');

                if (curItem.length)
                    curItem.addClass('active')
                else
                    curItem = null;
            } else
                filterList.hide();
        }
    }

    navInit();
    initDemoView();
    prettyPrint();
    initFilterApi();

    if (checkPath('/classes/')) {
        InitClasses();
    } else if (checkPath('/files/')) {
        gotoCode();
    }

    function checkPath(type) {
        return location.pathname.indexOf(type) > -1;
    }

    function autoHeight() {
        var leftNav = $('#sidebar_list'),
            top = leftNav.offset().top - window.scrollY;

        leftNav.height($(window).height() - top);
    }

    $(window).resize(autoHeight);
    autoHeight();

    $(function(){
        var sidebar = $('#sidebar');
        $('.icon-sidebar-btn').on('click',function(){
            var $this = $(this);
            if($this.hasClass('icon-sidebar-btn-open') ){
                sidebar.animate({
                    'margin-left':-260
                },400,function(){
                    $this.removeClass('icon-sidebar-btn-open').addClass('icon-sidebar-btn-close').html('<span class="glyphicon glyphicon-chevron-right"></span>展开');
                    $this.animate({
                        'right':-50
                    },400,function(){

                    }).end();
                });
                $('.stdoc-content').animate({'margin-left':0},400);

            }else{
                sidebar.animate({
                    'margin-left':0
                },400,function(){
                    $this.removeClass('icon-sidebar-btn-close').addClass('icon-sidebar-btn-open').html('<span class="glyphicon glyphicon-chevron-left"></span>收起');
                    $this.animate({
                        'right':10
                    },400,function(){

                    }).end();
                });
                if(!navigator.userAgent.match(/mobile/i)) {
                    $('.stdoc-content').animate({'margin-left': 260}, 400);
                }
            }
        });

        //如果是移动端隐藏sidebar
        if(navigator.userAgent.match(/mobile/i)){
            $('.icon-sidebar-btn').trigger('click');
            $('body').css('font-size',12);
        }
    });
});
