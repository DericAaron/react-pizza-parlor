import React,{ Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import CheckoutBody from './CheckoutBody/CheckoutBody';



const mapReduxToProps = (reduxStore) => ({
 reduxStore
});

class CheckoutPage extends Component {

    sendOrderToServer = () => {
        const order = {
            customer: this.props.reduxStore.customerReducer,
            pizzas: this.props.reduxStore.pizzaReducer,
            order_total: this.props.reduxStore.totalReducer,

        }
        axios.post('/api/order', order).then((response) => {
            console.log('response from server', response)
            alert('Congrats! Your order was successful! w00t!😎')
        })
        .catch((error) => {
            console.log(error);
            alert('DANGER! Call your local dev team!🛠')
        });
    }

    render() {
        console.log('In CheckoutPage Component.');
        return (
            <div>
                <Header />
                <CheckoutBody />
                <Total />
                <button onClick={this.sendOrderToServer}>Checkout</button>
            </div>
        )
    }
}
export default connect(mapReduxToProps)(CheckoutPage);

