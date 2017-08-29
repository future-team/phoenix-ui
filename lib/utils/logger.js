'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _pmlogger = require('pmlogger');

var _pmlogger2 = _interopRequireDefault(_pmlogger);

var TYPE = 8;

var opt = {
    id: '65723430',
    //上报地址
    url: 'http://prism.test.sankuai.com/monitor/logstore/log/'
};

var pmlogger = null;

if (!pmlogger) {
    pmlogger = new _pmlogger2['default'](opt);
    pmlogger.type = TYPE;
}

exports['default'] = pmlogger;
module.exports = exports['default'];