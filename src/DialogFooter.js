import React,{Component,PropTypes} from 'react';
import classnames from 'classnames';

export default class DialogFooter extends Component{

    constructor(props, context) {
        super(props, context);
    }

    render(){
        return (
            <div {...this.props} className={classnames(
                'dialog-footer',
                this.props.className
            )}>
                {this.props.children}
            </div>
        );
    }

}