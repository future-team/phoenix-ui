/**
 * Created by panqianjin on 16/5/26.
 */
import React, {PropTypes,Component} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import ReactDom from 'react/lib/ReactDOM';
@ClassNameMixin
export default class Tab extends Component {
    constructor(props,context){
        super(props,context);
    }
    static defaultProps = {
        activeIndex:0,
        vertical:false
    };
    handleClick(){
        this.props.onClick && this.props.onClick();
        this.props.clickCallBack && this.props.clickCallBack(this.props.index);
    }
    isActive(){
        return this.props.index == this.props.activeIndex ? 'active':'';
    }
    isVertical(){
        return !!this.props.vertical ? '':'col';
    }
    render(){
        return(
            <li className={
                classnames(
                   this.isVertical(),
                   'tab-nav',
                   this.isActive(),
                   this.props.className
                )
            } onClick={::this.handleClick} >
                {this.props.heading}
            </li>
        )
    }
}