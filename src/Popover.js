import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import Tool from './utils/Tool'

/**
 * 气泡组件<br/>
 * - 配合倾听者组件Whisper使用, 作为Whisper的target。
 *
 * 示例:
 * ```code
 *     const popover = ( // 可以通过style自定义位置
 *         <Popover>
 *             <ul className="ph-popover-list">
 *                 <li className="ph-popover-item">未上线单店</li>
 *                 <li className="ph-popover-item">未上线连锁店</li>
 *             </ul>
 *         </Popover>
 *     );
 * ```
 * ```code
 *     <Whisper placement="top" onChange={()=>{console.log('气泡出现消失时额外的执行函数');}} target={popover} distance={10} >Top</Whisper>
 * ```
 *
 * @class Popover
 * @module 提示组件
 * @extends Component
 * @constructor
 * @demo popover|popover.js {展示}
 * @show true
 * */
export default class Popover extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default 'popover'
         * */
        classPrefix: PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * */
        componentTag: PropTypes.string
    };

    static defaultProps = {
        classPrefix:'popover',
        componentTag: 'div',
        classMapping : {
            'top': 'top center-x',
            'bottom': 'bottom center-x',
            'left': 'left center-y',
            'right': 'right center-y',
            'top left': 'top left-x',
            'top right': 'top right-x',
            'bottom left': 'bottom left-x',
            'bottom right': 'bottom right-x'
        }
    };

    constructor(props, context) {
        super(props, context);

        this.handleDocumentClick = this.handleDocumentClick.bind(this);

        document.addEventListener('click', this.handleDocumentClick, false);
    }

    handleDocumentClick(event){
        let el = event.target;

        if(!Tool.closest(el,'.ph-popover') && !(this.props.whisper==event.target)){
            this.props.onClose();
        }

        return false;
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.handleDocumentClick, false);
    }

    render(){
        let {componentTag:Component, className, styles, style, children} = this.props;

        return (
            <Component {...this.props}
                className={classnames(
                    this.getProperty(true),
                    className
                )}
                style={Object.assign(styles, style)}
            >
                <div className={Tool.setPhoenixPrefix('popover-arrow')}></div>
                <div className={Tool.setPhoenixPrefix('popover-content')}>
                    {children}
                </div>
            </Component>
        );
    }
}
