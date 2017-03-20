import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Queue from 'promise-queue';
import {setPhoenixPrefix} from './utils/Tool';

/**
 * 路由切换组件<br/>
 * - 通过transitionName设置动画类型，可选[fade, slide-top, slide-bottom, slide-left, slide-right]。
 * - 通过onLoad函数设置动画完成的回调。
 * - 在列表页的最外层元素加`ph-transition-index`类，其他页面跳转到列表页都是回退的效果，到另一个新页面都是前进的效果。
 *
 * 主要属性和接口：
 * - transitionName:动画类型／动画名称，默认fade。
 * - onLoad:动画完成的回调函数。
 * 
 * 示例：
 * ```code
 *  let {PageTransition} from 'phoenix-ui';
 * 
 *  const RouteTransition = (props)=>(
 *      <PageTransition {...props} transitionName="slide-left" onLoad={()=>{console.log('end!!!');}}>{props.children}</PageTransition>
 *  );
 * ```
 * ```code
 *  let Index = class index extends Component {
 *      render() {
 *          return (
 *              <div className="menu ph-transition-index">
 *                  ...
 *               </div>
 *          );
 *      }
 *  };
 * ```
 * ```code
 *  <Router history={this.history}>
 *      <Route path="/" component={RouteTransition}>
 *          <Route path="/index" name="index" component={Index} />
 *          <Route path="/button" name="button" component={Button} />
 *          ...
 *          <Redirect from="/" to="/index" />
 *      </Route>
 *  </Router>
 * ```
 * 
 * @class PageTransition
 * @module 路由动画
 * @extends Component
 * @constructor
 * @since 1.6.0
 * @demo pagetransition|page-transition.js {展示}
 * @show true
 * */

export default class PageTransition extends React.Component{

    static propTypes={
        /**
         * 动画名称，可选[fade, slide-top, slide-bottom, slide-left, slide-right]
         * @property transitionName
         * @type String
         * @default 'fade'
         * */
        transitionName: PropTypes.string,
        /**
         * 动画结束执行的回调
         * @method onLoad
         * @type Function
         * @default null
         * */
        onLoad: PropTypes.func,
        timeout: PropTypes.number,
        animateOnInit: PropTypes.bool,
        data: PropTypes.object,
    };

    static defaultProps = {
        timeout: 300,
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
        
        this.routeRecord = [props.location.pathname];
        this.forward = true;
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
        // 判断当前是往前还是后退
        this.forward = this.routeForward(nextProps.location.pathname);

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

    routeForward(nextPathName){
        let routeLen = this.routeRecord.length;

        if(routeLen>1 && this.routeRecord[routeLen-2]===nextPathName){// back
            this.routeRecord.pop();
            return false;
        }else{
            this.routeRecord.push(nextPathName);
            return true;
        }
    }

    getClass(mode){
        if(mode&&this.forward || !mode&&!this.forward){
            return setPhoenixPrefix('transition-from');
        }else{
            return setPhoenixPrefix('transition-to');
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
                    if(newChildDom.classList.contains(setPhoenixPrefix('transition-index'))){ //  如果新页面包含'transition-index'强制为后退
                        this.forward = false;
                    }else if(prevChildDom && prevChildDom.classList.contains(setPhoenixPrefix('transition-index'))){//  如果新页面包含'transition-index'强制为前进
                        this.forward = true;
                    }

                    if (newChildDom) {
                        timeout = this.props.timeout;
                        newChildDom.classList.add(this.props.transitionName + "-enter");
                        if(prevChildDom) newChildDom.classList.add(this.itemClass);
                        newChildDom.classList.add(this.getClass(true));

                        newChildDom.offsetHeight; // Trigger layout to make sure transition happen
                        
                        if (newChild.transitionManuallyStart) {
                            return newChild.transitionManuallyStart(this.props.data, start) || Promise.resolve();
                        }
                        newChildDom.classList.add(this.props.transitionName + "-enter-active");
                    }

                    if (prevChildDom) {
                        prevChildDom.classList.add(this.props.transitionName + "-leave");
                        prevChildDom.classList.add(this.itemClass);
                        prevChildDom.classList.add(this.getClass(false));
                        
                        timeout = this.props.timeout;
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
                    if (newChildDom) {
                        newChildDom.classList.remove(this.props.transitionName + "-enter");
                        newChildDom.classList.remove(this.getClass(true));
                        newChildDom.classList.remove(this.itemClass);

                        if (newChild.transitionManuallyStop) {
                            return newChild.transitionManuallyStop(this.props.data) || Promise.resolve();
                        }
                        newChildDom.classList.remove(this.props.transitionName + "-enter-active");
                    }

                    if (prevChildDom) {
                        prevChildDom.classList.remove(this.props.transitionName + "-leave");
                        prevChildDom.classList.remove(this.getClass(false));
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