export Button from './Button';
export Input from './Input';
export Switch from './Switch';
export Row from './Row';
export Col from './Col';
export Tab from './Tab';
export Tabset from './Tabset';
export Label from './Label';
export Badge from './Badge';
window['Phoenix'] = {};

[
    'Button',
    'Input',
    'Switch',
    'Row',
    'Col',
    'Tabset',
    'Tab',
    'Label',
    'Badge'
].forEach(function(name){
    Phoenix[name] = exports[name];
});