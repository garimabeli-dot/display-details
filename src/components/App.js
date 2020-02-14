import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Details from './Details';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userJson: [],
        }
    }
    loadDetails = () => {
        fetch('https://reqres.in/api/users',
            { method: 'GET' })
            .then(response => response.json())
            .then(json => this.setState({
                userJson: json.data,
            })
            );
    }
    render() {
        return (
            <div className="App">
                <h2>Welcome</h2>
                <h5>Welcome to the world of details</h5>             
                    <Details userDetails={this.state.userJson} /> 
                <div>
                    <Button
                        variant="outline-primary"
                        onClick={this.loadDetails}>
                        LOAD DETAILS
                    </Button>
                </div>
            </div>
        )
    }
}

export default App;
