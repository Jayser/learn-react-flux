/**
 * Created by Sergii_Azizov on 6/10/2016.
 */

"use strict";

import React from "react";
import './button.css';

export default class extends React.Component {
    render() {
        return (
            <button className={this.props.moduleName + 'button'}
                    title={this.props.title}
                    ref={this.props.moduleName + 'button'}
                    onClick={this.props.onClick}>
                {this.props.children}
            </button>
        )
    }
}