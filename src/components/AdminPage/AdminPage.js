import React,{ Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';



const mapReduxToProps = (reduxStore) => ({
 reduxStore
});

class AdminPage extends Component {
    getOrderFromServer()  {
        axios.get('api/order').then((response) => {
            console.log('In AdminPage GET');
        })

    }
  

    render() {
        console.log('In AdminPage Component');
        return (
            <div>
                <Header />

            </div>
        )
    }
}
export default connect(mapReduxToProps)(AdminPage);





