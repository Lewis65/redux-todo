import { ADD_TODO, TOGGLE_TODO } from '../actions/actions.js';

const initialState = {
    todos: [],
    input: ""
}

function rootReducer(state = initialState, action) {
    switch(action.type){
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [...state.todos, {
                    text: action.payload.text,
                    complete: false
                }]
            });
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    if(todo.id === action.payload.id){
                        return Object.assign({}, todo, {
                            complete: !todo.complete
                        })
                    }
                })
            })
        default:
            return state;
    }
}

export default rootReducer;