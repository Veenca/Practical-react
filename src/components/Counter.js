import React from "react";


export default class Counter extends React.Component {

    render() {
        
        return (
            <div>
            <div>Count: {this.props.count}</div>
             
            <button onClick={this.props.decrement}>Decrement</button>
            <button onClick={this.props.increment}>Increment</button>  

            </div>
         );
    }
}
