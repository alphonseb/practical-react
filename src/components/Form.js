import React from 'react';

export class Form extends React.Component {
    state = {
        textInput: ''
    };

    txtInput = _event => {
        this.setState({
            textInput: _event.target.value
        });
    };

    render() {
        return (
            <div className="form">
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        this.props.logState(this.state);
                    }}
                >
                    <label htmlFor="text">Texte</label>
                    <input
                        value={this.state.textInput}
                        type="text"
                        id="text"
                        onChange={this.txtInput}
                    />
                    <input type="submit" />
                </form>
                <p>{this.state.textInput}</p>
            </div>
        );
    }
}
