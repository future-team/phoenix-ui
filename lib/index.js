'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Button2 = require('./Button');

var _Button3 = _interopRequireDefault(_Button2);

exports.Button = _Button3['default'];

var _Input2 = require('./Input');

var _Input3 = _interopRequireDefault(_Input2);

exports.Input = _Input3['default'];

var _Switch2 = require('./Switch');

var _Switch3 = _interopRequireDefault(_Switch2);

exports.Switch = _Switch3['default'];

var _Row2 = require('./Row');

var _Row3 = _interopRequireDefault(_Row2);

exports.Row = _Row3['default'];

var _Col2 = require('./Col');

var _Col3 = _interopRequireDefault(_Col2);

exports.Col = _Col3['default'];

var _Tab2 = require('./Tab');

var _Tab3 = _interopRequireDefault(_Tab2);

exports.Tab = _Tab3['default'];

var _Tabset2 = require('./Tabset');

var _Tabset3 = _interopRequireDefault(_Tabset2);

exports.Tabset = _Tabset3['default'];

var _Label2 = require('./Label');

var _Label3 = _interopRequireDefault(_Label2);

exports.Label = _Label3['default'];

var _Badge2 = require('./Badge');

var _Badge3 = _interopRequireDefault(_Badge2);

exports.Badge = _Badge3['default'];

window['Phoenix'] = {};

['Button', 'Input', 'Switch', 'Row', 'Col', 'Tabset', 'Tab', 'Label', 'Badge'].forEach(function (name) {
    Phoenix[name] = exports[name];
});