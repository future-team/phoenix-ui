/**
 * Created by mac on 16/11/28.
 */

'use strict';

exports.__esModule = true;
var _arguments = arguments;
var Tool = {
    closest: function closest(el, selector) {
        var matchesFn;

        // find vendor prefix
        ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
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

    contains: function contains(root, el) {
        if (root.compareDocumentPosition) return root === el || !!(root.compareDocumentPosition(el) & 16);
        if (root.contains && el.nodeType === 1) {
            return root.contains(el) && root !== el;
        }

        while (el = el.parentNode) if (el === root) return true;
        return false;
    },

    setPhPrefix: function setPhPrefix(val) {
        return 'ph-' + val;
    },

    getDeviceInfo: function getDeviceInfo(type) {
        var u = navigator.userAgent;
        var typeList = {
            trident: u.indexOf('Trident') > -1, //IE内核 
            presto: u.indexOf('Presto') > -1, //opera内核 
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核 
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核 
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端 
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端 
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器 
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器 
            iPad: u.indexOf('iPad') > -1, //是否iPad   
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };

        return typeList[type];
    },

    transToArray: function transToArray(val) {
        switch (typeof val) {
            case 'string':
                var arr = [];
                arr = val.split(',');
                return arr;
            case 'number':
                return val.toString();
            default:
                return val;
        }
    },

    warning: function warning(format) {
        for (var _len = _arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = _arguments[_key];
        }

        if (format === undefined) {
            throw new Error('`warning(format, ...args)` requires a warning ' + 'message argument');
        }
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
            console.warn(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    },

    getClientHeight: function getClientHeight() {
        return document.compatMode == "BackCompat" ? document.body.clientHeight : document.documentElement.clientHeight;
    },

    preventDefault: function preventDefault(event) {
        // 判断默认行为是否可以被禁用
        if (event.cancelable) {
            // 判断默认行为是否已经被禁用
            if (!event.defaultPrevented) {
                event.preventDefault();
            }
        }
    }
};

exports['default'] = Tool;
module.exports = exports['default'];