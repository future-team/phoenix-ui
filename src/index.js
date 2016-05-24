/**
 * Created by panqianjin on 16/5/19.
 */
export Input from './Input.js';
window['phoenix'] = {};
['Input'].forEach(function(name){
    phoenix[name] = exports[name];
});