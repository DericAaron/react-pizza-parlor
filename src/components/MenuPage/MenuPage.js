import React, {Component} from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';
import PizzaList from './PizzaList/PizzaList';

const mapReduxToProps = (reduxStore) =>({
    reduxStore
})

class MenuPage extends Component{
    
    render(){
        return(
            <div>
                <h1>Step 1: Select Your Pizza</h1>
                {/* <PizzaList /> */}
            </div>
        )
    }
}

export default connect(mapReduxToProps)(MenuPage);