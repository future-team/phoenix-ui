import React, { Component } from "react";
import {ButtonGroup, Button, Dialog} from "phoenix-ui";
import Code from "./code/code";

export default class dialog extends Component{

    constructor(props,context){
        super(props,context); 

        this.state = {
            visible1: false,
            visible2: false,
            visible3: false
        }
    }

    onShow(key){
        let o = {};
        o[key] = true;
        this.setState(o);
    }

    onClose(key){
        let o = {};
        o[key] = false;
        this.setState(o);
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Dialog</h2>
                <h3 className="comp-type">visible(默认false) 弹框是否可见，必需<br/>onClose 关闭弹框的执行函数</h3>
                <div className="content">
                    <Button radius phSize="lg" onClick={::this.onShow.bind(this,"visible1")}>dialog1</Button>
                </div>
                <Dialog visible={this.state.visible1} onClose={::this.onClose.bind(this,"visible1")}>
                    <Dialog.Title>标题1</Dialog.Title>
                    <Dialog.Body>
                        <p>可自定义表格内容</p>
                    </Dialog.Body>
                    <Dialog.Footer>
                        <ButtonGroup>
                            <Button hollow phSize="lg" phStyle="gray" onClick={::this.onClose.bind(this,"visible1")}>取消</Button>
                            <Button hollow phSize="lg" onClick={::this.onClose.bind(this,"visible1")}>确定</Button>
                        </ButtonGroup> 
                    </Dialog.Footer>
                </Dialog>
                <Code target="dialog-onclose" />

                <h3 className="comp-type">closeButton(默认不显示) 是否显示弹框左上角关闭按钮</h3>
                <div className="content">
                    <Button radius phSize="lg" onClick={::this.onShow.bind(this,"visible2")}>dialog2</Button>
                </div>
                <Dialog visible={this.state.visible2} onClose={::this.onClose.bind(this,"visible2")} closeButton>
                    <Dialog.Title>标题2</Dialog.Title>
                    <Dialog.Body>
                        <p>可自定义表格内容</p>
                    </Dialog.Body>
                    <Dialog.Footer>
                        <ButtonGroup>
                            <Button hollow phSize="lg" phStyle="gray" onClick={::this.onClose.bind(this,"visible2")}>取消</Button>
                            <Button phSize="lg" onClick={::this.onClose.bind(this,"visible2")}>确定</Button>
                        </ButtonGroup>
                    </Dialog.Footer>
                </Dialog>
                <Code target="dialog-closebutton" />

                <h3 className="comp-type">shadowDisabled(默认可关闭) 阴影部分是否可点击关闭弹框</h3>
                <div className="content">
                    <Button radius phSize="lg" onClick={::this.onShow.bind(this,"visible3")}>dialog3</Button>
                </div>
                <Dialog visible={this.state.visible3} onClose={::this.onClose.bind(this,"visible3")} shadowDisabled>
                    <Dialog.Title>标题3</Dialog.Title>
                    <Dialog.Body>
                        <p>可自定义表格内容</p>
                    </Dialog.Body>
                    <Dialog.Footer> 
                        <ButtonGroup>                       
                            <Button hollow phSize="lg" phStyle="gray" onClick={::this.onClose.bind(this,"visible3")}>取消</Button>
                            <Button phSize="lg" onClick={::this.onClose.bind(this,"visible3")}>确定</Button>
                        </ButtonGroup>
                    </Dialog.Footer>
                </Dialog>
                <Code target="dialog-shadowdisabled" />
            </div>
        );
    }
}