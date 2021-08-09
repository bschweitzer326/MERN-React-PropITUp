import React, { Component } from 'react';
    
class PersonCardComponent extends Component {
    constructor(age) {
        super(age);
        this.state = {
            age: this.props.age
        };
    }

    increaseAge = () => {
        if(this.state.age > 0) {
            this.setState({age: this.state.age +1});
        }
    }

    render() {
        return <div>
    <h1>{this.props.lastName}, {this.props.firstName}</h1>
    <h4>Age: {this.state.age}</h4>
    <h4>Hair Color:{this.props.hairColor}</h4>

    <button onClick={this.increaseAge}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
    </div>;
    
    }
}
    
export default PersonCardComponent;
