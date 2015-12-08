import React, { Component } from 'react'
import NewTodo from '../components/newTodo'
import TodoList from '../components/todoList'

export default class App extends Component {
    render() {
        return (
            <div>
                <NewTodo onAddClicked={ text => console.log('Add todo "', text, '"') } />
                <TodoList
                    todos={[{ text: 'todo1', done: false }, { text: 'to do 2', done: false }]}
                    onTodoClicked={ index => console.log('Mark as done #', index) }
                />
            </div>
        )
    }
}
