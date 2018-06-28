import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

class Customer{
    constructor(name, street, city, zip){
        this.name = name,
        this.street_address = street,
        this.city = city,
        this.zip = zip
    }
}

const customerReducer = (state = {}, action) => {
    if(action.type === 'ADD_CUSTOMER'){
        return new Customer(action.payload.name, action.payload.street_address, action.payload.city, action.payload.zip);
    }

    return state;
} //end customerReducer

//this will hold the array of selected pizzas



const pizzaReducer = (state = {menu: [], selected: []}, action) => {
    if(action.type === 'ADD_PIZZA'){
        return {...state, selected: [action.payload]}
    }
    else if(action.type === 'SET_MENU'){
        return {...state, menu: [...action.payload]}
    }
    return state;
}

const totalReducer = (state = {order_total: 0, type: 'delivery'}, action) =>{

    if(action.type === 'ADD_TOTAL'){
        return {...state, order_total: state.order_total + action.payload.order_total};
    } 
    else if (action.type === 'SUBTRACT_TOTAL'){
        return {...state, order_total: state.order_total - action.payload.order_total};
    }
    else if(action.type === 'SET_TYPE'){
        return {...state, type: action.payload.type}
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({customerReducer, pizzaReducer, totalReducer}),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
