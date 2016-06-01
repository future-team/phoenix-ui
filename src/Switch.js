import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 * 开关切换，仿真ios的开关控件
 * @class Switch
 * @module Form
 * @extends Component
 * @constructor
 * @demo switch.js {展示}
 * @demo switch.js {源码}
 * @show true
 * */
export default class Switch extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type Stringx
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
        componentTag:'div',
        classMapping : {

        }
    };

    constructor(props, context) {
        super(props, context);
    }

    render(){

        return (
            <label className={
                classnames(
                    'label-switch',
                    this.getProperty(),
                    this.props.className
                )
                }>
            <input  type="checkbox" {...this.props} />
                <div className="checkbox"></div>
            </label>
        );
    }

}