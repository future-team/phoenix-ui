import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

import Row from './Row';
import Col from './Col';

/**
 * 表单元素布局方式，整齐的排列一组表单元素
 * @class FormGroup
 * @module 表单组件
 * @extends Component
 * @constructor
 * @demo form-group.js {展示}
 * @demo form-group.js {源码}
 * @show true
 * */
export default class FormGroup extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * */
        classPrefix:PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag:PropTypes.string
    };

    static defaultProps = {
        egSize:'',
        classPrefix:'form-group',
        componentTag:'form',
        classMapping : {

        }
    };

    constructor(props, context) {
        super(props, context);
    }

    renderItem(){
        let items = React.Children.map(this.props.children, (options, index)=> {

            return  React.cloneElement(options, {
                    className:classnames(
                        !options.props.single? 'ph-form-row':'',
                        options.props.className
                    )
                });
        }, this);

        return items;
    }


    render(){
        let {componentTag:Component,className,...other} = this.props;
        return (
            <Component className={
                classnames(
                    this.getProperty(true),
                    setPhoenixPrefix('row-no-padding'),
                    this.props.className
                )
            } {...other}>
                {this.renderItem() }
            </Component>
        );
    }

}