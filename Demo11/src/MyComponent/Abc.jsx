import { Component } from "react";

export default class Abc extends Component
{
    constructor()
    {
        super()
        this.state={
            count:0
        }
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