/**
 * Created by mac on 16/1/3.
 */
'use strict';

exports.__esModule = true;

var _Tool = require('./Tool');

exports['default'] = function (obj) {

    var getVal = function getVal(vals, val) {
        var result = (vals.join(',') + ',').match(val.toLowerCase() + ',') != null ? val : '';
        if (!result) {
            _Tool.warning('属性的取值 %s 不在设定集合 %s 里', val, vals.join(','));
        }
        return result;
    };

    var properties = {
        /*以下属性都是数组里固定值*/
        //类型
        phType: function phType(val) {
            return getVal(['default', 'tacked', 'justify', 'segmente', 'footer'], val);
        },
        phSize: function phSize(val) {
            return getVal(['default', 'xlg', 'lg', 'md', 'sm', 'xs', 'cover', 'contain'], val);
        },
        phStyle: function phStyle(val) {
            return getVal(['default', 'primary', 'info', 'success', 'error', 'warning', 'danger', 'link', 'gray', 'light', 'positive', 'calm', 'balanced', 'energized', 'assertive', 'lightbrown', 'lightgray', 'tip'], val);
        },
        phStatus: function phStatus(val) {
            getVal(['diabled', 'active', 'enable'], val);
        },
        align: function align(val) {
            return getVal(['center', 'left', 'middle', 'auto', 'top', 'right', 'bottom', 'stretch', 'baseline', 'start', 'end'], val);
        },
        placement: function placement(val) {
            return getVal(['top', 'bottom', 'right', 'left', 'left-full', 'right-full', 'full-screen'], val);
        },
        /*以下属性没有取值，需要的时候添加对应的属性即可*/
        disabled: true,
        active: true,
        radius: true,
        round: true,
        clearfix: true,
        phHref: true,
        show: true,
        hide: true,
        block: true,
        hollow: true,
        heading: true,
        tail: true,
        required: true,
        stable: true,
        // error: true,
        // clear:true,
        // visible:true,

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
        width: (function (val) {
            return '' + val;
        }).bind(obj),
        offset: (function (val) {
            return 'offset-' + val;
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