import React, { Component ,PropTypes} from 'react'
import classnames from 'classnames'
import Input from '../../input'

export default class Item extends Component{
    static propTypes= {
        /**
         * item项的唯一标示，必填项
         * @property itemKey
         * @type String|Number
         * */
        itemKey:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * 选中之后显示的文字，必填项
         * @property itemLabel
         * @type String
         * */
        itemLabel: PropTypes.string,
        /**
         * 是否是选择全部的checkbox，可选all
         * @property type
         * @type String
         * @default 无
         * */
        type: PropTypes.string,
        /**
         * 状态
         * @property disabled
         * @type Boolean
         * @default false
         * */
        disabled: PropTypes.bool
    }

    static defaultProps = {
        disabled: false,
        itemLabel: ''
    }

    constructor(props,context){
        super(props,context);
        
        this.state={
            active: this.props.active? this.props.active:false
        }
    }

    clickCallback(){
        if(this.props.readOnly || this.props.filterType){
            return;
        }
        this.props.categoryChange&&this.props.categoryChange(this.props.panelIndex,{
            key:this.props.itemKey,
            value:this.props.itemLabel
        },this.props.refValue)
    }

    onChange(e){
        let {mainKey, itemKey} = this.props;
        this.props.onItemChange(mainKey, itemKey, e);
    }

    renderChildren(){
        let {filterType, checked, disabled, children} = this.props;
        
        if(filterType){
            return <Input type="checkbox" label={children} disabled={disabled} checked={checked && !disabled} onChange={::this.onChange} />;
        }else{
            return children;
        }
    }

    render(){
        return (
            <div className={classnames('ph-list-item', this.props.active ? 'active':'', this.props.disabled? 'disabled':'')}
                onClick={::this.clickCallback}
            >
                {this.renderChildren()}
            </div>
        )
    }
}