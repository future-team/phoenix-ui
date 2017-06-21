import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 * 按钮组组件<br/>
 * - 按钮组组件配合Button组件,提供了横、竖两种排列方式, 可选justify,tacked。
 * - 可通过onButtongroupChange实现点击回调。
 *
 * 主要属性和接口：
 * - phType:是否自适应宽度或者垂直排列, 默认justify <br/>
 * 如:
 * ```code
 *     <ButtonGroup phType="tacked">
 *         <Button block>tacked1</Button>
 *         <Button block>tacked2</Button>
 *     </ButtonGroup>
 * ```
 * - onButtongroupChange:点击按钮组的回调函数。<br/>
 * ```code
 *     <ButtonGroup onButtongroupChange={function(target,html){console.log(target,html);}}>
 *         <Button>tacked1</Button>
 *         <Button>tacked2</Button>
 *     </ButtonGroup>
 * ```
 *
 * @class ButtonGroup
 * @module 基础组件
 * @extends Component
 * @constructor
 * @since 0.1.4
 * @demo buttongroup|button-group.js {展示}
 * @show true
 * */
export default class ButtonGroup extends Component{

    static propTypes={
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'button-group'
         * */
        classPrefix: PropTypes.string,
        /**
         * 是否有自适应宽度，垂直排列等属性，取值为justify(水平排列)、tacked(垂直排列)、segmente(分割排列)
         * @property phType
         * @type String
         * @default 'default'
         * */
        phType:PropTypes.string,
        /**
         * 按钮被按下后的回调
         * @method onButtongroupChange
         * @type Function
         * */
        onButtongroupChange:PropTypes.func
    };

    static defaultProps = {
        activeIndex: 0,
        phType:'default',
        classPrefix:'button-group',
        componentTag:'div',
        classMapping : {
            'default':'default',
            'justify':'justify',
            'tacked':'tacked',
            'segmente':'segmente'
        }
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            activeIndex:this.props.activeIndex
        };
    }

    componentWillReceiveProps(nextProps){
         if(this.state.activeIndex != nextProps.activeIndex) this.setState({activeIndex: nextProps.activeIndex});
    }

    clickHandler(index){
        if(this.props.phType == 'default') return;

        this.props.onButtongroupChange&&this.props.onButtongroupChange(index);

        this.setState({
            activeIndex: index
        })
    }

    render(){
        const {componentTag:Component, children} = this.props;

        let options = React.Children.map(children,(option,index)=>{
            
            let opt = React.cloneElement(option,{
                clickHandle: this.clickHandler.bind(this,index),
                hollow: this.state.activeIndex != index
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