/**
 * Created by Sergii_Azizov on 6/10/2016.
 */

"use strict";

import React from "react";
import BlogItem from "../blog-item/blog-item";
import './blog-list.css';

export default class BlogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: this.props.data};
    }

    render() {
        const BlogItems = this.state.data.map((item) => {
            return (
                <BlogItem key={item.key} moduleName={this.props.moduleName} item={item}/>
            )
        }, this);

        return (
            <section className={this.props.moduleName+ "wrapper"}>
                <h1 className={this.props.moduleName+ "title"}>{this.props.title}</h1>
                {BlogItems}
            </section>
        )
    }
}

BlogList.propsType = {
    moduleName: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    data: React.PropTypes.object.isRequired
};

BlogList.defaultProps = {
    moduleName: null,
    title: null,
    data: null
};