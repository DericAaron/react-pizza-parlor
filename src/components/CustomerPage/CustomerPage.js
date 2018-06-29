import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class CustomerPage extends Component {

    constructor () {
            super();
            this.state = { customer: 
                        { name: '', 
                        street_address: '', 
                        city: '', 
                        zip: 0, 
                        type: ''},
                        toCheckout: false
    }
}

    handleChange = (event) => {
        this.setState({
          ...this.state, customer:{...this.state.customer, [event.target.name]: event.target.value 
        }});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.sendCustomerToRedux(this.state);
        console.log(this.state);
    }


    sendCustomerToRedux = () => {
        const body = this.state.customer;
        const action1 = {type: 'ADD_CUSTOMER', payload: body};
        const action2 = {type: 'SET_TYPE', payload: body};

        this.props.dispatch(action1);
        this.props.dispatch(action2);
        console.log(body);
        
    }

    handleOnClick = () => {
        this.sendCustomerToRedux();
        alert('Thanks for your order! Ready for checkout?');
        (this.setState({toCheckout: true}));
    }

    render() {
        if(this.state.toCheckout === true) {
            return <Redirect to='/checkout'/>
        }
        return (
            <div>
                <h2>Step 2: Customer Information</h2>
                <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input onChange={this.handleChange} placeholder="Name" 
                        value={this.state.customer.name} name="name" />
                    </div>
                <div>
                    <input onChange={this.handleChange} placeholder="Street Address" 
                        value={this.state.customer.street_address} name="street_address" />
                    </div>
                <div>
                    <input onChange={this.handleChange} placeholder="City" 
                        value={this.state.customer.city} name="city" />
                    </div>
                <div>
                    <input onChange={this.handleChange} placeholder="Zip" 
                        value={this.state.customer.zip} name="zip" />
                    </div>
                <div>
                <label className="radio">
                    <input onChange={this.handleChange} className="radio" type="radio"  
                        value={this.state.customer.type === "Pickup"} name="type" />
                        Pickup
                    </label>
                    </div>
                      <div>
                <label className="radio">
                    <input onChange={this.handleChange} className="radio" type="radio"  
                        value={this.state.customer.type === "Delivery"} name="type" />
                       Delivery
                    </label>
                    </div>
            </form>
        </div>
                <button onClick={this.handleOnClick}>
                    Next
                </button>
                <br />
                <br />
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(CustomerPage);