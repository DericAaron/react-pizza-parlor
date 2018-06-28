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
    render() {
        console.log('In CheckoutPage Component.');
        return (
            <div>
                <Header />
                <CheckoutBody />
                <Total />
                <Button />
            </div>
        )
    }
}
export default connect(mapReduxToProps)(CheckoutPage);

