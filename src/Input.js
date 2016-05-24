/**
 * Created by panqianjin on 16/5/24.
 */
import React,{ PropTypes, Component } from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
/**
 *  - input组件，与基本的input类型相对应，改变了默认的风格，<br/>
 *  - 使用方式还是与基本的input相同，例如'Input type="radio" name='nba' label="76ers" value="76ers"/'<br/>
 *  - 支持自定义className，内联style，以及自定义属性<br/>
 *  - 针对radio和checkbox，有disabled,checked等属性，对应于不同的状态。具体如下<br/>
 *  主要属性和接口：
 * <ul>
 *     <li>type:input的具体类型，对应基本input的type。默认为text<br>
 *         如：<code>
 *              Input type="radio"
 *            </code>
 *     </li>
 *     <li>label:标签内容，针对radio和checkbox类型。默认为空<br>
 *         如：<code>
 *              Input type="radio" label="76ers"
 *            </code>
 *     </li>
 *     <li>checked:选中状态，同样针对radio和checkbox类型。默认为false<br>
 *         如：<code>
 *              Input type="radio" label="76ers" checked
 *            </code>
 *     </li>
 *     <li>disabled:不可操作状态，再次针对radio和checkbox类型。默认为false<br>
 *         如：<code>
 *              Input type="radio" label="76ers" disabled
 *            </code>
 *     </li>
 * </ul>
 * @class Input
 * @module form(表单)
 * @extend Component
 * @constructor
 * @since 0.1.0
 * @demo input.js {展示}
 * @demo input.js {源码}
 * @show true
 * */
@ClassNameMixin
export default class Input extends Component {
    render() {
        return (
            <div className={classnames(
                   'test'
                )} >
                <input {...this.props} />
            </div>
        );
    }

}