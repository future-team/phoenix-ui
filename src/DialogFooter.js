import React,{Component,PropTypes} from 'react';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

export default class DialogFooter extends Component{

    constructor(props, context) {
        super(props, context);
    }

    render(){
        return (
            <div {...this.props} className={classnames(
                setPhoenixPrefix('dialog-footer'),
                this.props.className,
                'clearfix'
            )}>
                {this.props.children}
            </div>
        );
    }

}