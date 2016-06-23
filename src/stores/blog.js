/**
 * Created by Sergii_Azizov on 6/16/2016.
 */

"use strict";

import Reflux from 'reflux';
import Actions from '../actions/blog';

export default Reflux.createStore({
    store: [
        {
            key: 0,
            title: "Краткое руководство по React JS",
            description: "Ксюша, сейчас облазил кучу сообществ и везде рэп или Хип-хоп о любви и бывших. Блин, у меня уже нервы сдают от всего и все эти песни настолько однотипны, что просто жесть(( Разучились петь... или слушать...",
            isRead: false
        },
        {
            key: 1,
            title: "Жизненный цикл компонента React.js",
            description: "Я конечно не музыкальны критик, не Сергей Соседов (и слава Богу), но...В песне должны гармонировать и слова и музыка. Музыка красивая, приятно слушать, но люди прочтите отдельно просто текст...",
            isRead: true
        },
        {
            key: 2,
            title: "Введение в React.js",
            description: "Пожалуй, самый сексуальный клип этого лета 🔥 К слову, кто забыл - этот парень качнул всю страну с хитом 'Слышь, ты че такая дерзкая'",
            isRead: false
        }
    ],
    getInitialState: function () {
        return this.store;
    },

    init: function () {
        this.listenTo(Actions.markIsReadAction, this.markIsRead);
    },

    getArticles: function () {
        return this.store;
    },

    getItem: function (key) {
        return this.store[key];
    },

    markIsRead: function (key) {
        this.store[key].isRead = !this.store[key].isRead;
        this.trigger(this.store);
    }
});