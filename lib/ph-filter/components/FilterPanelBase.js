'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var FilterPanelBase = (function (_Component) {
    _inherits(FilterPanelBase, _Component);

    function FilterPanelBase() {
        _classCallCheck(this, FilterPanelBase);

        _Component.apply(this, arguments);
    }

    FilterPanelBase.prototype.renderItemList = function renderItemList(itemList) {
        var self = this;
        return _react2['default'].Children.map(itemList, function (item) {
            var key = item.props.itemKey,
                selectedKey = self.props.selected && self.props.selected.key ? self.props.selected.key : '';
            return _react2['default'].cloneElement(item, {
                active: selectedKey == key,
                readOnly: self.props.readOnly,
                categoryChange: self.props.categoryChange,
                panelIndex: self.props.panelIndex
            });
        });
    };

    _createClass(FilterPanelBase, null, [{
        key: 'propTypes',
        value: {
            /**
             * panel下选中的item的key、value组成的对象，用于设置该panel初始状态下选中的item项
             * @property selected
             * @type Object 如{key:'ljz',value:'陆家嘴'}
             * */
            selected: _react2['default'].PropTypes.shape({
                key: _react2['default'].PropTypes.string,
                value: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.element])
            }),
            /**
             * 当不设置panel的选中项时（不选择任何item），可以设置一个默认字符展示在filter上
             * @property default
             * @type String
             * */
            'default': _react2['default'].PropTypes.string,
            /**
             * panel是否为只读模式
             * @property readOnly
             * @type Boolean
             * */
            readOnly: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            readOnly: false
        },
        enumerable: true
    }]);

    return FilterPanelBase;
})(_react.Component);

exports['default'] = FilterPanelBase;
module.exports = exports['default'];