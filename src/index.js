export Button from './Button';
export ButtonGroup from './ButtonGroup';

export Input from './Input';
export Switch from './Switch';
export Row from './Row';
export Col from './Col';
export TableView from './TableView';
export FormGroup from './FormGroup';
export Tab from './Tab';
export Tabset from './Tabset';
export Label from './Label';
export Badge from './Badge';
export Star from './Star';
export Grid from './Grid';
window['Phoenix'] = {};

[
    'Button',
    'Input',
    'Switch',
    'Row',
    'TableView',
    'FormGroup',
    'Col',
    'Tabset',
    'Tab',
    'Label',
    'Badge',
    'Star',
    'Grid',
    'ButtonGroup'
].forEach(function(name){
    Phoenix[name] = exports[name];
});