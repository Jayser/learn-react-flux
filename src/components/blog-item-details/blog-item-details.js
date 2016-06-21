/**
 * Created by Sergii_Azizov on 6/17/2016.
 */

import React from 'react';
import BlogStore from '../../stores/blog';
import { IndexLink  } from 'react-router';
import style from './blog-item-details.css';


export default class BlogItemDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {article: BlogStore.getItem(this.props.params.id)};
    }

    render() {
        return (
            <section>
                <h1>{this.state.article.title}</h1>
                <p>{this.state.article.description}</p>
                <IndexLink  to="/">Back</IndexLink >
            </section>
        );
    }
}