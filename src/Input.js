import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

export default class Input extends Component{

    static propTypes = {
        /**
         * 样式前缀
         * @property classPrefix
         * @type String
         * @default btn
         * */
        classPrefix:PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * @default a
         * */
        componentTag:PropTypes.string
    };

    static defaultProps = {
        egSize:'',
        classPrefix:'',
        componentTag:'div',
        classMapping : {

        }
    };

    constructor(props, context) {
        super(props, context);
    }

    otherView(type){
        return (
            <label className="multi-group">
                <div className={`ui-${type}`}>
                    <input {...this.props} />
                    <i></i>
                </div>
                <span>{this.props.label ||''}</span>
            </label>
        );
    }

    renderInput(type){
        let html = <div></div>;

        if(type =='checkbox' || type=='radio'){
            html=this.otherView(type);
        }else{
            html = (<input {...this.props} className={
                classnames(
                    'form-input',
                    this.getProperty(),
                    this.props.className
                )
                }/>);
        }

        return html;
    }


    render(){
        let {componentTag:Component,type} = this.props;
        return this.renderInput(type ? type:'text');
    }

}