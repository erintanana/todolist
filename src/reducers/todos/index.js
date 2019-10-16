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
            }

        case TYPES.COMPLETE_TODO:
            return state.list.map(todo =>
                todo.id === action.id ? {...todo, isDone: !todo.isDone} : todo
            )
        default:
            return state
    }
}

export default todos