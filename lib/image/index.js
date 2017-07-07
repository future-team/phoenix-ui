'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsComponent = require('../utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsTool = require('../utils/Tool');

require("phoenix-styles/less/modules/image.less");

/**
 * 图片组件<br/>
 * - 
 *
 * 主要属性和接口：
 * - 
 * ```code
 * 
 * ```
 * 
 * @class Image
 * @module 操作类组件
 * @extends Component
 * @constructor
 * @since 1.7.0
 * @demo image|image.js {展示}
 * @show true
 * */

var Images = (function (_Component) {
    _inherits(Images, _Component);

    _createClass(Images, null, [{
        key: 'propTypes',
        value: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'image'
             * */
            classPrefix: _react.PropTypes.string,
            /**
             * 是否懒加载
             * @property lazy
             * @type Boolean
             * @default false
             * */
            lazy: _react.PropTypes.bool,
            /**
             * 默认图片地址
             * @property defaultSrc
             * @type String
             * @default null
             * */
            defaultSrc: _react.PropTypes.string,
            /**
             * 图片地址
             * @property src
             * @type String
             * @default null
             * */
            src: _react.PropTypes.string,
            align: _react.PropTypes.string,
            phSize: _react.PropTypes.oneOf(['cover', 'contain'])
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            src: null,
            align: 'center',
            lazy: false,
            defaultSrc: null,
            classPrefix: 'image',
            classMapping: {}
        },
        enumerable: true
    }]);

    function Images(props, context) {
        _classCallCheck(this, Images);

        _Component.call(this, props, context);

        // 对默认图片预加载
        this.defaultImagePreload();

        this.state = {
            src: this.getInitSrc()
        };

        this.scrollHandle = this.scrollHandle.bind(this);
        window.addEventListener('scroll', this.scrollHandle, false);
    }

    Images.prototype.defaultImagePreload = function defaultImagePreload() {
        var defaultSrc = this.props.defaultSrc;

        if (defaultSrc) {
            var img = new Image();
            img.src = defaultSrc;
        }
    };

    Images.prototype.getInitSrc = function getInitSrc() {
        var _props = this.props;
        var defaultSrc = _props.defaultSrc;
        var src = _props.src;
        var lazy = _props.lazy;

        if (defaultSrc) return defaultSrc;
        if (!lazy) {
            return src;
        } else {
            return null;
        }
    };

    Images.prototype.scrollHandle = function scrollHandle() {
        this.lazyLoad();
    };

    Images.prototype.lazyLoad = function lazyLoad() {
        this.bodyTop = document.body.scrollTop;
        this.bodyHeight = document.body.offsetHeight;
        this.imageTop = this.phImage.offsetTop;

        if (this.bodyTop + this.bodyHeight >= this.imageTop) {
            this.imageLoad();
        }
    };

    Images.prototype.componentDidMount = function componentDidMount() {
        var _props2 = this.props;
        var defaultSrc = _props2.defaultSrc;
        var lazy = _props2.lazy;

        if (defaultSrc && !lazy) this.imageLoad();
        if (lazy) this.lazyLoad();
    };

    Images.prototype.imageLoad = function imageLoad() {
        var _this = this;

        var src = this.props.src;

        var img = new Image();
        img.src = src;

        if (img.complete) {
            // 如果已经存在，直接加载
            this.setState({ src: src });
            return;
        }

        img.onload = function () {
            // 否则等到图片加载完成
            img.onload = null;

            _this.setState({ src: src });
        };
    };

    Images.prototype.componentWillUnmount = function componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandle, false);
    };

    Images.prototype.renderImage = function renderImage() {
        var _this2 = this;

        var _props3 = this.props;
        var className = _props3.className;
        var children = _props3.children;

        return _react2['default'].createElement(
            'div',
            { className: _classnames2['default'](this.getProperty(true), className), ref: function (phImage) {
                    _this2.phImage = phImage;
                } },
            _react2['default'].createElement('img', _extends({}, this.props, { src: this.state.src }))
        );
    };

    Images.prototype.render = function render() {
        return this.renderImage();
    };

    return Images;
})(_utilsComponent2['default']);

exports['default'] = Images;
module.exports = exports['default'];