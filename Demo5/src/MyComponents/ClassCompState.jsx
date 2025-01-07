import { Component } from "react";
import '../MyComponents/myStyle.css'

export default class ClassCompState extends Component{
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log("Component Mounted")
    }
    componentDidUpdate() {
        console.log("Component Rerendered")
    }
    increase = () => {
        this.setState(
            {
                count: this.state.count + 1
            }
        )
    }
    decrease = () => {
        if (this.state.count > 0) {
            this.setState(
                {
                    count: this.state.count - 1
                }
            )
        }
    }
    render() {
        return (
            <>
                <div className="Count">
                    <h1>Count:{this.state.count}</h1>
                    <button onClick={this.increase} style={{padding:'8px',margin:'15px',fontWeight:"bolder",backgroundColor:"green",color:'white'}}>Increase</button>
                    <button onClick={this.decrease} style={{padding:'8px', fontWeight:"bolder",backgroundColor:"red"}}>Decrease</button>
                </div>
            </>
        )
    }

}