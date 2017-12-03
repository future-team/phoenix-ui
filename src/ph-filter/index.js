import FilterContainer from './components/FilterContainer.js'
import Panel from './components/FilterPanel.js'
import PanelSimple from './components/FilterPanelSimple.js'
import Item from './components/FilterItem.js'
import ItemGroup from './components/FilterItemGroup.js'
import FilterCheckbox from './components/FilterCheckbox.js'
import PanelCheckbox from './components/FilterPanelCheckbox.js'
import PanelCustom from './components/FilterPanelCustom.js'

import '../style'
import 'phoenix-styles/less/modules/tab.less'
import 'phoenix-styles/less/modules/ph-filter.less'

let PhFilter = {}

PhFilter.Container = FilterContainer
PhFilter.Panel = Panel
PhFilter.PanelSimple = PanelSimple
PhFilter.Item = Item
PhFilter.ItemGroup = ItemGroup
PhFilter.CheckboxContainer = FilterCheckbox
PhFilter.PanelCheckbox = PanelCheckbox
PhFilter.PanelCustom = PanelCustom

export default PhFilter