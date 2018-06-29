import React, {Component} from 'react'
import PizzaItem from '../PizzaItem/PizzaItem';
import {connect} from 'react-redux';
import axios from 'axios';

import './PizzaList.css';

const mapReduxToProps = (reduxStore) =>({
    reduxStore
})

class PizzaList extends Component{

    getPizzas = () =>{

        console.log('GetPizza Called');
        
        axios.get('/api/pizza')
            .then( (response) => {
                // console.log('back from getPizza', response.data);
                const action = {type: 'SET_MENU', payload: response.data};
                this.props.dispatch(action);
                
            }).catch( () => {
                console.log('Error in get pizza');
                
            });

    }//emd getPizzas

    componentDidMount() {
        this.getPizzas();
    }//end didMount

    render(){
        return(
            <div className="menuGrid">

                    {
                    this.props.reduxStore.pizzaReducer.menu.map( (pizza, i) => {
                        return <PizzaItem key={i} pizza={pizza}/>
                    })
                    }
                
            </div>
        );
    }
}

export default connect(mapReduxToProps)(PizzaList);