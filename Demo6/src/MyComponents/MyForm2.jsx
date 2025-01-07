import { Component } from "react";

class MyForm2 extends Component {
    constructor() {
        super()
        this.state = {
            uname: '',
            city: '',
            country: '',
            gender: ''
        }

    }
   allHandler=(e)=>{
        var v = e.target.value
        var n = e.target.name
        this.setState({
            [n]:v
        })
   }


    render() {
        return (

            <>
                <form action="#" onSubmit={(e) => { e.preventDefault() }}>
                    <label>Enter Name</label><br />
                    <input name="uname" type="text" value={this.state.uname} onChange={this.allHandler} /><br /><br />
                    <label>Enter City</label><br />
                    <input name="city" type="text" value={this.state.city} onChange={this.allHandler} /><br /><br />

                    <label>Select Your City</label>
                    <select name="country" onChange={this.allHandler} value={this.state.country}>
                        <option value="india">India</option>
                        <option value="USA">USA</option>
                        <option value="uk">UK</option>

                    </select>
                    <p>Select Gender</p>
                    <label>Male</label>
                    <input type="radio" name="gender" value="Male" onChange={this.allHandler} />
                    <label>FeMale</label>
                    <input type="radio" name="gender" value="FeMale" onChange={this.allHandler} />
**
                    <button>Submit</button>

                </form>


                <h1>Name is{this.state.uname.toUpperCase()}</h1>
                <h1>City is{this.state.ciy}</h1>
                <h1>country is{this.state.country}</h1>
                <h1>Gender is{this.state.gender}</h1>



            </>
        )
    }
}
export default MyForm2;