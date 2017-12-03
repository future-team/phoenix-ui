import React, { Component } from "react"

import PhFilter from "phoenix-ui/lib/ph-filter"
import Code from "./code/code"

const Container = PhFilter.Container,
      PanelSimple = PhFilter.PanelSimple,
      Panel = PhFilter.Panel,
      Item = PhFilter.Item,
      ItemGroup = PhFilter.ItemGroup,
      PanelCheckbox = PhFilter.PanelCheckbox,
      PanelCustom = PhFilter.PanelCustom

export default class phFilter extends Component {

    constructor(props,context){
        super(props,context);
        this.state={
            panel1:[],
            panel2:{},
            selected2: {key:'ljz',value:'陆家嘴'},
            selected3: {key:'f_hg,m_sryy',value:'火锅,私人影院'},
            panel3:[],
            panel4:{},
            noShadow: false
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
                ],
                panel4:{
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
                    ]
                },
            })
        }, 0)
    }

    renderPanelList(panelName){
        let newPanel = []

        for(let i in this.state[panelName]){
            let itemGroup = this.state[panelName][i]
            newPanel.push(
                <ItemGroup key={i} label={i} mainKey={i}>
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

    clickCallback(key, index){
        console.log(key, index);
    }

    resetFilter(key){
        this.setState({
            selected2: null
        })
    }

    confirmFilter2(key, value){
        this.setState({
            selected2: {
                key: key,
                value: value
            }
        })
    }

    confirmFilter3(key, value){
        this.setState({
            selected3: {
                key: key,
                value: value
            }
        })
    }

    test(show){
        console.log(show)
        
        setTimeout(()=>{
            this.filterContainer.hideCallback();
        }, 2000)
    }

    render(){
        const buttons2 = [
            {text:'重置', phStyle:'gray', onHandle: this.resetFilter.bind(this), otherProps: {hollow:true}},
            {onHandle: this.confirmFilter2.bind(this), close:true},
        ],
        buttons3 = [
            {onHandle: this.confirmFilter3.bind(this), close:true}
        ]

        return (
            <div>
                <h2 className="comp-title">PhFilter</h2>
                <Container index={-1} hidecat={false} clickCallback={this.clickCallback.bind(this)} noShadow={this.state.noShadow} ref={(filterContainer)=>{this.filterContainer=filterContainer}}>
                    <PanelSimple default='筛选'>
                        {
                            this.state.panel3.map(function(item){
                                return <Item key={item.key} itemKey={item.key}>{item.value}</Item>
                            })
                        }
                    </PanelSimple>
                    <Panel default='筛选' selected={{key:'m_sryy',value:'私人影院'}} index={-1}>
                        {this.renderPanelList('panel2')}
                    </Panel>
                    <PanelCheckbox type='simple' checkAll={false} default='筛选' index={0} buttons={buttons2} selected={this.state.selected2}>
                        {
                            this.state.panel1.map(function(item){
                                return <Item key={item.key} itemKey={item.key}>{item.value}</Item>
                            })
                        }
                    </PanelCheckbox>
                    <PanelCheckbox default='筛选' index={0} buttons={buttons3} selected={this.state.selected3}>
                        {this.renderPanelList('panel4')}
                    </PanelCheckbox>
                    <PanelCustom default='筛选' clickCallback={this.test.bind(this)}>
                    </PanelCustom>
                </Container>

                <h3 className="comp-type"><strong>FilterContainer</strong></h3>
                <h3 className="comp-type">index(默认-1) 初始打开的面板</h3>
                <h3 className="comp-type">hideCat 是否隐藏头部</h3>
                <h3 className="comp-type">clickCallback 项目选择的回调</h3>
                <h3 className="comp-type">hideCallback 手动隐藏panel</h3>
                <h3 className="comp-type">noShadow 是否显示阴影，默认显示</h3>
                <Code target="filter-container" />

                <h3 className="comp-type"><strong>PanelSimple</strong></h3>
                <h3 className="comp-type">default 没有选中项时的默认显示文字</h3>
                <h3 className="comp-type">selected 选中的项目</h3>
                <h3 className="comp-type">readOnly 不可选的状态</h3>
                <h3 className="comp-type">clickCallback 打开隐藏的回调</h3>
                <Code target="filter-panelsimple" />

                <h3 className="comp-type"><strong>Panel</strong></h3>
                <h3 className="comp-type">index 主菜单选中项索引值</h3>
                <h3 className="comp-type">default 没有选中项时的默认显示文字</h3>
                <h3 className="comp-type">selected 选中的项目</h3>
                <h3 className="comp-type">readOnly 不可选的状态</h3>
                <h3 className="comp-type">clickCallback 打开隐藏的回调</h3>
                <Code target="filter-panel"/>

                <h3 className="comp-type"><strong>PanelCheckbox</strong></h3>
                <h3 className="comp-type">index 主菜单选中项索引值</h3>
                <h3 className="comp-type">type simple表示单栏</h3>
                <h3 className="comp-type">default 没有选中项时的默认显示文字</h3>
                <h3 className="comp-type">selected 选中的项目</h3>
                <h3 className="comp-type">readOnly 不可选的状态</h3>
                <h3 className="comp-type">buttons 传入的按钮数组</h3>
                <h3 className="comp-type">clickCallback 打开隐藏的回调</h3>
                <Code target="filter-panel"/>

                <h3 className="comp-type"><strong>PanelCustom</strong></h3>
                <h3 className="comp-type">clickCallback 打开隐藏的回调</h3>
                <h3 className="comp-type">其他完全自定义</h3>
                <Code target="filter-panel"/>                

                <h3 className="comp-type"><strong>ItemGroup(配合Panel使用)</strong></h3>
                <h3 className="comp-type">mainKey(必须) 唯一标识</h3>
                <h3 className="comp-type">label 显示的文字</h3>
                <Code target="filter-itemgroup" />

                <h3 className="comp-type"><strong>Item</strong></h3>
                <h3 className="comp-type">itemKey(必须) 唯一标识</h3>
                <Code target="filter-item" />
            </div>
        )
    }
}


