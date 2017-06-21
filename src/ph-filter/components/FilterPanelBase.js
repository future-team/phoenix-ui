import React, { Component ,PropTypes} from 'react';

export default class FilterPanelBase extends Component{
    static propTypes= {
        /**
         * panel下选中的item的key、value组成的对象，用于设置该panel初始状态下选中的item项
         * @property selected
         * @type Object 如{key:'ljz',value:'陆家嘴'}
         * */
        selected:React.PropTypes.shape({
            key: React.PropTypes.string,
            value: React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.element])
        }),
        /**
         * 当不设置panel的选中项时（不选择任何item），可以设置一个默认字符展示在filter上
         * @property default
         * @type String
         * */
        default:React.PropTypes.string,
        /**
         * panel是否为只读模式
         * @property readOnly
         * @type Boolean
         * */
        readOnly:React.PropTypes.bool
    }

    static defaultProps = {
        readOnly: false
    }

    renderItemList(itemList){
        let self=this;
        return React.Children.map(itemList,function(item){
            let key=item.props.itemKey,
                selectedKey=(self.props.selected&&self.props.selected.key)?self.props.selected.key:'';
            return (
                React.cloneElement(item,{
                    active:selectedKey==key,
                    readOnly:self.props.readOnly,
                    categoryChange:self.props.categoryChange,
                    panelIndex:self.props.panelIndex
                })
            )

        })
    }
}