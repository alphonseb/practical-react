import React from 'react';

export class User extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        street: '',
        city: ''
    };

    fetchUser = async () => {
        const response = await window.fetch('https://api.randomuser.me/');
        const data = await response.json();
        this.updateUser(data);
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
                <button onClick={this.fetchUser}>Get Random User</button>
                <div style={{ width: 400, margin: '0 auto' }}>
                    <p style={{ textAlign: 'left' }}>
                        First Name :{' '}
                        <span style={{ textTransform: 'capitalize' }}>
                            {this.state.firstName}
                        </span>
                    </p>
                    <p style={{ textAlign: 'left' }}>
                        Last Name :{' '}
                        <span style={{ textTransform: 'capitalize' }}>
                            {this.state.lastName}
                        </span>
                    </p>
                    <p style={{ textAlign: 'left' }}>
                        Street :{' '}
                        <span style={{ textTransform: 'capitalize' }}>
                            {this.state.street}
                        </span>
                    </p>
                    <p style={{ textAlign: 'left' }}>
                        City :{' '}
                        <span style={{ textTransform: 'capitalize' }}>
                            {this.state.city}
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}
