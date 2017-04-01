(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("ReactCSSTransitionGroup"), require("react/lib/ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "ReactCSSTransitionGroup", "react/lib/ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["Phoenix"] = factory(require("react"), require("ReactCSSTransitionGroup"), require("react/lib/ReactDOM"));
	else
		root["Phoenix"] = factory(root["React"], root["ReactCSSTransitionGroup"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_62__, __WEBPACK_EXTERNAL_MODULE_90__, __WEBPACK_EXTERNAL_MODULE_94__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(45);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsCatBrowserJs = __webpack_require__(46);

	var _utilsCatBrowserJs2 = _interopRequireDefault(_utilsCatBrowserJs);

	__webpack_require__(53);

	var _Button2 = __webpack_require__(61);

	var _Button3 = _interopRequireDefault(_Button2);

	exports.Button = _Button3['default'];

	var _ButtonGroup2 = __webpack_require__(71);

	var _ButtonGroup3 = _interopRequireDefault(_ButtonGroup2);

	exports.ButtonGroup = _ButtonGroup3['default'];

	var _Input2 = __webpack_require__(72);

	var _Input3 = _interopRequireDefault(_Input2);

	exports.Input = _Input3['default'];

	var _Textarea2 = __webpack_require__(74);

	var _Textarea3 = _interopRequireDefault(_Textarea2);

	exports.Textarea = _Textarea3['default'];

	var _Switch2 = __webpack_require__(75);

	var _Switch3 = _interopRequireDefault(_Switch2);

	exports.Switch = _Switch3['default'];

	var _Row2 = __webpack_require__(76);

	var _Row3 = _interopRequireDefault(_Row2);

	exports.Row = _Row3['default'];

	var _Col2 = __webpack_require__(77);

	var _Col3 = _interopRequireDefault(_Col2);

	exports.Col = _Col3['default'];

	var _TableView2 = __webpack_require__(78);

	var _TableView3 = _interopRequireDefault(_TableView2);

	exports.TableView = _TableView3['default'];

	var _FormGroup2 = __webpack_require__(79);

	var _FormGroup3 = _interopRequireDefault(_FormGroup2);

	exports.FormGroup = _FormGroup3['default'];

	var _Tab2 = __webpack_require__(80);

	var _Tab3 = _interopRequireDefault(_Tab2);

	exports.Tab = _Tab3['default'];

	var _Tabset2 = __webpack_require__(81);

	var _Tabset3 = _interopRequireDefault(_Tabset2);

	exports.Tabset = _Tabset3['default'];

	var _Label2 = __webpack_require__(82);

	var _Label3 = _interopRequireDefault(_Label2);

	exports.Label = _Label3['default'];

	var _Badge2 = __webpack_require__(83);

	var _Badge3 = _interopRequireDefault(_Badge2);

	exports.Badge = _Badge3['default'];

	var _Star2 = __webpack_require__(84);

	var _Star3 = _interopRequireDefault(_Star2);

	exports.Star = _Star3['default'];

	var _Drag2 = __webpack_require__(85);

	var _Drag3 = _interopRequireDefault(_Drag2);

	exports.Drag = _Drag3['default'];

	var _Swipe2 = __webpack_require__(86);

	var _Swipe3 = _interopRequireDefault(_Swipe2);

	exports.Swipe = _Swipe3['default'];

	var _Grid2 = __webpack_require__(87);

	var _Grid3 = _interopRequireDefault(_Grid2);

	exports.Grid = _Grid3['default'];

	var _modalDialog = __webpack_require__(88);

	var _modalDialog2 = _interopRequireDefault(_modalDialog);

	exports.Dialog = _modalDialog2['default'];

	var _modalAlert = __webpack_require__(91);

	var _modalAlert2 = _interopRequireDefault(_modalAlert);

	exports.Alert = _modalAlert2['default'];

	var _modalPrompt = __webpack_require__(92);

	var _modalPrompt2 = _interopRequireDefault(_modalPrompt);

	exports.Prompt = _modalPrompt2['default'];

	var _Toast2 = __webpack_require__(93);

	var _Toast3 = _interopRequireDefault(_Toast2);

	exports.Toast = _Toast3['default'];

	var _Popup2 = __webpack_require__(95);

	var _Popup3 = _interopRequireDefault(_Popup2);

	exports.Popup = _Popup3['default'];

	var _Accordion2 = __webpack_require__(96);

	var _Accordion3 = _interopRequireDefault(_Accordion2);

	exports.Accordion = _Accordion3['default'];

	var _Popover2 = __webpack_require__(98);

	var _Popover3 = _interopRequireDefault(_Popover2);

	exports.Popover = _Popover3['default'];

	var _Whisper2 = __webpack_require__(99);

	var _Whisper3 = _interopRequireDefault(_Whisper2);

	exports.Whisper = _Whisper3['default'];

	var _Slider2 = __webpack_require__(100);

	var _Slider3 = _interopRequireDefault(_Slider2);

	exports.Slider = _Slider3['default'];

	var _Animate2 = __webpack_require__(89);

	var _Animate3 = _interopRequireDefault(_Animate2);

	exports.Animate = _Animate3['default'];

	var _Icon2 = __webpack_require__(97);

	var _Icon3 = _interopRequireDefault(_Icon2);

	exports.Icon = _Icon3['default'];

	var _menuMenu = __webpack_require__(101);

	var _menuMenu2 = _interopRequireDefault(_menuMenu);

	exports.Menu = _menuMenu2['default'];

	var _LoadingList2 = __webpack_require__(107);

	var _LoadingList3 = _interopRequireDefault(_LoadingList2);

	exports.LoadingList = _LoadingList3['default'];

	var _ImageList2 = __webpack_require__(108);

	var _ImageList3 = _interopRequireDefault(_ImageList2);

	exports.ImageList = _ImageList3['default'];

	var _Steps2 = __webpack_require__(109);

	var _Steps3 = _interopRequireDefault(_Steps2);

	exports.Steps = _Steps3['default'];

	//接入cat－browser
	_utilsCatBrowserJs2['default']({
	    moduleName: 'phoenix-ui',
	    isOnlyDp: false
	});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _catBrowser = __webpack_require__(47);

	module.exports = function (obj) {
	    return new _catBrowser.CatBrowser(obj);
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Browser = __webpack_require__(48);

	var _Browser2 = _interopRequireDefault(_Browser);

	exports.CatBrowser = _Browser2['default'];

	if (typeof CatBrowser == 'undefined') {
	    window.CatBrowser = exports['CatBrowser'];
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _Cookie = __webpack_require__(49);

	var _Cookie2 = _interopRequireDefault(_Cookie);

	var _UserAgent = __webpack_require__(51);

	var _UserAgent2 = _interopRequireDefault(_UserAgent);

	var _Options = __webpack_require__(52);

	var _Options2 = _interopRequireDefault(_Options);

	/**
	 * 页面加载，判断是否存在cookie
	 * 是，不做任何处理
	 * 否，获取浏览器信息，
	 * 自定义信息：模块名称,等发送给后端
	 * 设置cookie，自定义过期时间
	 * */

	var Browser = (function () {
	    function Browser() {
	        var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        _classCallCheck(this, Browser);

	        //兼容低版本浏览器，不用Object.assign
	        this.opts = this.extendObj(_Options2['default'], opts);
	        this.isOnlyDp = this.opts.isOnlyDp;
	        this.cookie = new _Cookie2['default']();
	        this.userAgent = new _UserAgent2['default']();
	        //是否监控
	        this.isCat = true;
	        //是否必须dp环境下，再次判断是否监控
	        this.isOnlyDp && this.isDpEnv();
	        this.isCat && this.initHanlder();
	    }

	    /**
	     * 初始化方法
	     * */

	    Browser.prototype.initHanlder = function initHanlder() {
	        var isFirst = this.isFirstVisit();
	        isFirst && this.getUserInfo();
	    };

	    /**
	     * 是否规定时间内第一次访问
	     * */

	    Browser.prototype.isFirstVisit = function isFirstVisit() {
	        var Cookies = this.cookie,
	            CName = this.opts.cookieName,
	            CValue = this.opts.cookieValue;
	        if (Cookies.get(CName) == CValue) {
	            return false;
	        } else {
	            Cookies.set(CName, CValue, { expires: this.opts.expiresTime });
	            return true;
	        }
	    };

	    /**
	     * 其他必要信息
	     * */

	    Browser.prototype.getData = function getData(browserName) {
	        /**
	         * 对应catjs报警接口
	         * 字段文档http://cat.dp/cat/r/home?op=view&docName=browserMonitor
	         */
	        var data = {
	            v: 1,
	            t: +new Date(),
	            msg: 'browserUseRate',
	            n: this.opts.moduleName,
	            l: 'INFO',
	            a: browserName,
	            data: this.getHost()
	        };
	        return data;
	    };

	    /**
	     * 获取浏览器信息
	     * */

	    Browser.prototype.getUserInfo = function getUserInfo() {
	        var browserName = this.userAgent.getInfo();
	        var data = this.getData(browserName);
	        this.sendMsg(this.format(data));
	    };

	    /**
	     * 发送信息
	     * */

	    Browser.prototype.sendMsg = function sendMsg(data) {
	        var url = this.opts.url;
	        var image = new Image(1, 1);

	        //console.dir(data);
	        image.src = url + "?" + data;
	    };

	    /**
	     * 格式化数据
	     * */

	    Browser.prototype.format = function format(data) {
	        var arr = [];
	        if (data && typeof data == 'object') {
	            for (var _name in data) {
	                arr.push(_name + '=' + data[_name]);
	            }
	        }
	        return arr.join('&');
	    };

	    /**
	     * 原生实现extend
	     * */

	    Browser.prototype.extendObj = function extendObj(target, source) {
	        for (var p in source) {
	            if (source.hasOwnProperty(p)) {
	                target[p] = source[p];
	            }
	        }
	        return target;
	    };

	    /**
	     * 获取当前环境页面的url
	     * */

	    Browser.prototype.getHost = function getHost() {
	        var url = location.href || '';
	        return url;
	    };

	    /**
	     * 获取当前环境。
	     * 商家后台或者阿波罗不同环境
	     * */

	    Browser.prototype.isDpEnv = function isDpEnv() {
	        var dpEnv = this.dpEnv(),
	            url = location.hostname;
	        this.isCat = url.indexOf(dpEnv) > -1 ? true : false;
	    };

	    /**
	     * 当前商家和阿波罗对应的hostname
	     * */

	    Browser.prototype.dpEnv = function dpEnv() {
	        var url = ['e.51ping.com', 'ppe.e.dianping.com', 'e.dianping.com', 'apollo.51ping.com', 'ppea.dper.com', 'a.dper.com'];
	        return url.join('');
	    };

	    return Browser;
	})();

	exports['default'] = Browser;
	;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _jsCookie = __webpack_require__(50);

	var _jsCookie2 = _interopRequireDefault(_jsCookie);

	var Cookie = (function () {
	    function Cookie() {
	        _classCallCheck(this, Cookie);
	    }

	    Cookie.prototype.set = function set(name, value, opts) {
	        _jsCookie2['default'].set(name, value, opts);
	    };

	    Cookie.prototype.get = function get(name) {
	        return _jsCookie2['default'].get(name);
	    };

	    Cookie.prototype.remove = function remove(name) {
	        _jsCookie2['default'].remove(name);
	    };

	    return Cookie;
	})();

	exports['default'] = Cookie;
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * JavaScript Cookie v2.1.3
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
	;(function (factory) {
		var registeredInModuleLoader = false;
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			registeredInModuleLoader = true;
		}
		if (true) {
			module.exports = factory();
			registeredInModuleLoader = true;
		}
		if (!registeredInModuleLoader) {
			var OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = OldCookies;
				return api;
			};
		}
	}(function () {
		function extend () {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[ i ];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}

		function init (converter) {
			function api (key, value, attributes) {
				var result;
				if (typeof document === 'undefined') {
					return;
				}

				// Write

				if (arguments.length > 1) {
					attributes = extend({
						path: '/'
					}, api.defaults, attributes);

					if (typeof attributes.expires === 'number') {
						var expires = new Date();
						expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
						attributes.expires = expires;
					}

					try {
						result = JSON.stringify(value);
						if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}

					if (!converter.write) {
						value = encodeURIComponent(String(value))
							.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
					} else {
						value = converter.write(value, key);
					}

					key = encodeURIComponent(String(key));
					key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
					key = key.replace(/[\(\)]/g, escape);

					return (document.cookie = [
						key, '=', value,
						attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
						attributes.path ? '; path=' + attributes.path : '',
						attributes.domain ? '; domain=' + attributes.domain : '',
						attributes.secure ? '; secure' : ''
					].join(''));
				}

				// Read

				if (!key) {
					result = {};
				}

				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling "get()"
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var rdecode = /(%[0-9A-Z]{2})+/g;
				var i = 0;

				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var cookie = parts.slice(1).join('=');

					if (cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}

					try {
						var name = parts[0].replace(rdecode, decodeURIComponent);
						cookie = converter.read ?
							converter.read(cookie, name) : converter(cookie, name) ||
							cookie.replace(rdecode, decodeURIComponent);

						if (this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}

						if (key === name) {
							result = cookie;
							break;
						}

						if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}

				return result;
			}

			api.set = api;
			api.get = function (key) {
				return api.call(api, key);
			};
			api.getJSON = function () {
				return api.apply({
					json: true
				}, [].slice.call(arguments));
			};
			api.defaults = {};

			api.remove = function (key, attributes) {
				api(key, '', extend(attributes, {
					expires: -1
				}));
			};

			api.withConverter = init;

			return api;
		}

		return init(function () {});
	}));


/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UserAgent = (function () {
	    function UserAgent() {
	        _classCallCheck(this, UserAgent);
	    }

	    UserAgent.prototype.getInfo = function getInfo() {
	        var browserInfo = this.getBrowserVersion();
	        return browserInfo;
	    };

	    /**
	     * 原本要获得版本号 目前不需要
	     * */

	    UserAgent.prototype.getBrowserVersion = function getBrowserVersion() {
	        var browser = this.getBrowserInfo() + '';
	        //let versionInfo = parseInt((browser + "").replace(/[^0-9.]/ig, ""));
	        return browser;
	    };

	    /**
	     * 获取浏览器类型
	     * */

	    UserAgent.prototype.getBrowserInfo = function getBrowserInfo() {
	        var agent = navigator.userAgent.toLowerCase(),
	            regStr_ie = /msie [\d.]+;/gi;
	        /**
	         * 具体匹配不同浏览器目前不做太详细区分
	         * */
	        var regStr_ff = /\S+\sfirefox\/[\d.]+/gi,
	            regStr_chrome = /chrome\/[\d.]+\s\S+/gi,
	            regStr_saf = /\S+\ssafari\/[\d.]+/gi;
	        var regStr_other = /\S+\s\S+$/gi;
	        //IE
	        if (agent.indexOf("msie") > 0) {
	            return agent.match(regStr_ie);
	        } else {
	            return agent.match(regStr_other);
	        }
	        /* //firefox
	         if (agent.indexOf("firefox") > 0) {
	         return agent.match(regStr_ff);
	         }
	         //Chrome
	         if (agent.indexOf("chrome") > 0) {
	         return agent.match(regStr_chrome);
	         }
	         //Safari
	         if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
	         return agent.match(regStr_saf);
	         }*/
	    };

	    return UserAgent;
	})();

	exports["default"] = UserAgent;
	module.exports = exports["default"];

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var options = {
	  /**
	   * 项目名称
	   * */
	  moduleName: 'cat-browser',
	  /**
	   * cookie过期时间
	   * */
	  expiresTime: 1,
	  /**
	   * 点评id
	   * */
	  dpId: '',
	  /**
	   * 后端对应的url，默认dp，catjs报警接口
	   * 不建议更改，因为字段需保持一致
	   * */
	  url: '//catdot.dianping.com/web-broker-service/api/js',
	  /**
	   * 可设置cookie名称和value，以判断是否符合规则的登录
	   * 建议设置不易重复的值或者使用默认值
	   * */
	  cookieName: 'catBrowserName',
	  cookieValue: 'catBrowserValue',
	  /**
	   * 是否只在dp环境下,才启用统计功能
	   * 默认不加判断都可统计
	   * */
	  isOnlyDp: false
	};
	exports['default'] = options;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 按钮组件<br/>
	 * - 按钮组件提供所有properties中内置的颜色及字体大小样式供选择。
	 * - 也可以自定义行内样式和className名字定义UI展示。
	 * - 通过phSize设置大小, 可选sm、md、lg。
	 * - 通过phStyle选择按钮颜色，可选primary、info、error、warning、danger、link、gray、success。
	 * - 支持disabled, active属性定义。
	 *
	 * 主要属性和接口：
	 * - phSize:按钮大小, 默认sm <br/>
	 * 如: `<Button phSize="lg">button</Button>`
	 * - phStyle:按钮颜色, 默认primary <br/>
	 * 如: `<Button phStyle="info">button</Button>`
	 * - block:是否块级显示，默认false <br/>
	 * 如: `<Button block>button</Button>`
	 *
	 * @class Button
	 * @module 基础组件
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo button|button.js {展示}
	 * @show true
	 * */

	var Button = (function (_Component) {
	  _inherits(Button, _Component);

	  _createClass(Button, null, [{
	    key: 'propTypes',
	    value: {
	      /**
	       * 按钮尺寸[sm、md、lg], 默认为sm
	       * @property phSize
	       * @type String
	       * @default 'sm'
	       * */
	      phSize: _react.PropTypes.string,
	      /**
	       * 按钮颜色[primary、warning、danger、info、error、success、link、gray], 默认primary
	       * @property phStyle
	       * @type Boolean
	       * @default 'primary'
	       * */
	      phStyle: _react.PropTypes.string,
	      /**
	       * 样式前缀
	       * @property classPrefix
	       * @type String
	       * @default 'button'
	       * */
	      classPrefix: _react.PropTypes.string,
	      /**
	       * 标签tagName
	       * @property componentTag
	       * @type String
	       * */
	      componentTag: _react.PropTypes.string,
	      /**
	       * 块级显示
	       * @property block
	       * @type Boolean
	       * @default false
	       * */
	      block: _react.PropTypes.bool,
	      /**
	       * 圆角
	       * @property radius
	       * @type Boolean
	       * @default false
	       * */
	      radius: _react.PropTypes.bool,
	      /**
	       * 空背景
	       * @property hollow
	       * @type Boolean
	       * @default false
	       * */
	      hollow: _react.PropTypes.bool,
	      /**
	       * 不可点状态
	       * @property disabled
	       * @type Boolean
	       * @default false
	       * */
	      disabled: _react.PropTypes.bool,
	      /**
	       * 激活状态
	       * @property active
	       * @type Boolean
	       * @default false
	       * */
	      active: _react.PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      phSize: 'sm',
	      phStyle: 'primary',
	      classPrefix: 'button',
	      componentTag: 'button',
	      classMapping: {
	        'block': 'block',
	        'primary': 'primary',
	        'info': 'info',
	        'success': 'success',
	        'error': 'error',
	        'warning': 'warning',
	        'danger': 'danger',
	        'link': 'link',
	        'gray': 'gray'
	      }
	    },
	    enumerable: true
	  }]);

	  function Button(props, context) {
	    _classCallCheck(this, Button);

	    _Component.call(this, props, context);
	    // this.setProperty('hollow','hollow');
	  }

	  Button.prototype.onButtonClickHandle = function onButtonClickHandle(e) {
	    if (this.props.clickHandle) this.props.clickHandle(e);
	    if (this.props.onClick) this.props.onClick(e);
	  };

	  Button.prototype.render = function render() {
	    var Component = this.props.componentTag;

	    return _react2['default'].createElement(
	      Component,
	      _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(true), this.props.className),
	        style: this.getStyles(this.props.style), onClick: this.onButtonClickHandle.bind(this) }),
	      this.props.children
	    );
	  };

	  return Button;
	})(_utilsComponent2['default']);

	exports['default'] = Button;
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_62__;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(65);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _PropertyMixin = __webpack_require__(67);

	var _PropertyMixin2 = _interopRequireDefault(_PropertyMixin);

	var _MethodMixin = __webpack_require__(69);

	var _MethodMixin2 = _interopRequireDefault(_MethodMixin);

	var _extend = __webpack_require__(70);

	var _extend2 = _interopRequireDefault(_extend);

	//import 'babel-polyfill';

	var BaseComponent = (function (_Component) {
	    _inherits(BaseComponent, _Component);

	    function BaseComponent(props, context, defaultState) {
	        _classCallCheck(this, _BaseComponent);

	        _Component.call(this, props, context);

	        if (defaultState) {
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

	    BaseComponent.prototype.setDefaultState = function setDefaultState(obj) {

	        this.state = _extend2['default']({}, {
	            _isShow: false,
	            _checked: false,
	            _active: false
	        }, obj || {});
	    };

	    BaseComponent.prototype.uniqueId = function uniqueId() {
	        return (this.classPrefix || 'unique') + '_' + (new Date().getTime() + (Math.random() * 1e10).toFixed(0));
	    };

	    BaseComponent.prototype.initCallback = function initCallback() {
	        this.props.initCallback && this.props.initCallback(this);
	    };

	    BaseComponent.prototype.componentWillMount = function componentWillMount() {};

	    BaseComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	        this.replaceProperties(nextProps);
	        return true;
	    };

	    BaseComponent.prototype.componentDidMount = function componentDidMount() {
	        this.loadedCallback && this.loadedCallback(this);
	    };

	    //注册回调

	    BaseComponent.prototype.registerMethod = function registerMethod(methods) {
	        //注册回调
	        var method = null,
	            methodName = '',
	            other = {};
	        for (var item in methods) {
	            method = this.methods[item];
	            if (method) {
	                this.setMethod(item, methods[item]);
	            }
	        }
	    };

	    BaseComponent.prototype.setMethod = function setMethod(methodName, method) {

	        if (methodName.match('Callback') == null) {
	            throw new Error('The callback method name format is wrong, should be ' + methodName + 'Callback');
	        }
	        if (!this[methodName]) {
	            this[methodName] = (function (method) {
	                var m = method;
	                return function () {
	                    return m.apply(m, Array.prototype.slice.call(arguments, 0));
	                };
	            })(method);
	        }
	    };

	    BaseComponent.prototype.execMethod = function execMethod(method) {
	        var data,
	            args$2$0 = arguments;
	        return regeneratorRuntime.async(function execMethod$(context$2$0) {
	            while (1) switch (context$2$0.prev = context$2$0.next) {
	                case 0:
	                    data = null;

	                    method = method.indexOf('Callback') != -1 ? method : method + 'Callback';

	                    if (!this[method]) {
	                        context$2$0.next = 6;
	                        break;
	                    }

	                    context$2$0.next = 5;
	                    return regeneratorRuntime.awrap(this[method].apply(this[method], Array.prototype.slice.call(args$2$0, 1).concat(this)));

	                case 5:
	                    data = context$2$0.sent;

	                case 6:
	                    return context$2$0.abrupt('return', data);

	                case 7:
	                case 'end':
	                    return context$2$0.stop();
	            }
	        }, null, this);
	    };

	    BaseComponent.prototype.setProperty = function setProperty(prop, val) {
	        if (val !== undefined) {
	            this.properties[prop] = val;
	            if (this.props[prop] !== undefined) {
	                this.updateProperty({ key: prop, value: val }, this._properties, this._styles, this.otherProps);
	            }
	        }
	    };

	    BaseComponent.prototype.filterClass = function filterClass(key) {
	        var value = typeof key == 'string' ? this.props.classMapping[key] : key;

	        return value ? value : key;
	    };

	    BaseComponent.prototype.updateProperty = function updateProperty(props, propList, styleList, otherProps) {
	        var propKey = props.key,
	            propValue = props.value,
	            propConfig = this.properties[propKey];

	        var type = 'property';
	        if (propConfig) {
	            this.filterClass();
	            switch (typeof propConfig) {
	                case 'boolean':
	                    if (propValue) {
	                        propList.push(this.filterClass(propKey));
	                    }
	                    break;
	                case 'function':
	                    var param = propConfig.call(this, propValue);
	                    if (typeof param == 'string') {
	                        propList.push(this.filterClass(param));
	                    } else if (param.type && param.type == type) {
	                        this[propKey] = param.value;
	                    } else {
	                        //{
	                        //    border:val
	                        //}
	                        styleList.push(param);
	                    }
	                    break;
	                default:
	                    propList.push(this.filterClass(propConfig));
	                    break;
	            }
	        } else {
	            otherProps[propKey] = propValue;
	        }
	    };

	    BaseComponent.prototype.replaceProperties = function replaceProperties(props) {
	        // 整体替换
	        var propList = [],
	            styleList = [],
	            otherProps = {};
	        props = props ? props : this.props;
	        for (var key in props) {
	            this.updateProperty({ key: key, value: props[key] }, propList, styleList, otherProps);
	        }
	        this._properties = propList;
	        this._styles = styleList;
	        this.otherProps = otherProps;
	    };

	    BaseComponent.prototype.getProperty = function getProperty() {
	        var withPrefix = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	        var withConstPrefix = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	        var p = this.classPrefix ? this.classPrefix + ' ' : '';
	        p += this._properties.join(' ');

	        return this.getClassName(p, withPrefix, withConstPrefix); //+' '+this.getClassName(p);
	    };

	    BaseComponent.prototype.getStyles = function getStyles() {
	        var style = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var obj = {},
	            styles = this._styles;

	        /*propertyMixn里设置的和style相关的属性，比如*/
	        for (var i = 0, len = styles.length; i < len; i++) {
	            obj = _extend2['default']({}, obj, styles[i]);
	        }
	        /*用户设置的style*/
	        return _extend2['default']({}, obj, style);
	    };

	    BaseComponent.prototype.show = function show() {
	        this.setState({
	            _isShow: true
	        });
	    };

	    BaseComponent.prototype.hide = function hide() {
	        this.setState({
	            _isShow: false
	        });
	    };

	    BaseComponent.prototype.trim = function trim(str) {
	        return str.replace(/(^\s*)|(\s*$)/g, "");
	    };

	    BaseComponent.prototype.getDisplay = function getDisplay() {
	        return this.state._isShow;
	    };

	    BaseComponent.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'h1',
	            null,
	            '请重写父类render()方法'
	        );
	    };

	    var _BaseComponent = BaseComponent;
	    BaseComponent = _MethodMixin2['default'](BaseComponent) || BaseComponent;
	    BaseComponent = _PropertyMixin2['default'](BaseComponent) || BaseComponent;
	    BaseComponent = _ClassNameMixin2['default'](BaseComponent) || BaseComponent;
	    return BaseComponent;
	})(_react.Component);

	exports['default'] = BaseComponent;
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 15/9/7.
	 */
	'use strict';

	exports.__esModule = true;

	var _constantsJs = __webpack_require__(66);

	var consts = _constantsJs.classConstants;

	var PREFIX = 'ph-';

	exports['default'] = function (obj) {
	    /*
	     * 给className添加前缀后返回className
	     * @method getClassName
	     * @param name {String} 从该字符串中去查找
	     * @param pre {Boolean} 是否添加Component中定义的class前缀，默认添加
	     * @return {String}
	     * */
	    obj.prototype.getClassName = function (name) {
	        var pre = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	        var constPre = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	        name = name ? name : '';
	        name = (name + '').split(' ');
	        var list = [],
	            _this = this;
	        name.forEach(function (item) {
	            if (item) {
	                if (constPre) list.push(PREFIX + _this.setPrefix(item, pre));else list.push(_this.setPrefix(item, pre));
	            }
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
	    obj.prototype.getClassNames = function (props) {
	        var pre = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	        var clazz = {};
	        for (var item in props) {
	            if (props[item] && item === consts[item]) {
	                clazz[this.getClassName(item, pre)] = true;
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
	    obj.prototype.getClassNamesForArguments = function () {
	        var arg = arguments;
	        var arr = [];
	        var _this = this;

	        if (arg && arg.length > 0) {
	            for (var i = 0, len = arg.length; i < len; i++) {
	                if (arg[i]) {
	                    arr.push(_this.getClassName(arg[i]));
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
	    obj.prototype.setPrefix = function (name) {
	        var pre = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	        var classArray = consts.classNameNamespace ? [consts.classNameNamespace] : [];

	        if (pre && this.props.classPrefix) {
	            classArray.push(this.props.classPrefix);
	        }
	        if (name && name != this.props.classPrefix) {
	            classArray.push(name);
	        }

	        return classArray.join(classArray.length > 1 ? '-' : '');
	    };

	    /*
	     * 检查元素是否存在样式名
	     * @method hasClass
	     * @param obj {Object} 元素
	     * @param cls {String} 需要检查的样式名
	     * @return {Boolean}
	     * */
	    obj.prototype.hasClass = function (obj, cls) {
	        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	    };

	    /*
	     * 给元素增加一个样式名
	     * @method addClass
	     * @param obj {Object} 元素
	     * @param cls {String} 样式名
	     * */
	    obj.prototype.addClass = function (obj, cls) {
	        if (!this.hasClass(obj, cls)) obj.className += " " + cls;
	    };
	    /*
	     * 给元素删除一个样式名
	     * @method removeClass
	     * @param obj {Object} 元素
	     * @param cls {String} 样式名
	     * */
	    obj.prototype.removeClass = function (obj, cls) {
	        if (this.hasClass(obj, cls)) {
	            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
	            obj.className = obj.className.replace(reg, ' ');
	        }
	    };
	};

	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports) {

	/**
	 * Created by mac on 15/9/7.
	 */
	//classname前缀

	'use strict';

	exports.__esModule = true;
	function setNamespace(className) {
	    return '' + className;
	}
	var CLASS_NAME_NAMESPACE = '';
	var classConstants = {
	    /**
	     * 状态
	     * */
	    //标签新增命名空间
	    //标签启用
	    positive: setNamespace('positive'),
	    //标签灰色
	    negative: setNamespace('negative'),
	    //标签灰白
	    modest: setNamespace('modest'),
	    //提示框暖色(黄色)
	    warm: setNamespace('warm'),
	    //标签灰色
	    //标签无背景色
	    neutral: setNamespace('neutral'),

	    //theme
	    // 白色
	    light: setNamespace('light'),
	    // 橘红色
	    assertive: setNamespace('assertive'),
	    //绿色
	    balanced: setNamespace('balanced'),
	    //按钮是否需要添加边框
	    outline: setNamespace('outline'),
	    //按钮是否处于待唤醒状态
	    awaiting: setNamespace('awaiting'),
	    //禁用
	    disabled: setNamespace('disabled'),
	    //启用
	    enable: setNamespace('enable'),
	    block: setNamespace('block'),
	    //垂直
	    tacked: setNamespace('tacked'),
	    //宽度自适应
	    justify: setNamespace('justify'),
	    //选中
	    active: setNamespace('active'),
	    //行内样式
	    inline: setNamespace('inline'),
	    //大小
	    size: setNamespace('size'),
	    //圆形样式
	    radius: setNamespace('radius'),
	    //隨圆
	    round: setNamespace('round'),
	    //向上箭头
	    'arrow-up': setNamespace('arrow-up'),
	    //向下箭头
	    'arrow-down': setNamespace('arrow-down'),
	    /**
	     * 颜色
	     * */
	    //成功样式
	    success: setNamespace('success'),
	    //错误红色
	    error: setNamespace('error'),
	    //警告warning
	    warning: setNamespace('warning'),
	    //危险danger
	    danger: setNamespace('danger'),
	    //展示
	    show: setNamespace('show'),
	    white: setNamespace('white'),
	    /**
	     * form列表相关
	     * */
	    //必填
	    require: setNamespace('require'),
	    //跳转链接
	    jump: setNamespace('link'),
	    //最后一个item是否浮动
	    right: setNamespace('lastItem'),
	    classNameNamespace: CLASS_NAME_NAMESPACE,
	    /**
	     * tab
	     * */
	    vertical: setNamespace('vertical')
	};
	exports.classConstants = classConstants;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 16/1/3.
	 */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(68);

	var _warning2 = _interopRequireDefault(_warning);

	exports['default'] = function (obj) {

	    var getVal = function getVal(vals, val) {
	        var result = (vals.join(',') + ',').match(val.toLowerCase() + ',') != null ? val : '';
	        if (!result) {
	            _warning2['default']('属性的取值 %s 不在设定集合 %s 里', val, vals.join(','));
	        }
	        return result;
	    };

	    var properties = {
	        /*以下属性都是数组里固定值*/
	        //类型
	        phType: function phType(val) {
	            return getVal(['tacked', 'justify'], val);
	        },
	        phSize: function phSize(val) {
	            return getVal(['lg', 'md', 'sm', 'default', 'xs'], val);
	        },
	        phStyle: function phStyle(val) {
	            return getVal(['primary', 'info', 'success', 'error', 'warning', 'danger', 'link', 'gray', 'light', 'positive', 'calm', 'balanced', 'energized', 'assertive', 'lightbrown', 'lightgray'], val);
	        },
	        status: function status(val) {
	            getVal(['diabled', 'active', 'enable'], val);
	        },
	        align: function align(val) {
	            return getVal(['center', 'left', 'middle', 'auto', 'top', 'right', 'bottom', 'stretch', 'baseline'], val);
	        },
	        placement: function placement(val) {
	            return getVal(['top', 'bottom', 'right', 'left', 'top left', 'top right', 'bottom left', 'bottom right', 'left-full', 'right-full', 'full-screen'], val);
	        },
	        /*以下属性没有取值，需要的时候添加对应的属性即可*/
	        disabled: true,
	        active: true,
	        radius: true,
	        round: true,
	        clearfix: true,
	        clear: true,
	        phHref: true,
	        show: true,
	        hide: true,
	        block: true,
	        hollow: true,

	        /*以下属性相当于css属性的快速赋值，比如设置zIndex="2",则会被merge进style里，如果只有属性zIndex没有设置取值，则会被放入props列表中*/
	        zIndex: function zIndex(val) {
	            if (typeof val == 'string') {
	                return {
	                    zIndex: val
	                };
	            }
	            return 'zindex';
	        },
	        border: function border(val) {
	            if (typeof val == 'string') {
	                return {
	                    border: val
	                };
	            }
	            return 'border';
	        },
	        padding: function padding(val) {
	            if (typeof val == 'string') {
	                return {
	                    padding: val
	                };
	            }
	            return 'padding';
	        },
	        margin: function margin(val) {
	            if (typeof val == 'string') {
	                return {
	                    margin: val
	                };
	            }
	            return 'margin';
	        },
	        radiusSize: function radiusSize(val) {
	            return {
	                WebkitBorderRadius: val,
	                borderRadius: val
	            };
	        },
	        width: (function (val) {
	            return '' + val;
	        }).bind(obj),
	        offset: (function (val) {
	            return 'offset-' + val;
	        }).bind(obj),
	        /*以下属性会被直接挂载在component上，可以不用通过component.props获取*/
	        classPrefix: function classPrefix(val) {
	            return {
	                type: 'property',
	                value: val
	            };
	        },
	        componentTag: function componentTag(val) {
	            return {
	                type: 'property',
	                value: val
	            };
	        },
	        params: function params(val) {
	            return {
	                type: 'property',
	                value: val
	            };
	        }
	    };

	    obj.prototype.properties = properties;
	};

	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
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
	};

	;
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports) {

	/**
	 * Created by mac on 16/1/3.
	 */
	"use strict";

	exports.__esModule = true;

	exports["default"] = function (obj) {
	    var methods = {
	        initCallback: true,
	        loadedCallback: true,
	        closeCallback: true,
	        successCallback: true,
	        cancelCallback: true,
	        checkedCallback: true,
	        activeCallback: true,
	        getValueCallback: true,

	        updateCallback: true,
	        deleteCallback: true,
	        queryCallback: true,
	        addCallback: true,
	        insertCallback: true,
	        ajaxCallback: true,

	        defaultCallback: true

	        //method
	    };

	    obj.prototype.methods = methods;
	};

	module.exports = exports["default"];

/***/ },
/* 70 */
/***/ function(module, exports) {

	'use strict';

	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;

	var isArray = function isArray(arr) {
		if (typeof Array.isArray === 'function') {
			return Array.isArray(arr);
		}

		return toStr.call(arr) === '[object Array]';
	};

	var isPlainObject = function isPlainObject(obj) {
		if (!obj || toStr.call(obj) !== '[object Object]') {
			return false;
		}

		var hasOwnConstructor = hasOwn.call(obj, 'constructor');
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
		// Not own constructor property must be Object
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		var key;
		for (key in obj) {/**/}

		return typeof key === 'undefined' || hasOwn.call(obj, key);
	};

	module.exports = function extend() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0],
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
			target = {};
		}

		for (; i < length; ++i) {
			options = arguments[i];
			// Only deal with non-null/undefined values
			if (options != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target !== copy) {
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && isArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}

							// Never move original objects, clone them
							target[name] = extend(deep, clone, copy);

						// Don't bring in undefined values
						} else if (typeof copy !== 'undefined') {
							target[name] = copy;
						}
					}
				}
			}
		}

		// Return the modified object
		return target;
	};



/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 按钮组组件<br/>
	 * - 按钮组组件配合Button组件,提供了横、竖两种排列方式, 可选justify,tacked。
	 * - 可通过onButtongroupChange实现点击回调。
	 *
	 * 主要属性和接口：
	 * - phType:是否自适应宽度或者垂直排列, 默认justify <br/>
	 * 如:
	 * ```code
	 *     <ButtonGroup phType="tacked">
	 *         <Button block>tacked1</Button>
	 *         <Button block>tacked2</Button>
	 *     </ButtonGroup>
	 * ```
	 * - onButtongroupChange:点击按钮组的回调函数。<br/>
	 * ```code
	 *     <ButtonGroup onButtongroupChange={function(target,html){console.log(target,html);}}>
	 *         <Button>tacked1</Button>
	 *         <Button>tacked2</Button>
	 *     </ButtonGroup>
	 * ```
	 *
	 * @class ButtonGroup
	 * @module 基础组件
	 * @extends Component
	 * @constructor
	 * @since 0.1.4
	 * @demo buttongroup|button-group.js {展示}
	 * @show true
	 * */

	var ButtonGroup = (function (_Component) {
	    _inherits(ButtonGroup, _Component);

	    _createClass(ButtonGroup, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'button-group'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 是否有自适应宽度，垂直排列等属性，取值为justify(水平排列)或者tacked(垂直排列)
	             * @property phType
	             * @type String
	             * @default 'justify'
	             * */
	            phType: _react.PropTypes.string,
	            /**
	             * 按钮被按下后的回调
	             * @method onButtongroupChange
	             * @type Function
	             * */
	            onButtongroupChange: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'button-group',
	            phType: 'justify',
	            componentTag: 'div',
	            classMapping: {
	                'justify': 'justify',
	                'tacked': 'tacked'
	            }
	        },
	        enumerable: true
	    }]);

	    function ButtonGroup(props, context) {
	        _classCallCheck(this, ButtonGroup);

	        _Component.call(this, props, context);

	        this.state = {
	            active: this.props.active
	        };
	    }

	    ButtonGroup.prototype.clickHandler = function clickHandler(e) {
	        var target = e.target;
	        this.props.onButtongroupChange && this.props.onButtongroupChange(target, target.innerHTML);
	        this.setState({
	            active: target.innerHTML
	        });
	    };

	    ButtonGroup.prototype.render = function render() {
	        var _this = this;

	        var Component = this.props.componentTag;

	        var options = _react2['default'].Children.map(this.props.children, function (option) {

	            var opt = _react2['default'].cloneElement(option, {
	                clickHandle: _this.clickHandler.bind(_this),
	                active: _this.state.active == option.props.children
	            });
	            return opt;
	        }, this);

	        return _react2['default'].createElement(
	            Component,
	            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), 'clearfix') }),
	            options
	        );
	    };

	    return ButtonGroup;
	})(_utilsComponent2['default']);

	exports['default'] = ButtonGroup;
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	/**
	 * input框组件<br/>
	 * - 使用方式跟原生一致, 支持disabled。
	 * - 通过type设置input的类型, 可选text,checkbox,radio。
	 * - 当类型为text时, 可通过defaultValue设置默认值; 可通过value和onChange事件配合使用手动设置输入值。
	 * - 当类型为checkbox&radio时, 可通过label设置展示的文字。
	 * - 当类型为checkbox&radio时, 可通过defaultChecked设置默认值; 可通过checked和onChange事件配合使用手动设置输入值。
	 *
	 * 主要属性和接口：
	 * - type:input类型, 默认text <br/>
	 * 如：`<Input type="checkbox" />`
	 * - defaultValue:默认值(text) <br/>
	 * 如：`<Input type="text" defaultValue="测试" />`
	 * - value&onChange:(text)<br/>
	 * 如：`<Input type="text" value={this.state.value} onChange={()=>{this.setState({value:"测试"})}} />`
	 * - label:展示的文字信息(checkbox&radio), 默认空<br/>
	 * 如：`<Input type="checkbox" label="测试" />`
	 * - defaultChecked:默认值(checkbox&radio)<br/>
	 * 如：`<Input type="checkbox" defaultChecked={true} />`
	 * - checked&onChange:(checkbox&radio)<br/>
	 * 如：`<Input type="checkbox" checked={this.state.checked} onChange={()=>{this.setState({checked:false})}} />`
	 *
	 * @class Input
	 * @module 表单组件
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo input|input.js {展示}
	 * @show true
	 * */

	var Input = (function (_Component) {
	    _inherits(Input, _Component);

	    _createClass(Input, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * input类型, 可选[text,checkbox,radio], 默认text
	             * @property type
	             * @type String
	             * @default 'text'
	             * */
	            type: _react.PropTypes.string,
	            /**
	             * 类型为checkbox&radio时, 展示的文字信息
	             * @property label
	             * @type String
	             * @default ''
	             * */
	            label: _react.PropTypes.string,
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'input'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * */
	            componentTag: _react.PropTypes.string,
	            /**
	             * 更改值时触发的回调
	             * @event onChange
	             * @type Function
	             * */
	            onChange: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            type: 'text',
	            classPrefix: 'input',
	            componentTag: 'div',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function Input(props, context) {
	        _classCallCheck(this, Input);

	        _Component.call(this, props, context);
	    }

	    Input.prototype.otherView = function otherView(type) {
	        return _react2['default'].createElement(
	            'label',
	            { className: _utilsTool.setPhoenixPrefix("multi-group") },
	            _react2['default'].createElement(
	                'div',
	                { className: _utilsTool.setPhoenixPrefix(type) },
	                _react2['default'].createElement('input', this.props),
	                _react2['default'].createElement('i', null)
	            ),
	            _react2['default'].createElement(
	                'span',
	                null,
	                this.props.label || ''
	            )
	        );
	    };

	    Input.prototype.renderInput = function renderInput(type) {
	        var html = _react2['default'].createElement('div', null);

	        if (type == 'checkbox' || type == 'radio') {
	            html = this.otherView(type);
	        } else {
	            html = _react2['default'].createElement('input', _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), this.props.className) }));
	        }

	        return html;
	    };

	    Input.prototype.render = function render() {
	        var _props = this.props;
	        var Component = _props.componentTag;
	        var type = _props.type;

	        return this.renderInput(type ? type : 'text');
	    };

	    return Input;
	})(_utilsComponent2['default']);

	exports['default'] = Input;
	module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports) {

	/**
	 * Created by mac on 16/11/28.
	 */

	'use strict';

	exports.__esModule = true;
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

	    setPhoenixPrefix: function setPhoenixPrefix(val) {
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
	    }
	};

	exports['default'] = Tool;
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	/**
	 * <h5>表单组件，主要包括组件:</h5>
	 * <strong><a href='../classes/Input.html'>Input 文本框/单选框/多选框</a></strong><br/>
	 * <strong><a href='../classes/Textarea.html'>Textarea 多行文本框</a></strong><br>
	 * <strong><a href='../classes/FormGroup.html'>FormGroup 表单组</a></strong><br/>
	 * <strong><a href='../classes/Switch.html'>Switch 开关</a></strong><br>
	 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
	 * @module 表单组件
	 * @main 表单组件
	 * @static
	 */
	/**
	 * 多行文本框组件<br/>
	 * - 使用方式跟原生一致。
	 * - 可通过defaultValue设置默认值,如果是通过请求获得的数据请使用value，defaultValue只有初始赋值有效。 
	 * - 可通过value和onChange事件配合使用手动设置输入值。
	 * - 可通过设置count判断是否显示当前输入字数。
	 * - 可通过设置maxLength配置最大输入字数。
	 *
	 * 主要属性和接口：
	 * - defaultValue:默认值 <br/>
	 * 如：`<Textarea defaultValue="测试" />`
	 * - value&onChange:<br/>
	 * 如：`<Textarea value={this.state.value} onChange={()=>{this.setState({value:"测试"})}} />`
	 * - count:是否显示当前输入字数, 默认false不显示, 配合maxLength使用<br/>
	 * 如：`<Textarea count maxLength={150} />`
	 *
	 * @class TextArea
	 * @module 表单组件
	 * @extends Component
	 * @constructor
	 * @since 0.3.0
	 * @demo textarea|textarea.js {展示}
	 * @show true
	 * */

	var Textarea = (function (_Component) {
	    _inherits(Textarea, _Component);

	    _createClass(Textarea, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'textarea'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 默认值
	             * @property defaultValue
	             * @type String
	             * */
	            defaultValue: _react.PropTypes.string,
	            /**
	             * 值
	             * @property value
	             * @type String
	             * */
	            value: _react.PropTypes.string,
	            /**
	             * 输入时执行的回调
	             * @event onChange
	             * @type Function
	             * */
	            onChange: _react.PropTypes.func,
	            /**
	             * 是否显示输入计数
	             * @property count
	             * @type Boolean
	             * */
	            count: _react.PropTypes.bool,
	            /**
	             * 可输入的总长度
	             * @property maxLength
	             * @type Number
	             * */
	            maxLength: _react.PropTypes.number
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'textarea',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function Textarea(props, context) {
	        _classCallCheck(this, Textarea);

	        _Component.call(this, props, context);

	        this.state = {
	            inputLength: this.getInputLength(props)
	        };
	    }

	    Textarea.prototype.getInputLength = function getInputLength(props) {
	        return props.value ? props.value.length : props.defaultValue ? props.defaultValue.length : 0;
	    };

	    Textarea.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        var _props = this.props;
	        var defaultValue = _props.defaultValue;
	        var value = _props.value;

	        if (defaultValue != nextProps.defaultValue || value != nextProps.value) {
	            this.setState({
	                inputLength: this.getInputLength(nextProps)
	            });
	        }
	    };

	    Textarea.prototype.onTextareaChange = function onTextareaChange(event) {
	        this.setState({
	            inputLength: event.target.value.length
	        });
	        if (this.props.onChange) {
	            this.props.onChange(event);
	        }
	    };

	    Textarea.prototype.render = function render() {
	        var _this = this;

	        var _props2 = this.props;
	        var count = _props2.count;
	        var maxLength = _props2.maxLength;

	        return _react2['default'].createElement(
	            'div',
	            { className: _utilsTool.setPhoenixPrefix('textarea-field') },
	            _react2['default'].createElement('textarea', _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), this.props.className), onChange: function (event) {
	                    _this.onTextareaChange(event);
	                } })),
	            _react2['default'].createElement(
	                'span',
	                { className: _classnames2['default'](_utilsTool.setPhoenixPrefix('textarea-count'), count ? 'show' : 'hide') },
	                _react2['default'].createElement(
	                    'b',
	                    { className: _utilsTool.setPhoenixPrefix('textarea-length') },
	                    this.state.inputLength
	                ),
	                '/',
	                _react2['default'].createElement(
	                    'b',
	                    null,
	                    maxLength
	                )
	            )
	        );
	    };

	    return Textarea;
	})(_utilsComponent2['default']);

	exports['default'] = Textarea;
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	/**
	 * 开关切换组件，仿真ios的开关控件<br/>
	 * - 可通过defaultChecked设置默认值。
	 * - 可通过checked和onChange事件配合使用手动设置输入值。
	 *
	 * 主要属性和接口：
	 * - defaultChecked:默认值<br/>
	 * 如：`<Switch defaultChecked={true} />`
	 * - checked&onChange:<br/>
	 * 如：`<Switch checked={this.state.checked} onChange={()=>{this.setState({checked:false})}} />`
	 *
	 * @class Switch
	 * @module 表单组件
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo switch|switch.js {展示}
	 * @show true
	 * */

	var Switch = (function (_Component) {
	    _inherits(Switch, _Component);

	    _createClass(Switch, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'switch'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 默认开关值
	             * @property defaultChecked
	             * @type Boolean
	             * */
	            defaultChecked: _react.PropTypes.bool,
	            /**
	             * 开关值
	             * @property checked
	             * @type Boolean
	             * */
	            checked: _react.PropTypes.bool,
	            /**
	             * 更改值时触发的回调
	             * @event onChange
	             * @type Function
	             * */
	            onChange: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'switch',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function Switch(props, context) {
	        _classCallCheck(this, Switch);

	        _Component.call(this, props, context);
	    }

	    Switch.prototype.render = function render() {

	        return _react2['default'].createElement(
	            'label',
	            { className: _classnames2['default'](this.getProperty(true), this.props.className) },
	            _react2['default'].createElement('input', _extends({ type: 'checkbox' }, this.props)),
	            _react2['default'].createElement('div', { className: _utilsTool.setPhoenixPrefix("checkbox") })
	        );
	    };

	    return Switch;
	})(_utilsComponent2['default']);

	exports['default'] = Switch;
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 行组件<br/>
	 * - 搭配Col列组件可实现自适应宽度布局。
	 * - 可通过align定义项目在交叉轴上的对齐方式, 可选top、bottom、center、baseline、stretch。
	 *
	 * 主要属性和接口：
	 * - align:项目在交叉轴上的对齐方式, 默认stretch
	 * ```code
	 *     <Row align="baseline">
	 *         <Col>
	 *             <div className='col-demo'>baseline</div>
	 *         </Col>
	 *         <Col>
	 *             <div className='col-demo'>baseline<br />baseline</div>
	 *         </Col>
	 *     </Row>
	 * ```
	 *
	 * @class Row
	 * @module 布局组件
	 * @extends Component
	 * @constructor
	 * @demo grid|grid.js {展示}
	 * @since 0.1.0
	 * @show true
	 * */

	var Row = (function (_Component) {
	    _inherits(Row, _Component);

	    function Row() {
	        _classCallCheck(this, Row);

	        _Component.apply(this, arguments);
	    }

	    Row.prototype.render = function render() {
	        var others = _objectWithoutProperties(this.props, []);

	        return _react2['default'].createElement(
	            'div',
	            _extends({}, others, { className: _classnames2['default'](this.getProperty(true), this.props.className) }),
	            this.props.children
	        );
	    };

	    _createClass(Row, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'row'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 竖直方向的排列是靠上、居中、靠下、拉伸至父容器最大高度还是基于text的baseline对齐
	             * @property align
	             * @type String
	             * */
	            align: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'row',
	            classMapping: {
	                'top': 'top',
	                'bottom': 'bottom',
	                'center': 'center',
	                'stretch': 'stretch',
	                'baseline': 'baseline'
	            }
	        },
	        enumerable: true
	    }]);

	    return Row;
	})(_utilsComponent2['default']);

	exports['default'] = Row;
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 列组件<br/>
	 * - 搭配Row行组件可实现自适应宽度布局。
	 * - 可通过align定义单个项目在交叉轴上的对齐方式, 可选auto、top、bottom、center。
	 * - 可通过width设置单个项目宽度的百分比, 目前支持5-100之间5的倍数、33（1\3）和66(2\3)。
	 * - 可通过offset设置单个项目左边外边距。
	 *
	 * 主要属性和接口：
	 * - align:单个项目在交叉轴上的对齐方式, 默认auto <br/>
	 * ```code
	 *     <Row>
	 *         <Col align="top">
	 *             <div className="col-demo">top</div>
	 *         </Col>
	 *         <Col align="center">
	 *             <div className="col-demo">center</div>
	 *         </Col>
	 *         <Col align="bottom">
	 *             <div className="col-demo">bottom</div>
	 *         </Col>
	 *     </Row>
	 * ```
	 * - width:单个项目的宽度百分比 <br/>
	 * ```code
	 *     <Row>
	 *         <Col width="15">
	 *             <div className="col-demo">15</div>
	 *         </Col>
	 *     </Row>
	 * ```
	 * - offset:单个项目的偏移值,即左边外边距 <br/>
	 * ```code
	 *     <Row>
	 *         <Col width="20" offset="10">
	 *             <div className="col-demo">10</div>
	 *         </Col>
	 *     </Row>
	 * ```
	 *
	 * @class Col
	 * @module 布局组件
	 * @extends Component
	 * @constructor
	 * @demo grid|grid.js {展示}
	 * @since 0.1.0
	 * @show true
	 * */

	var Col = (function (_Component) {
	    _inherits(Col, _Component);

	    function Col() {
	        _classCallCheck(this, Col);

	        _Component.apply(this, arguments);
	    }

	    Col.prototype.render = function render() {
	        var others = _objectWithoutProperties(this.props, []);

	        return _react2['default'].createElement(
	            'div',
	            _extends({}, others, { className: _classnames2['default'](this.getProperty(true), this.props.className) }),
	            this.props.children
	        );
	    };

	    _createClass(Col, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'col'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 占100份的多少份，目前支持5-100之间5的倍数、33（1\3）和66(2\3)
	             * @property width
	             * @type Integer
	             * */
	            width: _react.PropTypes.string,
	            /**
	             * 偏移多少，目前支持5-100之间5的倍数、33（1\3）和66(2\3)，默认不偏移
	             * @property offset
	             * @type Integer
	             * */
	            offset: _react.PropTypes.string,
	            /**
	             * 竖直方向的排列是靠上、居中还是靠下
	             * @property align
	             * @type Integer
	             * */
	            align: _react2['default'].PropTypes.oneOf(['top', 'bottom', 'center'])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'col',
	            classMapping: {
	                'top': 'top',
	                'bottom': 'bottom',
	                'center': 'center'
	            }
	        },
	        enumerable: true
	    }]);

	    return Col;
	})(_utilsComponent2['default']);

	exports['default'] = Col;
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _utilsTool = __webpack_require__(73);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 展现形式如表格一般, 用来组织数据, 显示链接的集合, 或一系列的控件。<br />
	 * - 使用时如果需要跳转功能可通过添加href属性并赋予正确的url(任何标签)。
	 * - 可搭配其他组件一起使用, 如徽章组件Badge, 开关组件Switch等。
	 *
	 * 示例:
	 * ```code
	 *     <TableView>
	 *         <a href="https://github.com/future-team/phoenix-ui">Item 1</a>
	 *         <a>Item 2 <Badge>2</Badge></a>
	 *         <a>Item 3 <Switch /></a>
	 *     </TableView>
	 * ```
	 *
	 * @class TableView
	 * @module 布局组件
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo tableview|table-view.js {展示}
	 * @show true
	 * */

	var TableView = (function (_Component) {
	    _inherits(TableView, _Component);

	    _createClass(TableView, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'table-view'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * */
	            componentTag: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'table-view',
	            componentTag: 'ul',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function TableView(props, context) {
	        _classCallCheck(this, TableView);

	        _Component.call(this, props, context);
	    }

	    TableView.prototype.renderItem = function renderItem() {
	        var items = _react2['default'].Children.map(this.props.children, function (options, index) {
	            var _options$props = options.props;
	            var href = _options$props.href;

	            var other = _objectWithoutProperties(_options$props, ['href']);

	            return _react2['default'].createElement(
	                'li',
	                { className: _utilsTool.setPhoenixPrefix("table-view-cell") },
	                href && href != '' ? _react2['default'].createElement(
	                    'a',
	                    _extends({ href: href }, other, { className: _classnames2['default'](_utilsTool.setPhoenixPrefix('navigate-right'), options.props.className) }),
	                    options.props.children
	                ) : options.props.children
	            );
	        }, this);

	        return items;
	    };

	    TableView.prototype.render = function render() {
	        var Component = this.props.componentTag;

	        return _react2['default'].createElement(
	            Component,
	            _extends({}, this.otherProps, { className: _classnames2['default'](this.getProperty(true), this.props.className), style: this.getStyles(this.props.style) }),
	            this.renderItem()
	        );
	    };

	    return TableView;
	})(_utilsComponent2['default']);

	exports['default'] = TableView;
	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	/**
	 * 表单元素布局方式，整齐的排列一组表单元素<br/>
	 *
	 * 示例:
	 * - 单列, 如:
	 * ```code
	 *     <FormGroup>
	 *         <Row single>
	 *             <Col>
	 *                 <Input type="text" placeholder="姓名" />
	 *             </Col>
	 *         </Row>
	 *     </FormGroup>
	 * ```
	 * - 多列, 如:
	 * ```code
	 *     <FormGroup>
	 *         <Row>
	 *             <Col>
	 *                 <label>省</label>
	 *                 <Input type="text" placeholder="省" />
	 *             </Col>
	 *             <Col>
	 *                 <label>市</label>
	 *                 <Input type="text" placeholder="市" />
	 *             </Col>
	 *         </Row>
	 *     </FormGroup>
	 * ```
	 *
	 * @class FormGroup
	 * @module 表单组件
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo formgroup|form-group.js {展示}
	 * @show true
	 * */

	var FormGroup = (function (_Component) {
	    _inherits(FormGroup, _Component);

	    _createClass(FormGroup, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'form-group'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * */
	            componentTag: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'form-group',
	            componentTag: 'form',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function FormGroup(props, context) {
	        _classCallCheck(this, FormGroup);

	        _Component.call(this, props, context);
	    }

	    FormGroup.prototype.renderItem = function renderItem() {
	        var items = _react2['default'].Children.map(this.props.children, function (options, index) {

	            return _react2['default'].cloneElement(options, {
	                className: _classnames2['default'](!options.props.single ? 'ph-form-row' : '', options.props.className)
	            });
	        }, this);

	        return items;
	    };

	    FormGroup.prototype.render = function render() {
	        var _props = this.props;
	        var Component = _props.componentTag;
	        var className = _props.className;

	        var other = _objectWithoutProperties(_props, ['componentTag', 'className']);

	        return _react2['default'].createElement(
	            Component,
	            _extends({ className: _classnames2['default'](this.getProperty(true), _utilsTool.setPhoenixPrefix('row-no-padding'), this.props.className) }, other),
	            this.renderItem()
	        );
	    };

	    return FormGroup;
	})(_utilsComponent2['default']);

	exports['default'] = FormGroup;
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsClassNameMixin = __webpack_require__(65);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	var _utilsTool = __webpack_require__(73);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * tab选项卡组件<br/>
	 * - 通过heading设置选项卡的显示内容。
	 * - 可通过onTabChange设置点击选项卡的回调函数。
	 * - 可自定义className等常用属性以及事件。
	 *
	 * 具体属性和接口如下：
	 * - heading:选项卡的显示内容, 默认'tab'
	 * - onTabChange:点击事件的回调函数
	 *
	 * 示例:
	 * ```code
	 *     <Tabset activeIndex ={this.state.index} tabCallback={(index)=>{console.log(index);}>
	 *         <Tab heading='标题1' className='tab-test'>
	 *             横向内容1
	 *         </Tab>
	 *         <Tab heading='标题2' onTabChange={(index)=>{console.log(index);}>
	 *             横向内容2
	 *         </Tab>
	 *     </Tabset>
	 * ```
	 *
	 * @class Tab
	 * @module 选项卡
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo tab|tab.js{展示}
	 * @show true
	 * */

	var Tab = (function (_Component) {
	    _inherits(Tab, _Component);

	    _createClass(Tab, null, [{
	        key: 'ProTypes',
	        value: {
	            /**
	             * 选项卡的标题文字，默认为‘tab’
	             * @property heading
	             * @type String
	             * @default 'tab'
	             * */
	            heading: _react.PropTypes.string,
	            /**
	             * 点击事件的回调函数
	             * @method onTabChange
	             * @type Function
	             * @default null
	             * */
	            onTabChange: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            heading: 'tab',
	            activeIndex: 0,
	            vertical: false,
	            onTabChange: null
	        },
	        enumerable: true
	    }]);

	    function Tab(props, context) {
	        _classCallCheck(this, _Tab);

	        _Component.call(this, props, context);
	    }

	    Tab.prototype.handleClick = function handleClick() {
	        this.props.changeActive(this.props.index);
	        this.props.onTabChange && this.props.onTabChange(this.props.index);
	    };

	    Tab.prototype.isActive = function isActive() {
	        return this.props.index == this.props.activeIndex ? 'active' : '';
	    };

	    Tab.prototype.isVertical = function isVertical() {
	        return !!this.props.vertical ? '' : _utilsTool.setPhoenixPrefix('col');
	    };

	    Tab.prototype.render = function render() {
	        var _props = this.props;
	        var className = _props.className;
	        var onClick = _props.onClick;

	        var other = _objectWithoutProperties(_props, ['className', 'onClick']);

	        return _react2['default'].createElement(
	            'li',
	            _extends({ className: _classnames2['default'](this.isVertical(), _utilsTool.setPhoenixPrefix('tab-nav'), this.isActive(), className), onClick: this.handleClick.bind(this) }, other),
	            this.props.heading
	        );
	    };

	    var _Tab = Tab;
	    Tab = _utilsClassNameMixin2['default'](Tab) || Tab;
	    return Tab;
	})(_react.Component);

	exports['default'] = Tab;
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsClassNameMixin = __webpack_require__(65);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	var _TabJs = __webpack_require__(80);

	var _TabJs2 = _interopRequireDefault(_TabJs);

	/**
	 * <h5>tab选项卡，主要包括一下两个组件:</h5>
	 * <strong><a href='../classes/Tabset.html'>tabset</a></strong><br/>
	 * <strong><a href='../classes/Tab.html'>tab</a></strong><br>
	 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
	 * @module 选项卡
	 * @main 选项卡
	 * @static
	 *
	 */
	/**
	 * tabset选项卡组件<br/>
	 * - 通过activeIndex指定默认的选中tab的索引值。
	 * - 选项卡默认横排, 可通过vertical设置为竖排。
	 * - 当设置为vertical后, 可通过width设置tab标题部分的宽度占比。
	 * - 可通过onTabsetChange设置点击选项卡的回调函数。
	 * - 可自定义className等常用属性以及事件。
	 *
	 * 具体属性和接口如下：
	 * - activeIndex:默认选中的标签卡索引值，默认0第一个tab
	 * - vertical:是否竖排，如需要直接添加改属性即可，默认不竖排
	 * - width:选项卡头部的宽度，取值0-100之间, 只有设置vertical下生效, 默认20
	 * - onTabsetChange:点击选项卡执行的回调函数
	 *
	 * 示例:
	 * - 横排
	 * ```code
	 *     <Tabset activeIndex ={this.state.index} onTabsetChange={(index)=>{console.log(index);}>
	 *         <Tab heading='标题1' className='tab-test'>
	 *             横向内容1
	 *         </Tab>
	 *         <Tab heading='标题2' clickCallback={(index)=>{console.log(index);}>
	 *             横向内容2
	 *         </Tab>
	 *     </Tabset>
	 * ```
	 * - 竖排
	 * ```code
	 *     <Tabset vertical width={30} activeIndex ={this.state.index} onTabsetChange={(index)=>{console.log(index);}>
	 *         <Tab heading='标题1'>
	 *             竖向内容1
	 *         </Tab>
	 *         <Tab heading='标题2' clickCallback={(index)=>{console.log(index);}>
	 *             竖向内容2
	 *         </Tab>
	 *     </Tabset>
	 * ```
	 *
	 * @class Tabset
	 * @module 选项卡
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo tab|tab.js{展示}
	 * @show true
	 * */

	var Tabset = (function (_Component) {
	    _inherits(Tabset, _Component);

	    _createClass(Tabset, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 指定默认选中的选项卡，默认为0
	             * @property activeIndex
	             * @type Number
	             * @default 0
	             * */
	            activeIndex: _react.PropTypes.number,
	            /**
	             * 是否竖排
	             * @property vertical
	             * @type Boolean
	             * @default false || null
	             * */
	            vertical: _react.PropTypes.bool,
	            /**
	             * 设置选项卡头部的宽度，只有竖排的情况下才起作用
	             * @property width
	             * @type Number
	             * @default '20'
	             * */
	            width: _react.PropTypes.number,
	            /**
	             * 点击事件的回调函数,返回当前选中项
	             * @method onTabsetChange
	             * @type Function
	             * @default null
	             * */
	            onTabsetChange: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            activeIndex: 0,
	            vertical: false,
	            width: 20,
	            onTabsetChange: null
	        },
	        enumerable: true
	    }]);

	    function Tabset(props, context) {
	        _classCallCheck(this, _Tabset);

	        _Component.call(this, props, context);
	        this.state = {
	            activeIndex: this.props.activeIndex
	        };
	        /**
	         * 首次进入获取active
	         * */
	        // this.props.onTabsetChange && this.props.onTabsetChange(this.props.activeIndex);
	    }

	    /**
	     * props再次改变，再次判断active
	     * */

	    Tabset.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.state.activeIndex != nextProps.activeIndex && this.changeActive(nextProps.activeIndex);
	    };

	    Tabset.prototype.isVertial = function isVertial() {
	        return !!this.props.vertical ? 'vertical ' + _utilsTool.setPhoenixPrefix('row') : '';
	    };

	    Tabset.prototype.isActive = function isActive(index) {
	        return index == this.state.activeIndex ? 'active' : '';
	    };

	    Tabset.prototype.changeActive = function changeActive(index) {
	        if (index != this.state.activeIndex) {
	            this.setState({
	                activeIndex: index
	            });
	        }
	        this.tabHandler(index);
	    };

	    Tabset.prototype.getClass = function getClass(flag) {
	        var vertical = this.props.vertical;
	        if (flag) {
	            var cols = _utilsTool.setPhoenixPrefix('col-' + this.props.width);
	            return !vertical ? _utilsTool.setPhoenixPrefix('row') : _utilsTool.setPhoenixPrefix('col') + ' ' + cols;
	        } else {
	            return vertical ? _utilsTool.setPhoenixPrefix('col') : '';
	        }
	    };

	    Tabset.prototype.tabHandler = function tabHandler(index) {
	        var onTabsetChange = this.props.onTabsetChange;

	        onTabsetChange && onTabsetChange(index);
	    };

	    Tabset.prototype.render = function render() {
	        var _this = this;

	        var panels = [];
	        var _props = this.props;
	        var className = _props.className;

	        var other = _objectWithoutProperties(_props, ['className']);

	        var headings = _react2['default'].Children.map(this.props.children, function (options, index) {
	            var _options$props = options.props;
	            var vertical = _options$props.vertical;

	            var other = _objectWithoutProperties(_options$props, ['vertical']);

	            var opt = _react2['default'].cloneElement(options, {
	                key: index,
	                index: index,
	                activeIndex: _this.state.activeIndex,
	                changeActive: _this.changeActive.bind(_this),
	                vertical: _this.props.vertical
	            });

	            var panel = _react2['default'].createElement(
	                'div',
	                { className: _classnames2['default'](_utilsTool.setPhoenixPrefix('tab-panel'), _this.isActive(index), options.props.className), key: index },
	                options.props.children
	            );
	            panels.push(panel);
	            return opt;
	        }, this);

	        return _react2['default'].createElement(
	            'div',
	            _extends({ className: _classnames2['default'](_utilsTool.setPhoenixPrefix('tabs'), this.isVertial(), className) }, other),
	            _react2['default'].createElement(
	                'ul',
	                { className: this.getClass(true) },
	                headings
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: _classnames2['default'](this.getClass(false), _utilsTool.setPhoenixPrefix('tab-bd')) },
	                panels
	            )
	        );
	    };

	    var _Tabset = Tabset;
	    Tabset = _utilsClassNameMixin2['default'](Tabset) || Tabset;
	    return Tabset;
	})(_react.Component);

	exports['default'] = Tabset;
	module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * <h5>标签组件，主要包括组件:</h5>
	 * <strong><a href='../classes/Label.html'>Label 标签</a></strong><br/>
	 * <strong><a href='../classes/Badge.html'>Badge 徽章</a></strong><br>
	 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
	 * @module 标签组件
	 * @main 标签组件
	 * @static
	 */
	/**
	 * 标签组件<br/>
	 * - 通过phStyle来改变颜色, 可选primary、warning、danger、info、error、success。
	 * - 通过phSize设置大小, 可选sm、md、lg。
	 * - 不提供默认回调, 但支持自定义className，事件等操作。
	 *
	 * 主要属性和接口：
	 * - phStyle:标签颜色, 默认primary <br/>
	 * 如：`<Label phStyle="info">惠</Label>`
	 * - phSize:标签大小, 默认sm <br/>
	 * 如：`<Label phSize="lg">惠</Label>`
	 *
	 * @class Label
	 * @module 标签组件
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo label|label.js{展示}
	 * @show true
	 * */

	var Label = (function (_Component) {
	    _inherits(Label, _Component);

	    _createClass(Label, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'label'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * label标签大小[lg、md、sm], 默认为sm
	             * @property phSize
	             * @type string
	             * @default 'sm'
	             * */
	            phSize: _react.PropTypes.string,
	            /**
	             * label标签颜色[primary、warning、danger、info、error、success], 默认primary
	             * @property phStyle
	             * @type string
	             * @default 'primary'
	             **/
	            phStyle: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            phSize: 'sm',
	            phStyle: 'primary',
	            classPrefix: 'label',
	            classMapping: {
	                'primary': 'primary',
	                'info': 'info',
	                'success': 'success',
	                'error': 'error',
	                'warning': 'warning',
	                'danger': 'danger'
	            }
	        },
	        enumerable: true
	    }]);

	    function Label(props, context) {
	        _classCallCheck(this, Label);

	        _Component.call(this, props, context);
	    }

	    Label.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'span',
	            { className: _classnames2['default'](this.getProperty(true), this.props.className), style: this.getStyles(this.props.style) },
	            this.props.children
	        );
	    };

	    return Label;
	})(_utilsComponent2['default']);

	exports['default'] = Label;
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * Badge徽章标记<br/>
	 * - 主要是用来提供不同颜色的标识, 通过phStyle来改变颜色, 可选primary、warning、danger、info、error、success。
	 * - 不提供默认回调, 但支持自定义className，事件等操作。
	 *
	 * 主要属性和接口：
	 * - phStyle:徽章颜色, 默认primary <br/>
	 * 如：`<Badge phStyle="info">惠</Badge>`
	 *
	 * @class Badge
	 * @module 标签组件
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo badge|badge.js {展示}
	 * @show true
	 * */

	var Badge = (function (_Component) {
	    _inherits(Badge, _Component);

	    _createClass(Badge, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'badge'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * badge徽章颜色[primary、warning、danger、info、error、success], 默认primary
	             * @property phStyle
	             * @type string
	             * @default 'primary'
	             **/
	            phStyle: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            phStyle: 'primary',
	            classPrefix: 'badge',
	            classMapping: {
	                'primary': 'primary',
	                'info': 'info',
	                'success': 'success',
	                'error': 'error',
	                'warning': 'warning',
	                'danger': 'danger'
	            }
	        },
	        enumerable: true
	    }]);

	    function Badge(props, context) {
	        _classCallCheck(this, Badge);

	        _Component.call(this, props, context);
	    }

	    Badge.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'span',
	            { className: _classnames2['default'](this.getProperty(true), this.props.className), style: this.getStyles(this.props.style) },
	            this.props.children
	        );
	    };

	    return Badge;
	})(_utilsComponent2['default']);

	exports['default'] = Badge;
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	/**
	 * <h5>基础组件，主要包括:</h5>
	 * <strong><a href='../classes/Star.html'>Star 星级</a></strong><br/>
	 * <strong><a href='../classes/Button.html'>Button 按钮</a></strong><br>
	 *  <strong><a href='../classes/ButtonGroup.html'>ButtonGroup 按钮组</a></strong><br>
	 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
	 * @module 基础组件
	 * @main 基础组件
	 * @static
	 */
	/**
	 * 星级评价组件<br />
	 * - 通过Rate设置星级评价的分数, 最低0, 最高50, 5的倍数。
	 * - 通过phSize设置大小, 可选sm、md、lg。
	 *
	 * 主要属性和接口：
	 * - phSize(v1.1.2以下用size):星星的大小。分别为sm、md、lg, 默认sm。 <br/>
	 * 如：`<Star phSize="lg" />`
	 * - Rate:星级评价的分数。最低0, 最高50, 5的倍数递增, 默认0。 <br/>
	 * 如：`<Star Rate={10} />`
	 *
	 * @class Star
	 * @module 基础组件
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo star|star.js {展示}
	 * @show true
	 * */

	var Star = (function (_Component) {
	    _inherits(Star, _Component);

	    _createClass(Star, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 星级评价分数
	             * @property Rate
	             * @type number
	             * @default 默认为0，最高50
	             * */
	            Rate: _react.PropTypes.number,
	            /**
	             * 星星大小
	             * @property phSize
	             * @type String
	             * @default 'sm'
	             * */
	            phSize: _react.PropTypes.string,
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'star'
	             * */
	            classPrefix: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            phSize: 'sm',
	            classPrefix: 'star',
	            Rate: 0,
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function Star(props, context) {
	        _classCallCheck(this, Star);

	        _Component.call(this, props, context);
	    }

	    Star.prototype.render = function render() {
	        var _props = this.props;
	        var Rate = _props.Rate;
	        var className = _props.className;

	        var rateCls = 'star-' + Math.round(Rate * 2 / 10) * 5;
	        // let sizeCls = size && 'star-'+size;

	        return _react2['default'].createElement(
	            'div',
	            { className: _classnames2['default'](this.getProperty(true), _utilsTool.setPhoenixPrefix(rateCls), className) },
	            _react2['default'].createElement('div', { className: _utilsTool.setPhoenixPrefix("star-grey") })
	        );
	    };

	    return Star;
	})(_utilsComponent2['default']);

	exports['default'] = Star;
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	/**
	 * 拖拽组件<br/>
	 * - 兼容移动端的touch和pc端的mouse事件。
	 * - 可通过onDrag设置抓取的回调函数, 返回抓取在屏幕上的位置, 分别保存在start和move中, 以x和y的形式展示。
	 * - 可通过onDrop设置松开瞬间的回调函数, 返回松开时在屏幕上的位置, 保存在end中, 以x和y的形式展示。
	 *
	 * 示例:
	 * ```code
	 *     <Drag onDrag={::this.onDrag} onDrop={::this.onDrop} style={{height:0}}>
	 *         <div className="box" ref={(box)=>{this.box = box}}>Drag</div>
	 *     </Drag>
	 * ```
	 * ```code
	 *     onDrag(event,position){
	 *         this.prePosition = position.start;
	 *         this.nowPosition = position.move;
	 *
	 *         this.distanceX = this.preDistanceX + this.nowPosition.x - this.prePosition.x;
	 *         this.distanceY = this.preDistanceY + this.nowPosition.y - this.prePosition.y;
	 *         console.log(this.distanceX, this.distanceY);
	 *     }
	 *     onDrop(event,position){
	 *         this.preDistanceX = this.distanceX;
	 *         this.preDistanceY = this.distanceY;
	 *     }
	 * ```
	 *
	 * @class Drag
	 * @module 辅助组件
	 * @extends Component
	 * @constructor
	 * @since 1.0.0
	 * @demo drag|drag.js {展示}
	 * @show true
	 * */

	var Drag = (function (_Component) {
	    _inherits(Drag, _Component);

	    _createClass(Drag, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 抓取的执行函数,对应TouchStart/TouchMove
	             * @method onDrag
	             * @type Function
	             * */
	            onDrag: _react.PropTypes.func,
	            /**
	             * 放开的执行函数,对应TouchEnd
	             * @method onDrop
	             * @type Function
	             * */
	            onDrop: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function Drag(props, context) {
	        _classCallCheck(this, Drag);

	        _Component.call(this, props, context);

	        this.mobile = _utilsTool.getDeviceInfo('mobile');

	        this.state = {
	            position: {}
	        };

	        this.onMouseMoveHandle = this.onMouseMove.bind(this);
	        this.onMouseEndHandle = this.onMouseEnd.bind(this);

	        this.isMouseDown = false;
	    }

	    Drag.prototype.onTouchStart = function onTouchStart(event) {
	        var _props = this.props;
	        var onDrag = _props.onDrag;
	        var onDragStart = _props.onDragStart;

	        event.stopPropagation();
	        // event.preventDefault();

	        this.state.position.start = { x: event.touches[0].pageX, y: event.touches[0].pageY };
	        this.state.position.move = this.state.position.start;

	        if (onDrag) onDrag(event, this.state.position);
	        if (onDragStart) onDragStart(event, this.state.position);

	        return false;
	    };

	    Drag.prototype.onMouseStart = function onMouseStart(event) {
	        var _props2 = this.props;
	        var onDrag = _props2.onDrag;
	        var onDragStart = _props2.onDragStart;

	        this.isMouseDown = true;
	        event.stopPropagation();
	        // event.preventDefault();

	        this.state.position.start = { x: event.pageX, y: event.pageY };
	        this.state.position.move = this.state.position.start;

	        if (onDrag) onDrag(event, this.state.position);
	        if (onDragStart) onDragStart(event, this.state.position);

	        if (!this.mobile) {
	            document.addEventListener('mousemove', this.onMouseMoveHandle, false);
	            document.addEventListener('mouseup', this.onMouseEndHandle, false);
	        }

	        return false;
	    };

	    Drag.prototype.onTouchMove = function onTouchMove(event) {
	        event.stopPropagation();
	        // event.preventDefault();

	        this.state.position.move = { x: event.touches[0].pageX, y: event.touches[0].pageY };

	        if (this.props.onDrag) this.props.onDrag(event, this.state.position);

	        return false;
	    };

	    Drag.prototype.onMouseMove = function onMouseMove(event) {
	        if (!this.isMouseDown) return;
	        event.stopPropagation();
	        // event.preventDefault();

	        this.state.position.move = { x: event.pageX, y: event.pageY };

	        if (this.props.onDrag) this.props.onDrag(event, this.state.position);

	        return false;
	    };

	    Drag.prototype.onTouchEnd = function onTouchEnd(event) {
	        event.stopPropagation();
	        // event.preventDefault();

	        this.state.position.end = { x: event.changedTouches[0].pageX, y: event.changedTouches[0].pageY };
	        this.state.position.start = this.state.position.move;

	        if (this.props.onDrop) this.props.onDrop(event, this.state.position);

	        return false;
	    };

	    Drag.prototype.onMouseEnd = function onMouseEnd(event) {
	        event.stopPropagation();
	        // event.preventDefault();

	        this.state.position.end = { x: event.pageX, y: event.pageY };
	        this.state.position.start = this.state.position.move;

	        if (this.props.onDrop) this.props.onDrop(event, this.state.position);
	        this.isMouseDown = false;

	        if (!this.mobile) {
	            document.removeEventListener('mousemove', this.onMouseMoveHandle, false);
	            document.removeEventListener('mouseup', this.onMouseEndHandle, false);
	        }
	        return false;
	    };

	    Drag.prototype.onTouchCancel = function onTouchCancel(event) {
	        // 触屏取消:忽然来电话等情况
	    };

	    Drag.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (!this.mobile) {
	            document.removeEventListener('mousemove', this.onMouseMoveHandle, false);
	            document.removeEventListener('mouseup', this.onMouseEndHandle, false);
	        }
	    };

	    Drag.prototype.render = function render() {
	        var _this = this;

	        return _react2['default'].createElement(
	            'div',
	            _extends({}, this.props, { className: _classnames2['default'](_utilsTool.setPhoenixPrefix("drag-action"), this.props.className),
	                onTouchStart: function (event) {
	                    _this.onTouchStart(event);
	                },
	                onTouchMove: function (event) {
	                    _this.onTouchMove(event);
	                },
	                onTouchEnd: function (event) {
	                    _this.onTouchEnd(event);
	                },
	                onTouchCancel: function (event) {
	                    _this.onTouchCancel(event);
	                },

	                onMouseDown: function (event) {
	                    _this.onMouseStart(event);
	                },

	                ref: function (dragAction) {
	                    _this.dragAction = dragAction;
	                }
	            }),
	            this.props.children
	        );
	    };

	    return Drag;
	})(_utilsComponent2['default']);

	exports['default'] = Drag;
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	var _Drag = __webpack_require__(85);

	var _Drag2 = _interopRequireDefault(_Drag);

	var _Button = __webpack_require__(61);

	var _Button2 = _interopRequireDefault(_Button);

	/**
	 * 左滑组件<br/>
	 * - 向左滑动出现可操作按钮, 类似IOS列表操作的组件。
	 * - 通过buttons设置可操作按钮的文字text、样式phStyle以及点击按钮的回调函数onHandle。
	 * - buttons的phStyle默认'primary', 可选primary、info、error、warning、danger、link、gray、success。
	 *
	 * 示例:
	 * ```code
	 *     <Swipe buttons={[
	 *         {text: '删除', onHandle: this.onDelete, phStyle: 'error'},
	 *         {text: '取消', onHandle: this.onCancle, phStyle: 'info'}
	 *     ]}>
	 *         <div style={{padding: '1rem'}}>
	 *             // 内容
	 *         </div>
	 *     </Swipe>
	 * ```
	 *
	 * @class Swipe
	 * @module 操作类组件
	 * @extends Component
	 * @constructor
	 * @since 0.3.0
	 * @demo swipe|swipe.js {展示}
	 * @show true
	 * */

	var Swipe = (function (_Component) {
	    _inherits(Swipe, _Component);

	    _createClass(Swipe, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'swipe'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * */
	            componentTag: _react.PropTypes.string,
	            /**
	             * 按钮组
	             * @property buttons
	             * @type Array
	             * */
	            buttons: _react.PropTypes.array
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            buttons: [],
	            classPrefix: 'swipe',
	            componentTag: 'div',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function Swipe(props, context) {
	        _classCallCheck(this, Swipe);

	        _Component.call(this, props, context);

	        this.state = {
	            translateX: -1,
	            preTranslateX: -1,
	            btnsWidth: 0,
	            isBtnsShow: false,
	            OPE_RANGE: 10
	        };
	    }

	    Swipe.prototype.renderOperationButton = function renderOperationButton(buttons) {
	        var buttonsDom = [];

	        if (buttons.length != 0) buttonsDom.push(this.renderButtonByType(buttons));

	        return buttonsDom;
	    };

	    Swipe.prototype.renderButtonByType = function renderButtonByType(btnInfo) {
	        var _this = this;

	        return _react2['default'].createElement(
	            'div',
	            { className: _utilsTool.setPhoenixPrefix("swipe-btns"), key: 'buttons', ref: function (buttons) {
	                    _this.buttons = buttons;
	                } },
	            btnInfo.map(function (item, index) {
	                return _react2['default'].createElement(
	                    _Button2['default'],
	                    { key: index, phStyle: item.phStyle || 'primary' },
	                    item.text
	                );
	            })
	        );
	    };

	    Swipe.prototype.componentDidMount = function componentDidMount() {
	        // 获取btns的宽度
	        if (this.buttons) this.state.btnsWidth = this.buttons.offsetWidth;
	    };

	    Swipe.prototype.onDrag = function onDrag(event, position) {
	        // position.start position.move
	        var target = event.currentTarget;
	        this.state.translateX = position.move.x - position.start.x + this.state.preTranslateX;

	        if (position.move.x < position.start.x) {
	            this.state.isBtnsShow = true;
	        } else {
	            this.state.isBtnsShow = false;
	        }

	        if (this.state.translateX >= 0) this.state.translateX = 0;
	        if (this.state.translateX <= -this.state.btnsWidth) this.state.translateX = -this.state.btnsWidth;

	        target.style.transform = 'translateX(' + this.state.translateX + 'px)';
	    };

	    Swipe.prototype.onDrop = function onDrop(event, position) {
	        // position.end
	        var target = event.currentTarget;

	        if (Math.abs(this.state.translateX) < 10) {
	            // 微弱操作保持不变
	            this.state.isBtnsShow = !this.state.isBtnsShow;

	            if (this.state.isBtnsShow) {
	                this.state.translateX = 0;
	            } else {
	                this.state.translateX = -this.state.btnsWidth;
	            }
	        } else {
	            if (this.state.isBtnsShow) {
	                this.state.translateX = -this.state.btnsWidth;
	            } else {
	                this.state.translateX = 0;
	            }
	        }
	        // console.log(this.state.isBtnsShow);

	        this.state.preTranslateX = this.state.translateX;
	        target.style.transform = 'translateX(' + this.state.translateX + 'px)';
	    };

	    Swipe.prototype.render = function render() {
	        var _props = this.props;
	        var Component = _props.componentTag;
	        var buttons = _props.buttons;
	        var className = _props.className;

	        return _react2['default'].createElement(
	            Component,
	            { className: _classnames2['default'](this.getProperty(true), className), style: this.getStyles(this.props.style) },
	            _react2['default'].createElement(
	                _Drag2['default'],
	                { className: _utilsTool.setPhoenixPrefix("swipe-content"), onDrag: this.onDrag.bind(this), onDrop: this.onDrop.bind(this) },
	                this.props.children
	            ),
	            this.renderOperationButton(buttons)
	        );
	    };

	    return Swipe;
	})(_utilsComponent2['default']);

	exports['default'] = Swipe;
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	/**
	 * <h5>主要栅格化布局组件</h5>
	 * <strong><a href='../classes/Grid.html'>Grid 外框</a></strong><br>
	 * <strong><a href='../classes/Row.html'>Row 行排列</a></strong><br>
	 * <strong><a href='../classes/Col.html'>Col 竖排列</a></strong><br>
	 * <strong><a href='../classes/TableView.html'>TableView 仿表格组件</a></strong><br>
	 * <h6>点击以上链接进行相关查看</h6>
	 * @module 布局组件
	 * @main 布局组件
	 * @static
	 */
	/**
	 * 栅格容器组件<br/>
	 * - 配合Row、Col使用布局。
	 * - 可自定义className、style等属性以及自定义事件。
	 *
	 * 示例:
	 * ```code
	 *     <Grid> //定义栅格
	 *         <Row> //定义一行
	 *             <Col> //定义一列，最多12份
	 *                 <div className='col-demo'>内容</div>
	 *             </Col>
	 *             <Col>
	 *                 <div className='col-demo'>stretch<br />baseline</div>
	 *             </Col>
	 *         </Row>
	 *     </Grid>
	 * ```
	 *
	 * @class Grid
	 * @module 布局组件
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo grid|grid.js {展示}
	 * @show true
	 * */

	var Grid = (function (_Component) {
	    _inherits(Grid, _Component);

	    _createClass(Grid, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'grid'
	             * */
	            classPrefix: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'grid',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function Grid(props, context) {
	        _classCallCheck(this, Grid);

	        _Component.call(this, props, context);
	    }

	    Grid.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            _extends({}, this.props, {
	                className: _classnames2['default'](this.getProperty(true), this.props.fluid ? _utilsTool.setPhoenixPrefix('grid-fluid') : '', this.props.className) }),
	            this.props.children
	        );
	    };

	    return Grid;
	})(_utilsComponent2['default']);

	exports['default'] = Grid;
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	var _Animate = __webpack_require__(89);

	var _Animate2 = _interopRequireDefault(_Animate);

	/**
	 * <h5>弹出框组件，主要包括组件:</h5>
	 * <strong><a href='../classes/Dialog.html'>Dialog 基础弹框</a></strong><br/>
	 * <strong><a href='../classes/Alert.html'>Alert弹框</a></strong><br>
	 * <strong><a href='../classes/Prompt.html'>Prompt弹框</a></strong>
	 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
	 * @module 弹出框组件
	 * @main 弹出框组件
	 * @static
	 */
	/**
	 * 弹框组件<br/>
	 * - 由于弹框的显示操作在组件以外, 所以需要在使用时自定义`visible`、`onClose`函数。
	 * - 通过visible设置弹框是否显示, 可选true/false, 必需。
	 * - 可通过onClose配置点击弹框阴影部分以及弹框右上角X按钮来关闭弹框。
	 * - 可通过closeButton来配置弹框右上角X按钮是否显示, 默认不显示。
	 * - 默认传了onClose之后阴影部分就具备点击关闭弹框的按钮, 如果需要去掉该功能需要额外传shadowDisabled作为标识。
	 *
	 * 主要属性和接口：
	 * - visible:弹框是否显示标识, 默认false不可见<br/>
	 * - onClose:关闭弹框的功能函数<br/>
	 * - closeButton:右上角关闭按钮是否显示的标识, 默认不显示<br/>
	 * - shadowDisabled:阴影部分是否可点击关闭按钮, 默认传了onClose函数就可以关闭<br/>
	 *
	 * 示例:
	 * ```code
	 *     <Dialog visible={this.state.visible} onClose={::this.onClose} closeButton shadowDisabled>
	 *         <Dialog.Title>标题标题</Dialog.Title>
	 *         <Dialog.Body>
	 *             <p>可自定义表格内容</p>
	 *         </Dialog.Body>
	 *         <Dialog.Footer>
	 *             <Button hollow phSize="lg" phStyle="gray" onClick={::this.onClose}>取消</Button>
	 *         </Dialog.Footer>
	 *     </Dialog>
	 * ```
	 * ```code
	 *     onShow(){
	 *         this.setState({
	 *             visible: true
	 *         });
	 *     }
	 *     onClose(){
	 *         this.setState({
	 *             visible: false
	 *         });
	 *     }
	 * ```
	 *
	 * @class Dialog
	 * @module 弹出框组件
	 * @extends Component
	 * @constructor
	 * @since 0.4.0
	 * @demo dialog|dialog.js {展示}
	 * @show true
	 * */

	var Dialog = (function (_Component) {
	    _inherits(Dialog, _Component);

	    _createClass(Dialog, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'dialog'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * */
	            componentTag: _react.PropTypes.string,
	            /**
	             * 是否可见标识
	             * @property visible
	             * @type Boolean
	             * */
	            visible: _react.PropTypes.bool,
	            /**
	             * 关闭弹框的执行函数
	             * @method onClose
	             * @type Function
	             * */
	            onClose: _react.PropTypes.func,
	            /**
	             * 右上角按钮是否可见, 默认不可见
	             * @property closeButton
	             * @type Boolean
	             * */
	            closeButton: _react.PropTypes.bool,
	            /**
	             * 阴影部分是否点击可关闭弹框, 默认传了onClose之后可关闭
	             * @property shadowDisabled
	             * @type Boolean
	             * */
	            shadowDisabled: _react.PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            visible: false,
	            classPrefix: 'dialog',
	            componentTag: 'div',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function Dialog(props, context) {
	        _classCallCheck(this, Dialog);

	        _Component.call(this, props, context);
	    }

	    Dialog.prototype.onShadowClose = function onShadowClose() {
	        var _props = this.props;
	        var shadowDisabled = _props.shadowDisabled;
	        var onClose = _props.onClose;

	        if (shadowDisabled) return;
	        onClose();
	    };

	    Dialog.prototype.renderShadow = function renderShadow() {
	        var visible = this.props.visible;

	        if (visible) {
	            return _react2['default'].createElement('div', { className: _classnames2['default'](_utilsTool.setPhoenixPrefix("dialog-shadow"), "animated"), onClick: this.onShadowClose.bind(this) });
	        } else {
	            return '';
	        }
	    };

	    Dialog.prototype.renderContent = function renderContent() {
	        var _props2 = this.props;
	        var visible = _props2.visible;
	        var closeButton = _props2.closeButton;
	        var onClose = _props2.onClose;

	        if (visible) {
	            return _react2['default'].createElement(
	                'div',
	                { className: _classnames2['default'](_utilsTool.setPhoenixPrefix("dialog-main"), "animated") },
	                _react2['default'].createElement(
	                    'div',
	                    { className: _classnames2['default'](_utilsTool.setPhoenixPrefix("dialog-content"), "animated") },
	                    _react2['default'].createElement('a', { href: 'javascript:;', onClick: onClose, className: _classnames2['default'](_utilsTool.setPhoenixPrefix("dialog-close"), closeButton ? "show" : "hide", "gfs-icon icon-close") }),
	                    this.renderDialog()
	                )
	            );
	        } else {
	            return '';
	        }
	    };

	    Dialog.prototype.renderDialog = function renderDialog() {
	        var newChildren = [];
	        var _props3 = this.props;
	        var visible = _props3.visible;
	        var children = _props3.children;

	        _react2['default'].Children.forEach(children, function (child, index) {
	            // console.log(child.type.name);

	            newChildren.push(_react2['default'].cloneElement(child, {
	                key: index,
	                visible: visible
	            }));
	        });

	        return newChildren;
	    };

	    Dialog.prototype.render = function render() {
	        var _props4 = this.props;
	        var Component = _props4.componentTag;
	        var className = _props4.className;

	        return _react2['default'].createElement(
	            Component,
	            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className) }),
	            _react2['default'].createElement(
	                _Animate2['default'],
	                null,
	                this.renderShadow()
	            ),
	            _react2['default'].createElement(
	                _Animate2['default'],
	                null,
	                this.renderContent()
	            )
	        );
	    };

	    return Dialog;
	})(_utilsComponent2['default']);

	var DialogTitle = (function (_Component2) {
	    _inherits(DialogTitle, _Component2);

	    function DialogTitle(props, context) {
	        _classCallCheck(this, DialogTitle);

	        _Component2.call(this, props, context);
	    }

	    DialogTitle.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'h2',
	            _extends({}, this.props, { className: _classnames2['default'](_utilsTool.setPhoenixPrefix('dialog-title'), this.props.className) }),
	            this.props.children
	        );
	    };

	    return DialogTitle;
	})(_utilsComponent2['default']);

	var DialogBody = (function (_Component3) {
	    _inherits(DialogBody, _Component3);

	    function DialogBody(props, context) {
	        _classCallCheck(this, DialogBody);

	        _Component3.call(this, props, context);
	    }

	    DialogBody.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            _extends({}, this.props, { className: _classnames2['default'](_utilsTool.setPhoenixPrefix('dialog-body'), this.props.className) }),
	            this.props.children
	        );
	    };

	    return DialogBody;
	})(_utilsComponent2['default']);

	var DialogFooter = (function (_Component4) {
	    _inherits(DialogFooter, _Component4);

	    function DialogFooter(props, context) {
	        _classCallCheck(this, DialogFooter);

	        _Component4.call(this, props, context);
	    }

	    DialogFooter.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            _extends({}, this.props, { className: _classnames2['default'](_utilsTool.setPhoenixPrefix('dialog-footer'), this.props.className, 'clearfix') }),
	            this.props.children
	        );
	    };

	    return DialogFooter;
	})(_utilsComponent2['default']);

	Dialog.Title = DialogTitle;
	Dialog.Body = DialogBody;
	Dialog.Footer = DialogFooter;

	exports['default'] = Dialog;
	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactAddonsCssTransitionGroup = __webpack_require__(90);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	/**
	 * 动画外层组件<br/>
	 * - 使用时需要在子元素增加animated类名实现动画效果, animated定义的是过渡的duration和fill-mode, 默认300ms, 完全可以自定义。
	 * - 可通过transitionName设置动画名称, 可选fade、slide-top、slide-bottom(还将补充), 默认fade。
	 * - 可通过transitionEnterTimeout设置进入延迟时间。
	 * - 可通过transitionLeaveTimeout设置离开延迟时间。
	 *
	 * 示例:
	 * ```code
	 *     <Animate className='popup-content' transitionName='slide-top'>
	 *         {this.renderPopup()}
	 *     </Animate>
	 * ```
	 * ```code
	 *     renderPopup(){
	 *         let {visible,children,className} = this.props;
	 *         if(visible){
	 *             return <div {...this.props} className={'popup-main', 'animated', className)}>{children}</div>;
	 *         }else{
	 *             return '';
	 *         }
	 *     }
	 * ```
	 *
	 * @class Animate
	 * @module 辅助组件
	 * @extends Component
	 * @constructor
	 * @since 1.0.0
	 * @demo animate|animate.js {展示}
	 * @show true
	 * */

	var Animate = (function (_Component) {
	    _inherits(Animate, _Component);

	    _createClass(Animate, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 动画名称,默认fade
	             * @property transitionName
	             * @type String
	             * @default 'fade'
	             * */
	            transitionName: _react.PropTypes.string,
	            /**
	             * 动画进入延迟时间
	             * @property transitionEnterTimeout
	             * @type Number
	             * */
	            transitionEnterTimeout: _react.PropTypes.number,
	            /**
	             * 动画退出延迟时间
	             * @property transitionLeaveTimeout
	             * @type Number
	             * */
	            transitionLeaveTimeout: _react.PropTypes.number
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            transitionName: 'fade',
	            transitionEnterTimeout: 100,
	            transitionLeaveTimeout: 300
	        },
	        enumerable: true
	    }]);

	    function Animate(props, context) {
	        _classCallCheck(this, Animate);

	        _Component.call(this, props, context);
	    }

	    Animate.prototype.render = function render() {
	        var _props = this.props;
	        var transitionName = _props.transitionName;
	        var transitionEnterTimeout = _props.transitionEnterTimeout;
	        var transitionLeaveTimeout = _props.transitionLeaveTimeout;
	        var children = _props.children;

	        return _react2['default'].createElement(
	            _reactAddonsCssTransitionGroup2['default'],
	            _extends({}, this.props, {
	                transitionName: transitionName,
	                transitionEnterTimeout: transitionEnterTimeout,
	                transitionLeaveTimeout: transitionLeaveTimeout
	            }),
	            children
	        );
	    };

	    return Animate;
	})(_react.Component);

	exports['default'] = Animate;
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_90__;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	var _ButtonGroup = __webpack_require__(71);

	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

	var _Button = __webpack_require__(61);

	var _Button2 = _interopRequireDefault(_Button);

	var _Dialog = __webpack_require__(88);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	/**
	 * Alert组件<br/>
	 * - 由于弹框的显示操作在组件以外, 所以需要在使用时自定义`visible`、`onClose`函数。
	 * - 可通过title设置弹出框标题，content设置内容，buttons设置尾部按钮。(相对Dialog新增参数)
	 * - 默认有[确定]1个按钮，点击[确定]默认的执行函数是onClose直接关闭。
	 * - 通过visible设置弹框是否显示, 可选true/false, 必需。
	 * - 可通过onClose配置点击弹框阴影部分以及弹框右上角X按钮来关闭弹框。
	 * - 可通过closeButton来配置弹框右上角X按钮是否显示, 默认不显示。
	 * - 默认传了onClose之后阴影部分就具备点击关闭弹框的按钮, 如果需要去掉该功能需要额外传shadowDisabled作为标识。
	 *
	 * 主要属性和接口：
	 * - title:弹框的标题，必需。
	 * - content:弹框的内容，必需。
	 * - buttons:尾部按钮的内容，必需是数组的形式，text标识填充的问题，phStyle表示主题，onHandle表示点击的回调，otherProps传递按钮的其他属性，如{active:true, block:true, hollow: true}。
	 * - visible:弹框是否显示标识, 默认false不可见。
	 * - onClose:关闭弹框的功能函数。
	 * - closeButton:右上角关闭按钮是否显示的标识, 默认不显示。
	 * - shadowDisabled:阴影部分是否可点击关闭按钮, 默认传了onClose函数就可以关闭。
	 *
	 * 示例:
	 * ```code
	 *      const buttons = [
	            {text: "取消", phStyle: "gray", otherProps: {hollow: true}}, // text默认"确定", phStyle默认primary，onHandle默认onClose
	            {text: "确定", onHandle: this.onConfirm}
	        ];
	        ...
	 *      <Alert closeButton shadowDisabled visible={this.state.visible} onClose={::this.onClose.bind(this,'visible')} 
	 *          title="这是标题" content="这里是弹出框的内容..." buttons={buttons} />
	 * ```
	 *
	 * @class Alert
	 * @module 弹出框组件
	 * @extends Component
	 * @constructor
	 * @since 1.5.0
	 * @demo alert|alert.js {展示}
	 * @show true
	 * */

	var Alert = (function (_Component) {
	    _inherits(Alert, _Component);

	    _createClass(Alert, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 标题
	             * @property title
	             * @type String|Element
	             * */
	            title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	            /**
	             * 内容
	             * @property title
	             * @type String|Element
	             * */
	            content: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	            /**
	             * 尾部按钮
	             * @property buttons
	             * @type Array
	             * */
	            buttons: _react.PropTypes.array,
	            /**
	             * 是否可见标识
	             * @property visible
	             * @type Boolean
	             * */
	            visible: _react.PropTypes.bool,
	            /**
	             * 关闭弹框的执行函数
	             * @method onClose
	             * @type Function
	             * */
	            onClose: _react.PropTypes.func,
	            /**
	             * 右上角按钮是否可见, 默认不可见
	             * @property closeButton
	             * @type Boolean
	             * */
	            closeButton: _react.PropTypes.bool,
	            /**
	             * 阴影部分是否点击可关闭弹框, 默认传了onClose之后可关闭
	             * @property shadowDisabled
	             * @type Boolean
	             * */
	            shadowDisabled: _react.PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            visible: false
	        },
	        enumerable: true
	    }]);

	    function Alert(props, context) {
	        _classCallCheck(this, Alert);

	        _Component.call(this, props, context);

	        this.buttons = [{ text: "确定", onHandle: props.onClose }];
	    }

	    Alert.prototype.renderButtons = function renderButtons() {
	        var _props = this.props;
	        var buttons = _props.buttons;
	        var onClose = _props.onClose;

	        if (buttons) this.buttons = buttons;
	        var buttonsType = this.buttons.length > 2;

	        return _react2['default'].createElement(
	            _ButtonGroup2['default'],
	            { phType: buttonsType ? "tacked" : "justify" },
	            this.buttons.map(function (button, index) {
	                return _react2['default'].createElement(
	                    _Button2['default'],
	                    _extends({ key: index }, button.otherProps, { phSize: 'lg', phStyle: button.phStyle || 'primary', block: buttonsType,
	                        onClick: button.onHandle || onClose }),
	                    button.text || "确定"
	                );
	            })
	        );
	    };

	    Alert.prototype.render = function render() {
	        var _props2 = this.props;
	        var visible = _props2.visible;
	        var onClose = _props2.onClose;
	        var title = _props2.title;
	        var content = _props2.content;
	        var closeButton = _props2.closeButton;
	        var shadowDisabled = _props2.shadowDisabled;

	        return _react2['default'].createElement(
	            _Dialog2['default'],
	            { visible: visible, onClose: onClose, closeButton: closeButton, shadowDisabled: shadowDisabled },
	            _react2['default'].createElement(
	                _Dialog2['default'].Title,
	                null,
	                title
	            ),
	            _react2['default'].createElement(
	                _Dialog2['default'].Body,
	                null,
	                content
	            ),
	            _react2['default'].createElement(
	                _Dialog2['default'].Footer,
	                null,
	                this.renderButtons()
	            )
	        );
	    };

	    return Alert;
	})(_utilsComponent2['default']);

	exports['default'] = Alert;
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	var _ButtonGroup = __webpack_require__(71);

	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

	var _Button = __webpack_require__(61);

	var _Button2 = _interopRequireDefault(_Button);

	var _Input = __webpack_require__(72);

	var _Input2 = _interopRequireDefault(_Input);

	var _Dialog = __webpack_require__(88);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	/**
	 * Prompt组件<br/>
	 * - 由于弹框的显示操作在组件以外, 所以需要在使用时自定义`visible`、`onClose`函数。
	 * - 可通过title设置弹出框标题，content设置内容，buttons设置尾部按钮。(相对Dialog新增参数)
	 * - 按钮默认有[取消, 确定]2个按钮，点击[取消]默认的执行函数是直接关闭，点击[确定]通过传入的onConfirm函数可获取input的value数组，可自行添加回调。。
	 * - 通过visible设置弹框是否显示, 可选true/false, 必需。
	 * - 可通过onClose配置点击弹框阴影部分以及弹框右上角X按钮来关闭弹框。
	 * - 可通过closeButton来配置弹框右上角X按钮是否显示, 默认不显示。
	 * - 默认传了onClose之后阴影部分就具备点击关闭弹框的按钮, 如果需要去掉该功能需要额外传shadowDisabled作为标识。
	 *
	 * 主要属性和接口：
	 * - title:弹框的标题，必需。
	 * - content:弹框的内容，必需。
	 * - buttons:尾部按钮的内容，必需是数组的形式，text标识填充的问题，phStyle表示主题，onHandle表示点击按钮的回调，otherProps传递按钮的其他属性，如{active:true, block:true, hollow: true}。
	 * - onConfirm:点击确定按钮的回调，返回input的value。
	 * - visible:弹框是否显示标识, 默认false不可见。
	 * - onClose:关闭弹框的功能函数。
	 * - closeButton:右上角关闭按钮是否显示的标识, 默认不显示。
	 * - shadowDisabled:阴影部分是否可点击关闭按钮, 默认传了onClose函数就可以关闭。
	 *
	 * 示例:
	 * ```code
	 *      const buttons = [
	            {text: "取消", phStyle: "gray", otherProps: {hollow: true}}, // text默认"确定", phStyle默认primary，onHandle默认onClose
	            {text: "确定", onHandle: this.onConfirm}
	        ];
	        ...
	 *      <Prompt closeButton shadowDisabled visible={this.state.visible} onClose={::this.onClose.bind(this,'visible')} 
	 *          title="这是标题" content="这里是弹出框的内容..." buttons={buttons} />
	 * ```
	 *
	 * @class Prompt
	 * @module 弹出框组件
	 * @extends Component
	 * @constructor
	 * @since 1.5.0
	 * @demo prompt|prompt.js {展示}
	 * @show true
	 * */

	var Prompt = (function (_Component) {
	    _inherits(Prompt, _Component);

	    _createClass(Prompt, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 标题
	             * @property title
	             * @type String
	             * */
	            title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	            /**
	             * 内容
	             * @property title
	             * @type String
	             * */
	            content: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	            /**
	             * 尾部按钮
	             * @property buttons
	             * @type Array
	             * */
	            buttons: _react.PropTypes.array,
	            /**
	             * 内容区域文本框
	             * @property buttons
	             * @type Array
	             * */
	            inputs: _react.PropTypes.array,
	            /**
	             * 是否可见标识
	             * @property visible
	             * @type Boolean
	             * */
	            visible: _react.PropTypes.bool,
	            /**
	             * 关闭弹框的执行函数
	             * @method onClose
	             * @type Function
	             * */
	            onClose: _react.PropTypes.func,
	            /**
	            * 点击确定的回调函数
	            * @method onConfirm
	            * @type Function
	            * */
	            onConfirm: _react.PropTypes.func,
	            /**
	             * 右上角按钮是否可见, 默认不可见
	             * @property closeButton
	             * @type Boolean
	             * */
	            closeButton: _react.PropTypes.bool,
	            /**
	             * 阴影部分是否点击可关闭弹框, 默认传了onClose之后可关闭
	             * @property shadowDisabled
	             * @type Boolean
	             * */
	            shadowDisabled: _react.PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            visible: false
	        },
	        enumerable: true
	    }]);

	    function Prompt(props, context) {
	        _classCallCheck(this, Prompt);

	        _Component.call(this, props, context);

	        this.state = {
	            inputValue: []
	        };
	        this.inputValue = [];

	        this.buttons = [{ text: "取消", onHandle: props.onClose }, { text: "确定", onHandle: this.onConfirm.bind(this) }];
	        this.inputs = [{ type: "text", placeholder: "请输入" }];
	    }

	    Prompt.prototype.onConfirm = function onConfirm() {
	        // 用于默认情况下 确定 按钮的回调，用户自定义。
	        if (this.props.onConfirm) this.props.onConfirm(this.state.inputValue);
	    };

	    Prompt.prototype.setValue = function setValue(key, e) {
	        var o = {};
	        o[key || e.target.name] = e.target.value;
	        this.setState(o);
	    };

	    Prompt.prototype.renderContent = function renderContent() {
	        var _this2 = this;

	        if (!this.props.visible) return;
	        var _this = this;
	        var inputs = this.props.inputs;

	        if (inputs) this.inputs = inputs;

	        return _react2['default'].createElement(
	            'div',
	            null,
	            this.inputs.map(function (input, index) {
	                return _react2['default'].createElement(_Input2['default'], _extends({ key: index }, input, { type: input.type || "text", defaultValue: input.defaultValue,
	                    value: _this.state.inputValue[index], onChange: function (e) {
	                        _this2.inputValue[index] = e.target.value;
	                        _this2.setState({
	                            inputValue: _this2.inputValue
	                        });
	                        if (input.onChange) input.onChange(e.target.value);
	                    } }));
	            })
	        );
	    };

	    Prompt.prototype.renderButtons = function renderButtons() {
	        var _this3 = this;

	        var _this = this;
	        var _props = this.props;
	        var buttons = _props.buttons;
	        var onClose = _props.onClose;

	        if (buttons) this.buttons = buttons;
	        var buttonsType = this.buttons.length > 2;

	        return _react2['default'].createElement(
	            _ButtonGroup2['default'],
	            { phType: buttonsType ? "tacked" : "justify" },
	            this.buttons.map(function (button, index) {
	                return _react2['default'].createElement(
	                    _Button2['default'],
	                    _extends({ key: index }, button.otherProps, { phSize: 'lg', phStyle: button.phStyle || 'primary', block: buttonsType,
	                        onClick: function () {
	                            if (button.onHandle) {
	                                button.onHandle(_this3.state.inputValue);
	                            } else {
	                                onClose();
	                            }
	                        } }),
	                    button.text || "确定"
	                );
	            })
	        );
	    };

	    Prompt.prototype.render = function render() {
	        var _props2 = this.props;
	        var visible = _props2.visible;
	        var onClose = _props2.onClose;
	        var title = _props2.title;
	        var content = _props2.content;
	        var closeButton = _props2.closeButton;
	        var shadowDisabled = _props2.shadowDisabled;

	        return _react2['default'].createElement(
	            _Dialog2['default'],
	            { visible: visible, onClose: onClose, closeButton: closeButton, shadowDisabled: shadowDisabled },
	            _react2['default'].createElement(
	                _Dialog2['default'].Title,
	                null,
	                title
	            ),
	            _react2['default'].createElement(
	                _Dialog2['default'].Body,
	                null,
	                content,
	                this.renderContent()
	            ),
	            _react2['default'].createElement(
	                _Dialog2['default'].Footer,
	                null,
	                this.renderButtons()
	            )
	        );
	    };

	    return Prompt;
	})(_utilsComponent2['default']);

	exports['default'] = Prompt;
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _reactLibReactDOM = __webpack_require__(94);

	var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	/**
	 * 飘字组件<br/>
	 * - 由于飘字的使用范围可预估, 为方便使用在原组件的基础上更进一步改为函数式的使用方式。
	 * - 普通信息: `Toast.info(message, duration, callback)`
	 * - 成功信息: `Toast.success(message, duration, callback)`
	 * - 失败信息: `Toast.fail(message, duration, callback)`
	 * - 加载中: `Toast.loading(message, duration, callback)`
	 *
	 * 示例: <br/>
	 * - 显示普通飘字, 如:<br/>
	 * `Toast.info('只显示信息的toast！', 1000, ()=>{console.log('飘字消失时执行的回调函数');})`
	 * - 显示成功信息, 如:<br/>
	 * `Toast.success('操作成功', 1000, ()=>{console.log('飘字消失时执行的回调函数');})`
	 * - 显示失败信息, 如:<br/>
	 * `Toast.fail('操作失败', 1000, ()=>{console.log('飘字消失时执行的回调函数');})`
	 * - 显示加载中, 如:<br/>
	 * `Toast.loading('加载中...', 1000, ()=>{console.log('飘字消失时执行的回调函数');})`
	 *
	 * @class Toast
	 * @module 操作类组件
	 * @extends Component
	 * @constructor
	 * @since 0.3.0
	 * @demo toast|toast.js
	 * @show true
	 * */

	var Toast = (function (_Component) {
	    _inherits(Toast, _Component);

	    _createClass(Toast, null, [{
	        key: 'propTypes',
	        value: {},
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'toast',
	            componentTag: 'div',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function Toast(props, context) {
	        _classCallCheck(this, Toast);

	        _Component.call(this, props, context);
	    }

	    Toast.prototype.render = function render() {
	        var _props = this.props;
	        var Component = _props.componentTag;
	        var className = _props.className;

	        return _react2['default'].createElement(
	            Component,
	            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className) }),
	            _react2['default'].createElement('div', { className: _utilsTool.setPhoenixPrefix("toast-shadow") }),
	            _react2['default'].createElement(
	                'div',
	                { className: _utilsTool.setPhoenixPrefix("toast-main") },
	                _react2['default'].createElement(
	                    'div',
	                    { className: _utilsTool.setPhoenixPrefix("toast-content") },
	                    this.props.children
	                )
	            )
	        );
	    };

	    return Toast;
	})(_utilsComponent2['default']);

	var _layer = document.createElement('div'),
	    timer = null,
	    visible = false;

	function renderLayer(content, className) {
	    return _react2['default'].createElement(
	        Toast,
	        { className: className },
	        content
	    );
	}

	function _renderLayer(layerElement, duration, callback) {
	    visible = true;

	    _reactLibReactDOM2['default'].render(layerElement, _layer);
	    document.body.appendChild(_layer);

	    window.addEventListener('hashchange', _unrenderLayer, false);

	    timer = setTimeout(function () {
	        visible = false;

	        _unrenderLayer();
	        callback();
	    }, duration);
	}

	function _unrenderLayer() {
	    _reactLibReactDOM2['default'].unmountComponentAtNode(_layer);
	    if (visible) document.body.removeChild(_layer);

	    window.removeEventListener('hashchange', _unrenderLayer, false);
	    clearTimeout(timer);
	}

	exports['default'] = {
	    info: function info(content, duration, callback) {
	        var layerElement = renderLayer(content);
	        _renderLayer(layerElement, duration, callback);
	    },
	    success: function success(content, duration, callback) {
	        var layerElement = renderLayer(content, _utilsTool.setPhoenixPrefix('toast-success'));
	        _renderLayer(layerElement, duration, callback);
	    },
	    fail: function fail(content, duration, callback) {
	        var layerElement = renderLayer(content, _utilsTool.setPhoenixPrefix('toast-fail'));
	        _renderLayer(layerElement, duration, callback);
	    },
	    loading: function loading(content, duration, callback) {
	        var layerElement = renderLayer(content, _utilsTool.setPhoenixPrefix('toast-loading'));
	        _renderLayer(layerElement, duration, callback);
	    },
	    remove: function remove() {
	        _unrenderLayer();
	        clearTimeout(timer);
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_94__;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	var _Animate = __webpack_require__(89);

	var _Animate2 = _interopRequireDefault(_Animate);

	/**
	 * 弹层组件<br/>
	 * - 由于弹层的显示操作在组件以外, 所以需要在使用时自定义visible、onShow、onClose函数。
	 * - 通过align设置碳层弹出的位置, 可选top/bottom。
	 * - 可通过onClose配置点击弹层阴影部分来关闭弹层。
	 *
	 * 主要属性和接口：
	 * - visible:弹层是否显示标识, 默认false不可见
	 * - onClose:关闭弹层的功能函数
	 * - align:弹层的位置, 默认top
	 *
	 * 示例:
	 * ```code
	 *     <Popup align="top" visible={this.state.visible} onClose={::this.onClose}>
	 *         <ul className="ph-popup-list">
	 *             <li className="ph-popup-item" onClick={::this.onClose}>未上线单店</li>
	 *             <li className="ph-popup-item" onClick={::this.onClose}>未上线连锁店</li>
	 *         </ul>
	 *     </Popup>
	 * ```
	 * ```code
	 *     onShow(){
	 *         this.setState({
	 *             visible: true
	 *         });
	 *     }
	 *     onClose(){
	 *         this.setState({
	 *             visible: false
	 *         });
	 *     }
	 * ```
	 *
	 * @class Popup
	 * @module 操作类组件
	 * @extends Component
	 * @constructor
	 * @since 0.4.0
	 * @demo popup|popup.js {展示}
	 * @show true
	 * */

	var Popup = (function (_Component) {
	    _inherits(Popup, _Component);

	    _createClass(Popup, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'popup'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * */
	            componentTag: _react.PropTypes.string,
	            /**
	             * 是否可见标识
	             * @property visible
	             * @type Boolean
	             * */
	            visible: _react.PropTypes.bool,
	            /**
	             * 弹层的位置,默认top
	             * @property align
	             * @type String
	             * */
	            align: _react.PropTypes.string,
	            /**
	             * 关闭的执行函数
	             * @method onClose
	             * @type Function
	             * */
	            onClose: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            visible: false,
	            align: 'top',
	            classPrefix: 'popup',
	            componentTag: 'div',
	            classMapping: {
	                'top': 'top',
	                'bottom': 'bottom'
	            }
	        },
	        enumerable: true
	    }]);

	    function Popup(props, context) {
	        _classCallCheck(this, Popup);

	        _Component.call(this, props, context);
	    }

	    Popup.prototype.renderShadow = function renderShadow() {
	        var _props = this.props;
	        var visible = _props.visible;
	        var onClose = _props.onClose;

	        if (visible) {
	            return _react2['default'].createElement('div', { className: _classnames2['default'](_utilsTool.setPhoenixPrefix("popup-shadow"), "animated"), onClick: onClose });
	        } else {
	            return '';
	        }
	    };

	    Popup.prototype.renderPopup = function renderPopup() {
	        var _props2 = this.props;
	        var visible = _props2.visible;
	        var children = _props2.children;
	        var className = _props2.className;

	        if (visible) {
	            return _react2['default'].createElement(
	                'div',
	                _extends({}, this.props, { className: _classnames2['default'](_utilsTool.setPhoenixPrefix('popup-main'), 'animated', className) }),
	                children
	            );
	        } else {
	            return '';
	        }
	    };

	    Popup.prototype.render = function render() {
	        var _props3 = this.props;
	        var Component = _props3.componentTag;
	        var className = _props3.className;

	        return _react2['default'].createElement(
	            Component,
	            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className) }),
	            _react2['default'].createElement(
	                _Animate2['default'],
	                null,
	                this.renderShadow()
	            ),
	            _react2['default'].createElement(
	                _Animate2['default'],
	                { className: _utilsTool.setPhoenixPrefix('popup-content'), transitionName: 'slide-' + this.props.align },
	                this.renderPopup()
	            )
	        );
	    };

	    return Popup;
	})(_utilsComponent2['default']);

	exports['default'] = Popup;
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	var _Icon = __webpack_require__(97);

	var _Icon2 = _interopRequireDefault(_Icon);

	/**
	 * <h5>操作类组件，主要包括组件:</h5>
	 * <strong><a href='../classes/Accordion.html'>Accordion 手风琴</a></strong><br/>
	 * <strong><a href='../classes/Toast.html'>Toast 飘字</a></strong><br>
	 * <strong><a href='../classes/Popup.html'>Popup 弹层</a></strong><br>
	 * <strong><a href='../classes/Slider.html'>Slider 滑动输入条</a></strong><br>
	 * <strong><a href='../classes/Swipe.html'>Swipe 左滑动</a></strong><br>
	 * <strong><a href='../classes/Menu.html'>Menu 菜单</a></strong><br>
	 * <strong><a href='../classes/LoadingList.html'>LoadingList 加载更多</a></strong><br>
	 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
	 * @module 操作类组件
	 * @main 操作类组件
	 * @static
	 */
	/**
	 * 手风琴组件<br/>
	 * - 通过visible设置初始展开或收起的状态, 可选true/false。
	 * - 可通过onAccordionChange设置展开收起时额外的回调函数。
	 * - 可通过hideIcon设置隐藏向下的箭头。
	 *
	 * 主要属性和接口：
	 * - visible:初始展开或收起的状态, 默认false收起。
	 * = hideIcon:设置隐藏向下的箭头, 默认false可见。<br/>
	 * 如：
	 * ```code
	 *     <Accordion visible={true} hideIcon>
	 *         <Accordion.Header>
	 *             标题一
	 *         </Accordion.Header>
	 *         <Accordion.Body>
	 *             ...
	 *         </Accordion.Body>
	 *     </Accordion>
	 * ```
	 * - onAccordionChange:点击收起展开的额外的回调执行函数。<br/>
	 * 如：
	 * ```code
	 *     <Accordion onAccordionChange={(visible)=>{console.log(visible);}}>
	 *         <Accordion.Header>
	 *             标题一
	 *         </Accordion.Header>
	 *         <Accordion.Body>
	 *             ...
	 *         </Accordion.Body>
	 *     </Accordion>
	 * ```
	 *
	 * @class Accordion
	 * @module 操作类组件
	 * @extends Component
	 * @constructor
	 * @since 0.4.0
	 * @demo accordion|accordion.js {展示}
	 * @show true
	 * */

	var Accordion = (function (_Component) {
	    _inherits(Accordion, _Component);

	    _createClass(Accordion, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'accordion'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * */
	            componentTag: _react.PropTypes.string,
	            /**
	             * 是否可见标识
	             * @property visible
	             * @type Boolean
	             * @default false
	             * */
	            visible: _react.PropTypes.bool,
	            /**
	             * 点击收起展开的回调函数
	             * @method onAccordionChange
	             * @type Function
	             * */
	            onAccordionChange: _react.PropTypes.func,
	            /**
	             * 向下的箭头是否可见， 默认可见
	             * @property hideIcon
	             * @type Boolean
	             * @default false
	             * */
	            hideIcon: _react.PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            visible: false,
	            hideIcon: false,
	            classPrefix: 'accordion',
	            componentTag: 'div',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function Accordion(props, context) {
	        _classCallCheck(this, Accordion);

	        _Component.call(this, props, context);

	        this.state = {
	            visible: props.visible
	        };
	    }

	    Accordion.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (this.state.visible != nextProps.visible) this.setState({ visible: nextProps.visible });
	    };

	    Accordion.prototype.changeVisible = function changeVisible() {
	        var _this2 = this;

	        this.setState({
	            visible: !this.state.visible
	        }, function () {
	            if (_this2.props.onAccordionChange) _this2.props.onAccordionChange(_this2.state.visible);
	        });
	    };

	    Accordion.prototype.renderChildren = function renderChildren() {
	        var _this = this;
	        var newChildren = [];
	        var hideIcon = this.props.hideIcon;

	        _react2['default'].Children.forEach(this.props.children, function (child, index) {
	            newChildren.push(_react2['default'].cloneElement(child, {
	                key: index,
	                hideIcon: hideIcon,
	                visible: _this.state.visible,
	                changeVisible: _this.changeVisible.bind(_this)
	            }));
	        });

	        return newChildren;
	    };

	    Accordion.prototype.render = function render() {
	        var _props = this.props;
	        var Component = _props.componentTag;
	        var className = _props.className;

	        return _react2['default'].createElement(
	            Component,
	            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className) }),
	            this.renderChildren()
	        );
	    };

	    return Accordion;
	})(_utilsComponent2['default']);

	var AccordionHeader = (function (_Component2) {
	    _inherits(AccordionHeader, _Component2);

	    function AccordionHeader(props, context) {
	        _classCallCheck(this, AccordionHeader);

	        _Component2.call(this, props, context);
	    }

	    AccordionHeader.prototype.onAccordionHeaderChange = function onAccordionHeaderChange() {
	        this.props.changeVisible();
	    };

	    AccordionHeader.prototype.renderIcon = function renderIcon() {
	        var _props2 = this.props;
	        var visible = _props2.visible;
	        var hideIcon = _props2.hideIcon;

	        if (!hideIcon) {
	            return _react2['default'].createElement(_Icon2['default'], { phIcon: 'expand-more', className: visible ? 'active' : '' });
	        } else {
	            return '';
	        }
	    };

	    AccordionHeader.prototype.render = function render() {
	        var className = this.props.className;

	        return _react2['default'].createElement(
	            'div',
	            _extends({ className: _classnames2['default'](_utilsTool.setPhoenixPrefix('accordion-header'), className),
	                onClick: this.onAccordionHeaderChange.bind(this)
	            }, this.props),
	            this.props.children,
	            this.renderIcon()
	        );
	    };

	    return AccordionHeader;
	})(_utilsComponent2['default']);

	;

	var AccordionBody = (function (_Component3) {
	    _inherits(AccordionBody, _Component3);

	    function AccordionBody(props, context) {
	        _classCallCheck(this, AccordionBody);

	        _Component3.call(this, props, context);

	        this.height = 0;
	    }

	    AccordionBody.prototype.componentDidMount = function componentDidMount() {
	        var _this3 = this;

	        setTimeout(function () {
	            _this3.height = _this3.accordionBody.offsetHeight + 'px';
	            _this3.setHeight();
	        }, 0);
	    };

	    AccordionBody.prototype.componentDidUpdate = function componentDidUpdate() {
	        this.setHeight();
	    };

	    AccordionBody.prototype.setHeight = function setHeight() {
	        this.accordionBodyParent.style.height = this.props.visible ? this.height : 0;
	    };

	    AccordionBody.prototype.render = function render() {
	        var _this4 = this;

	        var _props3 = this.props;
	        var visible = _props3.visible;
	        var children = _props3.children;
	        var className = _props3.className;

	        return _react2['default'].createElement(
	            'div',
	            _extends({}, this.props, { className: _classnames2['default'](_utilsTool.setPhoenixPrefix('accordion-body'), 'animated', className), ref: function (accordionBodyParent) {
	                    _this4.accordionBodyParent = accordionBodyParent;
	                } }),
	            _react2['default'].createElement(
	                'div',
	                { ref: function (accordionBody) {
	                        _this4.accordionBody = accordionBody;
	                    } },
	                children
	            )
	        );
	    };

	    return AccordionBody;
	})(_utilsComponent2['default']);

	Accordion.Header = AccordionHeader;
	Accordion.Body = AccordionBody;

	exports['default'] = Accordion;
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * Icon<br/>
	 * - 可通过phIcon来配置不同类型的符号, 可选[查看所有icon类型](http://future-team.github.io/gfs-icons/index.html)。
	 * - 支持自定义className，事件等操作。
	 *
	 * 主要属性和接口：
	 * - phIcon:配置不同类型的符号 <br/>
	 * 如：`<Icon phIcon="search" />`
	 *
	 * @class Icon
	 * @module 标签组件
	 * @extends Component
	 * @constructor
	 * @since 1.3.0
	 * @demo icon|icon.js {展示}
	 * @show true
	 * */

	var Icon = (function (_Component) {
	    _inherits(Icon, _Component);

	    _createClass(Icon, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'icon'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * @default 'span'
	             * */
	            componentTag: _react.PropTypes.string,
	            /**
	             * icon符号类型
	             * @property phIcon
	             * @type string
	             * @default ''
	             **/
	            phIcon: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            phIcon: '',
	            classPrefix: 'icon',
	            componentTag: 'span',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function Icon(props, context) {
	        _classCallCheck(this, Icon);

	        _Component.call(this, props, context);
	    }

	    Icon.prototype.render = function render() {
	        var _props = this.props;
	        var Component = _props.componentTag;
	        var phIcon = _props.phIcon;
	        var classPrefix = _props.classPrefix;

	        return _react2['default'].createElement(
	            Component,
	            _extends({}, this.props, { className: _classnames2['default']('gfs-icon', this.props.className, phIcon ? classPrefix + '-' + phIcon : '') }),
	            this.props.children
	        );
	    };

	    return Icon;
	})(_utilsComponent2['default']);

	exports['default'] = Icon;
	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	var _utilsTool2 = _interopRequireDefault(_utilsTool);

	/**
	 * 气泡组件<br/>
	 * - 配合倾听者组件Whisper使用, 作为Whisper的target。
	 *
	 * 示例:
	 * ```code
	 *     const popover = ( // 可以通过style自定义位置
	 *         <Popover>
	 *             <ul className="ph-popover-list">
	 *                 <li className="ph-popover-item">未上线单店</li>
	 *                 <li className="ph-popover-item">未上线连锁店</li>
	 *             </ul>
	 *         </Popover>
	 *     );
	 * ```
	 * ```code
	 *     <Whisper placement="top" onTargetChange={()=>{console.log('气泡出现消失时额外的执行函数');}} target={popover} distance={10} >Top</Whisper>
	 * ```
	 *
	 * @class Popover
	 * @module 提示组件
	 * @extends Component
	 * @constructor
	 * @since 1.0.0
	 * @demo popover|popover.js {展示}
	 * @show true
	 * */

	var Popover = (function (_Component) {
	    _inherits(Popover, _Component);

	    _createClass(Popover, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'popover'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * */
	            componentTag: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'popover',
	            componentTag: 'div',
	            classMapping: {
	                'top': 'top center-x',
	                'bottom': 'bottom center-x',
	                'left': 'left center-y',
	                'right': 'right center-y',
	                'top left': 'top left-x',
	                'top right': 'top right-x',
	                'bottom left': 'bottom left-x',
	                'bottom right': 'bottom right-x'
	            }
	        },
	        enumerable: true
	    }]);

	    function Popover(props, context) {
	        _classCallCheck(this, Popover);

	        _Component.call(this, props, context);

	        this.handleDocumentClick = this.handleDocumentClick.bind(this);

	        document.addEventListener('click', this.handleDocumentClick, false);
	    }

	    Popover.prototype.handleDocumentClick = function handleDocumentClick(event) {
	        var el = event.target;

	        if (!_utilsTool2['default'].closest(el, '.ph-popover') && !(this.props.whisper == event.target)) {
	            this.props.onClose();
	        }

	        return false;
	    };

	    Popover.prototype.componentWillUnmount = function componentWillUnmount() {
	        document.removeEventListener('click', this.handleDocumentClick, false);
	    };

	    Popover.prototype.render = function render() {
	        var _props = this.props;
	        var Component = _props.componentTag;
	        var className = _props.className;
	        var styles = _props.styles;
	        var style = _props.style;
	        var children = _props.children;

	        return _react2['default'].createElement(
	            Component,
	            _extends({}, this.props, {
	                className: _classnames2['default'](this.getProperty(true), className),
	                style: Object.assign(styles, style)
	            }),
	            _react2['default'].createElement('div', { className: _utilsTool2['default'].setPhoenixPrefix('popover-arrow') }),
	            _react2['default'].createElement(
	                'div',
	                { className: _utilsTool2['default'].setPhoenixPrefix('popover-content') },
	                children
	            )
	        );
	    };

	    return Popover;
	})(_utilsComponent2['default']);

	exports['default'] = Popover;
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _reactLibReactDOM = __webpack_require__(94);

	var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * <h5>提示模块，主要包括一下两个组件:</h5>
	 * <strong><a href='../classes/Whisper.html'>Whisper</a></strong><br/>
	 * <strong><a href='../classes/Popover.html'>Popover</a></strong><br>
	 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
	 * @module 提示组件
	 * @main 提示组件
	 * @static
	 *
	 */

	/**
	 * 倾听者组件<br/>
	 * - 配合提示组件使用, 通过target设置显示的目标。
	 * - 可通过placement设置目标物的显示位置, 可选top、bottom、left、right、top left、top right、bottom left、bottom right。
	 * - 可通过distance设置目标物到点击对象(倾听者)的位置。
	 * - 可通过onTargetChange定义目标物显隐时额外的回调函数。
	 *
	 * 主要属性和接口：
	 * - target:目标物。
	 * - placement:目标物的显示位置, 默认bottom。
	 * - distance:目标物到点击对象(倾听者)的位置, 默认15。
	 * - onTargetChange:目标物显隐时额外的回调函数。
	 *
	 * 示例:
	 * ```code
	 *     const popover = ( // 可以通过style自定义位置
	 *         <Popover>
	 *             <ul className="ph-popover-list">
	 *                 <li className="ph-popover-item">未上线单店</li>
	 *                 <li className="ph-popover-item">未上线连锁店</li>
	 *             </ul>
	 *         </Popover>
	 *     );
	 * ```
	 * ```code
	 *     <Whisper placement="top" onTargetChange={()=>{console.log('气泡出现消失时额外的执行函数');}} target={popover} distance={10} >Top</Whisper>
	 * ```
	 *
	 * @class Whisper
	 * @module 提示组件
	 * @extends Component
	 * @constructor
	 * @since 1.0.0
	 * @demo popover|popover.js {展示}
	 * @show true
	 * */

	var Whisper = (function (_Component) {
	    _inherits(Whisper, _Component);

	    _createClass(Whisper, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'whisper'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * */
	            componentTag: _react.PropTypes.string,
	            /**
	             * 显示的目标气泡
	             * @property target
	             * @type Object
	             * */
	            target: _react.PropTypes.object,
	            /**
	             * 气泡的位置,默认bottom
	             * @property placement
	             * @type String
	             * */
	            placement: _react.PropTypes.string,
	            /**
	             * 气泡距离点击物的位置,默认15
	             * @property distance
	             * @type Number
	             * */
	            distance: _react.PropTypes.number,
	            /**
	             * 气泡显隐时可执行的额外函数,自定义
	             * @method onTargetChange
	             * @type Function
	             * */
	            onTargetChange: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            distance: 15,
	            placement: 'bottom',
	            classPrefix: 'whisper',
	            componentTag: 'div',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function Whisper(props, context) {
	        _classCallCheck(this, Whisper);

	        _Component.call(this, props, context);

	        this.visible = false;
	        this._layer = document.createElement('div');
	    }

	    Whisper.prototype.componentDidMount = function componentDidMount() {
	        var _this = this;

	        setTimeout(function () {
	            _this.getWhisperPosition();
	        }, 0);
	    };

	    Whisper.prototype.getWhisperPosition = function getWhisperPosition() {
	        this.position = {};
	        this.size = {};

	        this.position.x = parseInt(this.whisper.offsetLeft);
	        this.position.y = parseInt(this.whisper.offsetTop);

	        this.size.width = parseInt(this.whisper.offsetWidth);
	        this.size.height = parseInt(this.whisper.offsetHeight);

	        this.calcTooltipPosition();
	    };

	    Whisper.prototype.calcTooltipPosition = function calcTooltipPosition() {
	        var ARROW_SIZE = this.props.distance;
	        var winWidth = parseInt(document.body.clientWidth),
	            winHeight = parseInt(document.body.clientHeight);

	        document.body.style.position = 'relative';
	        this.style = {};

	        switch (this.props.placement) {
	            case 'top':
	                this.style.bottom = winHeight - this.position.y + ARROW_SIZE;
	                this.style.left = this.position.x + this.size.width / 2;
	                break;
	            case 'bottom':
	                this.style.top = this.position.y + this.size.height + ARROW_SIZE;
	                this.style.left = this.position.x + this.size.width / 2;
	                break;
	            case 'left':
	                this.style.right = winWidth - this.position.x + ARROW_SIZE;
	                this.style.top = this.position.y + this.size.height / 2;
	                break;
	            case 'right':
	                this.style.left = this.position.x + this.size.width + ARROW_SIZE;
	                this.style.top = this.position.y + this.size.height / 2;
	                break;
	            case 'top left':
	                this.style.bottom = winHeight - this.position.y + ARROW_SIZE;
	                this.style.left = this.position.x;
	                break;
	            case 'top right':
	                this.style.bottom = winHeight - this.position.y + ARROW_SIZE;
	                this.style.right = winWidth - this.position.x - this.size.width;
	                break;
	            case 'bottom left':
	                this.style.top = this.position.y + this.size.height + ARROW_SIZE;
	                this.style.left = this.position.x;
	                break;
	            case 'bottom right':
	                this.style.top = this.position.y + this.size.height + ARROW_SIZE;
	                this.style.right = winWidth - this.position.x - this.size.width;
	                break;
	            default:
	                this.style.top = 0;
	                this.style.left = 0;
	        }
	    };

	    Whisper.prototype.onToggle = function onToggle() {
	        this.visible = !this.visible;

	        if (this.visible) {
	            this.renderTarget();
	        } else {
	            this.removeTarget();
	        }

	        if (this.props.onTargetChange) this.props.onTargetChange();
	    };

	    Whisper.prototype.onClose = function onClose() {
	        this.visible = false;
	        this.removeTarget();
	    };

	    Whisper.prototype.getTarget = function getTarget() {
	        return _react.cloneElement(this.props.target, {
	            styles: this.style,
	            placement: this.props.placement,
	            onClose: this.onClose.bind(this),
	            whisper: this.whisper,
	            setVisible: this.setVisible
	        });
	    };

	    Whisper.prototype.renderTarget = function renderTarget() {
	        var newTarget = this.getTarget();

	        _reactLibReactDOM2['default'].unstable_renderSubtreeIntoContainer(this, newTarget, this._layer);
	        document.body.appendChild(this._layer);
	    };

	    Whisper.prototype.removeTarget = function removeTarget() {
	        _reactLibReactDOM2['default'].unmountComponentAtNode(this._layer);
	        document.body.removeChild(this._layer);
	    };

	    Whisper.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.visible) this.onClose();
	    };

	    Whisper.prototype.render = function render() {
	        var _this2 = this;

	        var _props = this.props;
	        var className = _props.className;
	        var children = _props.children;

	        return _react2['default'].createElement(
	            'div',
	            _extends({}, this.props, {
	                className: _classnames2['default'](this.getProperty(true), className),
	                onClick: this.onToggle.bind(this),
	                ref: function (whisper) {
	                    _this2.whisper = whisper;
	                }
	            }),
	            children
	        );
	    };

	    return Whisper;
	})(_utilsComponent2['default']);

	exports['default'] = Whisper;
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	var _Drag = __webpack_require__(85);

	var _Drag2 = _interopRequireDefault(_Drag);

	/**
	 * 滑动输入条组件<br/>
	 * - 滑动进度条确定当前进度的百分比。
	 * - 可通过设置process确定初始进度百分比, 范围从0-100。
	 * - 可通过placement设置当前进度提示框的位置, 可选top/bottoom。
	 * - 可通过tipStay设置初始和松开按钮时提示是否消失，默认false不显示。
	 * - 可通过range制定范围，默认0-100，必需是长度为2的数组，第一个数字表示初始，第二个数字表示终点。
	 * - 可通过showRange判断是否在进度条前后显示范围，默认不显示。
	 * - 可通过duration设置固定移动的距离，默认1。
	 * - 可通过onSliderChange设置拖拽进度条松开时的回调函数。
	 * - 可通过disabled设置进度条只读。
	 * - 使用Slider前确保父级是有宽度的元素；使用flex需要加一层宽度100%的外壳。
	 *
	 * 主要属性和接口：
	 * - process:初始进度百分比, 默认0 <br/>
	 * 如: `<Slider progress={10}/>`
	 * - placement:进度提示框的位置, 默认top <br/>
	 * 如: `<Slider placement="bottom" />`
	 * - tipStay:初始和松开按钮时提示是否消失，默认false <br/>
	 * 如: `<Slider tipStay />`
	 * - range:范围，默认[0,100]。 <br/>
	 * 如: `<Slider range={[20,50]} />`
	 * - showRange:是否在进度条前后显示范围，默认不显示。 <br/>
	 * 如: `<Slider showRange />`
	 * - duration:固定移动的距离，默认1。 <br/>
	 * 如: `<Slider duration={20} />`
	 * - onSliderChange:拖拽进度条松开时的回调函数 <br/>
	 * 如: `<Slider onSliderChange={(progress)=>{console.log(progress);} />`
	 * - disabled:进度条只读, 不可操作 <br/>
	 * 如: `<Slider disabled/>`
	 *
	 * @class Slider
	 * @module 操作类组件
	 * @extends Component
	 * @constructor
	 * @since 1.0.0
	 * @demo slider|slider.js {展示}
	 * @show true
	 * */

	var Slider = (function (_Component) {
	    _inherits(Slider, _Component);

	    _createClass(Slider, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'slider'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * */
	            componentTag: _react.PropTypes.string,
	            /**
	             * 初始进程,默认0
	             * @property progress
	             * @type String
	             * */
	            progress: _react.PropTypes.number,
	            /**
	             * 进程提示的位置,默认top
	             * @property placement
	             * @type String
	             * @default 'top'
	             * */
	            placement: _react.PropTypes.string,
	            /**
	            * 范围，默认0-100，可传固定范围的数组如：[25,50]
	            * @property range
	            * @type Array
	            * @default [0,100]
	            * */
	            range: _react.PropTypes.array,
	            /**
	             * 是否在进度条前后显示范围
	             * @property showRange
	             * @type Boolean
	             * @default false
	             * */
	            showRange: _react.PropTypes.bool,
	            /**
	            * 每次移动的固定距离，默认1
	            * @property duration
	            * @type Number
	            * @default 1
	            * */
	            duration: _react.PropTypes.number,
	            /**
	             * 初始及松开按钮时是否显示进度
	             * @property tipStay
	             * @type Boolean
	             * @default false
	             * */
	            tipStay: _react.PropTypes.bool,
	            /**
	             * 改变进程时的回调函数
	             * @method onSliderChange
	             * @type Function
	             * */
	            onSliderChange: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            placement: 'top',
	            progress: 0,
	            range: [0, 100],
	            showRange: false,
	            duration: 1,
	            classPrefix: 'slider',
	            componentTag: 'div',
	            classMapping: {
	                'disabled': 'disabled',
	                'top': 'tip-top',
	                'bottom': 'tip-bottom'
	            }
	        },
	        enumerable: true
	    }]);

	    function Slider(props, context) {
	        _classCallCheck(this, Slider);

	        _Component.call(this, props, context);

	        this.range = this.validateRange();
	        this.rangeDiff = this.range[1] - this.range[0];

	        this.duration = this.validateDuration();
	        this.eachDur = (this.range[1] - this.range[0]) / this.duration;

	        this.state = {
	            realProgress: props.progress || this.range[0],
	            tipVisible: props.tipStay || false
	        };
	    }

	    Slider.prototype.validateRange = function validateRange() {
	        var range = this.props.range;var defaultRange = [0, 100];
	        if (!range instanceof Array) return defaultRange;
	        if (range.length != 2) {
	            console.error('Invalid prop `range` of length not equal to 2.');
	            return defaultRange;
	        }
	        if (range[0] >= range[1]) {
	            console.error('Invalid prop `range[0]` must be less than or equal to `range[1]`.');
	            return defaultRange;
	        }
	        return range;
	    };

	    Slider.prototype.validateDuration = function validateDuration() {
	        var duration = this.props.duration;var defaultDuration = 1;
	        if (duration <= 0) {
	            console.error('Invalid prop `duration` have to be Positive.');
	            return defaultDuration;
	        }
	        if ((this.range[1] - this.range[0]) % duration != 0) {
	            // 不能整除的情况
	            console.error('Prop `duration` can not be divided by `range`.');
	            return defaultDuration;
	        }
	        return duration;
	    };

	    Slider.prototype.componentDidMount = function componentDidMount() {
	        this.sliderLength = parseInt(this.sliderLine.offsetWidth);
	        this.eachSection = this.sliderLength / this.rangeDiff * this.duration;
	        // if(this.eachSection<1) this.eachSection = 1; // 最小1px

	        this.newProgressWidth = this.getNewProgressWidth(this.state.realProgress);
	        this.setSliderPosition(this.newProgressWidth + 'px');
	    };

	    Slider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (this.state.realProgress != nextProps.progress) {
	            this.setState({
	                realProgress: nextProps.progress
	            });

	            this.newProgressWidth = this.getNewProgressWidth(nextProps.progress);
	            this.setSliderPosition(this.newProgressWidth + 'px');
	        }
	    };

	    Slider.prototype.getNewProgressWidth = function getNewProgressWidth(realProgress) {
	        // 保留2位小数
	        return this.sliderLength * (Math.round((realProgress - this.range[0]) / this.rangeDiff * 100) / 100);
	    };

	    Slider.prototype.setSliderPosition = function setSliderPosition(distance) {
	        this.sliderProgress.style.width = distance;
	        this.sliderBtn.style.left = distance;
	    };

	    Slider.prototype.onDrag = function onDrag(event, position) {
	        var newProgress = undefined,
	            nowSec = undefined;

	        this.preX = position.start.x;
	        this.X = position.move.x;
	        this.distance = this.X - this.preX;

	        this.prevProgressWidth = this.newProgressWidth + this.distance;

	        if (this.prevProgressWidth <= 0) this.prevProgressWidth = 0;
	        if (this.prevProgressWidth >= this.sliderLength) this.prevProgressWidth = this.sliderLength;

	        nowSec = Math.round(this.prevProgressWidth / this.eachSection, 0);
	        this.prevProgressWidth = this.eachSection * nowSec;

	        newProgress = this.prevProgressWidth / this.sliderLength * this.rangeDiff + this.range[0];

	        this.setSliderPosition(this.prevProgressWidth + 'px');

	        this.setState({
	            tipVisible: true,
	            realProgress: parseInt(newProgress)
	        });
	    };

	    Slider.prototype.onDrop = function onDrop(event, position) {
	        if (!this.props.tipStay) {
	            this.setState({
	                tipVisible: false
	            });
	        }

	        this.newProgressWidth = this.prevProgressWidth;

	        if (this.props.onSliderChange) this.props.onSliderChange(this.state.realProgress);
	    };

	    Slider.prototype.renderSliderRange = function renderSliderRange() {
	        if (this.props.showRange) {
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                    'strong',
	                    { className: _utilsTool.setPhoenixPrefix("slider-range-start") },
	                    this.range[0]
	                ),
	                _react2['default'].createElement(
	                    'strong',
	                    { className: _utilsTool.setPhoenixPrefix("slider-range-end") },
	                    this.range[1]
	                )
	            );
	        } else {
	            return '';
	        }
	    };

	    Slider.prototype.render = function render() {
	        var _this = this;

	        var _props = this.props;
	        var Component = _props.componentTag;
	        var className = _props.className;
	        var showRange = _props.showRange;

	        return _react2['default'].createElement(
	            Component,
	            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className, showRange ? _utilsTool.setPhoenixPrefix('keep-range') : '') }),
	            this.renderSliderRange(),
	            _react2['default'].createElement(
	                'div',
	                { className: _utilsTool.setPhoenixPrefix("slider-line"), ref: function (sliderLine) {
	                        _this.sliderLine = sliderLine;
	                    } },
	                _react2['default'].createElement('div', { className: _utilsTool.setPhoenixPrefix("slider-progress"), ref: function (sliderProgress) {
	                        _this.sliderProgress = sliderProgress;
	                    } }),
	                _react2['default'].createElement(
	                    'div',
	                    { className: _utilsTool.setPhoenixPrefix("slider-content"), ref: function (sliderBtn) {
	                            _this.sliderBtn = sliderBtn;
	                        } },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: _classnames2['default'](_utilsTool.setPhoenixPrefix("slider-tip"), this.state.tipVisible ? 'show' : 'hide') },
	                        this.state.realProgress
	                    ),
	                    _react2['default'].createElement(_Drag2['default'], { className: _utilsTool.setPhoenixPrefix("slider-btn"), onDrag: this.onDrag.bind(this), onDrop: this.onDrop.bind(this) })
	                )
	            )
	        );
	    };

	    return Slider;
	})(_utilsComponent2['default']);

	exports['default'] = Slider;
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	var _MenuHeader = __webpack_require__(102);

	var _MenuHeader2 = _interopRequireDefault(_MenuHeader);

	var _MenuBody = __webpack_require__(103);

	var _MenuBody2 = _interopRequireDefault(_MenuBody);

	var _MenuNav = __webpack_require__(104);

	var _MenuNav2 = _interopRequireDefault(_MenuNav);

	var _MenuList = __webpack_require__(105);

	var _MenuList2 = _interopRequireDefault(_MenuList);

	var _MenuItem = __webpack_require__(106);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	/**
	 * <h5>菜单组件，主要包括组件:</h5>
	 * <strong><a href='../classes/Menu.html'>Menu 菜单</a></strong><br/>
	 * <strong><a href='../classes/MenuHeader.html'>MenuHeader 菜单头部</a></strong><br>
	 * <strong><a href='../classes/MenuBody.html'>MenuBody 菜单主体</a></strong><br>
	 * <strong><a href='../classes/MenuNav.html'>MenuNav 菜单导航</a></strong><br>
	 * <strong><a href='../classes/MenuList.html'>MenuList 菜单导航列表</a></strong><br>
	 * <strong><a href='../classes/MenuItem.html'>MenuItem 菜单导航列表项</a></strong><br>
	 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
	 * @module 菜单组件
	 * @main 菜单组件
	 * @static
	 */
	/**
	 * 菜单组件<br/>
	 - 可通过visible设置菜单初始是否可见，默认不可见。
	 - 不设置scrollCeiling时默认菜单不吸顶，设置scrollCeiling为具体数值时表示从当前距离开始吸顶，设置0表示至始至终吸顶。
	 - 可通过onMenuChange函数设置菜单打开收起的回调函数。
	 *
	 * 主要属性和接口：
	 * - visible:初始展开或收起的状态, 默认false收起。
	 * - scrollCeiling:设置吸顶的距离, 默认不吸顶, 设置0表示始终吸顶。
	 * - onMenuChange:菜单打开关闭时的回调函数。 <br/>
	 * 如：
	 * ```code
	 *     <Menu scrollCeiling={100} visible={true} onMenuChange={(visible)=>{console.log(visible);}}>
	 *         <Menu.Header>
	 *             标题一
	 *         </Menu.Header>
	 *         <Menu.Body>
	 *             ...
	 *         </Menu.Body>
	 *     </Menu>
	 * ```
	 *
	 * @class Menu
	 * @module 菜单组件
	 * @extends Component
	 * @constructor
	 * @since 1.3.0
	 * @demo menu|menu.js {展示}
	 * @show true
	 * */

	var Menu = (function (_Component) {
	    _inherits(Menu, _Component);

	    _createClass(Menu, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'menu'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * */
	            componentTag: _react.PropTypes.string,
	            /**
	             * 是否可见标识
	             * @property visible
	             * @type Boolean
	             * @default false
	             * */
	            visible: _react.PropTypes.bool,
	            /**
	             * 点击收起展开的回调函数
	             * @method onMenuChange
	             * @type Function
	             * */
	            onMenuChange: _react.PropTypes.func,
	            /**
	             * 是否滚动吸顶, 默认不吸顶(false); 设置确定的数字从当前距离开始吸顶 
	             * @property scrollCeiling
	             * @type Number
	             * @default 不设置
	             * */
	            scrollCeiling: _react.PropTypes.number
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            visible: false,
	            classPrefix: 'menu',
	            componentTag: 'div',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function Menu(props, context) {
	        _classCallCheck(this, Menu);

	        _Component.call(this, props, context);

	        this.handleDocumentClick = this.handleDocumentClick.bind(this);
	        this.handleWindowScroll = this.handleWindowScroll.bind(this);

	        this.state = {
	            visible: props.visible,
	            ceiling: !(props.scrollCeiling === undefined || props.scrollCeiling > 0),
	            headerHeight: 0
	        };

	        document.addEventListener('click', this.handleDocumentClick, false);

	        // 是否滚动吸顶
	        if (props.scrollCeiling === undefined || props.scrollCeiling === 0) return;

	        window.addEventListener('scroll', this.handleWindowScroll, false);
	    }

	    Menu.prototype.handleDocumentClick = function handleDocumentClick(event) {
	        var _this2 = this;

	        if (!this.state.visible) return;
	        var el = event.target;

	        if (!_utilsTool.closest(el, '.ph-menu')) {
	            this.setState({
	                visible: false
	            }, function () {
	                if (_this2.props.onMenuChange) _this2.props.onMenuChange(_this2.state.visible);
	            });
	        }

	        return false;
	    };

	    Menu.prototype.handleWindowScroll = function handleWindowScroll() {
	        if (document.body.scrollTop >= this.props.scrollCeiling) {
	            if (!this.state.ceiling) this.setState({ ceiling: true });
	        } else {
	            if (this.state.ceiling) this.setState({ ceiling: false });
	        }
	    };

	    Menu.prototype.componentDidMount = function componentDidMount() {
	        var _this3 = this;

	        setTimeout(function () {
	            _this3.menuPlaceholder.style.height = _this3.menuCeiling.offsetHeight + 'px';
	            _this3.setState({ headerHeight: _this3.menuCeiling.offsetHeight });
	        }, 0);
	    };

	    // componentWillReceiveProps(nextProps){
	    //     if(this.state.visible != nextProps.visible){
	    //         this.setState({
	    //             visible: nextProps.visible
	    //         }, ()=>{
	    //         if(this.props.onMenuChange) this.props.onMenuChange(nextProps.visible);
	    //     });
	    //     }
	    // }

	    Menu.prototype.changeVisible = function changeVisible() {
	        var _this4 = this;

	        this.setState({
	            visible: !this.state.visible
	        }, function () {
	            if (_this4.props.onMenuChange) _this4.props.onMenuChange(_this4.state.visible);
	        });
	    };

	    Menu.prototype.renderChildren = function renderChildren() {
	        var _this = this;
	        var newChildren = [];

	        _react2['default'].Children.forEach(this.props.children, function (child, index) {
	            newChildren.push(_react2['default'].cloneElement(child, {
	                key: index,
	                visible: _this.state.visible,
	                changeVisible: _this.changeVisible.bind(_this),
	                headerHeight: _this.state.headerHeight
	            }));
	        });

	        return newChildren;
	    };

	    Menu.prototype.componentWillUnmount = function componentWillUnmount() {
	        document.removeEventListener('click', this.handleDocumentClick, false);
	        window.removeEventListener('scroll', this.handleWindowScroll, false);
	    };

	    Menu.prototype.render = function render() {
	        var _this5 = this;

	        var _props = this.props;
	        var Component = _props.componentTag;
	        var className = _props.className;

	        return _react2['default'].createElement(
	            Component,
	            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), _utilsTool.setPhoenixPrefix('menu-placeholder'), className), ref: function (menuPlaceholder) {
	                    _this5.menuPlaceholder = menuPlaceholder;
	                } }),
	            _react2['default'].createElement(
	                'div',
	                { className: this.state.ceiling ? _utilsTool.setPhoenixPrefix('menu-ceiling') : '', ref: function (menuCeiling) {
	                        _this5.menuCeiling = menuCeiling;
	                    } },
	                this.renderChildren()
	            )
	        );
	    };

	    return Menu;
	})(_utilsComponent2['default']);

	Menu.Header = _MenuHeader2['default'];
	Menu.Body = _MenuBody2['default'];
	Menu.Nav = _MenuNav2['default'];
	Menu.List = _MenuList2['default'];
	Menu.Item = _MenuItem2['default'];

	exports['default'] = Menu;
	module.exports = exports['default'];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	var _Icon = __webpack_require__(97);

	var _Icon2 = _interopRequireDefault(_Icon);

	/**
	 * 菜单头部组件<br/>
	 * - 通过align设置菜单按钮的位置, 可选[left, right]。
	 *
	 * 主要属性和接口：
	 * - align:设置菜单按钮的位置,默认left。 <br/>
	 * 如：
	 * ```code
	 *     <Menu>
	 *         <Menu.Header align="right">
	 *             标题一
	 *         </Menu.Header>
	 *         <Menu.Body>
	 *             ...
	 *         </Menu.Body>
	 *     </Menu>
	 * ```
	 *
	 * @class MenuHeader
	 * @module 菜单组件
	 * @extends Component
	 * @constructor
	 * @since 1.3.0
	 * @demo menu|menu.js {展示}
	 * @show true
	 * */

	var MenuHeader = (function (_Component) {
	    _inherits(MenuHeader, _Component);

	    function MenuHeader(props, context) {
	        _classCallCheck(this, MenuHeader);

	        _Component.call(this, props, context);
	    }

	    MenuHeader.prototype.onChange = function onChange() {
	        this.props.changeVisible();
	    };

	    MenuHeader.prototype.render = function render() {
	        var className = this.props.className;

	        return _react2['default'].createElement(
	            'div',
	            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className)
	            }),
	            _react2['default'].createElement(_Icon2['default'], { phIcon: 'menu', onClick: this.onChange.bind(this) }),
	            _react2['default'].createElement(
	                'div',
	                { className: _utilsTool.setPhoenixPrefix('menu-header-content') },
	                this.props.children
	            )
	        );
	    };

	    _createClass(MenuHeader, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'menu-header'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 菜单按钮位置, 可选[left,right], left
	             * @property align
	             * @type String
	             * @default 'left'
	             * */
	            align: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            align: 'left',
	            classPrefix: 'menu-header',
	            classMapping: {
	                'left': 'left',
	                'right': 'right'
	            }
	        },
	        enumerable: true
	    }]);

	    return MenuHeader;
	})(_utilsComponent2['default']);

	exports['default'] = MenuHeader;
	;
	module.exports = exports['default'];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	var _Animate = __webpack_require__(89);

	var _Animate2 = _interopRequireDefault(_Animate);

	var _Icon = __webpack_require__(97);

	var _Icon2 = _interopRequireDefault(_Icon);

	/**
	 * 菜单内容组件<br/>
	 * - 通过placement设置菜单出现的位置和类型, 可选 [top,left,right,left-full,right-full,full-screen]。
	 * - 可通过width设置侧边菜单的宽度, 当前placement为top和full-screen不生效。
	 * - 可通过closeButton来配置菜单主体右上角X按钮是否显示。
	 *
	 * 主要属性和接口：
	 * - placement:菜单出现的位置和类型, 默认top。
	 * - width:侧边菜单的宽度, 当前placement为top和full-screen不生效。
	 * - closeButton:菜单主体右上角X按钮是否显示, 默认不显示。<br/>
	 * 如：
	 * ```code
	 *     <Menu>
	 *         <Menu.Header>
	 *             标题一
	 *         </Menu.Header>
	 *         <Menu.Body width={60} placement="left" closeButton>
	 *             ...
	 *         </Menu.Body>
	 *     </Menu>
	 * ```
	 *
	 * @class MenuBody
	 * @module 菜单组件
	 * @extends Component
	 * @constructor
	 * @since 1.3.0
	 * @demo menu|menu.js {展示}
	 * @show true
	 * */

	var MenuBody = (function (_Component) {
	    _inherits(MenuBody, _Component);

	    _createClass(MenuBody, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'menu-body'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 菜单位置, 可选[top,left,right,left-full,right-full,full-screen], 默认top
	             * @property placement
	             * @type String
	             * @default 'top'
	             * */
	            placement: _react.PropTypes.string,
	            /**
	             * 自定义菜单宽度百分比（限左右）
	             * @property width
	             * @type Number
	             * @default 50
	             * */
	            width: _react.PropTypes.number,
	            // closeMode: PropTypes.string,
	            /**
	             * 右上角按钮是否可见, 默认不可见
	             * @property closeButton
	             * @type Boolean
	             * */
	            closeButton: _react.PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            width: 50,
	            classPrefix: 'menu-body',
	            placement: 'top',
	            classMapping: {
	                'top': 'top',
	                'left': 'left',
	                'right': 'right',
	                'left-full': 'left-full',
	                'right-full': 'right-full',
	                'full-screen': 'full-screen'
	            }
	        },
	        enumerable: true
	    }]);

	    function MenuBody(props, context) {
	        _classCallCheck(this, MenuBody);

	        _Component.call(this, props, context);
	    }

	    MenuBody.prototype.componentDidMount = function componentDidMount() {
	        this.setSize();
	    };

	    MenuBody.prototype.componentDidUpdate = function componentDidUpdate() {
	        this.setSize();
	    };

	    MenuBody.prototype.setSize = function setSize() {
	        var _props = this.props;
	        var visible = _props.visible;
	        var placement = _props.placement;
	        var width = _props.width;

	        // if(placement=="top") this.menuBodyParent.style.height = visible? this.menuBody.offsetHeight+'px' : 0;

	        if (this.props.visible && width) {
	            if (placement == "top") return;
	            if (placement == "full-screen") width = 100;
	            this.menuBodyParent.style.width = width + '%';
	        }
	    };

	    MenuBody.prototype.renderAnimation = function renderAnimation() {
	        var _this = this;

	        var _props2 = this.props;
	        var visible = _props2.visible;
	        var children = _props2.children;
	        var className = _props2.className;

	        if (visible) {
	            return _react2['default'].createElement(
	                'div',
	                _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className, 'animated'),
	                    ref: function (menuBodyParent) {
	                        _this.menuBodyParent = menuBodyParent;
	                    } }),
	                this.renderCloseButton(),
	                children
	            );
	        } else {
	            return '';
	        }
	    };

	    MenuBody.prototype.renderCloseButton = function renderCloseButton() {
	        var closeButton = this.props.closeButton;

	        if (closeButton) {
	            return _react2['default'].createElement(_Icon2['default'], { phIcon: 'close', className: _classnames2['default'](_utilsTool.setPhoenixPrefix('menu-close-button')), onClick: this.onChange.bind(this) });
	        } else {
	            return '';
	        }
	    };

	    MenuBody.prototype.onChange = function onChange() {
	        this.props.changeVisible();
	    };

	    MenuBody.prototype.render = function render() {
	        var placement = this.props.placement;

	        var animateName = 'slide-' + this.props.placement;

	        if (placement == "full-screen") animateName = "fade";

	        return _react2['default'].createElement(
	            _Animate2['default'],
	            { transitionName: animateName },
	            this.renderAnimation()
	        );
	    };

	    return MenuBody;
	})(_utilsComponent2['default']);

	exports['default'] = MenuBody;
	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	/**
	 * 菜单导航组件<br/>
	 * - 通过align设置菜单导航部分的位置, 可选[top,center,bottom]。
	 *
	 * 主要属性和接口：
	 * - align:设置菜单导航部分的位置,默认top。 <br/>
	 * 如：
	 * ```code
	 *     <Menu>
	 *         <Menu.Header>
	 *             标题一
	 *         </Menu.Header>
	 *         <Menu.Body width={60}>
	 *             <Menu.Nav align="center">
	 *                  ...
	 *              </Menu.Nav>
	 *         </Menu.Body>
	 *     </Menu>
	 * ```
	 *
	 * @class MenuNav
	 * @module 菜单组件
	 * @extends Component
	 * @constructor
	 * @since 1.4.0
	 * @demo menu|menu.js {展示}
	 * @show true
	 * */

	var MenuNav = (function (_Component) {
	    _inherits(MenuNav, _Component);

	    function MenuNav(props, context) {
	        _classCallCheck(this, MenuNav);

	        _Component.call(this, props, context);
	    }

	    MenuNav.prototype.render = function render() {
	        var _props = this.props;
	        var className = _props.className;
	        var children = _props.children;

	        return _react2['default'].createElement(
	            'nav',
	            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className)
	            }),
	            children
	        );
	    };

	    _createClass(MenuNav, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'menu-nav'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 导航的位置, 可选[top,center,bottom], 默认top
	             * @property align
	             * @type String
	             * @default 'top'
	             * */
	            align: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            align: 'top',
	            classPrefix: 'menu-nav',
	            classMapping: {
	                'top': 'top',
	                'center': 'center',
	                'bottom': 'bottom'
	            }
	        },
	        enumerable: true
	    }]);

	    return MenuNav;
	})(_utilsComponent2['default']);

	exports['default'] = MenuNav;
	;
	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	var _Icon = __webpack_require__(97);

	var _Icon2 = _interopRequireDefault(_Icon);

	/**
	 * 菜单导航列表组件<br/>
	 * - 通过activeName设置当前导航选中的菜单项， 必需。
	 * - 通过onMenulistChange函数设置点击菜单项时的回调，函数内必需手动更改activeName值，必需。
	 *
	 * 主要属性和接口：
	 * - activeName:设置当前导航选中的菜单项,默认null。 
	 * - onMenulistChange:点击菜单项时的回调。 <br/>
	 * 如：
	 * ```code
	 *     <Menu>
	 *         <Menu.Header>
	 *             标题一
	 *         </Menu.Header>
	 *         <Menu.Body>
	 *             <Menu.Nav>
	 *                  <Menu.List activeName={this.state.activeName} onMenulistChange={(name)=>{this.setState({activeName:name})}}>
	 *                      ...
	 *                  </Menu.List>
	 *              </Menu.Nav>
	 *         </Menu.Body>
	 *     </Menu>
	 * ```
	 *
	 * @class MenuList
	 * @module 菜单组件
	 * @extends Component
	 * @constructor
	 * @since 1.4.0
	 * @demo menu|menu.js {展示}
	 * @show true
	 * */

	var MenuList = (function (_Component) {
	    _inherits(MenuList, _Component);

	    _createClass(MenuList, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'menu-list'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 当前选中的项目name，对应item的name属性
	             * @property activeName
	             * @type String
	             * @default null
	             * */
	            activeName: _react.PropTypes.string,
	            /**
	             * 点击事件的回调函数
	             * @method onMenulistChange
	             * @type Function
	             * @default null
	             * */
	            onMenulistChange: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            activeName: null,
	            classPrefix: 'menu-list',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function MenuList(props, context) {
	        _classCallCheck(this, MenuList);

	        _Component.call(this, props, context);
	    }

	    MenuList.prototype.changeActive = function changeActive(name) {
	        if (this.props.onMenulistChange) this.props.onMenulistChange(name);
	    };

	    MenuList.prototype.renderChildren = function renderChildren() {
	        var _this = this;
	        var newChildren = [];

	        _react2['default'].Children.forEach(this.props.children, function (child, index) {
	            newChildren.push(_react2['default'].cloneElement(child, {
	                key: index,
	                activeName: _this.props.activeName,
	                changeActive: _this.changeActive.bind(_this)
	            }));
	        });

	        return newChildren;
	    };

	    MenuList.prototype.render = function render() {
	        var _props = this.props;
	        var className = _props.className;
	        var children = _props.children;

	        return _react2['default'].createElement(
	            'ul',
	            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className)
	            }),
	            this.renderChildren()
	        );
	    };

	    return MenuList;
	})(_utilsComponent2['default']);

	exports['default'] = MenuList;
	;
	module.exports = exports['default'];

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	var _Icon = __webpack_require__(97);

	var _Icon2 = _interopRequireDefault(_Icon);

	/**
	 * 菜单导航列表项组件<br/>
	 * - 可通过phIcon设置菜单项名称前符号的类型，具体可以参考[gfs-icons](https://future-team.github.io/gfs-icons/index.html)。 
	 * - 可通过href设置菜单项的跳转地址，可不设置，自定义回调函数onMenuitemChange。
	 * - 可通过name设置菜单项的唯一标识，对应MenuList的activeName。
	 * - 通过onMenuitemChange设置点击菜单项时的回调。
	 *
	 * 主要属性和接口：
	 * - phIcon:菜单项名称前符号的类型，不设置时默认没有符号。 
	 * - href:菜单项的跳转地址，默认null。
	 * - name:菜单项的唯一标识。
	 * - onMenuitemChange:点击菜单项时的回调。<br/>
	 * 如：
	 * ```code
	 *     <Menu>
	 *         <Menu.Header>
	 *             标题一
	 *         </Menu.Header>
	 *         <Menu.Body>
	 *             <Menu.Nav>
	 *                  <Menu.List activeName={this.state.activeName} onMenulistChange={(name)=>{this.setState({activeName:name})}}>
	 *                      <Menu.Item name="home" href="#index" phIcon="home" onMenuitemChange={(name)=>{console.log(name);}}>首页</Menu.Item>
	 *                  </Menu.List>
	 *              </Menu.Nav>
	 *         </Menu.Body>
	 *     </Menu>
	 * ```
	 *
	 * @class MenuItem
	 * @module 菜单组件
	 * @extends Component
	 * @constructor
	 * @since 1.4.0
	 * @demo menu|menu.js {展示}
	 * @show true
	 * */

	var MenuItem = (function (_Component) {
	    _inherits(MenuItem, _Component);

	    function MenuItem(props, context) {
	        _classCallCheck(this, MenuItem);

	        _Component.call(this, props, context);
	    }

	    MenuItem.prototype.isActive = function isActive() {
	        var _props = this.props;
	        var name = _props.name;
	        var activeName = _props.activeName;

	        return name === activeName ? 'active' : '';
	    };

	    MenuItem.prototype.onMenuitemChange = function onMenuitemChange() {
	        this.props.changeActive(this.props.name);
	        if (this.props.onMenuitemChange) this.props.onMenuitemChange(this.props.name);
	    };

	    MenuItem.prototype.renderIcon = function renderIcon() {
	        var phIcon = this.props.phIcon;

	        if (phIcon) {
	            return _react2['default'].createElement(_Icon2['default'], { phIcon: phIcon });
	        } else {
	            return '';
	        }
	    };

	    MenuItem.prototype.render = function render() {
	        var _props2 = this.props;
	        var className = _props2.className;
	        var href = _props2.href;
	        var children = _props2.children;

	        return _react2['default'].createElement(
	            'li',
	            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), this.isActive(), className)
	            }),
	            _react2['default'].createElement(
	                'a',
	                { href: href, onClick: this.onMenuitemChange.bind(this) },
	                this.renderIcon(),
	                children
	            )
	        );
	    };

	    _createClass(MenuItem, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'menu-item'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * icon符号类型
	             * @property phIcon
	             * @type string
	             * @default ''
	             **/
	            phIcon: _react.PropTypes.string,
	            /**
	             * 跳转地址
	             * @property href
	             * @type string
	             * @default ''
	             **/
	            href: _react.PropTypes.string,
	            /**
	            * 当前项目的唯一标志
	            * @property name
	            * @type String
	            * @default null
	            * */
	            name: _react.PropTypes.string,
	            /**
	             * 点击事件的回调函数
	             * @method onMenuitemChange
	             * @type Function
	             * @default null
	             * */
	            onMenuitemChange: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            name: null,
	            href: 'javascript:;',
	            classPrefix: 'menu-item',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    return MenuItem;
	})(_utilsComponent2['default']);

	exports['default'] = MenuItem;
	;
	module.exports = exports['default'];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	var _Drag = __webpack_require__(85);

	var _Drag2 = _interopRequireDefault(_Drag);

	var _Button = __webpack_require__(61);

	var _Button2 = _interopRequireDefault(_Button);

	var _Icon = __webpack_require__(97);

	var _Icon2 = _interopRequireDefault(_Icon);

	/**
	 * 加载更多组件<br/>
	 * - 通过phMode设置加载更多的模式，有点击按钮加载更多，以及滑到最底端自动加载，可选 [button,auto] 2种参数。
	 * - 通过loadingStatus设置当前状态，包括 0加载更多, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多。
	 * - 可通过loadTips设置按钮文字和状态提示语，默认["加载更多","加载中","加载成功","加载失败","没有更多"]，分别对应loadingStatus的状态。
	 * - 可通过buttonStyles设置按钮的样式，如果当前phMode为auto设置是看不到效果的，默认["primary","info","success","error","gray"]，分别对应loadingStatus的状态。
	 * - 可通过onLoading设置点击按钮加载或滑到底部自动加载的回调函数。
	 * - 可通过onLoadingEnd设置每次加载结束的回调函数。
	 *
	 * 主要属性和接口：
	 * - phMode:加载更多的模式，默认auto。
	 * - loadingStatus:当前状态:0加载更多, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多，默认1。
	 * - loadTips:按钮文字和状态提示语，默认["加载更多","加载中","加载成功","加载失败","没有更多"]。
	 * - buttonStyles:按钮的样式，默认["primary","info","success","error","gray"]。
	 * - onLoading:点击按钮加载或滑到底部自动加载的回调函数。
	 * - onLoadingEnd:每次加载结束的回调函数。
	 * 
	 * 示例：
	 * ```code
	 *  <LoadingList phMode="auto" loadingStatus={this.state.loadingStatus} 
	 *      loadTips={["点击加载更多","加载中...","加载成功！","加载失败！","没有更多"]} 
	 *      buttonStyles={["primary","gray","success","danger","gray"]} 
	 *      onLoading={::this.onLoading} onLoadingEnd={::this.onLoadingEnd}>
	 *          ...
	 *  </LoadingList>
	 * ```
	 * 
	 * @class LoadingList
	 * @module 操作类组件
	 * @extends Component
	 * @constructor
	 * @since 1.6.0
	 * @demo LoadingList|loading-list.js {展示}
	 * @show true
	 * */

	var LoadingList = (function (_Component) {
	    _inherits(LoadingList, _Component);

	    _createClass(LoadingList, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'loading-list'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 加载更多的模式，可选[button,auto], 默认auto
	             * @property phStyle
	             * @type String
	             * @default 'auto'
	             **/
	            phMode: _react.PropTypes.string,
	            /**
	             * 加载状态：0加载更多, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多
	             * @property loadingStatus
	             * @type Number
	             * @default 1
	             **/
	            loadingStatus: _react.PropTypes.number,
	            /**
	             * 加载5个状态的文字描述，默认["加载更多","加载中","加载成功","加载失败","没有更多"]
	             * @property loadTips
	             * @type Array
	             * @default ["加载更多","加载中","加载成功","加载失败","没有更多"]
	             **/
	            loadTips: _react.PropTypes.array,
	            /**
	             * 加载5个状态的style，默认["primary","info","success","error","gray"]
	             * @property buttonStyles
	             * @type Array
	             * @default ["primary","info","success","error","gray"]
	             **/
	            buttonStyles: _react.PropTypes.array,
	            /**
	             * 点击按钮加载或滑到底部自动加载的回调函数，用户在该函数内自定义请求
	             * @method onLoading
	             * @type Function
	             * @default null
	             **/
	            onLoading: _react.PropTypes.func,
	            /**
	             * 每次加载结束的回调函数
	             * @method onLoadingEnd
	             * @type Function
	             * @default null
	             **/
	            onLoadingEnd: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            phMode: 'auto',
	            loadingStatus: 1, // 0加载更多, 1加载中, 2数据加载成功, 3数据加载失败, 4没有更多
	            loadTips: ["加载更多", "加载中", "加载成功", "加载失败", "没有更多"],
	            buttonStyles: ["primary", "info", "success", "error", "gray"],
	            classPrefix: 'loading-list',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function LoadingList(props, context) {
	        _classCallCheck(this, LoadingList);

	        _Component.call(this, props, context);

	        this.count = 0;
	        this.handleWindowScroll = this.handleWindowScroll.bind(this);

	        if (props.phMode == "auto") window.addEventListener('scroll', this.handleWindowScroll, false);
	    }

	    LoadingList.prototype.handleWindowScroll = function handleWindowScroll() {
	        if (document.body.scrollTop >= this.loadingPage.offsetHeight + this.loadingPage.offsetTop - window.screen.height) {
	            if (this.props.loadingStatus == 0) this.onLoading();
	        }
	    };

	    LoadingList.prototype.renderButton = function renderButton() {
	        var _props = this.props;
	        var phMode = _props.phMode;
	        var loadTips = _props.loadTips;
	        var buttonStyles = _props.buttonStyles;
	        var loadingStatus = _props.loadingStatus;

	        if (phMode == "button") {
	            return _react2['default'].createElement(
	                _Button2['default'],
	                { phStyle: buttonStyles[loadingStatus], block: true, disabled: loadingStatus == 4,
	                    onClick: this.onLoading.bind(this) },
	                this.renderIcon(),
	                loadTips[loadingStatus]
	            );
	        } else {
	            return _react2['default'].createElement(
	                'div',
	                { className: _utilsTool.setPhoenixPrefix('loading-page-tip') },
	                this.renderIcon(),
	                loadTips[loadingStatus]
	            );
	        }
	    };

	    LoadingList.prototype.renderIcon = function renderIcon() {
	        if (this.props.loadingStatus == 1) {
	            return _react2['default'].createElement(_Icon2['default'], { phIcon: 'loading' });
	        } else {
	            return '';
	        }
	    };

	    LoadingList.prototype.onLoading = function onLoading() {
	        if (this.props.onLoading) this.props.onLoading();
	    };

	    LoadingList.prototype.onDrag = function onDrag(event, position) {
	        var _props2 = this.props;
	        var phMode = _props2.phMode;
	        var loadingStatus = _props2.loadingStatus;

	        if (phMode == "button") return;

	        var startY = position.start.y,
	            moveY = position.move.y;
	        var distanceY = moveY - startY;
	        if (distanceY > 0) return; //只可以上拉

	        if (Math.abs(distanceY) > 30) {
	            // 拖拽过程中只执行一次
	            if (this.count == 0) {
	                // 初始状态和错误状态可以上拉重新请求
	                if (loadingStatus == 0 || loadingStatus == 3) this.onLoading();
	                this.count++;
	            }
	        }

	        if (Math.abs(distanceY) >= 200) distanceY = -200;

	        this.loadingPageMain.style.transform = "translateY(" + distanceY + "px)";
	    };

	    LoadingList.prototype.onDrop = function onDrop(event, position) {
	        if (this.props.phMode == "button") return;
	        this.count = 0;
	        this.loadingPageMain.style.transform = "translateY(0px)";
	    };

	    LoadingList.prototype.componentDidMount = function componentDidMount() {
	        // let {loadingStatus, onLoadingEnd} = this.props;
	        // if(loadingStatus==2 && onLoadingEnd) onLoadingEnd();
	    };

	    LoadingList.prototype.componentDidUpdate = function componentDidUpdate() {
	        var _props3 = this.props;
	        var loadingStatus = _props3.loadingStatus;
	        var onLoadingEnd = _props3.onLoadingEnd;

	        if (loadingStatus == 2 && onLoadingEnd) onLoadingEnd();
	    };

	    LoadingList.prototype.componentWillUnmount = function componentWillUnmount() {
	        window.removeEventListener('scroll', this.handleWindowScroll, false);
	    };

	    LoadingList.prototype.render = function render() {
	        var _this = this;

	        var _props4 = this.props;
	        var className = _props4.className;
	        var children = _props4.children;

	        return _react2['default'].createElement(
	            _Drag2['default'],
	            _extends({}, this.props, { className: _classnames2['default'](this.getProperty(true), className, 'animated'),
	                onDrag: this.onDrag.bind(this), onDrop: this.onDrop.bind(this) }),
	            _react2['default'].createElement(
	                'div',
	                { className: _utilsTool.setPhoenixPrefix('loading-page-main'), ref: function (loadingPageMain) {
	                        _this.loadingPageMain = loadingPageMain;
	                    } },
	                _react2['default'].createElement(
	                    'div',
	                    { className: _utilsTool.setPhoenixPrefix('loading-page-content'), ref: function (loadingPage) {
	                            _this.loadingPage = loadingPage;
	                        } },
	                    children
	                ),
	                this.renderButton()
	            )
	        );
	    };

	    return LoadingList;
	})(_utilsComponent2['default']);

	exports['default'] = LoadingList;
	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	/**
	 * 图片列表组件<br/>
	 * - 通过images配置图片列表数据，数组格式，其中图片地址对应`image`字段，名称对应`title`字段，描述对应`desp`字段。
	 * - 通过column设置图片列表的列数，1-8列。
	 * - 通过titleField设置名称的格式，以`#`代表名称；通过despField设置描述的格式，以`#`代表描述。
	 * - 通过otherParams设置额外的字段和格式。
	 * - 通过clickCallback设置点击单个图片块的回调函数，返回当前图片的所有数据。
	 * - 可以自定义内容children，当有内容时除了column其他属性不起作用。
	 *
	 * 主要属性和接口：
	 * - images:图片列表数据，默认[]。<br>
	 * ```code
	 * json:
	 * {
	 *  "data": [
	 *      {
	 *          "image": "http://img5.duitang.com/uploads/item/201602/11/20160211214958_RhdCY.jpeg",
	 *          "title": "图1",
	 *          "desp": "关于图是一个...",
	 *          "score": 1
	 *      },
	 *      ...
	 *  ]
	 * }
	 * ...
	 * <ImageList images={this.state.images} />
	 * ```
	 * - column:列表的列数，默认1。<br>
	 * 如: `<ImageList column={2}  images={this.state.images} />`
	 * - titleField:名称的格式，以`#`代表名称，默认"#"despField:描述的格式，以`#`代表描述，默认"#"。<br>
	 * 如: `<ImageList images={this.state.images} titleField={"姓名: #"} despField={"描述: #"} />`
	 * - otherParams:额外的字段和格式，默认{}。<br>
	 * 如: `<ImageList images={this.state.images} otherParams={{"score":"分数: #"}} />`
	 * - clickCallback:点击单个图片块的回调函数。<br>
	 * 如: `<ImageList images={this.state.images} clickCallback={(data)=>{console.log(data);}} />`
	 * - 自定义内容:children，当有内容时除了column其他属性不起作用。
	 * ```code
	 * <ImageList column={4}>
	 *  {
	 *      this.state.images.map((data,index)=>{
	 *          return (
	 *              <dl key={index}>
	 *                  <dd>
	 *                      <p>{data.title}</p>
	 *                      <p>{data.desp}</p>
	 *                  </dd>
	 *                  <dt>
	 *                      <img src={data.image} alt={data.title} />
	 *                  </dt>
	 *              </dl>
	 *          )
	 *      })
	 *  }
	 * </ImageList>
	 * ```
	 * 
	 * @class ImageList
	 * @module 操作类组件
	 * @extends Component
	 * @constructor
	 * @since 1.7.0
	 * @demo imagelist|image-list.js {展示}
	 * @show true
	 * */

	var ImageList = (function (_Component) {
	    _inherits(ImageList, _Component);

	    _createClass(ImageList, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'image-list'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	            * 图片列表数据
	            * @property images
	            * @type Array
	            * @default []
	            * */
	            images: _react.PropTypes.array,
	            /**
	             * 图片列数
	             * @property column
	             * @type Number
	             * @default 1
	             * */
	            column: _react.PropTypes.number,
	            /**
	             * 名称格式
	             * @property titleField
	             * @type String
	             * @default "#"
	             * */
	            titleField: _react.PropTypes.string,
	            /**
	             * 描述格式
	             * @property despField
	             * @type String
	             * @default "#"
	             * */
	            despField: _react.PropTypes.string,
	            /**
	            * 其他参数，额外增加的可自定义的字段
	            * @property otherParams
	            * @type Object
	            * @default {}
	            * */
	            otherParams: _react.PropTypes.object,
	            /**
	             * 点击单个图片块的回调函数,返回当前图片的所有信息
	             * @method clickCallback
	             * @type Function
	             * @default null
	             **/
	            clickCallback: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            images: [],
	            column: 1,
	            titleField: "#",
	            despField: "#",
	            otherParams: {},
	            classPrefix: 'image-list',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function ImageList(props, context) {
	        _classCallCheck(this, ImageList);

	        _Component.call(this, props, context);
	    }

	    ImageList.prototype.formatParams = function formatParams(format, param) {
	        if (param && format.indexOf('#') != -1) {
	            return format.replace('#', param);
	        }
	    };

	    ImageList.prototype.clickCallback = function clickCallback(data) {
	        var clickCallback = this.props.clickCallback;

	        if (clickCallback) clickCallback(data);
	    };

	    ImageList.prototype.renderImageList = function renderImageList() {
	        var _this = this;

	        var _props = this.props;
	        var images = _props.images;
	        var column = _props.column;
	        var titleField = _props.titleField;
	        var despField = _props.despField;
	        var otherParams = _props.otherParams;
	        var className = _props.className;
	        var children = _props.children;

	        if (children) {
	            return _react2['default'].createElement(
	                'div',
	                { className: _classnames2['default'](this.getProperty(true), className, _utilsTool.setPhoenixPrefix("column-" + column)) },
	                children
	            );
	        } else {
	            return _react2['default'].createElement(
	                'div',
	                { className: _classnames2['default'](this.getProperty(true), className, _utilsTool.setPhoenixPrefix("column-" + column)) },
	                images.map(function (data, index) {
	                    var _context;

	                    return _react2['default'].createElement(
	                        'dl',
	                        { key: index, onClick: (_context = _this.clickCallback).bind.call(_context, _this, data) },
	                        _react2['default'].createElement(
	                            'dt',
	                            null,
	                            _react2['default'].createElement('img', { src: data.image, alt: data.title })
	                        ),
	                        _react2['default'].createElement(
	                            'dd',
	                            null,
	                            _react2['default'].createElement(
	                                'p',
	                                { className: _utilsTool.setPhoenixPrefix('image-title') },
	                                _this.formatParams(titleField, data.title)
	                            ),
	                            _react2['default'].createElement(
	                                'p',
	                                { className: _utilsTool.setPhoenixPrefix('image-desp') },
	                                _this.formatParams(despField, data.desp)
	                            ),
	                            _this.renderRest(otherParams, data)
	                        )
	                    );
	                })
	            );
	        }
	    };

	    ImageList.prototype.renderRest = function renderRest(otherParams, data) {
	        var newRest = [];

	        for (var i in otherParams) {
	            newRest.push(_react2['default'].createElement(
	                'p',
	                { key: i },
	                this.formatParams(otherParams[i], data[i])
	            ));
	        }

	        return newRest;
	    };

	    ImageList.prototype.render = function render() {
	        return this.renderImageList();
	    };

	    return ImageList;
	})(_utilsComponent2['default']);

	exports['default'] = ImageList;
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(62);

	var _react2 = _interopRequireDefault(_react);

	var _reactLibReactDOM = __webpack_require__(94);

	var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);

	var _utilsComponent = __webpack_require__(63);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(64);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsTool = __webpack_require__(73);

	/**
	 * 步骤组件<br/>
	 * - 通过list设置步骤过程名称数组，如["合作信息","公司信息","资质信息"]，必需。
	 * - 可通过currentStep设置当前步骤，从0开始计算。
	 * - 可通过clickCallback设置点击步骤的回调，函数返回步骤名称和索引。
	 * - 可通过readOnly设置步骤是否只读不可点击，默认可点击。
	 * 
	 * 主要属性和接口：
	 * - list:初始进度百分比, 默认0。 <br/>
	 * 如: `<Steps list={["合作信息","公司信息","资质信息"]} />`
	 * - currentStep:当前步骤，从0开始计算，默认0。 <br/>
	 * 如: `<Steps currentStep={1} list={["合作信息","公司信息","资质信息"]} />`
	 * - clickCallback:点击步骤的回调，函数返回步骤名称和索引。 <br/>
	 * 如: `<Steps clickCallback={(str,index)=>{console.log(index);}} list={["合作信息","公司信息","资质信息"]}/>`
	 * - readOnly:只读不可点击，默认false。<br/>
	 * 如: `<Steps readOnly list={["合作信息","公司信息","资质信息"]} />`
	 *
	 * @class Steps
	 * @module 操作类组件
	 * @extends Component
	 * @constructor
	 * @since 1.7.0
	 * @demo steps|steps.js {展示}
	 * @show true
	 * */

	var Steps = (function (_Component) {
	    _inherits(Steps, _Component);

	    _createClass(Steps, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
	             * @default 'badge'
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * 是否为只读模式（只读模式不会触发点击回调），默认为false
	             * @property readOnly
	             * @type Boolean
	             * @default false
	             **/
	            readOnly: _react.PropTypes.bool,
	            /**
	             * steps内容数组，把每一步的文案放入数组中作为list的值
	             * @property list
	             * @type Array
	             * @default []
	             **/
	            list: _react.PropTypes.arrayOf(_react.PropTypes.string),
	            /**
	             * 当前处于第几步，默认为0，也就是说所有的步骤都没有开始，如果到第一步的话将currentStep设置为1即可，注意currentStep不可以超过list数组长度
	             * @property currentStep
	             * @type Number
	             * @default 0
	             **/
	            currentStep: _react.PropTypes.number,
	            /**
	             * 点击每一步的回调，function(str,index){} str为步骤名称，index为第几步（从1开始计数）
	             * @method clickCallback
	             * @type Function
	             * @default null
	             **/
	            clickCallback: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            readOnly: false,
	            list: [],
	            currentStep: 0,
	            classPrefix: 'steps',
	            classMapping: {}
	        },
	        enumerable: true
	    }]);

	    function Steps(props, context) {
	        _classCallCheck(this, Steps);

	        _Component.call(this, props, context);

	        this.state = {
	            currentStep: props.currentStep
	        };
	    }

	    Steps.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (this.state.currentStep != nextProps.currentStep) this.setState({ currentStep: nextProps.currentStep });
	    };

	    Steps.prototype.clickCallback = function clickCallback(str, index, e) {
	        var _props = this.props;
	        var readOnly = _props.readOnly;
	        var clickCallback = _props.clickCallback;var thisElemnt = e.currentTarget;
	        if (readOnly) return;

	        this.setState({
	            currentStep: index
	        });

	        if (clickCallback) clickCallback(str, index);
	    };

	    Steps.prototype.renderSteps = function renderSteps() {
	        var _this2 = this;

	        var list = this.props.list;

	        var _this = this,
	            listLen = list.length;

	        return _react2['default'].createElement(
	            'ul',
	            null,
	            list.map(function (item, index) {
	                return _react2['default'].createElement(
	                    'li',
	                    { key: index, className: _classnames2['default'](_utilsTool.setPhoenixPrefix('steps-list'), index == _this2.state.currentStep ? 'active' : index < _this2.state.currentStep ? 'done' : ''),
	                        style: { left: index / (listLen - 1) * 100 + '%' },
	                        onClick: _this.clickCallback.bind(_this, item, index)
	                    },
	                    _react2['default'].createElement('span', { className: _utilsTool.setPhoenixPrefix('steps-dot') }),
	                    _react2['default'].createElement(
	                        'p',
	                        null,
	                        item
	                    )
	                );
	            })
	        );
	    };

	    Steps.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: _classnames2['default'](this.getProperty(true), this.props.className) },
	            this.renderSteps()
	        );
	    };

	    return Steps;
	})(_utilsComponent2['default']);

	exports['default'] = Steps;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;