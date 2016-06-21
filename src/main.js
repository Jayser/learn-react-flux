/**
 * Created by Sergii_Azizov on 6/10/2016.
 */

"use strict";
import React from "react";
import {render} from "react-dom";
import {Router, Route, hashHistory} from 'react-router';
import App from './components/app';
import BlogItemDetails from './components/blog-item-details/blog-item-details';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/article/:id" component={BlogItemDetails} />
    </Router>
), document.getElementById("app"));