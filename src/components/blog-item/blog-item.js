/**
 * Created by Sergii_Azizov on 6/10/2016.
 */

"use strict";

// Vendors
import $ from "jquery";
import "jquery-ui";
import React from 'react';
import ReactDOM from "react-dom";
import Divider from "../divider/divider";
import styles from './blog-item.css';
import { Button } from 'react-bootstrap';
import BlogActions from '../../actions/blog';
import { Link } from 'react-router';

export default class BlogItem extends React.Component {
    constructor(props) {
        super(props);
    }

    refButton(el) {
        this.$refButton = ReactDOM.findDOMNode(el);
    }

    componentDidMount() {
        $(this.$refButton).tooltip();
    }

    componentWillUnmount() {
        $(this.$refButton).tooltip('destroy');
    }

    clickHandler() {
        BlogActions.markIsReadAction(this.props.article.key);
    }

    render() {
        const btnText = this.props.article.isRead ? "Read" : "Unread";
        const detailsLink = "/article/" + this.props.article.key;
        return (
            <article className={!this.props.article.isRead ? styles.item : ""}>
                <h1>
                    <Link to={detailsLink}>
                        {this.props.article.title}
                    </Link>
                </h1>
                <p>{this.props.article.description}</p>
                <Button bsSize="small"
                        bsStyle="primary"
                        title={btnText}
                        ref={this.refButton.bind(this)}
                        onClick={this.clickHandler.bind(this)}>
                    {btnText}
                </Button>
                <Divider />
            </article>
        )
    }
}