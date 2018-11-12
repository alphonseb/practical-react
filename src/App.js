import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Counter } from './components/Counter';
import { ImageSlider } from './components/Imageslider';
import { Form } from './components/Form';
import { User } from './components/User';
import { Todolist } from './components/Todolist';

class App extends Component {
    state = {
        sliderVisible: true,
        formInput: ''
    };

    toggleSlider = () => {
        this.setState({
            sliderVisible: !this.state.sliderVisible
        });
    };

    logFormState = formState => {
        this.setState({
            formInput: formState.textInput
        });
    };

    render() {
        const btnTxt = this.state.sliderVisible ? 'Hide' : 'Show';

        return (
            <div className="App">
                <Header
                    name={this.state.formInput || 'Alphonse'}
                    link={{
                        href: 'http://www.alphonsebouy.fr',
                        title: 'Portfolio'
                    }}
                />
                <Counter initialCount={5} />
                <Counter initialCount={15} />
                {this.state.sliderVisible ? <ImageSlider /> : null}
                <button onClick={this.toggleSlider}>{btnTxt} Slider</button>
                <Form logState={this.logFormState} />
                <User />
                <Todolist />
            </div>
        );
    }
}

export default App;
