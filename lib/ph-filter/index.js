'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsFilterContainerJs = require('./components/FilterContainer.js');

var _componentsFilterContainerJs2 = _interopRequireDefault(_componentsFilterContainerJs);

var _componentsFilterPanelJs = require('./components/FilterPanel.js');

var _componentsFilterPanelJs2 = _interopRequireDefault(_componentsFilterPanelJs);

var _componentsFilterPanelSimpleJs = require('./components/FilterPanelSimple.js');

var _componentsFilterPanelSimpleJs2 = _interopRequireDefault(_componentsFilterPanelSimpleJs);

var _componentsFilterItemJs = require('./components/FilterItem.js');

var _componentsFilterItemJs2 = _interopRequireDefault(_componentsFilterItemJs);

var _componentsFilterItemGroupJs = require('./components/FilterItemGroup.js');

var _componentsFilterItemGroupJs2 = _interopRequireDefault(_componentsFilterItemGroupJs);

var _componentsFilterCheckboxJs = require('./components/FilterCheckbox.js');

var _componentsFilterCheckboxJs2 = _interopRequireDefault(_componentsFilterCheckboxJs);

var _componentsFilterPanelCheckboxJs = require('./components/FilterPanelCheckbox.js');

var _componentsFilterPanelCheckboxJs2 = _interopRequireDefault(_componentsFilterPanelCheckboxJs);

require('../style');

require('phoenix-styles/less/modules/tab.less');

require('phoenix-styles/less/modules/ph-filter.less');

var PhFilter = {};

PhFilter.Container = _componentsFilterContainerJs2['default'];
PhFilter.Panel = _componentsFilterPanelJs2['default'];
PhFilter.PanelSimple = _componentsFilterPanelSimpleJs2['default'];
PhFilter.Item = _componentsFilterItemJs2['default'];
PhFilter.ItemGroup = _componentsFilterItemGroupJs2['default'];
PhFilter.CheckboxContainer = _componentsFilterCheckboxJs2['default'];
PhFilter.PanelCheckbox = _componentsFilterPanelCheckboxJs2['default'];

exports['default'] = PhFilter;
module.exports = exports['default'];