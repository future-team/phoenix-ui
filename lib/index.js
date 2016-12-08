'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsCatBrowserJs = require('./utils/CatBrowser.js');

var _utilsCatBrowserJs2 = _interopRequireDefault(_utilsCatBrowserJs);

var _Button2 = require('./Button');

var _Button3 = _interopRequireDefault(_Button2);

exports.Button = _Button3['default'];

var _ButtonGroup2 = require('./ButtonGroup');

var _ButtonGroup3 = _interopRequireDefault(_ButtonGroup2);

exports.ButtonGroup = _ButtonGroup3['default'];

var _Input2 = require('./Input');

var _Input3 = _interopRequireDefault(_Input2);

exports.Input = _Input3['default'];

var _Textarea2 = require('./Textarea');

var _Textarea3 = _interopRequireDefault(_Textarea2);

exports.Textarea = _Textarea3['default'];

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

var _Star2 = require('./Star');

var _Star3 = _interopRequireDefault(_Star2);

exports.Star = _Star3['default'];

var _Drag2 = require('./Drag');

var _Drag3 = _interopRequireDefault(_Drag2);

exports.Drag = _Drag3['default'];

var _Swipe2 = require('./Swipe');

var _Swipe3 = _interopRequireDefault(_Swipe2);

exports.Swipe = _Swipe3['default'];

var _Grid2 = require('./Grid');

var _Grid3 = _interopRequireDefault(_Grid2);

exports.Grid = _Grid3['default'];

var _Dialog2 = require('./Dialog');

var _Dialog3 = _interopRequireDefault(_Dialog2);

exports.Dialog = _Dialog3['default'];

var _Toast2 = require('./Toast');

var _Toast3 = _interopRequireDefault(_Toast2);

exports.Toast = _Toast3['default'];

var _Popup2 = require('./Popup');

var _Popup3 = _interopRequireDefault(_Popup2);

exports.Popup = _Popup3['default'];

var _Accordion2 = require('./Accordion');

var _Accordion3 = _interopRequireDefault(_Accordion2);

exports.Accordion = _Accordion3['default'];

var _Popover2 = require('./Popover');

var _Popover3 = _interopRequireDefault(_Popover2);

exports.Popover = _Popover3['default'];

var _Whisper2 = require('./Whisper');

var _Whisper3 = _interopRequireDefault(_Whisper2);

exports.Whisper = _Whisper3['default'];

var _Slider2 = require('./Slider');

var _Slider3 = _interopRequireDefault(_Slider2);

exports.Slider = _Slider3['default'];

var _Animate2 = require('./Animate');

var _Animate3 = _interopRequireDefault(_Animate2);

exports.Animate = _Animate3['default'];

//接入cat－browser
_utilsCatBrowserJs2['default']({
    moduleName: 'phoenix-ui',
    isOnlyDp: false
});
window['Phoenix'] = {};

['Button', 'Input', 'Textarea', 'Switch', 'Row', 'TableView', 'FormGroup', 'Col', 'Tabset', 'Tab', 'Label', 'Badge', 'Star', 'Drag', 'Swipe', 'Grid', 'ButtonGroup', 'Dialog', 'Toast', 'Popup', 'Accordion', 'Popover', 'Whisper', 'Slider', 'Animate'].forEach(function (name) {
    Phoenix[name] = exports[name];
});