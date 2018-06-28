import React, { Component } from 'react';
import './CheckoutBody.css';
import { connect } from 'react-redux';


const mapReduxToProps = (reduxStore) => ({
    reduxStore
}) 

class CheckoutBody extends Component {
    render() {

        return (
            <div>
                <div>Customer Info
                    {this.props.reduxStore.customerReducer.name}
                    {this.props.reduxStore.customerReducer.street_address}
                    {this.props.reduxStore.customerReducer.city}
                    {this.props.reduxStore.customerReducer.zip}
                </div>
                <div>For Delivery
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name goes here</td>
                            <td>Cost goes here</td>
                        </tr>
                    </tbody>
                </table>
                <div>Total goes here</div>
            </div>
        )
    }
}

export default connect(mapReduxToProps)(CheckoutBody);