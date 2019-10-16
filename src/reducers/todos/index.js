import * as TYPES from './types';

const initState = {
    lastId: 0,
    list: [],
};

const todos = (state = initState, action) => {
    switch (action.type) {
        case TYPES.INCREMENT_LAST_ID:
            return {
                ...state,
                lastId: state.lastId + 1,
            };

        case TYPES.ADD_TODO:
            return {
                ...state,
                list: [...state.list, {
                    id: state.lastId,
                    task: action.task,
                    isDone: false
                }],
            };

        case TYPES.COMPLETE_TODO:
            return {
                list: state.list.map(todo =>
                    todo.id === action.id ? {...todo, isDone: !todo.isDone} : todo
                ),
                lastId: state.lastId,
            };

        case TYPES.REMOVE_TODO:
            return {
                list: state.list.filter(el => el.id !== action.id),
                lastId: state.lastId,
            };

        default:
            return state;
    }
}

export default todos;