import React,{Component,PropTypes} from 'react';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

export default class AccordionHeader extends Component{

    constructor(props, context) {
        super(props, context);
    }

    render(){
        let {className, onChange} = this.props;

        return (
            <div className={classnames(
                    setPhoenixPrefix('accordion-header'),
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