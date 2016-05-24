(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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

	/**
	 * Created by panqianjin on 16/5/19.
	 */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _InputJs = __webpack_require__(2);

	var _InputJs2 = _interopRequireDefault(_InputJs);

	exports.Input = _InputJs2['default'];

	window['phoenix'] = {};
	['Input'].forEach(function (name) {
	  phoenix[name] = exports[name];
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by panqianjin on 16/5/24.
	 */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilsClassNameMixin = __webpack_require__(4);

	var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 *  - input组件，与基本的input类型相对应，改变了默认的风格，<br/>
	 *  - 使用方式还是与基本的input相同，例如'Input type="radio" name='nba' label="76ers" value="76ers"/'<br/>
	 *  - 支持自定义className，内联style，以及自定义属性<br/>
	 *  - 针对radio和checkbox，有disabled,checked等属性，对应于不同的状态。具体如下<br/>
	 *  主要属性和接口：
	 * <ul>
	 *     <li>type:input的具体类型，对应基本input的type。默认为text<br>
	 *         如：<code>
	 *              Input type="radio"
	 *            </code>
	 *     </li>
	 *     <li>label:标签内容，针对radio和checkbox类型。默认为空<br>
	 *         如：<code>
	 *              Input type="radio" label="76ers"
	 *            </code>
	 *     </li>
	 *     <li>checked:选中状态，同样针对radio和checkbox类型。默认为false<br>
	 *         如：<code>
	 *              Input type="radio" label="76ers" checked
	 *            </code>
	 *     </li>
	 *     <li>disabled:不可操作状态，再次针对radio和checkbox类型。默认为false<br>
	 *         如：<code>
	 *              Input type="radio" label="76ers" disabled
	 *            </code>
	 *     </li>
	 * </ul>
	 * @class Input
	 * @module form(表单)
	 * @extend Component
	 * @constructor
	 * @since 0.1.0
	 * @demo input.js {展示}
	 * @demo input.js {源码}
	 * @show true
	 * */

	var Input = (function (_Component) {
	    _inherits(Input, _Component);

	    function Input() {
	        _classCallCheck(this, _Input);

	        _Component.apply(this, arguments);
	    }

	    Input.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: _classnames2['default']('test') },
	            _react2['default'].createElement('input', this.props)
	        );
	    };

	    var _Input = Input;
	    Input = _utilsClassNameMixin2['default'](Input) || Input;
	    return Input;
	})(_react.Component);

	exports['default'] = Input;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 15/9/7.
	 */
	'use strict';

	exports.__esModule = true;

	var _constantsJs = __webpack_require__(5);

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

	        var classArray = [consts.classNameNamespace];
	        if (pre && this.props.classPrefix) {
	            classArray.push(this.props.classPrefix);
	        }
	        if (name && name != this.props.classPrefix) {
	            classArray.push(name);
	        }

	        return classArray.join('-');
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
/* 5 */
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
	var CLASS_NAME_NAMESPACE = 'uc';

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
	    classNameNamespace: CLASS_NAME_NAMESPACE
	};
	exports.classConstants = classConstants;

/***/ },
/* 6 */
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


/***/ }
/******/ ])
});
;