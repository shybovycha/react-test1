import React, { Component, PropTypes } from 'react'
import Todo from './todo'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                { this.props.todos.map((todo, index) =>
                    <Todo { ...todo }
                        key={ index }
                        onClick={ () => this.props.onTodoClicked(index) }
                    />
                ) }
            </div>
        )
    }
}

TodoList.propTypes = {
    onTodoClicked: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired
    }).isRequired).isRequired
}