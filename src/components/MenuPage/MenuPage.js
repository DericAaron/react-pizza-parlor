import React, {Component} from 'react'

import PizzaList from './PizzaList/PizzaList';



class MenuPage extends Component{
    
    render(){
        return(
            <div>
                <h1>Step 1: Select Your Pizza</h1>
                <PizzaList />


            </div>
        )
    }
}

export default MenuPage;