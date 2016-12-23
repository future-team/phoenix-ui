import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Button} from '../../src/index';

export default class input extends Component{
    render(){
        return(
            <div>
                <h2 className="comp-title">Button</h2>
                <h3 className="comp-type">类型 phStyle</h3>
                <div className="content">
                    <Button phStyle="primary">Primary</Button>
                    <Button radius phStyle="info">Info</Button>
                    <Button phStyle="success">Success</Button>
                    <Button phStyle="error">Error</Button>
                    <Button phStyle="danger">Danger</Button>
                    <Button phStyle="warning">Warning</Button>
                    <Button phStyle="gray">Gray</Button>
                    <Button phStyle="link">Link</Button>
                </div>
                <h3 className="comp-tip">hollow</h3>
                
                <div className="content">
                    <Button hollow phStyle="primary">Primary</Button>
                    <Button hollow phStyle="info">Info</Button>
                    <Button hollow phStyle="success">Success</Button>
                    <Button hollow phStyle="error">Error</Button>
                    <Button hollow phStyle="danger">Danger</Button>
                    <Button hollow phStyle="warning">Warning</Button>
                    <Button hollow phStyle="gray">Gray</Button>
                </div>
                <h3 className="comp-type">大小 phSize</h3>
                <div className="content">
                    <Button phSize="xs" phStyle="primary">xs</Button>
                    <Button phSize="md" phStyle="primary">md</Button>
                    <Button phSize="lg" phStyle="primary">lg</Button>
                </div>
                <h3 className="comp-tip">block</h3>
                <div className="content">
                    <Button block phStyle="success">确定</Button>
                </div>
            </div>
        );
    }
}
