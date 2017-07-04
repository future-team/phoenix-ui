import viewport from './utils/Viewport'
viewport();

import catBrowser from './utils/CatBrowser';

export Button from './button';
export ButtonGroup from './button-group';
export Input from './input';
export Checkbox from './checkbox';
export Radio from './radio';
export Textarea from './textarea';
export Switch from './switch';
export Row from './row';
export Col from './col';
export Tab from './tab/Tab';
export Tabset from './tab/Tabset';
export Label from './label';
export Badge from './badge';
export Star from './star';
export Drag from './drag';
export Swipe from './swipe';
export Grid from './grid';
export Dialog from './modal/Dialog';
export Alert from './modal/Alert';
export Prompt from './modal/Prompt';
export Toast from './toast';
export Popup from './popup';
export Accordion from './accordion';
export Popover from './popover';
export Slider from './slider';
export Animate from './animate';
export Icon from './icon';
export Menu from './menu/Menu';
export LoadingList from './loading-list';
export ImageList from './image-list';
export Steps from './steps';
export List from './list';
export SearchBar from './search-bar';
export PullUp from './pullup';

// 控件
export PhFilter from './ph-filter'

//接入cat－browser
catBrowser({
    moduleName:'phoenix-ui',
    isOnlyDp:false
});
