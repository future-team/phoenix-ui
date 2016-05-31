/**
 * Created by panqianjin on 16/5/26.
 */
'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsClassNameMixin = require('./utils/ClassNameMixin');

var _utilsClassNameMixin2 = _interopRequireDefault(_utilsClassNameMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TabJs = require('./Tab.js');

var _TabJs2 = _interopRequireDefault(_TabJs);

var Tabset = (function (_Component) {
    _inherits(Tabset, _Component);

    _createClass(Tabset, null, [{
        key: 'defaultProps',
        value: {
            activeIndex: 0,
            vertical: false,
            width: 20
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

    Tabset.prototype.clickCallBack = function clickCallBack(index) {
        if (index != this.state.activeIndex) {
            this.setState({
                activeIndex: index
            });
        }
    };

    Tabset.prototype.getClass = function getClass(flag) {
        if (flag) {
            var cols = 'col-' + this.props.width;
            return !this.props.vertical ? 'row' : 'col-20';
        } else {
            return this.props.vertical ? 'col' : '';
        }
    };

    Tabset.prototype.render = function render() {
        var _this = this;

        var panels = [];
        var headings = _react2['default'].Children.map(this.props.children, function (options, index) {
            var _options$props = options.props;
            var clickCallBack = _options$props.clickCallBack;

            var other = _objectWithoutProperties(_options$props, ['clickCallBack']);

            var opt = _react2['default'].cloneElement(options, {
                index: index,
                activeIndex: _this.state.activeIndex,
                clickCallBack: _this.clickCallBack.bind(_this),
                vertical: _this.props.vertical
            });

            var panel = _react2['default'].createElement(
                'div',
                { className: _classnames2['default']('tab-panel', _this.isActive(index), options.props.className) },
                options.props.children
            );
            panels.push(panel);
            return opt;
        }, this);
        return _react2['default'].createElement(
            'div',
            { className: _classnames2['default']('ui-tabs', this.isVertial(), this.props.className) },
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