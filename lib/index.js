/**
 * Created by panqianjin on 16/5/19.
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _InputJs = require('./Input.js');

var _InputJs2 = _interopRequireDefault(_InputJs);

exports.Input = _InputJs2['default'];

window['phoenix'] = {};
['Input'].forEach(function (name) {
  phoenix[name] = exports[name];
});