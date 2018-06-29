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
        console.log('in sendOrderToServer', order)
        axios.post('/api/order', order).then((response) => {
            console.log('response from server', response)
            alert('CONGRATS! Your order was successful! 😎')
        })
        .catch((error) => {
            console.log(error);
            alert('DANGER! Call your local dev team! 🛠')
        });
    }
   

    render() {
        console.log('In CheckoutPage Component.');
        return (
            <div>
                <Header />
                <div>{this.props.reduxStore.totalReducer.order_total}</div>
                <CheckoutBody />
              
                <button onClick={this.sendOrderToServer}>
                    Checkout
                    <Link to="/" />
                </button>
            </div>
        )
    }
}
export default connect(mapReduxToProps)(CheckoutPage);

