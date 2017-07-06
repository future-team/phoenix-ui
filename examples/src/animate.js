import React, { Component } from "react"

import Row from "phoenix-ui/lib/grid/Row"
import Col from "phoenix-ui/lib/grid/Col"
import Input from "phoenix-ui/lib/input"
import Button from "phoenix-ui/lib/button"
import Animate from "phoenix-ui/lib/animate"
import Code from "./code/code"

export default class animate extends Component{

    constructor(props,context){
        super(props,context); 

        this.state = {
            item: "",
            list: ["看一本书","睡8个小时"]
        }
    }

    setValue(key,e){
        let o ={};
        o[key || e.target.name] = e.target.value;
        this.setState(o);
    }

    addTodo(){
        let newList = this.state.list.concat(this.state.item);
        
        this.setState({
            item: "",
            list: newList
        });
    }

    removeTodo(index){
        let newList = this.state.list.slice();

        newList.splice(index,1);
        this.setState({
            list: newList
        });
    }

    renderList(){
        const items = this.state.list.map((item,index)=>{
            return <div key={index} className="animated" onClick={::this.removeTodo.bind(this,index)}>{item}</div>;
        });
        return items;
    }

    render(){
        
        return(
            <div>
                <h2 className="comp-title">Animate</h2>
                <h3 className="comp-type">Todo demo</h3>
                <div className="content ph-row-no-padding todo-demo">
                    <Row>
                        <Col className="ph-col-80">
                            <Input type="text" value={this.state.item} onChange={::this.setValue.bind(this,"item")} />
                        </Col>
                        <Col>
                            <Button block phSize="lg" phStyle="primary" onClick={::this.addTodo} >Add</Button>
                        </Col>
                    </Row>
                    <Animate transitionName="fade" className="animate-field">
                        {this.renderList()}
                    </Animate>
                </div>
                <br/>
                <Code target="animate" />             
            </div>
        );
    }
}