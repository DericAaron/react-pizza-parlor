import React, {Component} from 'react'
import {HashBrowser as Router, Link} from 'react-router-dom';
import PizzaList from './PizzaList/PizzaList';



class MenuPage extends Component{
    
    render(){
        return(
            <div>
                <h1>Step 1: Select Your Pizza</h1>
                <PizzaList />
                
                
                    <Link to="/customer"><button>Next</button></Link>
                

            </div>
        )
    }
}

export default MenuPage;