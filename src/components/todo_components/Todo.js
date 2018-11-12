import React from 'react'

export class Todo extends React.Component {
    state = {
        complete: this.props.complete
    }

    handleChange = _event => {
        this.setState({
            [_event.target.name]: _event.target.checked
        })
        this.props.toggleToDo({
            id: this.props.id,
            complete: this.state.complete,
            name: this.props.name
        })
    }

    render() {
        return (
            <div>
                <input
                    checked={this.state.complete}
                    type="checkbox"
                    name="complete"
                    id={this.props.id}
                    onChange={this.handleChange}
                />
                <label htmlFor={this.props.id}>{this.props.name}</label>
            </div>
        )
    }
}
