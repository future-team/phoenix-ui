import React, { Component } from 'react';
import {Button, Popup} from 'phoenix-ui';
import Code from "./code/code";

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
                <h3 className="comp-type">visible(默认false) 弹层是否可见，必需<br/>onClose 关闭弹层的执行函数<br/>align(默认top) 弹层弹出位置</h3>
                <div className="content">
                    <Button phSize="lg" onClick={::this.onShowTopPopup}>Top</Button>
                </div>
                <Popup visible={this.state.topVisible} onClose={::this.onCloseTopPopup}>
                    <ul className="ph-popup-list">
                        <li className="ph-popup-item" onClick={::this.onCloseTopPopup}>未上线单店</li>
                        <li className="ph-popup-item" onClick={::this.onCloseTopPopup}>未上线连锁店</li>
                        <li className="ph-popup-item" onClick={::this.onCloseTopPopup}>在线单店</li>
                        <li className="ph-popup-item" onClick={::this.onCloseTopPopup}>在线连锁店</li>
                    </ul>
                </Popup>
                <Code target="popup-top" />

                <div className="content">
                    <Button phSize="lg" onClick={::this.onShowBottomPopup}>Bottom</Button>
                </div>
                <Popup align="bottom" visible={this.state.bottomVisible} onClose={::this.onCloseBottomPopup}>
                    <div className="ph-action-sheet">
                        <ul>
                            <li className="ph-popup-item ph-popup-tip">确认 删除此作品？</li>
                            <li className="ph-popup-item ph-popup-delete" onClick={::this.onCloseBottomPopup}>删除作品</li>
                        </ul>
                        <div className="ph-popup-operate" onClick={::this.onCloseBottomPopup}>取消</div>
                    </div>
                </Popup>
                <Code target="popup-bottom" />
            </div>
        );
    }
}