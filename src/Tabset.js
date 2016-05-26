/**
 * Created by panqianjin on 16/5/26.
 */
import React,{PropTypes, Component} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Tab from './Tab.js';
@ClassNameMixin
export default
class Tabset extends Component {

    static defaultProps = {
        activeIndex: 0,
        vertical: false,
        width: 20
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            activeIndex: this.props.activeIndex
        }
    }

    isVertial() {
        return !!this.props.vertical ? 'vertical row' : '';
    }

    isActive(index) {
        return index == this.state.activeIndex ? 'active' : '';
    }

    clickCallBack(index) {
        if (index != this.state.activeIndex) {
            this.setState({
                activeIndex: index
            })
        }
    }

    getClass(flag) {
        if(flag){
            let cols = 'col-'+this.props.width;
            return !this.props.vertical ? 'row': 'col-20';
        }else{
            return this.props.vertical ? 'col': '';
        }

    }

    render() {
        let panels = [];
        let headings = React.Children.map(this.props.children, (options, index)=> {
            let { clickCallBack,...other} = options.props;
            let opt = React.cloneElement(options, {
                index: index,
                activeIndex: this.state.activeIndex,
                clickCallBack: this.clickCallBack.bind(this),
                vertical: this.props.vertical
            });

            let panel = <div className={classnames(
                   'tab-panel',
                   this.isActive(index),
                   options.props.className
                )}>
                {options.props.children}
            </div>;
            panels.push(panel);
            return opt;
        }, this);
        return (
            <div className={classnames(
               'ui-tabs',
               this.isVertial(),
               this.props.className
            )}>
                <ul className={this.getClass(true)}>
                    {headings}
                </ul>
                <div className={classnames(
                    this.getClass(false),
                    'tab-bd"'
                )}>
                    {panels}
                </div>
            </div>)
    }
}