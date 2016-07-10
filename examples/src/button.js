import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Button} from '../../src/index';
import {ButtonGroup} from '../../src/index';
export default class input extends Component{
    render(){
        return(
            <div>
                <div>
                    <ButtonGroup activeCallback={function(target,html){console.log(target,html);}}  >
                        <Button radius phSize="md" phStyle="success">水平按钮组1</Button>
                        <Button radius phSize="md" phStyle="success">水平按钮组2</Button>
                        <Button radius phSize="md" phStyle="success">水平按钮组3</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup style={{width:'100%'}} phType="tacked">
                        <Button block radius phSize="lg" phStyle="primary">垂直按钮组1</Button>
                        <Button block radius phSize="lg" phStyle="primary">垂直按钮组2</Button>
                        <Button block radius phSize="lg" phStyle="primary">垂直按钮组3</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}
