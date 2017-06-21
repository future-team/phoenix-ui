import React, { Component } from "react";
import {List,Col,Input,Icon,Switch,Badge} from "phoenix-ui";
import Code from "./code/code";

export default class star extends Component{
    render(){
        return(
            <div>
                <h2 className="comp-title">List</h2>
                <List>
                    <List.Header>列表标题</List.Header>
                    <List.Item>
                        <Col>
                            <Input type="text" placeholder="请输入" />
                        </Col>
                    </List.Item>
                    <List.Item required>
                        <Col>
                            <Input type="text" value="请输入姓名" />
                        </Col>
                    </List.Item>
                    <List.Item>
                        <Col heading>
                            <label>姓名</label>
                        </Col>
                        <Col>
                            <Input type="text" placeholder="请输入" value="一键清除" clear />
                        </Col>
                    </List.Item>
                    <List.Item disabled>
                        <Col heading>
                            <label>姓名</label>
                        </Col>
                        <Col>
                            <Input type="text" placeholder="请输入" value="disabled" />
                        </Col>
                    </List.Item>
                    <List.Item error>
                        <Col heading>
                            <label>姓名</label>
                        </Col>
                        <Col>
                            <Input type="text" placeholder="请输入" value="error" clear />
                        </Col>
                    </List.Item>
                    <List.Item>
                        <Col heading>
                            <label>密码</label>
                        </Col>
                        <Col>
                            <Input type="password" placeholder="请输入" value="123456" clear seePassword />
                        </Col>
                    </List.Item>
                    <List.Item>
                        <Col heading>
                            <label><Icon phIcon="feedback" />反馈</label>
                        </Col>
                        <Col>
                            <Input type="text" placeholder="请输入" value="123456" />
                        </Col>
                    </List.Item>
                    <List.Item>
                        <Col heading>
                            <label>姓名</label>
                        </Col>
                        <Col>
                            <Input type="text" placeholder="请输入" />
                        </Col>
                        <Col heading>
                            <label>密码</label>
                        </Col>
                        <Col>
                            <Input type="text" placeholder="请输入" />
                        </Col>
                    </List.Item>
                </List>

                <List>
                    <List.Header>列表标题</List.Header>
                    <List.Item navigate>
                        <Col heading>
                            <label>性别</label>
                        </Col>
                        <Col tail>
                            <Input type="text" placeholder="男/女" disabled />
                        </Col>
                    </List.Item>
                    <List.Item navigate>
                        <Col heading>
                            <label>性别</label>
                        </Col>
                        <Col tail>
                            <Input type="text" value="男" disabled />
                        </Col>
                    </List.Item>
                    <List.Item>
                        <Col heading>
                            <label>Female</label>
                        </Col>
                        <Col tail>
                            <Input type="checkbox" />
                        </Col>
                    </List.Item>
                    <List.Item>
                        <Col heading>
                            <label>性别</label>
                        </Col>
                        <Col tail>
                            <Input type="radio" label="男" name="sex" />
                            <Input type="radio" label="女" name="sex" />
                        </Col>
                    </List.Item>
                    <List.Item>
                        <Col heading>
                            <label>开关</label>
                        </Col>
                        <Col tail>
                            <Switch />
                        </Col>
                    </List.Item>
                    <List.Item navigate>
                        <Col heading>
                            <label>信息数量</label>
                        </Col>
                        <Col tail>
                            <Badge>10</Badge>
                        </Col>
                    </List.Item>
                    <List.Item>
                        <Col heading>
                            <label>新上线</label>
                        </Col>
                        <Col tail>
                            <Badge>New</Badge>
                        </Col>
                    </List.Item>
                </List>

                <List>
                    <List.Header>列表标题</List.Header>
                    <List.Item navigate>
                        <Col heading>
                            <label>性别</label>
                            <label className="ph-sub-heading">只能选择一次</label>
                        </Col>
                        <Col tail>
                            <Input type="text" placeholder="男/女" disabled />
                        </Col>
                    </List.Item>
                    <List.Item navigate>
                        <Col heading>
                            <label>性别</label>
                            <label className="ph-sub-heading">只能选择一次</label>
                        </Col>
                        <Col tail>
                            <Input type="text" value="男" disabled />
                        </Col>
                    </List.Item>
                    <List.Item navigate>
                        <Col heading>
                            <label>性别</label>
                        </Col>
                        <Col tail>
                            <Input type="text" placeholder="男/女" disabled />
                            <label className="ph-sub-heading">只能选择一次</label>
                        </Col>
                    </List.Item>
                    <List.Item navigate>
                        <Col heading>
                            <label>性别</label>
                        </Col>
                        <Col tail>
                            <Input type="text" value="男" disabled />
                            <label className="ph-sub-heading">只能选择一次</label>
                        </Col>
                    </List.Item>
                </List>
            </div>
        );
    }
}