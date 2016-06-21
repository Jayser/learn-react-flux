/**
 * Created by Sergii_Azizov on 6/10/2016.
 */

"use strict";

import React from "react";
import BlogItem from "../blog-item/blog-item";
import BlogStore from "../../stores/blog";
import './blog-list.css';

function getBlogState() {
    return {articles: BlogStore.getArticles()};
}

export default class BlogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = getBlogState();
        this._onChange = this._onChange.bind(this);
    }

    _onChange() {
        this.setState(getBlogState());
    }

    componentDidMount() {
        BlogStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        BlogStore.removeChangeListener(this._onChange);
    }

    render() {
        const BlogItems = this.state.articles.map((article) =>
            <BlogItem key={article.key} article={article} />
        );
        return <div>{BlogItems}</div>;
    }
}