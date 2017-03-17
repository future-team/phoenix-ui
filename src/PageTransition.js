import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Component from './utils/Component';
import classnames from 'classnames';
import Queue from 'promise-queue';
import {setPhoenixPrefix} from './utils/Tool';

export default class PageTransition extends Component{

    static propTypes={
        /**
         * 间隔时间
         * @property timeout
         * @type Number
         * @default 500
         * */
        timeout: PropTypes.number,
        /**
         * 动画名称，可选[fade, slide-top, slide-bottom, slide-left, slide-right]
         * @property transitionName
         * @type String
         * @default 'fade'
         * */
        transitionName: PropTypes.string,
        animateOnInit: PropTypes.bool,
        data: PropTypes.object,
        onLoad: PropTypes.func
    };

    static defaultProps = {
        timeout: 500,
        transitionName: 'slide-left',
        animateOnInit: true,
        classMapping : {}
    };

    constructor(props,context){
        super(props,context);

        if(this.props.animateOnInit){
            this.state = {
                child1: null,
                child2: null,
                nextChild: 1
            }
        }else{
            this.state = {
                child1: this.props.children,
                child2: null, 
                nextChild: 2
            }
        }

        this.transite = this.transite.bind(this);
        this.gerRef = this.getRef.bind(this);

        this.queue = new Queue(1, Infinity);

        this.itemClass = setPhoenixPrefix('transition-item');
    }

    componentDidMount(){
        let {animateOnInit, data, children} = this.props;

        if(!animateOnInit){
            const child = this.getRef('child1');
            if(child){
                const dom = ReactDOM.findDOMNode(child);
                child.onTransitionDidEnd && child.onTransitionDidEnd(data);
                dom.classList.remove(this.itemClass);
            }
        }else{
            this.transite(children);
        }
    }

    componentWillReceiveProps(nextProps){
        const transitNewChild = () => {
            this.queue.add(()=> this.transite(nextProps.children));
        };
        const updateChild = () => {
            const currentChild = this.state.nextChild === 1? 2:1;
            this.state[`child${currentChild}`] = nextProps.children;
            this.forceUpdate();
        }

        if(this.props.children && this.props.children.props && this.props.children.props['data-transition-id'] 
            && nextProps.children.props['data-transition-id']) {

            if (this.props.children.props['data-transition-id'] !== nextProps.children.props['data-transition-id']) {
                transitNewChild();
            } else {
                updateChild();
            }
        } else {
            if (this.props.children !== nextProps.children) {
                transitNewChild();
            } else {
                updateChild();
            }
        }
    }

    getRef(ref){
        let child = this.refs[ref];
        if(child && child.getWrappedInstance){
            child = child.getWrappedInstance();
        }
        return child;
    }

    transite(nextChild){
        return new Promise((transiteDone, transiteFailed)=>{
            this.state[`child${this.state.nextChild}`] = nextChild;
            this.forceUpdate(() => {
                const prevChild = this.getRef(`child${this.state.nextChild === 1 ? 2 : 1}`);
                const newChild = this.getRef(`child${this.state.nextChild}`);
                const prevChildDom = ReactDOM.findDOMNode(prevChild);
                const newChildDom = ReactDOM.findDOMNode(newChild);
                let timeout = 0;

                const willStart = () => {
                    if (newChild.onTransitionWillStart) {
                        return newChild.onTransitionWillStart(this.props.data) || Promise.resolve();
                    }
                    if (prevChild && prevChild.onTransitionLeaveWillStart) {
                        return prevChild.onTransitionLeaveWillStart(this.props.data) || Promise.resolve();
                    }
                    return Promise.resolve();
                };

                const start = () => {
                    if (newChildDom.classList.contains(this.itemClass)) {
                        timeout = this.props.timeout || DEFAULT_TIMEOUT;
                        newChildDom.classList.add(this.props.transitionName + "-enter");
                        newChildDom.offsetHeight; // Trigger layout to make sure transition happen
                        
                        if (newChild.transitionManuallyStart) {
                            return newChild.transitionManuallyStart(this.props.data, start) || Promise.resolve();
                        }
                        newChildDom.classList.add(this.props.transitionName + "-enter-active");
                    }

                    if (prevChildDom) {
                        prevChildDom.classList.add(this.props.transitionName + "-leave");
                        prevChildDom.classList.add(this.itemClass);
                        timeout = this.props.timeout || DEFAULT_TIMEOUT;
                        prevChildDom.offsetHeight; // Trigger layout to make sure transition happen

                        if (prevChild.transitionLeaveManuallyStart) {
                            return prevChild.transitionLeaveManuallyStart(this.props.data, start) || Promise.resolve();
                        }
                        prevChildDom.classList.add(this.props.transitionName + "-leave-active");
                    }
                    return Promise.resolve();
                };

                const didStart = () => {
                    if (newChild.onTransitionDidStart) {
                        return newChild.onTransitionDidStart(this.props.data) || Promise.resolve();
                    }
                    if (prevChild && prevChild.onTransitionDidStartLeave) {
                        return prevChild.onTransitionLeaveDidStart(this.props.data) || Promise.resolve();
                    }
                    return Promise.resolve();
                };

                // Wait for transition
                const waitForTransition = () => new Promise(resolve => {
                    setTimeout(() => {
                        // Swap child and remove the old child
                        this.state.nextChild = this.state.nextChild === 1 ? 2 : 1;
                        this.state[`child${this.state.nextChild}`] = null;
                        this.forceUpdate(resolve);
                    }, timeout);
                });

                // Before remove classes
                const willEnd = () => {
                    if (newChild.onTransitionWillEnd) {
                        return newChild.onTransitionWillEnd(this.props.data) || Promise.resolve();
                    }
                    if (prevChild && prevChild.onTransitionLeaveWillEnd) {
                        return prevChild.onTransitionLeaveWillEnd(this.props.data) || Promise.resolve();
                    }
                    return Promise.resolve();
                };

                // Remove appear and active class (or trigger manual end)
                const end = () => {
                    if (newChildDom.classList.contains(this.itemClass)) {
                        newChildDom.classList.remove(this.props.transitionName + "-enter");
                        newChildDom.classList.remove(this.itemClass);

                        if (newChild.transitionManuallyStop) {
                            return newChild.transitionManuallyStop(this.props.data) || Promise.resolve();
                        }
                        newChildDom.classList.remove(this.props.transitionName + "-enter-active");
                    }

                    if (prevChildDom && prevChildDom.classList.contains(this.itemClass)) {
                        prevChildDom.classList.remove(this.props.transitionName + "-leave");
                        prevChildDom.classList.remove(this.itemClass);

                        if (prevChild.transitionLeaveManuallyStop) {
                            return prevChild.transitionLeaveManuallyStop(this.props.data) || Promise.resolve();
                        }
                        prevChildDom.classList.remove(this.props.transitionName + "-leave-active");
                    }
                    return Promise.resolve();
                };

                // After remove classes
                const didEnd = () => {
                    if (newChild.onTransitionDidEnd) {
                        return newChild.onTransitionDidEnd(this.props.data) || Promise.resolve();
                    }
                    if (prevChild && prevChild.onTransitionLeaveDidEnd) {
                        return prevChild.onTransitionLeaveDidEnd(this.props.data) || Promise.resolve();
                    }
                    return Promise.resolve();
                };

                Promise.resolve()
                    .then(willStart)
                    .then(start)
                    .then(didStart)
                    .then(waitForTransition)
                    .then(willEnd)
                    .then(end)
                    .then(didEnd)
                    .then(()=>{
                        this.props.onLoad && this.props.onLoad();
                        transiteDone();
                    })
                    .catch(transiteFailed);
            });
        });
    }

    render(){
        let {className, children} = this.props;
        return (
            <div {...this.props} className={classnames(setPhoenixPrefix('transition-wrapper'), className)} >
                {
                    React.Children.map(this.state.child1, element => React.cloneElement(element, {ref: 'child1'}))
                }
                {
                    React.Children.map(this.state.child2, element => React.cloneElement(element, {ref: 'child2'}))
                }
            </div>
        );
    }
}