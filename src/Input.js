/**
 * Created by panqianjin on 16/5/24.
 */
import React,{ PropTypes, Component } from 'react';
export default class Input extends Component {
    render() {
        return (
            <div>
                <input {...this.props} />
            </div>
        );
    }

}