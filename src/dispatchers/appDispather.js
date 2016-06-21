/**
 * Created by Sergii_Azizov on 6/16/2016.
 */
import {Dispatcher} from 'flux';

const AppDispatcher = new Dispatcher();

AppDispatcher.handleBlogChange = function (action) {
    this.dispatch(action);
};

export default AppDispatcher;