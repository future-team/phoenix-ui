export Button from './Button';
export Input from './Input';
export Switch from './Switch';
export Row from './Row';
export Col from './Col';
export Tab from './Tab';
export Tabset from './Tabset';
window['Phoenix'] = {};

[
    'Button',
    'Input',
    'Switch',
    'Row',
    'Col',
    'Tabset',
    'Tab'
].forEach(function(name){
    Phoenix[name] = exports[name];
});