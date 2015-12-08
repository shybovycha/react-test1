import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div
                onClick={ this.props.onClick }
                style={{
                    textDecoration: this.props.done ? 'line-through' : 'none',
                    cursor: this.props.done ? 'default' : 'pointer'
                }}>
                { this.props.text }
            </div>
        )
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
}