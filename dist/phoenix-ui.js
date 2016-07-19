(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_10__) {
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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsCatBrowserJs = __webpack_require__(2);

	var _utilsCatBrowserJs2 = _interopRequireDefault(_utilsCatBrowserJs);

	var _Button2 = __webpack_require__(9);

	var _Button3 = _interopRequireDefault(_Button2);

	exports.Button = _Button3['default'];

	var _ButtonGroup2 = __webpack_require__(19);

	var _ButtonGroup3 = _interopRequireDefault(_ButtonGroup2);

	exports.ButtonGroup = _ButtonGroup3['default'];

	var _Input2 = __webpack_require__(20);

	var _Input3 = _interopRequireDefault(_Input2);

	exports.Input = _Input3['default'];

	var _Switch2 = __webpack_require__(21);

	var _Switch3 = _interopRequireDefault(_Switch2);

	exports.Switch = _Switch3['default'];

	var _Row2 = __webpack_require__(22);

	var _Row3 = _interopRequireDefault(_Row2);

	exports.Row = _Row3['default'];

	var _Col2 = __webpack_require__(23);

	var _Col3 = _interopRequireDefault(_Col2);

	exports.Col = _Col3['default'];

	var _TableView2 = __webpack_require__(24);

	var _TableView3 = _interopRequireDefault(_TableView2);

	exports.TableView = _TableView3['default'];

	var _FormGroup2 = __webpack_require__(25);

	var _FormGroup3 = _interopRequireDefault(_FormGroup2);

	exports.FormGroup = _FormGroup3['default'];

	var _Tab2 = __webpack_require__(26);

	var _Tab3 = _interopRequireDefault(_Tab2);

	exports.Tab = _Tab3['default'];

	var _Tabset2 = __webpack_require__(27);

	var _Tabset3 = _interopRequireDefault(_Tabset2);

	exports.Tabset = _Tabset3['default'];

	var _Label2 = __webpack_require__(28);

	var _Label3 = _interopRequireDefault(_Label2);

	exports.Label = _Label3['default'];

	var _Badge2 = __webpack_require__(29);

	var _Badge3 = _interopRequireDefault(_Badge2);

	exports.Badge = _Badge3['default'];

	var _Star2 = __webpack_require__(30);

	var _Star3 = _interopRequireDefault(_Star2);

	exports.Star = _Star3['default'];

	var _Grid2 = __webpack_require__(31);

	var _Grid3 = _interopRequireDefault(_Grid2);

	exports.Grid = _Grid3['default'];

	//接入cat－browser
	_utilsCatBrowserJs2['default']({
	    moduleName: 'phoenix-ui',
	    isOnlyDp: false
	});
	window['Phoenix'] = {};

	['Button', 'Input', 'Switch', 'Row', 'TableView', 'FormGroup', 'Col', 'Tabset', 'Tab', 'Label', 'Badge', 'Star', 'Grid', 'ButtonGroup'].forEach(function (name) {
	    Phoenix[name] = exports[name];
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _catBrowser = __webpack_require__(3);

	module.exports = function (obj) {
	    return new _catBrowser.CatBrowser(obj);
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Browser = __webpack_require__(4);

	var _Browser2 = _interopRequireDefault(_Browser);

	exports.CatBrowser = _Browser2['default'];

	if (typeof CatBrowser == 'undefined') {
	    window.CatBrowser = exports['CatBrowser'];
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _Cookie = __webpack_require__(5);

	var _Cookie2 = _interopRequireDefault(_Cookie);

	var _UserAgent = __webpack_require__(7);

	var _UserAgent2 = _interopRequireDefault(_UserAgent);

	var _Options = __webpack_require__(8);

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
	     * 获取当前环境hostname
	     * */

	    Browser.prototype.getHost = function getHost() {
	        var url = location.hostname || '';
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _jsCookie = __webpack_require__(6);

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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * JavaScript Cookie v2.1.2
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
	;(function (factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
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
						attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
						attributes.path    && '; path=' + attributes.path,
						attributes.domain  && '; domain=' + attributes.domain,
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
				return api(key);
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
/* 7 */
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
/* 8 */
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
	  url: '//221.181.67.144/web-broker-service/api/js',
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(11);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 *  - 按钮组件提供所有properties中内置的颜色及字体大小样式供选择<br/>
	 *  - 也可以自定义行内样式和className名字定义UI展示<br/>
	 *  - 支持disabled, active, enable等属性定义<br/>
	 *  - 可以通过phSize 设置大小，可选xs、sm、lg。<br/>
	 *  - 通过phStyle选择按钮颜色，可选error、warning、danger、link、gray、white、success
	 *  主要属性和接口：
	 * <ul>
	 *     <li>phSize:按钮颜色<br>
	 *         如：<code>
	 *            Button radius phSize="sm" egStyle="warning"
	 *         </code>
	 *     </li>
	 *     <li>egStyle:按钮的大小。分别为md、sm、lg，默认sm<br>
	 *         如：<code>
	 *            Button radius phSize="md" phStyle="warning"
	 *         </code>
	 *     </li>
	 *     <li>block:是否块级显示，默认false<br>
	 *         如：<code>
	 *            Button block
	 *         </code>
	 *     </li>
	 * </ul>
	 * @class Button
	 * @module Form
	 * @extends Component
	 * @constructor
	 * @demo button.js {展示}
	 * @demo button.js {源码}
	 * @show true
	 * */

	var Button = (function (_Component) {
	    _inherits(Button, _Component);

	    _createClass(Button, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 按钮尺寸,分别为xs、sm、lg
	             * @property phSize
	             * @type String
	             * @default sm
	             * */
	            phSize: _react.PropTypes.string,
	            /**
	             * 颜色[error、warning、danger、link、gray、white、success、'']
	             * @property phStyle
	             * @type Boolean
	             * @default ''
	             * */
	            phStyle: _react.PropTypes.string,
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
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
	            block: _react.PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            egSize: '',
	            classPrefix: '',
	            componentTag: 'button',
	            classMapping: {
	                'block': 'btn-block',
	                'primary': 'btn-primary',
	                'info': 'btn-info',
	                'success': 'btn-success',
	                'error': 'btn-error',
	                'warning': 'btn-warning',
	                'danger': 'btn-danger',
	                'link': 'btn-link'
	            }
	        },
	        enumerable: true
	    }]);

	    function Button(props, context) {
	        _classCallCheck(this, Button);

	        _Component.call(this, props, context);
	        this.setProperty('hollow', 'hollow');
	    }

	    Button.prototype.render = function render() {
	        var Component = this.props.componentTag;

	        return _react2['default'].createElement(
	            Component,
	            _extends({}, this.otherProps, { className: _classnames2['default']('btn', this.getProperty(), this.props.className), style: this.getStyles(this.props.style) }),
	            this.props.children
	        );
	    };

	    return Button;
	})(_utilsComponent2['default']);

	exports['default'] = Button;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(13);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _PropertyMixin = __webpack_require__(15);

	var _PropertyMixin2 = _interopRequireDefault(_PropertyMixin);

	var _MethodMixin = __webpack_require__(17);

	var _MethodMixin2 = _interopRequireDefault(_MethodMixin);

	var _extend = __webpack_require__(18);

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
	        var withPrefix = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	        var p = this.classPrefix ? this.classPrefix + ' ' : '';
	        p += this._properties.join(' ');
	        /*if(withPrefix){
	            return this.getClassName(p);
	        }else{
	            return this.getClassName(p,false);
	        }*/
	        return this.getClassName(p, false); //+' '+this.getClassName(p);
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
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 15/9/7.
	 */
	'use strict';

	exports.__esModule = true;

	var _constantsJs = __webpack_require__(14);

	var consts = _constantsJs.classConstants;

	exports['default'] = function (obj) {
	    /**
	     * 给className添加前缀后返回className
	     * @method getClassName
	     * @param name {String} 从该字符串中去查找
	     * @param pre {Boolean} 是否添加Component中定义的class前缀，默认添加
	     * @return {String}
	     * */
	    obj.prototype.getClassName = function (name) {
	        var pre = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	        name = name ? name : '';
	        name = (name + '').split(' ');
	        var list = [],
	            _this = this;
	        name.forEach(function (item) {
	            list.push(_this.setPrefix(item, pre));
	        });

	        return list.join(' ');
	    };
	    /**
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
	    /**
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
	    /**
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

	    /**
	     * 检查元素是否存在样式名
	     * @method hasClass
	     * @param obj {Object} 元素
	     * @param cls {String} 需要检查的样式名
	     * @return {Boolean}
	     * */
	    obj.prototype.hasClass = function (obj, cls) {
	        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	    };

	    /**
	     * 给元素增加一个样式名
	     * @method addClass
	     * @param obj {Object} 元素
	     * @param cls {String} 样式名
	     * */
	    obj.prototype.addClass = function (obj, cls) {
	        if (!this.hasClass(obj, cls)) obj.className += " " + cls;
	    };
	    /**
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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 16/1/3.
	 */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(16);

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
	            return getVal(['lg', 'sm', 'default', 'xs', 'md'], val);
	        },
	        phStyle: function phStyle(val) {
	            return getVal(['primary', 'info', 'success', 'error', 'warning', 'danger', 'link', 'light', 'positive', 'calm', 'balanced', 'energized', 'assertive', 'lightbrown', 'lightgray'], val);
	        },
	        status: function status(val) {
	            getVal(['diabled', 'active', 'enable'], val);
	        },
	        align: function align(val) {
	            return getVal(['center', 'left', 'middle', 'auto', 'top', 'right', 'bottom'], val);
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
	        offset: (function (val) {
	            return '-offset-' + val;
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 15/9/8.
	 */
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(11);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 按钮组组件配合Button组件,提供了横、竖两种排列方式<br/>
	 *  主要属性和接口：
	 * <ul>
	 *     <li>phType:是否自适应宽度或者垂直排列，可选'justify,tacked'默认'justify'
	 *     </li>
	 * </ul>
	 * @class ButtonGroup
	 * @module Form
	 * @extends Component
	 * @constructor
	 * @since 0.1.4
	 * @demo button.js {展示}
	 * @demo button.js {源码}
	 * @show true
	 * */

	var ButtonGroup = (function (_Component) {
	    _inherits(ButtonGroup, _Component);

	    _createClass(ButtonGroup, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 是否有自适应宽度，垂直排列等属性，取值为justify(水平排列)或者tacked(垂直排列)
	             * @property phType
	             * @type String
	             * @default 'justify'
	             * */
	            phType: _react.PropTypes.string,
	            /**
	             * 某个按钮被按下后的回调
	             * @property activeCallback
	             * @type Function
	             * */
	            activeCallback: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'btn-group',
	            phType: 'justify',
	            componentTag: 'div',
	            classMapping: {
	                'justify': 'btn-group-justify',
	                'tacked': 'btn-group-tacked'
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
	        this.props.activeCallback && this.props.activeCallback(target, target.innerHTML);
	        this.setState({
	            active: target.innerHTML
	        });
	    };

	    ButtonGroup.prototype.render = function render() {
	        var _this = this;

	        var Component = this.props.componentTag;

	        var options = _react2['default'].Children.map(this.props.children, function (option) {

	            var opt = _react2['default'].cloneElement(option, {
	                onClick: _this.clickHandler.bind(_this),
	                active: _this.state.active == option.props.children
	            });
	            return opt;
	        }, this);

	        return _react2['default'].createElement(
	            Component,
	            _extends({}, this.props, { className: _classnames2['default']('btn-group', this.getProperty(), 'clearfix') }),
	            options
	        );
	    };

	    return ButtonGroup;
	})(_utilsComponent2['default']);

	exports['default'] = ButtonGroup;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(11);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 表单元素，input框，使用方式跟原生一致
	 * @class Input
	 * @module Form
	 * @extends Component
	 * @constructor
	 * @demo input.js {展示}
	 * @demo input.js {源码}
	 * @show true
	 * */

	var Input = (function (_Component) {
	    _inherits(Input, _Component);

	    _createClass(Input, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 样式前缀
	             * @property classPrefix
	             * @type String
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
	            egSize: '',
	            classPrefix: '',
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
	            { className: 'multi-group' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'ui-' + type },
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
	            html = _react2['default'].createElement('input', _extends({}, this.props, { className: _classnames2['default']('form-input', this.getProperty(), this.props.className) }));
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(11);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 开关切换，仿真ios的开关控件
	 * @class Switch
	 * @module Form
	 * @extends Component
	 * @constructor
	 * @demo switch.js {展示}
	 * @demo switch.js {源码}
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
	             * @type Stringx
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
	            egSize: '',
	            classPrefix: '',
	            componentTag: 'div',
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
	            { className: _classnames2['default']('label-switch', this.getProperty(), this.props.className) },
	            _react2['default'].createElement('input', _extends({ type: 'checkbox' }, this.props)),
	            _react2['default'].createElement('div', { className: 'checkbox' })
	        );
	    };

	    return Switch;
	})(_utilsComponent2['default']);

	exports['default'] = Switch;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 行
	 * @class Row
	 * @module Grid
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * */

	var Row = (function (_Component) {
	    _inherits(Row, _Component);

	    function Row() {
	        _classCallCheck(this, Row);

	        _Component.apply(this, arguments);
	    }

	    Row.prototype.render = function render() {
	        var _props = this.props;
	        var align = _props.align;

	        var others = _objectWithoutProperties(_props, ['align']);

	        return _react2['default'].createElement(
	            'div',
	            _extends({}, others, { className: _classnames2['default']('row', this.props.align ? this.props.classPrefix + '-' + align : '', this.props.className) }),
	            this.props.children
	        );
	    };

	    _createClass(Row, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 竖直方向的排列是靠上、居中、靠下、拉伸至父容器最大高度还是基于text的baseline对齐
	             * @property offset，默认不偏移
	             * @type Integer
	             * */
	            align: _react2['default'].PropTypes.oneOf(['top', 'bottom', 'center', 'stretch', 'baseline'])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'row'
	        },
	        enumerable: true
	    }]);

	    return Row;
	})(_react.Component);

	exports['default'] = Row;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 列
	 * @class Col
	 * @module Grid
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * */

	var Col = (function (_Component) {
	    _inherits(Col, _Component);

	    function Col() {
	        _classCallCheck(this, Col);

	        _Component.apply(this, arguments);
	    }

	    Col.prototype.render = function render() {
	        var _props = this.props;
	        var width = _props.width;
	        var offset = _props.offset;
	        var align = _props.align;
	        var classPrefix = _props.classPrefix;

	        var others = _objectWithoutProperties(_props, ['width', 'offset', 'align', 'classPrefix']);

	        return _react2['default'].createElement(
	            'div',
	            _extends({}, others, { className: _classnames2['default']('col', this.props.width ? classPrefix + '-' + width : '', this.props.offset ? classPrefix + '-offset-' + offset : '', this.props.align ? classPrefix + '-' + align : '', this.props.className) }),
	            this.props.children
	        );
	    };

	    _createClass(Col, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 占100份的多少份，目前支持5-100之间5的倍数、33（1\3）和66(2\3)
	             * @property width
	             * @type Integer
	             * */
	            width: _react.PropTypes.string,
	            /**
	             * 偏移多少，，目前支持5-100之间5的倍数、33（1\3）和66(2\3)
	             * @property offset，默认不偏移
	             * @type Integer
	             * */
	            offset: _react.PropTypes.string,
	            /**
	             * 竖直方向的排列是靠上、居中还是靠下
	             * @property offset，默认不偏移
	             * @type Integer
	             * */
	            align: _react2['default'].PropTypes.oneOf(['top', 'bottom', 'center'])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'col'
	        },
	        enumerable: true
	    }]);

	    return Col;
	})(_react.Component);

	exports['default'] = Col;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(11);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * 展现形式如表格一般,用来组织数据，显示链接的集合，或一系列的控件。<br />
	 * 使用时需注意组件的子元素需要跳转功能需加上href标签并赋予正确的url，不论什么标签
	 * @class TableView
	 * @module UI
	 * @extends Component
	 * @constructor
	 * @demo table-view.js {展示}
	 * @demo table-view.js {源码}
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
	            classPrefix: '',
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
	                { className: 'table-view-cell' },
	                href && href != '' ? _react2['default'].createElement(
	                    'a',
	                    _extends({ href: href, className: 'navigate-right' }, other, { className: _classnames2['default']('navigate-right', options.props.className) }),
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
	            _extends({}, this.otherProps, { className: _classnames2['default']('table-view', this.getProperty(), this.props.className), style: this.getStyles(this.props.style) }),
	            this.renderItem()
	        );
	    };

	    return TableView;
	})(_utilsComponent2['default']);

	exports['default'] = TableView;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(11);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Row = __webpack_require__(22);

	var _Row2 = _interopRequireDefault(_Row);

	var _Col = __webpack_require__(23);

	var _Col2 = _interopRequireDefault(_Col);

	/**
	 * 表单元素布局方式，整齐的排列一组表单元素
	 * @class FormGroup
	 * @module Form
	 * @extends Component
	 * @constructor
	 * @demo form-group.js {展示}
	 * @demo form-group.js {源码}
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
	            egSize: '',
	            classPrefix: '',
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
	                className: _classnames2['default']({
	                    'input-row': !options.props.single
	                }, options.props.className)

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
	            _extends({ className: _classnames2['default']('row-no-padding', 'input-group', this.getProperty(), this.props.className) }, other),
	            this.renderItem()
	        );
	    };

	    return FormGroup;
	})(_utilsComponent2['default']);

	exports['default'] = FormGroup;
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _utilsClassNameMixin = __webpack_require__(13);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * tab选项卡组件
	 * - 标签内容为heading属性，children部分为对应要显示的内容<br/>
	 * - 此外支持自定义类名,事件等操作<br/>
	 * 具体属性和接口如下：
	 * <ul>
	 *     <li>heading; 标签卡的显示内容，默认‘tab’ 。
	 *         虽然有默认值但是这应该是必填的。</li>
	 *       <li>
	 *         例如:
	 *          <code>
	 *            Tabset activeIndex ={0} width={30}
	 *               Tab heading='tab1' className='测试'>hahadhdad1
	 *               /Tab
	 *            /Tabset
	 *          </code>
	 *       </li>
	 *       <li>clickCallback: 点击事件的回调函数，默认为null</li>
	 * </ul>
	 * @class Tab
	 * @module Tab(选项卡)
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo Tab.js{展示}
	 * @demo Tab.js{源码}
	 * @show true
	 * */

	var Tab = (function (_Component) {
	    _inherits(Tab, _Component);

	    _createClass(Tab, null, [{
	        key: 'ProTypes',
	        value: {
	            /**
	             * 选项卡的标题文字，默认为‘tab’
	             * 但是这个应该是必填的，一个tab显示出来也没意思啦
	             * @property heading
	             * @default 'tab'
	             * */
	            heading: _react.PropTypes.string,
	            /**
	             * 点击事件的回调函数
	             * @property clickCallback
	             * @default null
	             * */
	            clickCallback: _react.PropTypes.func
	        },
	        enumerable: true
	    }]);

	    function Tab(props, context) {
	        _classCallCheck(this, _Tab);

	        _Component.call(this, props, context);
	    }

	    Tab.prototype.handleClick = function handleClick() {
	        this.props.changeActive(this.props.index);
	        this.props.clickCallback && this.props.clickCallback();
	    };

	    Tab.prototype.isActive = function isActive() {
	        return this.props.index == this.props.activeIndex ? 'active' : '';
	    };

	    Tab.prototype.isVertical = function isVertical() {
	        return !!this.props.vertical ? '' : 'col';
	    };

	    Tab.prototype.render = function render() {
	        var _props = this.props;
	        var className = _props.className;
	        var onClick = _props.onClick;

	        var other = _objectWithoutProperties(_props, ['className', 'onClick']);

	        return _react2['default'].createElement(
	            'li',
	            _extends({ className: _classnames2['default'](this.isVertical(), 'tab-nav', this.isActive(), className), onClick: this.handleClick.bind(this) }, other),
	            this.props.heading
	        );
	    };

	    _createClass(Tab, null, [{
	        key: 'defaultProps',
	        value: {
	            heading: 'tab',
	            activeIndex: 0,
	            vertical: false,
	            clickCallback: null
	        },
	        enumerable: true
	    }]);

	    var _Tab = Tab;
	    Tab = _utilsClassNameMixin2['default'](Tab) || Tab;
	    return Tab;
	})(_react.Component);

	exports['default'] = Tab;
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _utilsClassNameMixin = __webpack_require__(13);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _TabJs = __webpack_require__(26);

	var _TabJs2 = _interopRequireDefault(_TabJs);

	/**
	 * <h5>tab选项卡，主要包括一下两个组件:</h5>
	 * <strong><a href='../classes/Tabset.html'>tabset</a></strong><br/>
	 * <strong><a href='../classes/Tab.html'>tab</a></strong><br>
	 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
	 * @module Tab(选项卡)
	 * @main Tab(选项卡)
	 * @static
	 *
	 */
	/**
	 * tabset选项卡组件
	 * - 可以指定当前actie选项。
	 * - 支持选项卡横排，竖排两种情况。
	 * - 此外支持自定义类名,事件等操作
	 * 具体属性和接口如下：
	 * <ul>
	 *     <li>activeIndex; 当前选中标签卡，默认0</li>
	 *     <li>vertiacl; 是否竖排，如需要直接添加改属性即可，默认不竖排</li>
	 *     <li>width; 选项卡头部的宽度，取值0-100之间 即class＝‘col－20’，取值即可，注只有在竖排的情况下生效，
	 *          也就是没有vertical属性，设置width也没用的，默认20
	 *          例如横排情况:
	 *     </li>
	 *     <li>
	 *          <code>
	 *             Tabset activeIndex ={0} width={30}
	 *               Tab heading='tab1' className='测试'>hahadhdad1
	 *               /Tab
	 *            /Tabset
	 *          </code>
	 *         上面的width是不起作用的
	 *        竖排情况:
	 *          <code>
	 *              Tabset activeIndex ={0} vertical width={30}
	 *          </code>
	 *         此时表明默认选中第一个选项卡，并且竖排标签部分width为30%
	 *
	 *          </li>
	 *
	 * </ul>
	 * @class Tabset
	 * @module Tab(选项卡)
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo Tab.js{展示}
	 * @demo Tab.js{源码}
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
	             * @default 0
	             * */
	            activeIndex: _react.PropTypes.number,
	            /**
	             * 是否竖排
	             * @property vertical
	             * @default false || null
	             * */
	            vertical: _react.PropTypes.bool,
	            /**
	             * 设置选项卡头部的宽度，只有竖排的情况下才起作用
	             * @property width
	             * @default '20'
	             * */
	            width: _react.PropTypes.number,
	            /**
	             * 点击事件的回调函数
	             * @property clickCallback
	             * @default null
	             * */
	            clickCallback: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            activeIndex: 0,
	            vertical: false,
	            width: 20,
	            clickCallback: null,
	            activeCallback: null
	        },
	        enumerable: true
	    }]);

	    function Tabset(props, context) {
	        _classCallCheck(this, _Tabset);

	        _Component.call(this, props, context);
	        this.state = {
	            activeIndex: this.props.activeIndex
	        };
	    }

	    Tabset.prototype.isVertial = function isVertial() {
	        return !!this.props.vertical ? 'vertical row' : '';
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
	    };

	    Tabset.prototype.getClass = function getClass(flag) {
	        var vertical = this.props.vertical;
	        if (flag) {
	            var cols = 'col-' + this.props.width;
	            return !vertical ? 'row' : cols;
	        } else {
	            return vertical ? 'col' : '';
	        }
	    };

	    Tabset.prototype.render = function render() {
	        var _this = this;

	        var panels = [];
	        var _props = this.props;
	        var className = _props.className;
	        var clickCallback = _props.clickCallback;

	        var other = _objectWithoutProperties(_props, ['className', 'clickCallback']);

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
	                { className: _classnames2['default']('tab-panel', _this.isActive(index), options.props.className), key: index },
	                options.props.children
	            );
	            panels.push(panel);
	            return opt;
	        }, this);
	        return _react2['default'].createElement(
	            'div',
	            _extends({ className: _classnames2['default']('ui-tabs', this.isVertial(), className), onClick: clickCallback }, other),
	            _react2['default'].createElement(
	                'ul',
	                { className: this.getClass(true) },
	                headings
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: _classnames2['default'](this.getClass(false), 'tab-bd"') },
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(11);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * <h5>label模块，主要包括一下两个组件:</h5>
	 * <strong><a href='../classes/Label.html'>label 标签</a></strong><br/>
	 * <strong><a href='../classes/Badge.html'>bridge 徽章</a></strong><br>
	 * <h6>点击以上链接或者左侧导航栏的组件名称链接进行查看</h6>
	 * @module Label(标签)
	 * @main Label(标签)
	 * @static
	 *
	 */
	/**
	 * Label标记，主要是用来提供不同颜色的标识<br/>
	 * 可以通过phStyle来改变颜色,phSize改变大小<br/>
	 * 因为发生回调的概率不大所以没有提供回调函数<br/>
	 * 但支持自定义类名，事件等操作<br/>
	 * 具体属性和接口如下：
	 * <ul>
	 *     <li>phStyle:label徽章颜色,可取值[primary、warning、danger、info、error、success]等，默认primary</li>
	 *     <li>
	 *         <code>
	 *             Label phSize="lg" phStyle="success"
	 *             惠
	 *            /Label
	 *         </code>
	 *     </li>
	 *     <li>phSize:badge徽章颜色,可取值[lg、md、'']，默认即为‘’</li>
	 *     <li>
	 *         <code>
	 *            Label phSize="lg" phStyle="success"
	 *             惠
	 *            /Label
	 *         </code>
	 *     </li>
	 * </ul>
	 * @class Label
	 * @module Label(标签)
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo Label.js{展示}
	 * @demo Label.js{源码}
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
	             * @default btn
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * label标签大小 [lg、md、'']默认为‘’即为sm不用指定
	             * @property phSize
	             * @type string
	             * @default ''
	             * */
	            phSize: _react.PropTypes.string,
	            /**
	             * label标签颜色[primary、warning、danger、info、error、success]
	             * @property phStyle
	             * @type string
	             * @default 'primary'
	             **/
	            phStyle: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * @default a
	             * */
	            componentTag: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            phSize: '',
	            classPrefix: 'label',
	            phStyle: 'primary',
	            classMapping: {
	                'primary': 'label-primary',
	                'info': 'label-info',
	                'success': 'label-success',
	                'error': 'label-error',
	                'warning': 'label-warning',
	                'danger': 'label-danger',
	                'lg': 'label-lg',
	                'md': 'label-md'
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
	            { className: _classnames2['default']('label', this.getProperty(), this.props.className), style: this.getStyles(this.props.style) },
	            this.props.children
	        );
	    };

	    return Label;
	})(_utilsComponent2['default']);

	exports['default'] = Label;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _utilsComponent = __webpack_require__(11);

	var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * Badge徽章标记，主要是用来提供不同颜色的标识<br/>
	 * 可以通过phStyle来改变颜色<br/>
	 * 因为发生回调的概率不大所以没有提供回调函数<br/>
	 * 但支持自定义类名，事件等操作<br/>
	 * 具体属性和接口如下：
	 * <ul>
	 *     <li>phStyle:badge徽章颜色,可取值[primary、warning、danger、info、error、success]等，默认primary</li>
	 *     <li>
	 *         <code>
	 *            Badge  phStyle="success"
	 *            惠2
	 *            /Badge
	 *         </code>
	 *     </li>
	 * </ul>
	 * @class Badge
	 * @module Label(标签)
	 * @extends Component
	 * @constructor
	 * @since 0.1.0
	 * @demo Badge.js{展示}
	 * @demo Badge.js{源码}
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
	             * @default btn
	             * */
	            classPrefix: _react.PropTypes.string,
	            /**
	             * badge徽章颜色[primary、warning、danger、info、error、success]
	             * @property phStyle
	             * @type string
	             * @default ''
	             **/
	            phStyle: _react.PropTypes.string,
	            /**
	             * 标签tagName
	             * @property componentTag
	             * @type String
	             * @default a
	             * */
	            componentTag: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'badge',
	            classMapping: {
	                'primary': 'badge-primary',
	                'info': 'badge-info',
	                'success': 'badge-success',
	                'error': 'badge-error',
	                'warning': 'badge-warning',
	                'danger': 'badge-danger'
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
	            { className: _classnames2['default']('badge', this.getProperty(), this.props.className), style: this.getStyles(this.props.style) },
	            this.props.children
	        );
	    };

	    return Badge;
	})(_utilsComponent2['default']);

	exports['default'] = Badge;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * 星级评价
	 */
	/**
	 * 星级评价(Star)组件<br />
	 * 提供的UI展示属性接口包括<br/>
	 * <ul>
	 *     <li>rate：星级评价的分数(满分为50)<code>默认为0</code></li>
	 *     <li>size：星星的大小(可选md、lg、默认3种size)<code></code></li>
	 * </ul><br>
	 * 使用方式:
	 * <pre><code>&#60;Star rate={50} size={10}/&#62;</code>
	 * </pre>
	 * @class Star
	 * @module UI
	 * @extends Component
	 * @constructor
	 * @demo star.js {UI展示}
	 * @demo star.js {源码}
	 * @show true
	 * */
	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsClassNameMixinJs = __webpack_require__(13);

	var _utilsClassNameMixinJs2 = _interopRequireDefault(_utilsClassNameMixinJs);

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
	             * @property size
	             * @type String
	             * @default
	             * */
	            size: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            Rate: 0,
	            size: undefined
	        },
	        enumerable: true
	    }]);

	    function Star() {
	        _classCallCheck(this, _Star);

	        _Component.call(this);
	    }

	    Star.prototype.render = function render() {
	        var _props = this.props;
	        var Rate = _props.Rate;
	        var size = _props.size;

	        var rateCls = Rate && 'star-' + Math.round(Rate * 2 / 10) * 5;
	        var sizeCls = size && 'star-' + size;
	        return _react2['default'].createElement(
	            'div',
	            { className: 'star ' + rateCls + ' ' + sizeCls },
	            _react2['default'].createElement('div', { className: 'star-grey' })
	        );
	    };

	    var _Star = Star;
	    Star = _utilsClassNameMixinJs2['default'](Star) || Star;
	    return Star;
	})(_react.Component);

	exports['default'] = Star;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(12);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * <h5>主要栅格化布局组件</h5>
	 * <pre><code>
	 *     &#60;Grid&#62;//定义栅格
	 *         &#60;Col sm={6}&#62;//定义一列，总长度为12份
	 *             &#60;Row&#62; &#60;/Row&#62;//定义一行
	 *         &#60;/Col&#62;
	 *     &#60;/Grid&#62;
	 * </code></pre>
	 *
	 * <strong><a href='../classes/Grid.html'>Grid定义外框</a></strong><br>
	 * <strong><a href='../classes/Row.html'>Row定义行排列</a></strong><br>
	 * <strong><a href='../classes/Col.html'>Col定义竖排列</a></strong><br>
	 * <h6>点击以上链接进行相关查看</h6>
	 * @module Grid
	 * @main Grid
	 * @static
	 *
	 */

	/**
	 * 定义栅格容器,配合Col和Row使用
	 * @class Grid
	 * @module Grid
	 * @extends Component
	 * @constructor
	 * @show true
	 * */

	var Grid = (function (_Component) {
	    _inherits(Grid, _Component);

	    function Grid() {
	        _classCallCheck(this, Grid);

	        _Component.apply(this, arguments);
	    }

	    Grid.prototype.render = function render() {

	        return _react2['default'].createElement(
	            'div',
	            _extends({}, this.props, {
	                className: _classnames2['default']('grid', this.props.fluid ? 'grid-' + 'fluid' : '', this.props.className) }),
	            this.props.children
	        );
	    };

	    _createClass(Grid, null, [{
	        key: 'propTypes',
	        value: {},
	        enumerable: true
	    }]);

	    return Grid;
	})(_react.Component);

	exports['default'] = Grid;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;