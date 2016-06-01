import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import Row from './Row';
import Col from './Col';

/**
 * 表单元素布局方式，整齐的排列一组表单元素
 * @class FormGroup
 * @module Form
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
        classPrefix:'',
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
                        {
                            'input-row':!options.props.single
                        },
                        this.props.className
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
                    'row-no-padding',
                    'input-group',
                    this.getProperty(),
                    this.props.className
                )
            } {...other}>
                {this.renderItem() }
            </Component>
        );
    }

}