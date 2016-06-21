/**
 * Created by Sergii_Azizov on 6/16/2016.
 */

import appDispatcher from '../dispatchers/appDispather';
import blogConstant from '../constants/blog';

export default {
    markIsRead: function (key) {
        appDispatcher.handleBlogChange({
            actionType: blogConstant.CHANGE_MARK_IS_READ,
            key: key
        });
    }
};