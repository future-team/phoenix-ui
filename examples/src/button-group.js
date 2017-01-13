import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Button} from '../../src/index';
import {ButtonGroup} from '../../src/index';
export default class input extends Component{
    render(){
        return(
            <div>
                <h2 className="comp-title">ButtonGroup</h2>
                <h3 className="comp-type">水平(默认)  phType(justify)</h3>
                <div className="content">
                    <ButtonGroup activeCallback={function(target,html){console.log(target,html);}}>
                        <Button>水平按钮组1</Button>
                        <Button>水平按钮组2</Button>
                        <Button>水平按钮组3</Button>
                    </ButtonGroup>
                </div>
                <h3 className="comp-type">垂直  phType(tacked)</h3>
                <div className="content">
                    <ButtonGroup phType="tacked">
                        <Button block>垂直按钮组1</Button>
                        <Button block>垂直按钮组2</Button>
                        <Button block>垂直按钮组3</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}
