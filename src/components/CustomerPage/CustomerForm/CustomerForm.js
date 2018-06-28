import React, { Component } from 'react'; 

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
            [event.target.name]: event.target.value, 
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.sendCustomerToRedux(this.state);
        console.log(this.state);
    }

    ///Give to johnny
   

    render() {
        console.log('rendering CustomerForm');
        
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input onChange={this.handleChange} placeholder="Name" 
                        value={this.state.name} name="name" />
                    </div>
                <div>
                    <input onChange={this.handleChange} placeholder="Street Address" 
                        value={this.state.street_address} name="street_address" />
                    </div>
                <div>
                    <input onChange={this.handleChange} placeholder="City" 
                        value={this.state.city} name="city" />
                    </div>
                <div>
                    <input onChange={this.handleChange} placeholder="Zip" 
                        value={this.state.zip} name="zip" />
                    </div>
                <div>
                <label className="radio">
                    <input onChange={this.handleChange} className="radio" type="radio"  
                        value={this.state.type === "Pickup"} name="type" />
                        Pickup
                    </label>
                    </div>
                      <div>
                <label className="radio">
                    <input onChange={this.handleChange} className="radio" type="radio"  
                        value={this.state.type === "Delivery"} name="type" />
                       Delivery
                    </label>
                    </div>
            </form>
        </div>
        );
    }
}

export default CustomerForm;