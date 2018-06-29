
import React, { Component } from 'react';

class TableInfo extends Component {
    render() {

        return (
            <div>
                <td>{this.props.pizza.name}</td>
                <td>{this.props.pizza.cost}</td>
            </div>
        )
    }
}

export default TableInfo;