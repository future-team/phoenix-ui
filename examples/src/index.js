/**
 * Created by panqianjin on 16/5/19.
 */
import React, { Component ,PropTypes} from 'react';
import ReactDOM,{findDOMNode} from 'react-dom';
import { Redirect, Router, Route } from 'react-router';
import History from 'history/lib/createHashHistory';
import Tab from './tab.js';
import Button from './button.js';
import Input from './input.js';
import Textarea from './textarea.js';
import Switch from './switch.js';
import Grid from './grid.js';
import TableView from './table-view.js';
import FormGroup from './form-group.js';
import Label from './label.js';
import Badge from './badge.js';
import StarDemo from './star.js';
import Swipe from './swipe.js';
import Dialog from './dialog.js';
import Toast from './toast.js';
import Popup from './popup.js';
import Accordion from './accordion.js';
import Detail from './detailDemo.js';
import ListDemo from './list-demo.js';

let Index = class index extends Component {
    render() {
        return (
            <div>
                <div id='menu' className='menu'>
                    <div className="menu-panel">
                        <a href="#/button">按钮组 ButtonGroup</a>
                        <a href="#/input">文本框 Input</a>
                        <a href="#/textarea">多行文本 Textarea</a>
                        <a href="#/switch">开关 Switch</a>
                        <a href="#/grid">布局 Flex/Grid</a>
                        <a href="#/tableview">表格 TableView</a>
                        <a href="#/formgroup">表单组 FormGroup</a>
                        <a href="#/tab">选项卡 Tab</a>
                        <a href="#/label">标签 Label</a>
                        <a href="#/badge">徽章 Badge</a>
                        <a href="#/star">星星 Star</a>
                        <a href="#/swipe">左滑动 Swipe</a>
                        <a href="#/dialog">弹框 Dialog</a>
                        <a href="#/toast">飘字 Toast</a>
                        <a href="#/popup">弹层 Popup</a>
                        <a href="#/accordion">手风琴 Accordion</a>
                        <a href="#/detail">详情页示例</a>
                        <a href="#/list-demo">列表页例子</a>
                    </div>
                </div>
            </div>
        );
    }
};
let AppRouter = class AppRouter extends Component {
    constructor(props, context) {
        super(props, context);
        this.history = new History({
            queryKey: false
        });
    }

    render() {
        return (
            <Router history={this.history}>
                <Route path="/index" name="index" component={Index} />
                <Route path="/tableview" name="TableView" component={TableView} />
                <Route path="/formgroup" name="FormGroup" component={FormGroup} />
                <Route path="/button" name="input" component={Button} />
                <Route path="/input" name="input" component={Input} />
                <Route path="/textarea" name="textarea" component={Textarea} />
                <Route path="/switch" name="input" component={Switch} />
                <Route path="/grid" name="input" component={Grid} />
                <Route path="/tab" name="tab" component={Tab} />
                <Route path="/label" name="label" component={Label} />
                <Route path="/badge" name="badge" component={Badge} />
                <Route path="/star" name="star" component={StarDemo} />
                <Route path="/swipe" name="swipe" component={Swipe} />
                <Route path="/dialog" name="dialog" component={Dialog} />
                <Route path="/toast" name="toast" component={Toast} />
                <Route path="/popup" name="popup" component={Popup} />
                <Route path="/accordion" name="accordion" component={Accordion} />
                <Route path="/detail" name="detail" component={Detail} />
                <Route path="/list-demo" name="list-demo" component={ListDemo} />
                <Redirect from="/" to="/index" />
            </Router>
        );
    }
};

ReactDOM.render(
    <AppRouter />,
    document.getElementById('root')
);

