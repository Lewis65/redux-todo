export const ADD_TODO = 'ADD_TODO';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: {
            text
        }
    }
}

export const DELETE_TODO = 'DELETE_TODO';

export function deleteTodo(id){
    return {
        type: DELETE_TODO,
        payload: {
            id
        }
    }
}