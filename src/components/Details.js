import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            avatar: '',
            detailsAvailable: false
        }
    }
    showDetails = (id) => {
        var email = '',
            firstName = '',
            lastName = '',
            avatar = '',
            detailsAvailable = false;

        this.props.userDetails.map(function (item) {
            if (item.id == id) {
                email = item.email;
                firstName = item.first_name;
                lastName = item.last_name;
                avatar = item.avatar;
                detailsAvailable = true;
            }
        })
        this.setState({
            email: email,
            firstName: firstName,
            lastName: lastName,
            avatar: avatar,
            detailsAvailable
        })
    }
    render() {
        return (
            <div className="container">
                <div className="col-md-5">
                    <Card>
                        <ListGroup>
                            {
                                this.props.userDetails.map(function (item, index) {
                                    return (
                                        <ListGroup.Item key={item.id}>
                                            <div
                                                className="list-item click-button"
                                                onClick={() => this.showDetails(item.id)}
                                            >
                                                {item.first_name} {item.last_name}
                                            </div>

                                        </ListGroup.Item>);
                                }.bind(this))
                            }
                        </ListGroup>
                    </Card>


                </div>
                <div className="col-md-2"></div>
                <div className="col-md-5">
                    {this.state.detailsAvailable ?  
                        <Card className="detail-text">                            
                            <Card.Body>
                                <Card.Title>Profile</Card.Title>
                                <Card.Text className="detail-item">
                                    Name :{this.state.firstName} {this.state.lastName} <br></br>
                                    Email Id : {this.state.email}
                                </Card.Text>
                            </Card.Body>
                            <Card.Img 
                                className="detail-img"
                                variant="bottom" 
                                src={this.state.avatar}
                                alt={this.state.firstName}
                                 />                           
                        </Card>
                        : ""}
                </div>
            </div>
        )
    }
}

export default Details;
