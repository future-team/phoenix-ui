'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ClassNameMixin = require('./ClassNameMixin');

var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

var _PropertyMixin = require('./PropertyMixin');

var _PropertyMixin2 = _interopRequireDefault(_PropertyMixin);

var _MethodMixin = require('./MethodMixin');

var _MethodMixin2 = _interopRequireDefault(_MethodMixin);

var _extend = require('extend');

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
        // console.log(propConfig)
        var type = 'property';
        if (propConfig) {
            // this.filterClass();
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