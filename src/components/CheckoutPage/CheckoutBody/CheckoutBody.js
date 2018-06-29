import React, { Component } from 'react';
import './CheckoutBody.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableInfo from '../TableInfo/TableInfo';


const mapReduxToProps = (reduxStore) => ({
    pizzas: reduxStore.pizzaReducer.selected
}) 

class CheckoutBody extends Component {
    render() {
        
        return (
            <div>
            {/* <pre>{JSON.stringify(this.props.pizzas)}</pre>   */}
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.props.pizzas.map((pizza, i) => 
                            <tr><TableInfo pizza={pizza} key={i} /></tr>)}
                    </tbody>
                </table>
            </div>

           
        )
    }
}

export default connect(mapReduxToProps)(CheckoutBody);