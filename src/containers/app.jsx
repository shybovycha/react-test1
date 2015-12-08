import React, { Component, PropTypes } from 'react'
import NewTodo from '../components/newTodo'
import TodoList from '../components/todoList'
import { connect } from 'react-redux'
import { addTodo, markTodoDone } from '../actions'

class App extends Component {
    render() {
        const { dispatch, todos } = this.props

        return (
            <div>
                <NewTodo onAddClicked={ text => dispatch(addTodo(text)) } />
                <TodoList
                    todos={ todos }
                    onTodoClicked={ index => dispatch(markTodoDone(index)) }
                />
            </div>
        )
    }
}

function select(state) {
    return {
        todos: state.todos
    }
}

export default connect(select)(App)