/**
 * Created by Sergii_Azizov on 6/10/2016.
 */

"use strict";

import $ from "jquery";
import "jquery-ui";

import React from "react";
import ReactDOM from "react-dom";
import Divider from "../divider/divider";
import { Button } from 'react-bootstrap';
import styles from './blog-item.css';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {state: this.props.item.state}
    }

    clickHandler() {
        this.setState({state: !this.state.state});
    }

    initTooltipPlugin(el) {
        if (!el) {return}
        $(ReactDOM.findDOMNode(el)).tooltip();
    }

    render() {
        const btnText = this.state.state ? "Read" : "Unread";

        return (
            <article className={!this.state.state ? styles.item : ""}>
                <h1 className={this.props.moduleName + "article-title"}>{this.props.item.title}</h1>
                <p className={this.props.moduleName + "title"}>{this.props.item.description}</p>
                <Button className={this.props.moduleName + "button"}
                        bsSize="small"
                        bsStyle="primary"
                        title={btnText}
                        ref={this.initTooltipPlugin.bind(this)}
                        onClick={this.clickHandler.bind(this)}>
                    {btnText}
                </Button>
                <Divider className={this.props.moduleName + "divider"}/>
            </article>
        )
    }
}