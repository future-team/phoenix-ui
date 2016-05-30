import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

export default class Switch extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default btn
         * */
        classPrefix:PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * @default a
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