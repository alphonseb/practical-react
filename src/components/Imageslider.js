import React, { Component } from 'react';
import warpcore from '../images/warpcore.png';
import sohetic from '../images/sohetic.jpg';
import azteque from '../images/azteque.png';

export class ImageSlider extends Component {
    state = {
        images: [warpcore, sohetic, azteque],
        currentImage: 0
    };

    constructor() {
        super();
        this.$img = null;
    }

    nextImg = () => {
        this.setState({
            currentImage:
                this.state.currentImage + 1 < 3
                    ? this.state.currentImage + 1
                    : 0
        });
    };

    prevImg = () => {
        this.setState({
            currentImage:
                this.state.currentImage - 1 > -1
                    ? this.state.currentImage - 1
                    : 2
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.prevImg}>Prev</button>
                <img
                    style={{
                        width: 150,
                        height: 150
                    }}
                    src={this.state.images[this.state.currentImage]}
                    alt=""
                />
                <button onClick={this.nextImg}>Next</button>
            </div>
        );
    }
}
