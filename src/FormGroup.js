import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import {setPhoenixPrefix} from './utils/Tool';

/**
 * 表单元素布局方式，整齐的排列一组表单元素<br/>
 *
 * 示例:
 * - 单列, 如:
 * ```code
 *     <FormGroup>
 *         <Row single>
 *             <Col>
 *                 <Input type="text" placeholder="姓名" />
 *             </Col>
 *         </Row>
 *     </FormGroup>
 * ```
 * - 多列, 如:
 * ```code
 *     <FormGroup>
 *         <Row>
 *             <Col>
 *                 <label>省</label>
 *                 <Input type="text" placeholder="省" />
 *             </Col>
 *             <Col>
 *                 <label>市</label>
 *                 <Input type="text" placeholder="市" />
 *             </Col>
 *         </Row>
 *     </FormGroup>
 * ```
 *
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
         * @default 'form-group'
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
        classPrefix:'form-group',
        componentTag:'form',
        classMapping : {}
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