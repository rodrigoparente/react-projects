import React from 'react'
import ReactDOM from 'react-dom'

import SeasonDisplay from './SeasonDisplay'
import LoaderDisplay from './LoaderDisplay'
import { throwStatement } from '@babel/types';

class App extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            lat: null,
            errorMessage: ''
        };        
    }

    // Good place to do data-loading
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );
    }

    // Good place to do daata-loading
    // when state/props value changes
    componentDidUpdate() {
        
    }

    // Helper function to avoid if statements
    // in the render function
    renderContent() {
        if(this.state.lat && !this.state.errorMessage) {
            return (
                <SeasonDisplay lat={this.state.lat} />
            );
        }
        if(this.state.errorMessage && !this.state.lat) {
            return (
                <div>Error: {this.state.errorMessage}</div>
            );
        }
        
        return (
            <LoaderDisplay message='Please accept location request'/>
        );
    }

    render () {
        return (
            <div className="index-wrapper">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));