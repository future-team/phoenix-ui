import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import {Row,Col,Input,Button,Animate} from '../../src/index';

export default class animate extends Component{

    constructor(props,context){
        super(props,context); 

        this.state = {
            item: '',
            list: ['看一本书','睡8个小时']
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
            item: '',
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
                <h3 className="comp-type">e.g. Todo</h3>
                <div className="content row-no-padding todo-demo">
                    <Row>
                        <Col className="col-80">
                            <Input type="text" value={this.state.item} onChange={::this.setValue.bind(this,'item')} />
                        </Col>
                        <Col>
                            <Button block phSize="lg" phStyle="primary" onClick={::this.addTodo} >Add</Button>
                        </Col>
                    </Row>
                    <Animate transitionName="fade" className="animate-field">
                        {this.renderList()}
                    </Animate>
                </div>                
            </div>
        );
    }
}