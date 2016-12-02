import React,{Component,PropTypes} from 'react';
import classnames from 'classnames';

export default class DialogTitle extends Component{

    constructor(props, context) {
        super(props, context);
    }

    render(){
        return (
            <h2 {...this.props} className={classnames(
                'dialog-title',
                this.props.className
            )}>
                {this.props.children}
            </h2>
        );
    }

}