export const ADD_TODO = 'ADD_TODO';

export function addTodo(id, text) {
    return {
        type: ADD_TODO,
        payload: {
            text,
            id
        }
    }
}

export const TOGGLE_TODO = 'TOGGLE_TODO';

export function toggleTodo(id){
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}