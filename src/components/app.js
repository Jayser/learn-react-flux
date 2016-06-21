/**
 * Created by Sergii_Azizov on 6/16/2016.
 */

"use strict";

import React from "react";
import BlogList from "./blog-list/blog-list";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../../node_modules/jquery-ui/themes/base/jquery-ui.css';
import './app.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <h1>Blog title4</h1>
                <BlogList />
            </section>
        );
    }
}