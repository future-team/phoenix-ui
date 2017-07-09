import FilterContainer from './components/FilterContainer.js';
import Panel from "./components/FilterPanel.js";
import PanelSimple from "./components/FilterPanelSimple.js";
import Item from "./components/Item.js";
import ItemGroup from "./components/ItemGroup.js";
import FilterCheckbox from "./components/FilterCheckbox.js";
import PanelCheckbox from './components/FilterPanelCheckbox.js';

import "phoenix-styles/css/ph-filter.css"

let PhFilter = {}

PhFilter.FilterContainer = FilterContainer
PhFilter.Panel = Panel
PhFilter.PanelSimple = PanelSimple
PhFilter.Item = Item
PhFilter.ItemGroup = ItemGroup
PhFilter.FilterCheckbox = FilterCheckbox
PhFilter.PanelCheckbox = PanelCheckbox

export default PhFilter