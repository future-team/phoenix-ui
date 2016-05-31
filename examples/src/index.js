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
import Switch from './switch.js';
import Grid from './grid.js';
import TableView from './table-view.js';
import FormGroup from './form-group.js';
import Label from './label.js';
import Badge from './badge.js';
let Index = class index extends Component {
    render() {
        return (
            <div>
                <div id='menu' className='menu'>
                    <div className="menu-panel">
                        <a href="#/input">测试用例</a>
                        <a href="#/button">按钮</a>
                        <a href="#/input">文本框</a>
                        <a href="#/switch">开关</a>
                        <a href="#/grid">布局</a>
                        <a href="#/tableview">tableview</a>
                        <a href="#/formgroup">FormGroup</a>
                        <a href="#/swipe">swipe[滑动组件]</a>
                        <a href="#/tab">tab(选项卡)</a>
                        <a href="#/label">label(标签)</a>
                        <a href="#/badge">badge(徽章)</a>
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
                <Route path="/Tab" name="Tab" component={Tab} />
                <Route path="/button" name="Button" component={Button} />
                <Route path="/input" name="Input" component={Input} />
                <Route path="/switch" name="Switch" component={Switch} />
                <Route path="/grid" name="Grid" component={Grid} />
                <Route path="/tableview" name="TableView" component={TableView} />
                <Route path="/formgroup" name="FormGroup" component={FormGroup} />
                <Route path="/button" name="input" component={Button} />
                <Route path="/input" name="input" component={Input} />
                <Route path="/switch" name="input" component={Switch} />
                <Route path="/grid" name="input" component={Grid} />
                <Route path="/tab" name="tab" component={Tab} />
                <Route path="/label" name="label" component={Label} />
                <Route path="/badge" name="badge" component={Badge} />
                <Redirect from="/" to="/index" />
            </Router>
        );
    }
};

ReactDOM.render(
    <AppRouter />,
    document.getElementById('root')
);

