import React, { Component, PropTypes } from 'react'

export default class NewTodo extends Component {
    render() {
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick={ e => this.onClick(e) }>Add</button>
            </div>
        )
    }

    onClick(e) {
        const inputNode = this.refs.input
        const text = inputNode.value.trim()

        this.props.onAddClicked(text)

        inputNode.value = ''
    }
}

NewTodo.propTypes = {
    onAddClicked: PropTypes.func.isRequired
}