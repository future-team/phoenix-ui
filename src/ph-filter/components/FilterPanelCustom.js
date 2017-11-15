import React, { Component ,PropTypes} from 'react'
import classnames from 'classnames'
import PanelBase from './FilterPanelBase'

/**
 * 简单面板<br/>
 * - 可通过selected设置选中的项目，格式如`{key:'ljz',value:'陆家嘴'}`。
 * - 可通过default设置没有选项时的默认显示文字。
 * - 可通过readOnly设置当前面板是否为只读模式。
 * - 可通过buttons设置底部按钮组的样式、文字、回调等，格式如`[{text:'取消', phStyle:'info', onHandle:this.cancelChoose.bind(this), otherProps: {hollow:true}}]`。
 *
 * 主要属性和接口：
 * - selected: 默认打开的面板。
 * - default: 是否显示筛选头部。
 * - readOnly: 有效选择的回调。
 * - buttons: 有效选择的回调。
 * 
 * 如：
 * ```code
 *  this.state = {
 *      panel1:[
 *          {key:'sndq',value:'上南地区'},
 *          {key:'ljz',value:'陆家嘴'},
 *          {key:'bbb',value:'八佰伴'},
 *          {key:'pdxq',value:'浦东新区'}
 *      ]
 *  }
 * ...
 *  const buttons = [
 *      {onHandle: this.onSubmit.bind(this)}
 *  ]
 * ...
 *  <FilterContainer>
 *      <PanelSimple readOnly selected={{key:'ljz',value:'陆家嘴'}} buttons={buttons}>
 *          {
 *              this.state.panel1.map(function(item){
 *                  return <Item key={item.key} itemKey={item.key}>{item.value}</Item>
 *              })
 *          }
 *      </PanelSimple>
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