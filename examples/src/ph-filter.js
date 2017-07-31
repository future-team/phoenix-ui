import React, { Component } from "react"

import PhFilter from "phoenix-ui/lib/ph-filter"
import Code from "./code/code"

const Container = PhFilter.Container,
      PanelSimple = PhFilter.PanelSimple,
      Panel = PhFilter.Panel,
      Item = PhFilter.Item,
      ItemGroup = PhFilter.ItemGroup

export default class phFilter extends Component {

    constructor(props,context){
        super(props,context);
        this.state={
            panel1:[],
            panel2:{},
            selected2: {key:'m_sryy',value:'私人影院'},
            panel3:[],
        }
    }

    componentDidMount(){
        var self=this;

        setTimeout(function(){
            self.setState({
                panel1:[
                    {key:'sndq',value:'上南地区'},
                    {key:'ljz',value:'陆家嘴'},
                    {key:'bbb',value:'八佰伴'},
                    {key:'pdxq',value:'浦东新区'}
                ],
                panel2:{
                    '美食':[
                        {key:'f_bbc',value:'本帮江浙菜'},
                        {key:'f_rhll',value:'日韩料理'},
                        {key:'f_hg',value:'火锅'},
                        {key:'f_zzc',value:'自助餐'},
                        {key:'f_xyxc',value:'宵夜小吃'}
                    ],
                    '电影':[
                        {key:'m_sryy',value:'私人影院'},
                        {key:'m_fyt',value:'放映厅'}
                    ],
                    '购物':[
                        {key:'s_vz',value:'女装'},
                        {key:'s_nz',value:'男装'},
                        {key:'s_tz',value:'童装'},
                        {key:'s_wj',value:'玩具'},
                        {key:'s_xb',value:'鞋包'},
                        {key:'s_csyp',value:'床上用品'}
                    ]
                },
                panel3: [
                    {key:'sjgy',value:'世纪公园'},
                    {key:'ljz',value:'陆家嘴'},
                    {key:'bbb',value:'八佰伴'},
                    {key:'pdxq',value:'浦东新区'},
                    {key:'zb',value:'闸北'},
                    {key:'ja',value:'静安'},
                    {key:'yp',value:'杨浦'},
                    {key:'sjgy1',value:'世纪公园1'},
                    {key:'ljz1',value:'陆家嘴1'},
                    {key:'bbb1',value:'八佰伴1'},
                    {key:'pdxq1',value:'浦东新区1'},
                    {key:'zb1',value:'闸北1'},
                    {key:'ja1',value:'静安1'},
                    {key:'yp1',value:'杨浦1'}
                ]
            })
        },0)
    }

    renderPanelList(){
        let newPanel = []

        for(let i in this.state.panel2){
            let itemGroup = this.state.panel2[i]
            newPanel.push(
                <ItemGroup key={i} label={i}>
                    {
                        itemGroup.map((item)=>{
                            return (
                                <Item key={item.key} itemKey={item.key}>
                                    {item.value}
                                </Item>
                            )
                        })
                    }
                </ItemGroup>
            )
        }

        return newPanel
    }

    clickCallback(key){
        console.log(key);
    }

    resetFilter(key){
        this.setState({
            selected2: null
        })
    }

    confirmFilter(key){
        console.log(key);
    }

    test(){
        console.log(this.state.selected2)
        return ''
    }

    render(){
        const buttons = [
            {text:'重置', phStyle:'gray', onHandle: this.resetFilter.bind(this), otherProps: {hollow:true}},
            {onHandle: this.confirmFilter.bind(this)},
        ]

        return (
            <div>
                <h2 className="comp-title">PhFilter</h2>
                <Container index={-1} hidecat={false} clickCallback={this.clickCallback.bind(this)}>
                    <PanelSimple default='筛选'>
                        {
                            this.state.panel3.map(function(item){
                                return <Item key={item.key} itemKey={item.key}>{item.value}</Item>
                            })
                        }
                    </PanelSimple>
                    <Panel default='筛选' selected={this.state.selected2} buttons={buttons} index={-1}>
                        {this.renderPanelList()}
                    </Panel>
                    <PanelSimple readOnly className='panel1' selected={{key:'ljz',value:'陆家嘴'}}>
                        {
                            this.state.panel1.map(function(item){
                                return <Item key={item.key} itemKey={item.key}>{item.value}</Item>
                            })
                        }
                    </PanelSimple>
                </Container>

                <h3 className="comp-type"><strong>FilterContainer</strong></h3>
                <h3 className="comp-type">index(默认-1) 初始打开的面板</h3>
                <h3 className="comp-type">hideCat 是否隐藏头部</h3>
                <h3 className="comp-type">clickCallback 项目选择的回调</h3>
                <Code target="filter-container" />

                <h3 className="comp-type"><strong>PanelSimple</strong></h3>
                <h3 className="comp-type">default 没有选中项时的默认显示文字</h3>
                <h3 className="comp-type">selected 选中的项目</h3>
                <h3 className="comp-type">readOnly 不可选的状态</h3>
                <h3 className="comp-type">buttons 传入的按钮数组</h3>
                <Code target="filter-panelsimple" />

                <h3 className="comp-type"><strong>Panel</strong></h3>
                <h3 className="comp-type">index 主菜单选中项索引值</h3>
                <h3 className="comp-type">其他属性同PanelSimple</h3>
                <Code target="filter-panel"/>

                <h3 className="comp-type"><strong>ItemGroup(配合Panel使用)</strong></h3>
                <h3 className="comp-type">label 显示的文字</h3>
                <Code target="filter-itemgroup" />

                <h3 className="comp-type"><strong>Item</strong></h3>
                <h3 className="comp-type">itemKey(必须) 唯一标识</h3>
                <Code target="filter-item" />
            </div>
        )
    }
}


