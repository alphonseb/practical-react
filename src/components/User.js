import React from 'react';

export class User extends React.Component {
    state = {
        userNumber: 1,
        people: [],
        firstName: '',
        lastName: '',
        street: '',
        city: ''
    };

    updateUserNumber = event => {
        this.setState({
            userNumber: event.target.value
        });
    };

    fetchUser = async () => {
        const response = await window.fetch(
            `https://api.randomuser.me/?results=${this.state.userNumber}`
        );
        const data = await response.json();
        this.setState({ people: data.results });
        // this.updateUser(data);
    };

    updateUser = user => {
        const userResults = user.results[0];
        const { first: firstName, last: lastName } = userResults.name;
        const { street, city } = userResults.location;
        this.setState({ firstName, lastName, street, city });
    };

    render() {
        return (
            <div className="user">
                <input
                    type="number"
                    value={this.state.userNumber}
                    onChange={this.updateUserNumber}
                />
                <button onClick={this.fetchUser}>
                    Get {this.state.userNumber} Random Users
                </button>
                {this.state.people.map(person => {
                    return (
                        <div
                            style={{ width: 400, margin: '0 auto' }}
                            key={person.login.uuid}
                        >
                            <p style={{ textAlign: 'left' }}>
                                Title :{' '}
                                <span style={{ textTransform: 'capitalize' }}>
                                    {person.name.title}
                                </span>
                            </p>
                            <p style={{ textAlign: 'left' }}>
                                First Name :{' '}
                                <span style={{ textTransform: 'capitalize' }}>
                                    {person.name.first}
                                </span>
                            </p>
                            <p style={{ textAlign: 'left' }}>
                                Last Name:{' '}
                                <span style={{ textTransform: 'capitalize' }}>
                                    {person.name.last}
                                </span>
                            </p>
                        </div>
                    );
                })}
            </div>
        );
    }
}
