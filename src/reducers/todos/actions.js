import * as TYPES from './types';

const incrementLastId = () => ({type: TYPES.INCREMENT_LAST_ID});

const add = task => ({
    type: TYPES.ADD_TODO,
    task
});

export const addTask = task => {
    return (dispatch, getState) => {
        dispatch(incrementLastId());
        dispatch(add(task));
    };
};

export const complete = id => ({
    type: TYPES.COMPLETE_TODO,
    id
});

export const remove = id => ({
    type: TYPES.REMOVE_TODO,
    id
});