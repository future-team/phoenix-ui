import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ButtonGroup from '../../button-group'
import Button from '../../button'

export default class FilterPanelBase extends Component{
    static propTypes= {
        selected: PropTypes.shape({
            key: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
            value: PropTypes.oneOfType([PropTypes.string,PropTypes.element])
        }),
        default: PropTypes.string,
        readOnly: PropTypes.bool
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
            selectedKey: this.getSelectedKey(props)
        }
    }

    getSelectedKey(props){
        return (props.selected && props.selected.key) ? props.selected.key: ''
    }

    componentWillReceiveProps(nextProps){
        if(this.props.selected !== nextProps.selected){
            this.setState({
                selectedKey: this.getSelectedKey(nextProps)
            }, ()=>{
                this.props.setCatList()
            })
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
        
        return React.Children.map(itemList,function(item,index){
            let key = item.props.itemKey
            
            return (
                React.cloneElement(item,{
                    index: index,
                    active: _this.state.selectedKey==key,
                    readOnly: readOnly,
                    categoryChange: _this.categoryChange.bind(_this),
                    panelIndex: panelIndex,
                    onItemChange: _this.onItemChange.bind(_this)
                })
            )
        })
    }

    categoryChange(index, category, options){
        let {buttons, categoryChange} = this.props,
            {activeGroupIndex} = this.state
        
        this.index = index
        this.category = category

        if(activeGroupIndex || activeGroupIndex==0) options.groupIndex = activeGroupIndex
        
        categoryChange(index, category, !!buttons, options)
    }

    onItemChange(key){
        this.setState({
            selectedKey: key
        })
    }
}