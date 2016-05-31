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

var _TableView2 = require('./TableView');

var _TableView3 = _interopRequireDefault(_TableView2);

exports.TableView = _TableView3['default'];

var _FormGroup2 = require('./FormGroup');

var _FormGroup3 = _interopRequireDefault(_FormGroup2);

exports.FormGroup = _FormGroup3['default'];

window['Phoenix'] = {};

['Button', 'Input', 'Switch', 'Row', 'TableView', 'FormGroup'].forEach(function (name) {
    Phoenix[name] = exports[name];
});