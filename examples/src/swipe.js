/**
 * Created by slashhuang on 16/5/30.
 */

import PhSwipe from 'ph-swipe';
import React,{Component} from 'react';
import {render,findDOMNode} from 'react-dom';
require('../css/swipe.less');
export default class PhSwipeDemo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: true,
            showThumbnail: true
        }
    }
    renderImg(){
        let imgList=[
            'http://img5.imgtn.bdimg.com/it/u=1478257864,2882073929&fm=21&gp=0.jpg',
            'http://www.bz55.com/uploads/allimg/150309/139-150309101F7.jpg',
            'http://img2.zol.com.cn/product/95/20/ceSFw3e3TqLNM.jpg',
            'http://img5.imgtn.bdimg.com/it/u=1432870041,1164599966&fm=21&gp=0.jpg'
        ];
        return  imgList.map((ele)=>{
            return <img src={ele} key={ele}/>
        })
    }
    render(){
        /**
         * 测试普通横向滑动模块
         */
        let node1=[
            <div className="hint">请横向滑动图片，查看默认操作</div>,
            <div className="container">
                <div className="img-list horizontal">
                    {this.renderImg()}
                </div>
            </div>
        ];
        /**
         * 测试横向滑动模块
         */
        var Node2Options={
            direction:'horizontal',//滑动方向
            autoPlay:true,
            duration:1500,
            loop:true,//是否滑动循环
            containerClassName:'img-list',//滑动容器的className值
            indicatorClassName:'img-indicator',//滑动容器下方小圆点容器className值
            activeClass:'indicator-active'//滑动容器下方小圆点激活的className值
        };
        let node2=[
            <div className="hint">支持循环播放，及手势操作</div>,
            <div className="container">
                <div className="img-list auto-play">
                    {this.renderImg()}
                </div>
                <div className="img-indicator auto-indicator" >
                    <i className="indicator-active"></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </div>
        ];
        /**
         * 测试竖向滑动模块
         */
        var Node3Options={
            direction:'horizontal',//滑动方向
            loop:false,//是否滑动循环
            containerClassName:'img-list',//滑动容器的className值
            indicatorClassName:'img-indicator',//滑动容器下方小圆点容器className值
            activeClass:'indicator-active'//滑动容器下方小圆点激活的className值
        };
        let node3=[
            <div className="hint">请横向滑动图片，查看富交互测试</div>,
            <div className="container">
                <div className="img-list horizontal">
                    {this.renderImg()}
                </div>
                <div className="img-indicator" >
                    <i className="indicator-active"></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </div>
        ];
        /**
         * 测试自动播放方式
         */
        var node4Options={
            direction:'vertical',
            autoPlay:true,//是否自动播放
            duration:1500,//自动播放时间间隔
            loop:true,
            containerClassName:'img-list',//滑动容器的className值
            indicatorClassName:'img-vertical-indicator',//滑动容器下方小圆点容器className值
            activeClass:'indicator-active'//滑动容器下方小圆点激活的className值
        };
        let node4=[
            <div className="hint">请竖向滑动图片，查看富交互测试</div>,
            <div className="container">
                <div className="img-list vertical">
                    {this.renderImg()}
                </div>
                <div className="img-vertical-indicator" >
                    <i className="indicator-active"></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </div>
        ];
        return (<div>
            <PhSwipe>
                {node1[1]}
            </PhSwipe>
            {node1[0]}
            <PhSwipe {...Node2Options}>
                {node2[1]}
            </PhSwipe>
            {node2[0]}
            <PhSwipe {...Node3Options}>
                {node3[1]}
            </PhSwipe>
            {node3[0]}
            <PhSwipe {...node4Options}>
                {node4[1]}
            </PhSwipe>
            {node4[0]}
        </div>)
    }
}
