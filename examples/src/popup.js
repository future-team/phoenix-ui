import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Button, Popup} from '../../src/index';

export default class popup extends Component{

    constructor(props,context){
        super(props,context); 

        this.state = {
            topVisible: false,
            bottomVisible: false
        }
    }

    onShowTopPopup(){
        this.setState({
          topVisible: true
        });
    }

    onCloseTopPopup(){
        this.setState({
          topVisible: false
        });
    }

    onShowBottomPopup(){
        this.setState({
          bottomVisible: true
        });
    }

    onCloseBottomPopup(){
        this.setState({
          bottomVisible: false
        });
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Popup</h2>
                <h3 className="comp-type">弹层 Top</h3>
                <Button block radius phSize="lg" phStyle="primary" onClick={::this.onShowTopPopup}>Top Popup</Button>
                <Popup align="top" visible={this.state.topVisible} onClose={::this.onCloseTopPopup}>
                    <ul className="popup-list">
                        <li className="popup-item" onClick={::this.onCloseTopPopup}>未上线单店</li>
                        <li className="popup-item" onClick={::this.onCloseTopPopup}>未上线连锁店</li>
                        <li className="popup-item" onClick={::this.onCloseTopPopup}>在线单店</li>
                        <li className="popup-item" onClick={::this.onCloseTopPopup}>在线连锁店</li>
                    </ul>
                </Popup>
                
                <h3 className="comp-type">弹层 Bottom(提供ActionSheet样式)</h3>
                <Button block radius phSize="lg" phStyle="primary" onClick={::this.onShowBottomPopup}>Bottom Popup</Button>
                <Popup align="bottom" visible={this.state.bottomVisible} onClose={::this.onCloseBottomPopup}>
                    <div className="popup-action-sheet">
                        <ul>
                            <li className="popup-item popup-tip">确认 删除此作品？</li>
                            <li className="popup-item popup-delete" onClick={::this.onCloseBottomPopup}>删除作品</li>
                        </ul>
                        <div className="popup-operate" onClick={::this.onCloseBottomPopup}>取消</div>
                    </div>
                </Popup>
            </div>
        );
    }
}