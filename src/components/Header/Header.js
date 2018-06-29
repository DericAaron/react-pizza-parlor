import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapReduxToProps = (reduxStore) => ({
    total: reduxStore.totalReducer.order_total
}) 

class Header extends Component {
    render(){
        return(
            
            <header className="App-header">
                <h1 className="App-title">Prime Pizza</h1>
                <p>Total: {this.props.total}</p>
            </header>
            
            
        );
    }
}//end Header

export default connect(mapReduxToProps)(Header);