import React, { Component } from 'react';
import '../styles/index.css';

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
            avatar = '';

        this.props.userDetails.map(function (item) {
            if (item.id == id) {
                email = item.email;
                firstName = item.first_name;
                lastName = item.last_name;
                avatar = item.avatar;
            }
        })
        this.setState({
            email: email,
            firstName: firstName,
            lastName: lastName,
            avatar: avatar,
        })
    }
    render() {
        return (
            <div className="container">
                <div className="col-md-5">
                     <h4>Names</h4>
                    <ul className="list-group">
                        {
                            this.props.userDetails.map(function (item, index) {
                                return (
                                    <li key={item.id} className="list-group-item">
                                        <div
                                            className="list-item click-button"
                                            onClick={() => this.showDetails(item.id)}
                                        >
                                            {item.first_name} {item.last_name}
                                        </div>

                                    </li>);
                            }.bind(this))
                        }
                    </ul> 
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-5">
                         <div>
                             <h4>Details</h4>
                             <div className="detail-text">                                
                                 <div className="detail-item">Name :{this.state.firstName} {this.state.lastName}</div>
                                 <div className="detail-item">Email Id : {this.state.email}</div>
                                 <div className="detail-img">
                                     <img
                                         src={this.state.avatar}
                                         alt={this.state.email}
                                     />
                                 </div>
                             </div>
                         </div>
                </div>
            </div>
        )
    }
}

export default Details;
