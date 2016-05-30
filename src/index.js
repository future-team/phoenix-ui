/**
 * Created by panqianjin on 16/5/19.
 */
export Input from './Input.js';
export PhSwipe from 'ph-swipe';
if(window['phoenix'] ){
    window['phoenix'] = {};
}

['Input','PhSwipe'].forEach(function(name){
    phoenix[name] = exports[name];
});