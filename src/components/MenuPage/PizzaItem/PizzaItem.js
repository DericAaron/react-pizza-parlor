import React, {Component} from 'react';
import './PizzaItem.css';
import {connect} from 'react-redux';

const mapReduxToProps = (reduxStore) =>({
    reduxStore
})

class PizzaItem extends Component{
    constructor(props){
        super(props);

        this.state = {
            hidden: true
        }//end state
    }

    toggleButton = (pizza) => {
        
        if(this.state.hidden){
            //ADD_PIZZA
            console.log('adding new pizza to redux');
            const action = {type: 'ADD_PIZZA', payload: pizza };
            this.props.dispatch(action);

            const totalAction = {type: 'ADD_TOTAL', payload: this.props.pizza.cost};
            this.props.dispatch(totalAction);

            
        }

        else if (!this.state.hidden){
            //REMOVE_PIZZA
            console.log('removing pizza from redux');
            const action = {type: 'REMOVE_PIZZA', payload: pizza._id };
            this.props.dispatch(action);

            const totalAction = {type: 'SUBTRACT_TOTAL', payload: this.props.pizza.cost};
            this.props.dispatch(totalAction);
            
        }
        
        this.setState({
            hidden: !this.state.hidden
        });
        console.log(this.state.hidden);
        
        

    }//end toggleButton


    render(){
        // console.log(this.props.pizza);
        
        return(
            <div>
                <img src={this.props.pizza.image_path} alt=""/>
                <h3>{this.props.pizza.name}</h3>
                <p>{this.props.pizza.description}</p>
                <p>${this.props.pizza.cost} USD</p>
                {this.state.hidden && <button onClick={()=>this.toggleButton(this.props.pizza)}>Add</button>}
                {!this.state.hidden && <button onClick={()=>this.toggleButton(this.props.pizza)}>Remove</button>}
            </div>
        )
    }



}

export default connect(mapReduxToProps)(PizzaItem);