import React, { Component } from 'react';
import {Drag} from 'phoenix-ui';
import Code from "./code/code";

export default class toast extends Component{

    constructor(props,context){
        super(props,context); 

        this.preDistanceX = 0;
        this.preDistanceY = 0;
        this.distanceX = 0;
        this.distanceY = 0;
    }

    onDrag(event,position){
        this.prePosition = position.start;
        this.nowPosition = position.move;

        this.distanceX = this.preDistanceX + this.nowPosition.x - this.prePosition.x;
        this.distanceY = this.preDistanceY + this.nowPosition.y - this.prePosition.y;

        this.setBoxPosition(this.distanceX, this.distanceY);
    }

    onDrop(event,position){
        this.preDistanceX = this.distanceX;
        this.preDistanceY = this.distanceY;
    }

    setBoxPosition(x,y){
        this.box.style.webkitTransform = 'translate('+x+'px,'+y+'px)';
        this.box.style.transform = 'translate('+x+'px,'+y+'px)';
    }

    render(){
        return(
            <div>
                <h2 className="comp-title">Drag</h2>
                <h3 className="comp-type">Dragable Box demo</h3>
                <Code target="drag" />
                <div className="content-drag">
                    <Drag onDrag={::this.onDrag} onDrop={::this.onDrop} style={{height:0}}>
                        <div className="box" ref={(box)=>{this.box = box}}>Drag</div>
                    </Drag>
                </div>
            </div>
        );
    }
}