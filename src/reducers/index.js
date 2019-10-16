/**
 * Created by User on 15.10.2019.
 */
import {combineReducers, applyMiddleware, createStore} from 'redux'

import thunk from 'redux-thunk';
import todos from './todos'

export default createStore(combineReducers({
    todos
}), applyMiddleware(thunk)
);