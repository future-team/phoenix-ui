import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';
import Row from './Row';
import Col from './Col';

export default class FormGroup extends Component{

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
        componentTag:'form',
        classMapping : {

        }
    };

    constructor(props, context) {
        super(props, context);
    }

    renderItem(){
        let items = React.Children.map(this.props.children, (options, index)=> {

            return  React.cloneElement(options, {
                    className:classnames(
                        {
                            'input-row':!options.props.single
                        },
                        this.props.className
                    )

                });
        }, this);

        return items;
    }


    render(){
        let {componentTag:Component} = this.props;

        return (
            <Component className={
                classnames(
                    'input-group',
                    this.getProperty(),
                    this.props.className
                )
            }>
                {this.renderItem() }
            </Component>
        );
    }

}