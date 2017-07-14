import React, { Component ,PropTypes} from 'react'

import ButtonGroup from '../../button-group'
import Button from '../../button'

export default class FilterPanelBase extends Component{
    static propTypes= {
        selected: React.PropTypes.shape({
            key: React.PropTypes.string,
            value: React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.element])
        }),
        default: React.PropTypes.string,
        readOnly: React.PropTypes.bool
    }

    static defaultProps = {
        readOnly: false,
        buttons: null,
        default: ''
    }

    constructor(props,context){
        super(props,context)
        this.category = props.selected || {}

        this.state = {
            selectedKey: (props.selected && props.selected.key) ? props.selected.key:''
        }
    }

    renderButtons(){
        let {buttons, categoryChange} = this.props
        
        return buttons? (
            <ButtonGroup phType='footer'>
                {
                    buttons.map((button, index)=>{
                        return (
                            <Button key={index} {...button.otherProps} phSize='lg' phStyle={button.phStyle || 'primary'}
                                onClick={()=>{
                                    if(button.onHandle){
                                        button.onHandle(this.category)
                                        categoryChange(this.index, this.category)
                                    }
                                }
                            }>
                                {button.text || '确定'}
                            </Button>
                        )
                    })
                }
            </ButtonGroup>
        ): null
    }

    renderItemList(itemList){
        let _this = this,
            {selected, readOnly, categoryChange, panelIndex, buttons} = this.props
        
        return React.Children.map(itemList,function(item){
            let key = item.props.itemKey
            
            return (
                React.cloneElement(item,{
                    active: _this.state.selectedKey==key,
                    readOnly: readOnly,
                    categoryChange: _this.categoryChange.bind(_this),
                    panelIndex: panelIndex,
                    onItemChange: _this.onItemChange.bind(_this)
                })
            )
        })
    }

    categoryChange(index, category){
        let {buttons, categoryChange} = this.props

        this.index = index
        this.category = category
        // console.log(this.category)
        categoryChange(index, category, !!buttons)
    }

    onItemChange(key){
        this.setState({
            selectedKey: key
        })
    }
}