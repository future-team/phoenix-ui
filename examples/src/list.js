import React, { Component } from "react";

import List from "phoenix-ui/lib/list"
import Input from "phoenix-ui/lib/input"
import Checkbox from "phoenix-ui/lib/checkbox"
import Radio from "phoenix-ui/lib/radio"
import Icon from "phoenix-ui/lib/icon"
import Switch from "phoenix-ui/lib/switch"
import Badge from "phoenix-ui/lib/badge"
import Image from "phoenix-ui/lib/image"
import Code from "./code/code"

const IMAGE_URL = 'http://img5.duitang.com/uploads/item/201602/11/20160211214958_RhdCY.jpeg'

export default class star extends Component{
    render(){
        return(
            <div>
                <h2 className="comp-title">List</h2>
                <List>
                    <List.Header>标题</List.Header>
                    <List.Item className="clickable">
                        <List.Col>
                            <label>选择一</label>
                        </List.Col>
                    </List.Item>
                </List>
                <Code target="list-normal" />

                <List>
                    <List.Item>
                        <List.Col>
                            <Input type="text" placeholder="请输入" />
                        </List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col heading>
                            <label>姓名</label>
                        </List.Col>
                        <List.Col>
                            <Input type="text" placeholder="请输入" />
                        </List.Col>
                        <List.Col heading>
                            <label>密码</label>
                        </List.Col>
                        <List.Col>
                            <Input type="text" placeholder="请输入" />
                        </List.Col>
                    </List.Item>
                </List>
                <Code target="list-input" />

                <List>
                    <List.Item disabled>
                        <List.Col heading>
                            <label>姓名</label>
                        </List.Col>
                        <List.Col>
                            <Input type="text" placeholder="请输入" value="disabled" />
                        </List.Col>
                    </List.Item>
                </List>
                <Code target="list-disabled" />

                <List>
                    <List.Item error>
                        <List.Col heading>
                            <label>姓名</label>
                        </List.Col>
                        <List.Col>
                            <Input type="text" placeholder="请输入" value="error" clear error/>
                        </List.Col>
                    </List.Item>
                </List>
                <Code target="list-error" />

                <List>
                    <List.Item>
                        <List.Col heading>
                            <label>密码</label>
                        </List.Col>
                        <List.Col>
                            <Input type="password" placeholder="请输入" value="123456" clear visible />
                        </List.Col>
                    </List.Item>
                </List>
                <Code target="list-password" />

                <List>
                    <List.Item>
                        <List.Col heading>
                            <label><Icon phIcon="kaidiancankao" />反馈</label>
                        </List.Col>
                        <List.Col>
                            <Input type="text" placeholder="请输入" value="123456" />
                        </List.Col>
                    </List.Item>
                </List>
                <Code target="list-phicon" />

                <List>
                    <List.Item navigate>
                        <List.Col heading>
                            <label>性别</label>
                        </List.Col>
                        <List.Col tail>
                            <Input type="text" placeholder="男/女" disabled />
                        </List.Col>
                    </List.Item>
                </List>
                <Code target="list-navigate" />

                <List>
                    <List.Item>
                        <List.Col heading>
                            <label>Female</label>
                        </List.Col>
                        <List.Col tail>
                            <Checkbox />
                        </List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col heading>
                            <label>性别</label>
                        </List.Col>
                        <List.Col>
                            <Radio label="男" name="sex" />
                            <Radio label="女" name="sex" />
                        </List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col heading>
                            <label>开关</label>
                        </List.Col>
                        <List.Col tail>
                            <Switch />
                        </List.Col>
                    </List.Item>
                </List>
                <Code target="list-form" />

                <List>
                    <List.Item navigate>
                        <List.Col heading>
                            <label>信息数量</label>
                        </List.Col>
                        <List.Col tail>
                            <Badge>10</Badge>
                        </List.Col>
                    </List.Item>
                    <List.Item>
                        <List.Col heading>
                            <label>新上线</label>
                        </List.Col>
                        <List.Col tail>
                            <Badge>New</Badge>
                        </List.Col>
                    </List.Item>
                </List>
                <Code target="list-badge" />

                <List>
                    <List.Item navigate>
                        <List.Col heading>
                            <label>性别</label>
                            <label className="ph-sub-heading">只能选择一次</label>
                        </List.Col>
                        <List.Col tail>
                            <Input type="text" placeholder="男/女" disabled />
                        </List.Col>
                    </List.Item>
                </List>
                <Code target="list-heading-twoline" />

                <List>
                    <List.Item navigate>
                        <List.Col heading>
                            <label>性别</label>
                        </List.Col>
                        <List.Col tail>
                            <Input type="text" placeholder="男/女" disabled />
                            <label className="ph-sub-heading">只能选择一次</label>
                        </List.Col>
                    </List.Item>
                </List>
                <Code target="list-tail-twoline" />

                <List>
                    <List.Item navigate>
                        <List.Col heading>
                            <label>性别</label>
                        </List.Col>
                        <List.Col tail>
                            <Image src={IMAGE_URL} />
                        </List.Col>
                    </List.Item>
                </List>
                <Code target="list-image" />
            </div>
        );
    }
}