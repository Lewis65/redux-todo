import { ADD_TODO } from '../actions/actions.js';

const initialState = {
    todos: []
}

function rootReducer(state = initialState, action) {
    switch(action.type){
        case ADD_TODO:
            state.todos.concat(action.payload.text);
            return ;
        default:
            return state;
    }
}

export default rootReducer;