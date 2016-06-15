/**
 * Created by Sergii_Azizov on 6/10/2016.
 */

"use strict";
import React from "react";
import ReactDOM from "react-dom";
import BlogList from "./components/blog-list/blog-list";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../node_modules/jquery-ui/themes/base/jquery-ui.css';
import './main.css';

const blogListData = [
    {
        key: 1,
        title: "Краткое руководство по React JS",
        description: "description 1",
        state: false
    },
    {
        key: 2,
        title: "Жизненный цикл компонента React.js",
        description: "description 2",
        state: true
    },
    {
        key: 3,
        title: "Введение в React.js",
        description: "description 3",
        state: false
    }
];

ReactDOM.render(
    <BlogList title="Blog title4" moduleName="jsr-blog-articles__" data={blogListData} />,
    document.getElementById("app")
);