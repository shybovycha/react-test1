import { ADD_TODO, MARK_TODO_DONE } from '../actions'

const initialState = {
    todos: [{ text: 'todo1', done: true }, { text: 'to do 2', done: false }]
}

export default function todoApp(state = initialState, action) {
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
                todos: state.todos.map((e, i) => {
                    return (i == action.index ? Object.assign({}, e, { done: !e.done }) : e)
                })
            })

        default:
            return state
    }
}