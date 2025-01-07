import { Component } from "react";

export default class Pqr extends Component
{
    constructor()
    {
        super()
        this.state={
            count:0
        }
    }
    x=()=>{
        this.setState({
            count:this.state.count + 1
        })
    }
    componentDidMount()
    {
        console.log('rendered')
    }
    componentDidUpdate()
    {
        console.log('re-rendered')
    }

    render()
    {
        return(

            <>
             <h1>Count:{this.state.count}</h1>
             <button onClick={this.x}>Click</button>
            </>
        )
    }
}