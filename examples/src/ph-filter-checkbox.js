import React, { Component } from "react"
import {ajax} from "./utils/tool.js"

import PhFilter from "phoenix-ui/lib/ph-filter"
import List from "phoenix-ui/lib/list"
// import Code from "./code/code";

const CheckboxContainer = PhFilter.CheckboxContainer,
      Item = PhFilter.Item,
      ItemGroup = PhFilter.ItemGroup

export default class phFilterCheckbox extends Component {

    constructor(props,context){
        super(props,context)

        this.state = {
            filterData: [],
            choose: ''
        }

        this.getData("./data/shop-list.json", 'filterData');
        this.getData("./data/choose.json", 'choose');
    }

    getData(fileName, key){ // 获取数据方法，ajax方法在下面定义了
        ajax(fileName).then((json)=>{
            let o = {}
            o[key] = json

            this.setState(o)

        }, (error)=>{// 加载失败
            console.error("出错了", error)
        });
    }

    itemClickCallback(key, disabled){
        console.log(key)
        console.log(disabled)
    }

    onSubmit(choose){
        console.log(choose)
    }

    render(){
        let self = this;
        const buttons = [
            {onHandle: this.onSubmit.bind(this)}
        ]
        
        return(
            <div>
                <CheckboxContainer choose={this.state.choose} index={2} buttons={buttons}>
                    {
                        this.state.filterData.map((cityShopList,index)=>{
                            return (
                                <ItemGroup key={cityShopList.cityId} mainKey={cityShopList.cityId} label={cityShopList.cityName}>
                                    {
                                        cityShopList.shopInfoDTOList.map((shopInfo)=>{
                                            return (
                                                <Item disabled={shopInfo.status==1} key={shopInfo.shopId} itemKey={shopInfo.shopId} clickCallback={self.itemClickCallback.bind(self)}>
                                                    {shopInfo.shopName}
                                                </Item>
                                            );
                                        })
                                    }
                                </ItemGroup>
                            );
                        })
                    }
                    
                </CheckboxContainer>
                
                <a href="#/ph-filter-code" className="ph-filter-code">查看代码</a>
            </div>
        )
    }
}


