'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _pmlogger = require('pmlogger');

var _pmlogger2 = _interopRequireDefault(_pmlogger);

var TYPE = 8,
    host = window.location.host,
    IpReg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])/;

var opt = {},
    isLocal = IpReg.test(host);

console.log('isLocal:', isLocal);
if (isLocal) {
    // beta
    opt.id = '65723430';
    opt.url = 'http://prism.test.sankuai.com/monitor/logstore/log/';
} else {
    // online
    opt.id = '66032663';
    opt.url = 'http://future.sankuai.com/monitor/logstore/log/';
}

opt.repeat = 1;

var pmlogger = null;

if (!pmlogger) {
    pmlogger = new _pmlogger2['default'](opt);
    // pmlogger.type = TYPE;
}

var PmLogger = function PmLogger(msg) {
    _classCallCheck(this, PmLogger);

    try {
        pmlogger.info({
            msg: msg,
            type: 8
        });
    } catch (err) {
        pmlogger.error({
            msg: err.toString(),
            type: 2
        });
    }
};

exports['default'] = PmLogger;
module.exports = exports['default'];