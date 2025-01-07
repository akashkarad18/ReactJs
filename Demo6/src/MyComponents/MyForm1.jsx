import { Component } from "react";

class MyForm1 extends Component {
    constructor() {
        super()
        this.state = {
            uname: '',
            city: '',
            country: '',
            gender: ''
        }

    }
    nameHandler = (e) => {
        this.setState({
            uname: e.target.value


        })
    }

    cityHandler = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    countryHandler = (e) => {
        this.setState({
            country: e.target.value
        })
    }
    gerHandler = (e) => {
        this.setState({
            gender: e.terget.value
        })
    }

    render() {
        return (
            <>
                <form action="#" onSubmit={(e) => { e.preventDefault() }}>
                    <label>Enter Name</label><br />
                    <input type="text" value={this.state.uname} onChange={this.nameHandler} /><br /><br />
                    <label>Enter City</label><br />
                    <input type="text" value={this.state.city} onChange={this.cityHandler} /><br /><br />

                    <label>Select Your City</label>
                    <select onChange={this.countryHandler} value={this.state.country}>
                        <option value="india">India</option>
                        <option value="USA">Russia</option>
                        <option value="uk">USA</option>

                    </select>
                    <p>Select Gender</p>
                    <label>Male</label>
                    <input type="radio" name="gender" value="Male" onChange={this.gerHandler} />
                    <label>FeMale</label>
                    <input type="radio" name="gender" value="FeMale" onChange={this.gerHandler} />

                    <button>Submit</button>

                </form>


                <h1>Name is{this.state.uname}</h1>
                <h1>City is{this.state.city}</h1>
                <h1>country is{this.state.country}</h1>
                <h1>Gender is{this.state.gender}</h1>



            </>
        )
    }
}
export default MyForm1;