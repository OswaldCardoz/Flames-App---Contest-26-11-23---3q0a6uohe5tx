import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName: "",
            secondName: "",
            relationshipStatus: "",
        };
    }
    handleInput=(e)=>{
        const {name, value}=e.target;
        this.setState({[name]: value});
    };

    calculateRel=()=>{
        const {firstName,secondName}=this.state;
        if(firstName.trim()==="" || secondName.trim()===""){
            this.setState({relationshipStatus: "Please Enter valid Input"})
            return;
        }
        const commonLetters=[...new Set(firstName)].filter(char => secondName.includes(char));
        const newFirstName=firstName.split('').filter(char=> !commonLetters.includes(char)).join('');
        const newSecondName=secondName.split('').filter(char=> !commonLetters.includes(char)).join('');

        const remainingLen=(newFirstName.length+newSecondName.length)%6;

        switch(remainingLen){
            case 1:
                this.setState({relationshipStatus: 'Friends'});
                break;
            case 2:
                this.setState({relationshipStatus: 'Love'});
                break;
             case 3:
                this.setState({relationshipStatus: 'Affection'});
                break;
             case 4:
                this.setState({relationshipStatus: 'Marriage'});
                break;
                 case 5:
                this.setState({relationshipStatus: 'Enemy'});
                break;
                default:
                this.setState({relationshipStatus: 'Siblings'});
        }
    };

    clearInput=()=>{
        this,this.setState({
            firstName: '',
            secondName: '',
            relationshipStatus: '',
        });
    }
    render() {
        const {firstName,secondName,relationshipStatus}=this.state;
        return(
            <div id="main">
                <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleInput}
                placeholder="Enter First Name"
                data-testid="input1"
                />
                 <input
                type="text"
                name="secondName"
                value={secondName}
                onChange={this.handleInput}
                placeholder="Enter Second Name"
                data-testid="input2"
                />
                <button onClick={this.calculateRel}data-testid="calculate_relationship">Calculate Relationship Future</button>
                <button onClick={this.clearInput} data-testid="clear">Clear</button>
                <h3 data-testid="answer">{relationshipStatus}</h3>
            </div>
        );
    }
}


export default App;
