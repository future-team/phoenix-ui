import React, { Component } from "react"

import Row from "phoenix-ui/lib/grid/Row"
import Col from "phoenix-ui/lib/grid/Col"
import Input from "phoenix-ui/lib/input"
import Button from "phoenix-ui/lib/button"
import List from "phoenix-ui/lib/list"
import Animate from "phoenix-ui/lib/animate"
import Code from "./code/code"

export default class animate extends Component{

    constructor(props,context){
        super(props,context); 

        this.state = {
            list: ["看一本书", "睡8个小时"]
        }
    }

    addTodo(){
        let newList = this.state.list.concat(this.input.getValueCallback())
        
        this.setState({
            list: newList
        })
    }

    removeTodo(index){
        let newList = this.state.list.slice()

        newList.splice(index,1)

        this.setState({
            list: newList
        })
    }

    renderList(){
        const items = this.state.list.map((item,index)=>{
            return (
                <List.Item key={index} className="animated" onClick={this.removeTodo.bind(this,index).bind(this)}>
                    <List.Col>{item}</List.Col>
                </List.Item>
            )
        })
        return items
    }

    render(){
        
        return(
            <div>
                <h2 className="comp-title">Animate</h2>
                <h3 className="comp-type">Todo demo</h3>
                <div className="content ph-row-no-padding todo-demo">
                    <Row>
                        <Col width="80">
                            <Input type="text" ref={(input)=>{this.input=input}}/>
                        </Col>
                        <Col>
                            <Button phStyle="primary" onClick={this.addTodo.bind(this)} >Add</Button>
                        </Col>
                    </Row>
                </div>
                <List>
                    <Animate transitionName="fade" className="animate-field">
                        {this.renderList()}
                    </Animate>
                </List>
                <Code target="animate" />             
            </div>
        )
    }
}