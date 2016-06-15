/**
 * Created by Sergii_Azizov on 6/10/2016.
 */

"use strict";

import React from "react";
import './divider.css';

export default class extends React.Component {
    render() {
        return <hr className={this.props.moduleName} />
    }
}