'use strict';

exports.__esModule = true;

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

require("phoenix-styles/less/modules/image-list.less");

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
                { className: _classnames2['default'](this.getProperty(true), className, _utilsTool.setPhPrefix("column-" + column)) },
                children
            );
        } else {
            return _react2['default'].createElement(
                'div',
                { className: _classnames2['default'](this.getProperty(true), className, _utilsTool.setPhPrefix("column-" + column)) },
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
                                { className: _utilsTool.setPhPrefix('image-title') },
                                _this.formatParams(titleField, data.title)
                            ),
                            _react2['default'].createElement(
                                'p',
                                { className: _utilsTool.setPhPrefix('image-desp') },
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