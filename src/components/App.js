import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Details from './Details';
import '../styles/index.css';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userJson: [],
            isDataLoaded: false,
            instructionText: "Click on Load to Get Details"
        }
    }
    loadDetails = () => {
        fetch('https://reqres.in/api/users',
            { method: 'GET' })
            .then(response => response.json())
            .then(json => this.setState({
                userJson: json.data,
                isDataLoaded: true,
                instructionText:"Click on Link Below to Load the Profile"
            })
            );
    }
    render() {
        return (
            <div className="App">
                <div className="justify-content-md-center"><h2>Welcome</h2></div>
        <div className="header-detail"><h5>{this.state.instructionText}</h5></div>
                {this.state.isDataLoaded ?
                    <Details userDetails={this.state.userJson} /> : ""}
                <div>
                    <Button
                        variant="outline-primary"
                        className="btn"
                        onClick={this.loadDetails}>
                        LOAD DETAILS
                    </Button>
                </div>
            </div>
        )
    }
}

export default App;
