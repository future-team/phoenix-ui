import React,{Component,PropTypes} from 'react';
import classnames from 'classnames';

export default class AccordionHeader extends Component{

    constructor(props, context) {
        super(props, context);
    }

    render(){
        let {className, onChange} = this.props;

        return (
            <div className={classnames(
                    'accordion-header',
                    className
                )}
                onClick={onChange}
                {...this.props}
            >
                {this.props.children}
            </div>
        );
    }
}