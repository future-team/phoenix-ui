/**
 * Created by mac on 16/1/3.
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('./warning');

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
        ucSize: function ucSize(val) {
            return getVal(['lg', 'sm', 'default', 'xs', 'md'], val);
        },
        ucStyle: function ucStyle(val) {
            return getVal(['light', 'positive', 'calm', 'balanced', 'energized', 'assertive', 'lightbrown', 'lightgray'], val);
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
        ucHref: true,
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
        },
        icon: function icon(val) {
            return {
                type: 'property',
                value: val
            };
        }
    };

    obj.prototype.properties = properties;
};

module.exports = exports['default'];