import React,{Component,PropTypes} from 'react';
import classnames from 'classnames';

export default class DialogFooter extends Component{

    constructor(props, context) {
        super(props, context);
    }

    render(){
        return (
            <div {...this.props} className={classnames(
                'ph-dialog-footer',
                this.props.className,
                'btn-group  btn-group-justify clearfix'
            )}>
                {this.props.children}
            </div>
        );
    }

}