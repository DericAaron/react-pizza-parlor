import React, {Component} from 'react';
import './PizzaItem.css';

class PizzaItem extends Component{


    render(){
        console.log(this.props.pizza);
        
        return(
            <div>
                <img src={this.props.pizza.image_path} alt=""/>
                <h3>{this.props.pizza.name}</h3>
                <p>{this.props.pizza.description}</p>
                <p>${this.props.pizza.cost} USD</p>
                <button>Add/remove</button>
                
            </div>
        )
    }



}

export default PizzaItem;