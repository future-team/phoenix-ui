import React,{Component, PropTypes} from 'react';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

export default class AccordionBody extends Component{

    constructor(props, context) {
        super(props, context);

        this.height = 0;
    }

    componentDidMount(){
        this.height =  this.accordionBody.offsetHeight;
    }

    render(){
        let {visible,children,className} = this.props;

        return (
            <div {...this.props} className={classnames(
                setPhoenixPrefix('accordion-body'),
                'animated',
                className
            )} style={{
                height: visible? this.height+'px':'0'
            }}>
                <div ref={(accordionBody)=>{this.accordionBody = accordionBody;}}>
                    {children}
                </div>
            </div>
        );
    }
}