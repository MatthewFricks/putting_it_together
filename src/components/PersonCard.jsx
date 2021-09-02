import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageCount: this.props.age
        };
    }

    render(){

        const ageUp = () => {
            this.setState({ageCount: this.state.ageCount+1})
            console.log(this.state.ageCount)
        }
        return (
        <>
            <div className="person">
                <h1>{this.props.lastName},{this.props.firstName}</h1>
                <p>Age: {this.state.ageCount}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <p><button onClick = {ageUp}>Happy Birthday {this.props.firstName}</button></p>
            </div>
        </>
        )
    }
}

export default PersonCard;
