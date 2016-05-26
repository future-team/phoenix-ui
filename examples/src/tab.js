/**
 * Created by panqianjin on 16/5/26.
 */
import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import Tabset from '../../src/Tabset.js';
import Tab from '../../src/Tab.js';
let Demo1 = class demo1 extends Component{
    test(){
        alert('aaa');
    };
    render(){
        return(
            <div>
                <Tabset activeIndex ={0} >
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
let Demo2 = class demo2 extends Component{
    test(){
        alert('aaa');
    };
    render(){
        return(
            <div>
                <Tabset activeIndex ={0} vertical>
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