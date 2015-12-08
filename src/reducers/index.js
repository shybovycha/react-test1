import { ADD_TODO, MARK_TODO_DONE } from '../actions'

const initialState = {
    todos: []
}

function todoApp(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        done: false
                    }
                ]
            })

        case MARK_TODO_DONE:
            return Object.assign({}, state, {
                todos: todos.map((e, i) => {
                    i == action.index ? Object.assign({}, e, { done: true }) : e
                })
            })

        default:
            return state
    }
}