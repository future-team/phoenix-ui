'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utilsComponent = require('../utils/Component');

var _utilsComponent2 = _interopRequireDefault(_utilsComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _utilsLogger = require('../utils/logger');

var _utilsLogger2 = _interopRequireDefault(_utilsLogger);

require('../style');

require('phoenix-styles/less/modules/label.less');

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
 * - 通过phLabel设置label类型，可选参考[所有label类型](http://future-team.github.io/gfs-icons/index.html#label)
 * - 通过phStyle来改变颜色, 可选primary、info、success、calm、light、gray。
 * - 通过phSize设置大小, 可选sm、md。
 * - 不提供默认回调, 但支持自定义className，事件等操作。
 *
 * 主要属性和接口：
 * - phLabel:标签类型 <br/>
 * 如：`<Label phLabel='zu'/>`
 * - phStyle:标签颜色, 默认primary <br/>
 * 如：`<Label phStyle='info'/>`
 * - phSize:标签大小, 默认sm <br/>
 * 如：`<Label phSize='lg'/>`
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
            classPrefix: _propTypes2['default'].string,
            /**
             * label类型
             * @property phLabel
             * @type String
             * @default ''
             * */
            phLabel: _propTypes2['default'].string,
            /**
             * label标签大小[sm、md], 默认为sm
             * @property phSize
             * @type string
             * @default 'sm'
             * */
            phSize: _propTypes2['default'].string,
            /**
             * label标签颜色[primary、info、success、calm、light、gray], 默认primary
             * @property phStyle
             * @type string
             * @default 'primary'
             **/
            phStyle: _propTypes2['default'].string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            phLabel: '',
            phSize: 'sm',
            phStyle: 'primary',
            classPrefix: 'label',
            classMapping: {
                'primary': 'primary',
                'info': 'info',
                'success': 'success',
                'calm': 'calm',
                'light': 'light',
                'gray': 'gray'
            }
        },
        enumerable: true
    }]);

    function Label(props, context) {
        _classCallCheck(this, Label);

        _Component.call(this, props, context);
        new _utilsLogger2['default']('Label');
    }

    Label.prototype.renderLabel = function renderLabel() {
        var _props = this.props;
        var className = _props.className;
        var style = _props.style;
        var children = _props.children;
        var phLabel = _props.phLabel;

        return _react2['default'].createElement(_icon2['default'], { className: _classnames2['default'](this.getProperty(true), className), style: this.getStyles(style), phIcon: phLabel ? 'label-' + phLabel : '' });
    };

    Label.prototype.render = function render() {
        return this.renderLabel();
    };

    return Label;
})(_utilsComponent2['default']);

exports['default'] = Label;
module.exports = exports['default'];