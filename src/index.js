export Button from './Button';
export Input from './Input';
export Switch from './Switch';
export Row from './Row';
export Col from './Col';
export TableView from './TableView';
export FormGroup from './FormGroup';

window['Phoenix'] = {};

[
    'Button',
    'Input',
    'Switch',
    'Row',
    'TableView',
    'FormGroup'
].forEach(function(name){
    Phoenix[name] = exports[name];
});