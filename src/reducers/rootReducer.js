import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/actions.js';

const initialState = {
    todos: [
        {
            text: "Type a todo and click submit or press enter to add it to the list",
            complete: false
        },
        {
            text: "Click a todo to mark it done or undone, and the icon on the left to delete it",
            complete: true
        }
    ],
    input: ""
}

function rootReducer(state = initialState, action) {
    switch(action.type){
        case ADD_TODO:
            if(action.payload.text === ""){
                return state;
            } else {
                return Object.assign({}, state, {
                    todos: [...state.todos].concat({
                        text: action.payload.text,
                        complete: false
                    })
                });
            }
        case TOGGLE_TODO:
            let nextTodos = [...state.todos];
            nextTodos[action.payload.index].complete = !nextTodos[action.payload.index].complete;
            return Object.assign({}, state, {
                todos: nextTodos
                }
            );
        case DELETE_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, action.payload.index),
                    ...state.todos.slice(action.payload.index+1)
                ]
            })
        default:
            return state;
    }
}

export default rootReducer;