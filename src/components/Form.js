import React from 'react';

const initialState = {
    textInput: '',
    textError: ''
};

export class Form extends React.Component {
    state = initialState;

    txtInput = _event => {
        this.setState({
            textInput: _event.target.value
        });
    };

    validate = () => {
        if (!this.state.textInput) {
            this.setState({
                textError: 'Name cannot be blank'
            });
            return false;
        }
        return true;
    };

    render() {
        return (
            <div className="form">
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        if (this.validate()) {
                            this.props.logState(this.state);
                            this.setState(initialState);
                        }
                    }}
                >
                    <label htmlFor="text">New Name</label>
                    <input
                        value={this.state.textInput}
                        type="text"
                        id="text"
                        onChange={this.txtInput}
                    />
                    <p>{this.state.textError}</p>
                    <input type="submit" />
                </form>
                <p>{this.state.textInput}</p>
            </div>
        );
    }
}
