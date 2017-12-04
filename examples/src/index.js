/**
 * Created by panqianjin on 16/5/19.
 */
import React, { Component } from 'react'
import ReactDOM,{findDOMNode} from 'react-dom'
import { Redirect, Router, Route, useRouterHistory } from 'react-router'
// import History from 'history/lib/createHashHistory'
import { createHashHistory } from 'history'

import Tab from './tab.js'
import Button from './button.js'
import ButtonGroup from './button-group.js'
import Label from './label.js'

import Input from './input.js'
import Checkbox from './checkbox.js'
import Radio from './radio.js'
import Textarea from './textarea.js'
import Switch from './switch.js'

import Grid from './grid.js'
import List from './list.js'

import Badge from './badge.js'
import Star from './star.js'
import Swipe from './swipe.js'
import Slider from './slider.js'

import Dialog from './dialog.js'
import Alert from './alert.js'
import Prompt from './prompt.js'
import Toast from './toast.js'
import Popup from './popup.js'
import Popover from './popover.js'

import Accordion from './accordion.js'
import Icon from './icon.js'
import ImageList from './image-list.js'
import Image from './image.js'
import Steps from './steps.js'
import SearchBar from './search-bar.js'
import PullUp from './pullup.js'
import PullDown from './pulldown.js'

import Animate from './animate.js'
import Drag from './drag.js'

import PhoenixStyle from './phoenix-styles.js'

import Menu from './menu.js'
import PhFilter from './ph-filter.js'
import PhFilterCheckbox from './ph-filter-checkbox.js'
import PhFilterCode from './ph-filter-code.js'

// import ListDemo from './list-demo.js'
// import Detail from './detail-demo.js'

let Card = class Card extends Component {
    constructor(props, context){
        super(props, context);
    }

    render(){
        let {href, title, desp} = this.props;
        return (
            <a className="list-card" href={href}>
                <h3>{title}</h3>
                <p>{desp}</p>
            </a>
        )
    }
};

let Index = class index extends Component {
    
    render() {
        return (
            <div className="menu ph-transition-index">
                <header>
                    <div className="phoenix-about">
                        <a href="https://github.com/future-team/phoenix-ui"><i className="gfs-icon icon-alert"></i> Github</a>
                        <a href="http://future-team.github.io/phoenix-ui/doc/index.html"><i className="gfs-icon icon-help"></i> Document</a>
                    </div>
                </header>
                <h2>组件</h2>
                <h3>基础类</h3>
                <div className="menu-panel">
                    <Card href="#/button" title="Button" desp="按钮" />
                    <Card href="#/icon" title="Icon" desp="符号" />
                    <Card href="#/badge" title="Badge" desp="徽章" />
                    <Card href="#/label" title="Label" desp="标志" />
                    <Card href="#/image" title="Image" desp="图片" />
                    <Card href="#/star" title="Star" desp="星星" />
                </div>
                <h3>表单类</h3>
                <div className="menu-panel">
                    <Card href="#/input" title="Input" desp="输入框" />
                    <Card href="#/checkbox" title="Checkbox" desp="复选框" />
                    <Card href="#/radio" title="Radio" desp="单选框" />
                    <Card href="#/textarea" title="Textarea" desp="多行输入框" />
                    <Card href="#/switch" title="Switch" desp="开关" />
                </div>
                <h3>布局类</h3>
                <div className="menu-panel">
                    <Card href="#/grid" title="Grid/Row/Col" desp="布局" />
                    <Card href="#/list" title="List" desp="列表" />
                </div>
                <h3>弹出框类</h3>
                <div className="menu-panel">
                    <Card href="#/dialog" title="Dialog" desp="基础弹框" />
                    <Card href="#/alert" title="Alert" desp="alert弹框" />
                    <Card href="#/prompt" title="Prompt" desp="prompt弹框" />
                    <Card href="#/toast" title="Toast" desp="飘字" />
                    <Card href="#/popup" title="Popup" desp="弹层" />
                    <Card href="#/popover" title="Popover" desp="气泡" />
                </div>
                <h3>操作类</h3>
                <div className="menu-panel">
                    <Card href="#/buttongroup" title="ButtonGroup" desp="按钮组" />
                    <Card href="#/tab" title="Tab" desp="选项卡" />
                    <Card href="#/steps" title="Steps" desp="步骤" />
                    <Card href="#/accordion" title="Accordion" desp="手风琴" />
                    <Card href="#/slider" title="Slider" desp="滑块" />
                    <Card href="#/swipe" title="Swipe" desp="左刷操作" />
                    <Card href="#/pullup" title="PullUp" desp="上拉刷新" />
                    <Card href="#/pulldown" title="PullDown" desp="下拉刷新" />
                </div>
                <h3>组合类</h3>
                <div className="menu-panel">
                    <Card href="#/search-bar" title="SearchBar" desp="搜索" />
                    <Card href="#/imagelist" title="ImageList" desp="图片列表" />
                    <Card href="#/menu" title="Menu" desp="菜单" />
                </div>
                <h3>辅助类</h3>
                <div className="menu-panel">
                    <Card href="#/animate" title="Animate" desp="动画" />
                    <Card href="#/drag" title="Drag" desp="拖拽" />
                </div>

                <h2>控件</h2>
                <div className="menu-panel">
                    <Card href="#/ph-filter" title="PhFilter" desp="筛选" />
                    <Card href="#/ph-filter-checkbox" title="PhFilter Checkbox" desp="多选筛选" />
                </div>

                <h2>例子</h2>
                <div className="menu-panel">
                    <Card href="#" title="待续..." desp="" />
                </div>
            </div>
        );
    }
}

let AppRouter = class AppRouter extends Component {
    constructor(props, context) {
        super(props, context);

        this.history = useRouterHistory(createHashHistory)({ queryKey: false })
        // this.history = new History({
        //     queryKey: false
        // });
    }

    render() {
        return (
            <Router history={this.history}>
                <Route path="/index" name="index" component={Index} />
                <Route path="/phoenix-styles" name="PhoenixStyle" component={PhoenixStyle} />
                <Route path="/list" name="List" component={List} />
                <Route path="/button" name="button" component={Button} />
                <Route path="/label" name="label" component={Label} />
                <Route path="/buttongroup" name="buttongroup" component={ButtonGroup} />
                <Route path="/input" name="input" component={Input} />
                <Route path="/checkbox" name="checkbox" component={Checkbox} />
                <Route path="/radio" name="radio" component={Radio} />
                <Route path="/textarea" name="textarea" component={Textarea} />
                <Route path="/switch" name="switch" component={Switch} />
                <Route path="/grid" name="grid" component={Grid} />
                <Route path="/tab" name="tab" component={Tab} />
                <Route path="/badge" name="badge" component={Badge} />
                <Route path="/star" name="star" component={Star} />
                <Route path="/swipe" name="swipe" component={Swipe} />
                <Route path="/pullup" name="pullup" component={PullUp} />
                <Route path="/pulldown" name="pulldown" component={PullDown} />
                <Route path="/slider" name="slider" component={Slider} />
                <Route path="/steps" name="steps" component={Steps} />
                <Route path="/dialog" name="dialog" component={Dialog} />
                <Route path="/alert" name="alert" component={Alert} />
                <Route path="/prompt" name="prompt" component={Prompt} />
                <Route path="/toast" name="toast" component={Toast} />
                <Route path="/popup" name="popup" component={Popup} />
                <Route path="/popover" name="popover" component={Popover} />
                <Route path="/accordion" name="accordion" component={Accordion} />
                <Route path="/menu" name="menu" component={Menu} />
                <Route path="/search-bar" name="searchbar" component={SearchBar} />
                <Route path="/imagelist" name="imagelist" component={ImageList} />
                <Route path="/image" name="image" component={Image} />
                <Route path="/animate" name="animate" component={Animate} />
                <Route path="/drag" name="drag" component={Drag} />
                <Route path="/icon" name="icon" component={Icon} />

                <Route path="/ph-filter" name="phfilter" component={PhFilter} />
                <Route path="/ph-filter-checkbox" name="phfiltercheckbox" component={PhFilterCheckbox} />
                <Route path="/ph-filter-code" name="phfiltercode" component={PhFilterCode} />
                
                <Redirect from="/" to="/index" />
            </Router>
        );
    }
};

let App = class App extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <a href="#/index" id="Back" className="gfs-icon icon-chevron-left"></a>
                <AppRouter />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

