import { ADD_TODO, TOGGLE_TODO } from '../actions/actions.js';

const initialState = {
    todos: [{
        text: "Make redux-todo work",
        complete: false
    }],
    input: ""
}

function rootReducer(state = initialState, action) {
    switch(action.type){
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [...state.todos].concat({
                    text: action.payload.text,
                    complete: false
                }),
                input: ""
            });
        case TOGGLE_TODO:
            let nextTodos = [...state.todos];
            nextTodos[action.payload.index].complete = !nextTodos[action.payload.index].complete;
            return Object.assign({}, state, {
                todos: nextTodos
                }
            );
        default:
            return state;
    }
}

export default rootReducer;