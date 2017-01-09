import React,{Component,PropTypes} from 'react';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

export default class DialogBody extends Component{

    constructor(props, context) {
        super(props, context);
    }

    render(){
        return (
            <div {...this.props} className={classnames(
                setPhoenixPrefix('dialog-body'),
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }

}