import { ADD_TODO, DELETE_TODO } from '../actions/actions.js';

const initialState = {
    todos: []
}

function rootReducer(state = initialState, action) {
    switch(action.type){
        case ADD_TODO:
            return state.todos.concat(action.payload.text);;
        case DELETE_TODO:
            let nextState = Object.assign({}, state);
            delete nextState.todos[action.payload.id];
            return nextState;
        default:
            return state;
    }
}

export default rootReducer;