export const ADD_TODO = 'ADD_TODO';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: {
            text
        }
    }
}

export const TOGGLE_TODO = 'TOGGLE_TODO';

export function toggleTodo(index){
    return {
        type: TOGGLE_TODO,
        payload: {
            index
        }
    }
}