import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Tabset,Tab} from '../../src/index';
let Demo1 = class demo1 extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            tab2:'初始tab2内容'
        }
    }
    test(){
        this.setState({
            tab2:'测试panel内容改变'
        })
    };
    render(){
        return(
            <div>
                <Tabset activeIndex ={1} className = '测试name' clickCallback={()=>{alert('测试tabset 回调')}} style={{color:'green'}}>
                    <Tab heading='tab1' className='测试' clickCallback={()=>{alert('测试clickCallback属性')}}>
                        hahadhdad1
                    </Tab>
                    <Tab heading='tab2' clickCallback={::this.test}>
                        {this.state.tab2}
                    </Tab>
                    <Tab heading='tab3'>
                        hahadhdad3
                    </Tab>
                </Tabset>
            </div>
        )
    }
}
let Demo2 = class demo2 extends Component{
    test(){
        alert('测试自定义tab点击事件');
    };
    render(){
        return(
            <div>
                <Tabset activeIndex ={0} vertical width={30}>
                    <Tab heading='tab1'>
                        hahadhdad1
                    </Tab>
                    <Tab heading='tab2' onClick={::this.test}>
                        hahadhdad2
                    </Tab>
                    <Tab heading='tab3'>
                        hahadhdad3
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