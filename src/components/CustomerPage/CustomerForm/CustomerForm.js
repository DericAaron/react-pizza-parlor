import React, { Component } from 'react'; 
import { connect } from 'react-redux';

const mapReduxToProps = (reduxStore) => ({
    customers: reduxStore.customerReducer
});

class CustomerForm extends Component {

    constructor () {
        super();
        this.state = {
            name: '', 
            street_address: '', 
            city: '', 
            zip: 0, 
            type: '',
        };
    }
    
    handleChange = (event) => {
        this.setState({
            name : event.target.value, 
            street_address : event.target.value, 
            city : event.target.value, 
            zip : event.target.value, 
            type : event.target.value, 
        })
    }

    handleSubmit = () => {
        event.preventDefault();
        console.log(this.state);
    }

    sendCustomerToRedux = () => {
        const body = {name: this.state.name, 
                    street_address: this.state.street_address, 
                    city: this.state.city, 
                    zip: this.state.zip, 
                    type: this.state.type};
        const action = {type: 'ADD_CUSTOMER', payload: body};
        this.props.dispatch(action);
        console.log(body);
        
    }

    render() {
        console.log('rendering CustomerForm');
        
        return (
            <div>

            <form onSubmit={this.handleSubmit}> 
                <div className="field">
                    <input className="input" type="text" name="name" placeholder="Name"
                            value={this.state.name} onChange={this.handleChange}> 
                    </input>
                </div>

                 <div className="field">
                    <input className="input" type="text" name="street_address" placeholder="Street Address"
                            value={this.state.street_address} onChange={this.handleChange}> 
                    </input>
                </div>

                <div className="field">
                    <input className="input" type="text" name="city" placeholder="City"
                            value={this.state.city} onChange={this.handleChange}> 
                    </input>
                </div>

                <div className="field">
                    <input className="input" type="text" name="zip" placeholder="Zip"
                            value={this.state.zip} onChange={this.handleChange}> 
                    </input>
                </div>

                <div className="field">
                {/* <div className="control"> */}
                 <label className="radio">
                    <input className="radio" type="radio" name="Pickup" 
                            value="Pickup" checked={this.state.type === "Pickup"} onChange={this.handleChange} /> 
                            Pickup
                </label>

                <label className="radio">
                    <input className="radio" type="radio" name="Delivery" 
                            value={this.state.type} onChange={this.handleChange} /> 
                            Delivery
                </label>
                {/* </div> */}
                </div>





                

            </form>
            </div>


        );
    }
}

export default connect(mapReduxToProps) (CustomerForm);