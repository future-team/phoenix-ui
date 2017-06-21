import React, { Component ,PropTypes} from 'react'
import classnames from 'classnames'
import PanelBase from './FilterPanelBase.js'

export default class FilterPanelSimple extends PanelBase{
    constructor(props,context){
        super(props,context);
    }

    render(){
        var itemList=this.renderItemList(this.props.children),
            {className} = this.props

        return(
            this.props.show?(
                <div className={classnames(className? className:'', "ph-filter-selector")} >
                    <div className="ph-list" >
                        <div >
                            {itemList}
                        </div>
                    </div>
                </div>
            ): null

        )
    }
}