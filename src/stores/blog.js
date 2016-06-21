/**
 * Created by Sergii_Azizov on 6/16/2016.
 */
import EventEmitter from 'events';
import appDispatcher from '../dispatchers/appDispather';
import blogConstants from '../constants/blog';

const EVENT_CHANGE = 'change';

const blogStore = Object.assign(EventEmitter.prototype, {
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

    getArticles() {
        return this.store;
    },

    toggleMarkIsRead(key) {
        this.store[key].isRead = !this.store[key].isRead;
    },

    getItem(key) {
        return this.store[key];
    },

    emitChange() {
        this.emit(EVENT_CHANGE);
    },

    addChangeListener(listener) {
        this.on(EVENT_CHANGE, listener);
    },

    removeChangeListener(listener) {
        this.removeListener(EVENT_CHANGE, listener);
    },

    dispatcherIndex: appDispatcher.register((action) => {
        switch (action.actionType) {
            case blogConstants.CHANGE_MARK_IS_READ:
                blogStore.toggleMarkIsRead(action.key);
                blogStore.emitChange();
                break;
            default:
                return true;
        }
    })
});

export default blogStore;