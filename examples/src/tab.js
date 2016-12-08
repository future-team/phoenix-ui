import React, { Component ,PropTypes} from 'react';
import {Tabset,Tab} from '../../src/index';
let Demo1 = class demo1 extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            index:0
        }
    }

    tabCallback(index){
        console.log('测试tabset 回调'+index);
    }

    clickCallback(index){
        console.log(index);
    }

    render(){
        return(
            <div>
                <Tabset activeIndex ={this.state.index} className='test-name' tabCallback={::this.tabCallback} style={{color:'green'}}>
                    <Tab heading='tab1' className='tab-test'>
                        内容1
                    </Tab>
                    <Tab heading='tab2' clickCallback={::this.clickCallback}>
                        内容2
                    </Tab>
                    <Tab heading='tab3'>
                        内容3
                    </Tab>
                </Tabset>
            </div>
        )
    }
}

let Demo2 = class demo2 extends Component{
    test(){
        alert('测试自定义tab点击事件');
    }

    render(){
        return(
            <div>
                <Tabset activeIndex={1} vertical width={30}>
                    <Tab heading='tab1'>
                        内容1
                    </Tab>
                    <Tab heading='tab2' onClick={::this.test}>
                        内容2
                    </Tab>
                    <Tab heading='tab3'>
                        内容3
                    </Tab>
                </Tabset>
            </div>
        )
    }
}

export default class input extends Component{
    render(){
        return(
           <div>
                <h1>默认横向</h1>
                <Demo1 />
                <h1>竖向</h1>
                <Demo2 />
           </div>
        );
    }
}