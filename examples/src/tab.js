import React, { Component ,PropTypes} from 'react';
import {Tabset,Tab} from '../../src/index';

export default class input extends Component{

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

    test(){
        alert('测试自定义tab点击事件');
    }

    render(){
        return(
           <div>
                <h2 className="comp-title">Tab</h2>
                <h3 className="comp-type">横向(default)</h3>
                <div className="content">
                    <Tabset activeIndex ={this.state.index} className='test-name' tabCallback={::this.tabCallback}>
                        <Tab heading='标题1' className='tab-test'>
                            横向内容1
                        </Tab>
                        <Tab heading='标题2' clickCallback={::this.clickCallback}>
                            横向内容2
                        </Tab>
                        <Tab heading='标题3'>
                            横向内容3
                        </Tab>
                    </Tabset>
                </div>
                <h3 className="comp-type">竖向 vertical</h3>
                <div className="content">
                    <Tabset activeIndex={1} vertical width={30}>
                        <Tab heading='标题1'>
                            竖向内容1
                        </Tab>
                        <Tab heading='标题2' onClick={::this.test}>
                            竖向内容2
                        </Tab>
                        <Tab heading='标题3'>
                            竖向内容3
                        </Tab>
                    </Tabset>
                </div>
           </div>
        );
    }
}