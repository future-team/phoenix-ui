import React, { Component ,PropTypes} from 'react'
import classnames from 'classnames'
import PanelBase from './FilterPanelBase'

/**
 * 简单面板<br/>
 * - - 可通过clickCallBack设置点击显隐panel的回调。
 *
 * 主要属性和接口：
 * - - clickCallBack: 点击panel显隐的回调。
 * 
 * 如：
 * ```code
 *  <FilterContainer>
 *      <PanelCustom clickCallback={(show)=>{console.log(show)}}>
 *          ...
 *      </PanelCustom>
 *  </FilterContainer>
 * ```
 *
 * @class FilterPanelCustom
 * @module 筛选控件
 * @extends Component
 * @constructor
 * @since 2.2.0
 * @demo ph-filter|ph-filter.js {展示}
 * @show true
 * */

export default class FilterPanelCustom extends PanelBase{
    static propTypes= {
        /**
         * 当不设置panel的选中项时（不选择任何item），可以设置一个默认字符展示在filter上
         * @property default
         * @type String
         * */
        default: PropTypes.string,
        /**
         * panel是否为只读模式
         * @property readOnly
         * @type Boolean
         * */
        readOnly: PropTypes.bool,
         /**
         * 按钮数组
         * @property buttons
         * @type Array
         * */
        buttons: PropTypes.array
    }

    static defaultProps = {
        selected: null,
        readOnly: false,
        buttons: null,
        default: ''
    }

    constructor(props,context){
        super(props,context);
    }

    render(){
        var {className, buttons, children} = this.props

        return(
            this.props.show?(
                <div className={classnames(className? className:'', 'ph-filter-selector', buttons? 'ph-filter-selector-buttons':'')} >
                    {children}
                    {this.renderButtons()}
                </div>
            ): null

        )
    }
}