import React from 'react'

export class TodoForm extends React.Component {
    state = {
        todoName: '',
        todoId: 0
    }

    handleChange = _event => {
        this.setState({
            [_event.target.name]: _event.target.value
        })
    }

    handleSubmit = _event => {
        _event.preventDefault()
        this.props.addToDo({
            name: this.state.todoName,
            complete: false,
            id: this.state.todoId
        })
        this.setState(state => {
            return {
                todoName: '',
                todoId: state.todoId + 1
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="todoName"
                    value={this.state.todoName}
                    onChange={this.handleChange}
                />
                <button type="submit">Add Todo</button>
            </form>
        )
    }
}
