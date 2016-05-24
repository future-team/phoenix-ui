import React,{ PropTypes, Component } from 'react';
import SvgIcon from 'ui-svg-icons/dist/24px';

import extend from 'extend';

export default class Icon extends Component{

    render(){
        let defaultStyle = {
            width:'18px',
            height:'18px'
        };
        return (
            <SvgIcon {...this.props} style={extend({},defaultStyle,this.props.style ||{})} />
        );
    }
}
