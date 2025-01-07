import { Component } from "react";

class MyForm extends Component {
    constructor() {
        super();
        this.state = { // Corrected state declaration
            uname: ''
        };
    }
    
    xyz = (e) => {
        e.preventDefault();
    }

    pqr = (e) => {
        var n = e.target.value;
        this.setState({
            uname: n
        });
    }

    render() {
        return (
            <>
                <form action="#" onSubmit={this.xyz}>
                    <label>Enter Name</label> <br />  
                    <input type="text" value={this.state.uname} onChange={this.pqr} /><br />
                    <button>Submit</button>
                </form> 
                <h1>Name is {this.state.uname}</h1>
            </>
        );
    }
}

export default MyForm;
