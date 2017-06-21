import React, { Component ,PropTypes} from 'react'
import classnames from 'classnames'

export default class Item extends Component{
    constructor(props,context){
        super(props,context);
    }

    static propTypes= {
        /**
         * 当使用FilterPanel(支持二级选择)时，itemGroup的label属性被用来渲染一级选项，item自身用来渲染二级
         * @property label
         * @type 字符串或者标签
         * */
        label: React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.element])
    }

    static defaultProps = {
        label: ''
    }

    itemClickHandle(){
        if(this.props.readOnly) return;
        this.props.mainKeyChange(this.props.groupIndex)
    }

    render(){
        return (
            <div className={classnames('item ph-tab-nav', this.props.active ? 'active':'')}
                onClick={this.itemClickHandle.bind(this)}
            >
                <a href="javascript:;">{this.props.label}</a>
            </div>
        )
    }
}