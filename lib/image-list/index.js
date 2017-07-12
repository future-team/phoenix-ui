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

require("phoenix-styles/css/image-list.css");

/**
 * 图片列表组件<br/>
 * - 通过column设置图片列表的列数，1-8列。
 * - 若需要懒加载，请配合Image组件使用。
 *
 * 主要属性和接口：
 * - column:列表的列数，默认1列。<br>
 * ```code
 * <ImageList column={4} lazy>
 *  {
 *      this.state.images.map((data,index)=>{
 *          return (
 *              <dl className="ph-image-item" key={index}>
 *                  <dt>
 *                      <Image src={data.image} alt={data.title}/>
 *                  </dt>
 *                  <dd>
 *                      <p className={setPhPrefix('image-title')}>{data.title}</p>
 *                      <p className={setPhPrefix('image-desp')}>{data.desp}</p>
 *                  </dd>
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
             * 图片列数，默认1列
             * @property column
             * @type Number
             * @default 1
             * */
            column: _react.PropTypes.number
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            column: 1,
            lazy: false,
            classPrefix: 'image-list',
            classMapping: {}
        },
        enumerable: true
    }]);

    function ImageList(props, context) {
        _classCallCheck(this, ImageList);

        _Component.call(this, props, context);
    }

    ImageList.prototype.renderImageList = function renderImageList() {
        var _props = this.props;
        var column = _props.column;
        var className = _props.className;
        var children = _props.children;

        return _react2['default'].createElement(
            'div',
            { className: _classnames2['default'](this.getProperty(true), className, _utilsTool.setPhPrefix("column-" + column))
            },
            children
        );
    };

    ImageList.prototype.render = function render() {
        return this.renderImageList();
    };

    return ImageList;
})(_utilsComponent2['default']);

exports['default'] = ImageList;
module.exports = exports['default'];