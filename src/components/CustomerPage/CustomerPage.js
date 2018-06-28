import React, { Component } from 'react';
import CustomerForm from './CustomerForm/CustomerForm';
import { connect } from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class CustomerPage extends Component {

    sendCustomerToRedux = () => {
        const body = {name: this.state.name, 
                    street_address: this.state.street_address, 
                    city: this.state.city, 
                    zip: this.state.zip, 
                    type: this.state.type};
        const action1 = {type: 'ADD_CUSTOMER', payload: body};
        const action2 = {type: 'SET_TYPE', payload: body};

        this.props.dispatch(action1);
        this.props.dispatch(action2);
        console.log(body);
        
    }

    render() {
        return (
            <div>
                <h2>Step 2: Customer Information</h2>
                <CustomerForm sendCustomerToRedux={this.sendCustomerToRedux}/>
                {/* dispatch takes in an action */}
                <Router>
                <button onClick={() => this.sendCustomerToRedux}>
                    Next
                    <Link to="/checkout" />
                </button>
                </Router>
                <br />
                <br />
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(CustomerPage);