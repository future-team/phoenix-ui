import React, { Component } from "react"
import {PhFilter, Col} from "phoenix-ui"
// import Code from "./code/code";
const FilterContainer = PhFilter.FilterContainer,
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
                                <Item key={item.key} itemKey={item.key} itemLabel={item.value}>
                                    <Col>{item.value}</Col>
                                </Item>
                            )
                        })
                    }
                </ItemGroup>
            )
        }

        return newPanel
    }

    render(){
        return (
            <div>
                <h2 className="comp-title">PhFilter</h2>
                <FilterContainer onChange={function(key){
                    console.log(key);
                }}>
                    <PanelSimple readOnly className='panel1' selected={{key:'ljz',value:'陆家嘴'}}>
                        {
                            this.state.panel1.map(function(item){
                                return <Item key={item.key} itemKey={item.key} itemLabel={item.value}><Col>{item.value}</Col></Item>
                            })
                        }
                    </PanelSimple>
                    <Panel selected={{key:'f_bbc',value:'本帮江浙菜'}}>
                        {this.renderPanelList()}
                    </Panel>
                    <PanelSimple default='筛选'>
                        {
                            this.state.panel3.map(function(item){
                                return <Item key={item.key} itemKey={item.key} itemLabel={item.value}><Col>{item.value}</Col></Item>
                            })
                        }
                    </PanelSimple>
                </FilterContainer>
                <div style={{height: '2000px'}}>模拟内容多的情况</div>
            </div>
        )
    }
}


