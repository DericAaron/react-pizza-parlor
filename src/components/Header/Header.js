import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapReduxToProps = (reduxStore) => ({
    total: reduxStore.total
}) 

class Header extends Component {
    render(){
        return(
            <div>
                <h1>Prime Pizza</h1>
                {/* <p>Total: {this.props.total}</p> */}
            </div>
            
        );
    }
}//end Header