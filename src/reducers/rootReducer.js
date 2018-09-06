import { ADD_TODO, TOGGLE_TODO } from '../actions/actions.js';

const initialState = {
    todos: [{
        id: 1,
        text: "Make redux-todo work",
        status: "incomplete"
    }],
    input: ""
}

function rootReducer(state = initialState, action) {
    switch(action.type){
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [...state.todos, {
                    text: action.payload.text,
                    complete: false
                }],
                input: ''
            });
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if(index === action.payload.index){
                        let nextState = Object.assign({}, state);
                        nextState.todos[index].status = "complete";
                        return nextState;
                    }
                })
            })
        default:
            return state;
    }
}

export default rootReducer;