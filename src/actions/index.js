export const ADD_TODO = 'ADD_TODO';
export const MARK_TODO_DONE = 'MARK_TODO_DONE';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function markTodoDone(index) {
    return {
        type: MARK_TODO_DONE,
        index
    }
}