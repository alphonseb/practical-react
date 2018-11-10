import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <header>
                <h1>Welcome to React {this.props.name || 'bitch'}</h1>
                <a
                    href={this.props.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={this.props.link.title}
                >
                    Check this out !
                </a>
            </header>
        );
    }
}
