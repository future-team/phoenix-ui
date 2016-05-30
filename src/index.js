export Button from './Button';
export Input from './Input';
export Switch from './Switch';
export Row from './Row';
export Col from './Col';

window['Phoenix'] = {};

[
    'Button',
    'Input',
    'Switch',
    'Row'
].forEach(function(name){
    Phoenix[name] = exports[name];
});