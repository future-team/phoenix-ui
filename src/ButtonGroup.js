/**
 * Created by mac on 15/9/8.
 */
import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 * 按钮组组件配合Button组件,提供了横、竖两种排列方式<br/>
 *  主要属性和接口：
 * <ul>
 *     <li>phType:是否自适应宽度或者垂直排列，可选'justify,tacked'默认'justify'
 *     </li>
 * </ul>
 * @class ButtonGroup
 * @module 基础组件
 * @extends Component
 * @constructor
 * @since 0.1.4
 * @demo button.js {展示}
 * @demo button.js {源码}
 * @show true
 * */
export default class ButtonGroup extends Component{

    static propTypes={
        /**
         * 是否有自适应宽度，垂直排列等属性，取值为justify(水平排列)或者tacked(垂直排列)
         * @property phType
         * @type String
         * @default 'justify'
         * */
        phType:PropTypes.string,
        /**
         * 某个按钮被按下后的回调
         * @property activeCallback
         * @type Function
         * */
        activeCallback:PropTypes.func
    };

    static defaultProps = {
        classPrefix:'button-group',
        phType:'justify',
        componentTag:'div',
        classMapping : {
            'justify':'justify',
            'tacked':'tacked'
        }
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            active:this.props.active
        };
    }

    clickHandler(e){
        let target = e.target;
        this.props.activeCallback&&this.props.activeCallback(target,target.innerHTML);
        this.setState({
            active:target.innerHTML
        })
    }

    render(){
        const {componentTag:Component} = this.props;

        let options = React.Children.map(this.props.children,(option)=>{

            let opt = React.cloneElement(option,{
                onClick:this.clickHandler.bind(this),
                active:this.state.active == option.props.children
            });
            return opt;

        },this);

        return (
            <Component {...this.props} className={
                classnames(
                    this.getProperty(true),
                    'clearfix'
                )}>{options}</Component>
        );
    }
}